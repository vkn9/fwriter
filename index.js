import { createElement, getSelector } from './utils/core';
import { tlite } from './modules/tooltip';
import {
  bold,
  underLine,
  justifyLeft,
  justifyCenter,
  justifyRight,
  foreColor,
  editor,
  menu,
  content
} from './enum/element';

import { insertImage } from './modules/image';

import './sass/menu_editor.scss';
import './sass/content_editor.scss';
document.execCommand('defaultParagraphSeparator', false, 'p');
window.fWrite = (seletor, obj) => {
  const inject = getSelector(seletor);
  const createEditor = createElement(inject, editor);
  const createMenu = createElement(createEditor, menu);
  createElement(createEditor, content);
  createElement(createMenu, [
    bold,
    underLine,
    justifyLeft,
    justifyCenter,
    justifyRight,
    insertImage
  ]);
  tlite(el => el.classList.contains('fwt-button'));
};
