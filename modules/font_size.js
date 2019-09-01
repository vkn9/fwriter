import { initChildElement } from './../utils/core';
import { fontSize } from './../enum/element';
import { fontSizeText } from './../enum/core';

initChildElement(fontSize, fontSizeText.length);
for (let i = 0; i < fontSizeText.length; i++) {
  const element = fontSizeText[i];
  fontSize.child[i].name = 'option';
  fontSize.child[i].prop.content = element;
  fontSize.child[i].prop.attribute.push(['value', element]);
}

export { fontSize };
