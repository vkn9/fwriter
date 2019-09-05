import { insertImage } from './../enum/element';
import { createElement } from './../utils/core';
import { Modal } from './../modules/modal';
let sel;
function getCursor() {
  if (window.getSelection && window.getSelection().getRangeAt) {
    sel = window.getSelection();
  }
}
function handler() {
  const modal = new Modal();
  const ab = {
    name: 'p',
    prop: {
      content: 'Hahahahaha'
    }
  };
  const ab1 = {
    name: 'div',
    prop: {
      content: 'qweqweqw'
    }
  };
  const ab2 = {
    name: 'input',
    prop: {
      attribute: [['type', 'text'], ['class', 'fwt-image']]
    }
  };

  const footer = {
    name: 'button',
    prop: {
      content: 'Ok',
      event: [['click', 1, () => modal.closeModal()]]
    }
  };
  const aba = createElement(null, [ab, ab1, ab2, footer]);

  modal.setContent(aba);
  modal.openModal();

  // -------------------------------

  // const image = prompt('image');
  // const images = {
  //   name: 'img',
  //   prop: {
  //     attribute: [['src', image]]
  //   }
  // };
  // const ig = createElement(document.body, images);
  // if (sel.getRangeAt && sel.rangeCount) {
  //   const range = sel.getRangeAt(0);
  //   // create virtual node
  //   const frag = document.createDocumentFragment();
  //   frag.appendChild(ig);
  //   // insert to range
  //   range.insertNode(frag);
  // }
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
  ['mouseup', 0, getCursor]
];

export { insertImage };
