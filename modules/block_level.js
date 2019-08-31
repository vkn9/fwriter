import { initChildElement } from './../utils/core';
import { blockLevel } from './../enum/element';
import { heading } from './../enum/core';

initChildElement(blockLevel, heading.length);
for (let i = 0; i < heading.length; i++) {
  const element = heading[i];
  blockLevel.child[i].name = 'option';
  blockLevel.child[i].prop.content = element;
  blockLevel.child[i].prop.attribute.push(['value', element]);
}

export { blockLevel };
