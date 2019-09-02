import {
  createChildElement,
  detectSelector,
  initButton,
  execCommand
} from './utils/core';
import {
  editor,
  MenuEditor,
  contentEditor,
  exportContent
} from './enum/element';
import './sass/menu_editor.scss';
import './sass/content_editor.scss';

function clearActiveState() {
  const active = document.querySelectorAll('.fwt-active-button');
  for (let i = 0; i < active.length; i++) {
    const element = active[i];
    element.classList.remove('fwt-active-button');
  }
}

window.fWrite = (seletor, obj) => {
  const inject = detectSelector(seletor);
  const init = createChildElement(inject, editor);
  const menu = createChildElement(init, MenuEditor);
  createChildElement(menu, initButton(obj));
  const content = createChildElement(init, contentEditor);
  createChildElement(init, exportContent);
  execCommand(menu, [
    ['.fwt-button', 'button'],
    ['.fwt-select', 'select'],
    ['.fwt-input', 'input']
  ]);
  content.addEventListener('mouseup', e => {
    const element = ['b', 'u'];
    const path = e.path;
    let button = null;
    clearActiveState();
    for (let i = 0; i < path.length; i++) {
      const el = path[i].localName;
      if (element.includes(el)) {
        switch (el) {
          case 'u':
            button = document.querySelectorAll('.fwt-underline-button')[0];
            button.classList.add('fwt-active-button');
            break;

          case 'b':
            button = document.querySelectorAll('.fwt-strong-button')[0];
            button.classList.add('fwt-active-button');
            break;
        }
      }
    }
  });

  document
    .getElementById('fwt-export-content')
    .addEventListener('click', () => {
      const content = document.getElementsByClassName('fwt-content')[0]
        .innerHTML;
      alert(content);
    });
};
