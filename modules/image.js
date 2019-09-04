import { insertImage } from './../enum/element';
import { createElement } from './../utils/core';
let selectCurrent = null;
function dd() {
  let range;
  if (window.getSelection && window.getSelection().getRangeAt) {
    range = window.getSelection().getRangeAt(0);
    selectCurrent = range;
  }
}
function handler(e) {
  console.log(selectCurrent);
  const image = prompt('image');
  return document.execCommand(
    'insertImage',
    false,
    'https://kenh14cdn.com/thumb_w/620/2019/9/4/goo-hye-sun-ahn-jae-hyun-1567411597981712284395-1567567724940533410690.jpg'
  );
  const images = {
    name: 'img',
    prop: {
      attribute: [['src', image]]
    }
  };
  const ig = createElement(document.body, images);
  selectCurrent.insertNode(ig);
}

function imageSelectHandler(e) {
  const image = e.path[0];
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
  ['click', 0, imageSelectHandler],
  ['mouseup', 0, dd]
];

export { insertImage };
