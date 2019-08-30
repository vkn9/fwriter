import { createChildElement, detectSelector, initChildElement } from './utils/core';
import { heading } from './enum/core';
import {objMenuEditor, objBtn, ObjHeading} from './enum/element';

console.log(ObjHeading)

window.fWrite = (seletor, obj) => {
  const editor = detectSelector(seletor);
  const menuEditor = createChildElement(editor, objMenuEditor);
  
  initChildElement(ObjHeading, heading.length);
  for (let i = 0; i < heading.length; i++) {
    const element = heading[i];
    ObjHeading.child[i].name = 'option';
    ObjHeading.child[i].prop.content = element;
    ObjHeading.child[i].prop.attribute.push(['value', element]);
  }
  objBtn.push(ObjHeading);

  createChildElement(menuEditor, objBtn);
};
