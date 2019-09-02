import { exec } from './../utils/core';
import { insertImage } from './../enum/element';

function handler(e) {
  const image = prompt('image');
  exec('insertimage', image);
}

function imageSelectHandler(e) {
  const image = e.path[0];
  const context = document.querySelectorAll('.fwt-editor')[0];
  if (e.target.nodeName === 'IMG') {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNode(image);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

insertImage.prop.event = [
  ['click', 1, handler],
  ['click', 0, imageSelectHandler]
];

export { insertImage };
