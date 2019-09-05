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
    if (Array.isArray(content)) {
      for (let i = 0; i < content.length; i++) {
        const element = content[i];
        this.wrap.appendChild(element);
      }
      return;
    }
    return this.wrap.appendChild(content);
  }

  openModal() {
    this.modal.classList.add('show-modal');
  }

  closeModal(callback) {
    hideModal(this.modal);
    if (typeof callback === 'function') callback();
  }
}

export { Modal };
