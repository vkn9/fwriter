import { createChildElement, detectSelector, initButton } from './utils/core';
import { MenuEditor } from './enum/element';

window.fWrite = (seletor, obj) => {
  const editor = detectSelector(seletor);
  const menuEditor = createChildElement(editor, MenuEditor);
  createChildElement(menuEditor, initButton(obj));
};
