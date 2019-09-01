import { initChildElement } from './../utils/core';
import { fontName } from './../enum/element';
import { font } from './../enum/core';

initChildElement(fontName, font.length);
for (let i = 0; i < font.length; i++) {
  const element = font[i];
  fontName.child[i].name = 'option';
  fontName.child[i].prop.content = element;
  fontName.child[i].prop.attribute.push(['value', element]);
}

export { fontName };
