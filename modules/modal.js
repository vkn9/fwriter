import { createElement } from './../utils/core';
import './../sass/modal.scss';

function hideModal(modal, element) {
  document.body.removeChild(
    document.body.children[document.body.children.length - 1]
  );
  modal.classList.remove('show-modal');
}

class Modal {
  constructor(obj) {
    this.modal = createElement(document.body, {
      name: 'div',
      prop: {
        attribute: [['class', 'modal']]
      }
    });
    this.wrap = createElement(this.modal, {
      name: 'div',
      prop: {
        attribute: [['class', 'modal-content']]
      }
    });
    createElement(this.wrap, {
      name: 'span',
      prop: {
        attribute: [['class', 'close-button']],
        content: '&times;',
        event: [['click', 1, e => hideModal(this.modal, e)]]
      }
    });
  }

  setContent(content) {
    return createElement(this.wrap, content);
  }

  openModal() {
    this.modal.classList.add('show-modal');
  }

  closeModal(callback) {
    if (typeof callback === 'function') callback();
    hideModal(this.modal);
  }
}

export { Modal };
