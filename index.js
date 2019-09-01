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

import './sass/content_editor.scss';

window.fWrite = (seletor, obj) => {
  const inject = detectSelector(seletor);
  const init = createChildElement(inject, editor);
  const menu = createChildElement(init, MenuEditor);
  createChildElement(menu, initButton(obj));
  createChildElement(init, contentEditor);
  createChildElement(init, exportContent);
  execCommand(menu, [
    ['.fwt-button', 'button'],
    ['.fwt-select', 'select'],
    ['.fwt-input', 'input']
  ]);
};
