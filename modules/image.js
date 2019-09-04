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
  // instanciate new modal
  var modal = new Modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
      console.log('modal open');
    },
    onClose: function() {
      console.log('modal closed');
    },
    beforeClose: function() {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
      return false; // nothing happens
    }
  });

  // set content
  modal.setContent("<h1>here's some content</h1>");

  // add a button
  modal.addFooterBtn('Nhập', 'tingle-btn tingle-btn--primary', function() {
    alert('ok');
    // here goes some logic
    modal.close();
  });

  // add another button
  modal.addFooterBtn(
    'Dangerous action !',
    'tingle-btn tingle-btn--danger',
    function() {
      // here goes some logic
      modal.close();
    }
  );

  // open modal
  modal.open();

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
