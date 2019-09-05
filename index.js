import { createElement, getSelector, init } from './utils/core';

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

window.fWrite = (seletor, obj) => {
  init();
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
};
