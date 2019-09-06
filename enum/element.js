export const bold = {
  name: 'div',
  prop: {
    attribute: [
      ['onmousedown', 'event.preventDefault();'],
      ['title', 'Bold (⌘+B)'],
      ['class', 'fwt-button']
    ],
    content: '<i class="fas fa-bold"></i>',
    exec: 'bold'
  }
};

export const underLine = {
  name: 'div',
  prop: {
    attribute: [
      ['onmousedown', 'event.preventDefault();'],
      ['title', 'Underline (⌘+U)'],
      ['class', 'fwt-button']
    ],
    content: '<i class="fas fa-underline"></i>',
    exec: 'underline'
  }
};

export const justifyLeft = {
  name: 'div',
  prop: {
    attribute: [
      ['onmousedown', 'event.preventDefault();'],
      ['title', 'Align Left'],
      ['class', 'fwt-button']
    ],
    content: '<i class="fas fa-align-left"></i>',
    exec: 'justifyLeft'
  }
};

export const justifyCenter = {
  name: 'div',
  prop: {
    attribute: [
      ['onmousedown', 'event.preventDefault();'],
      ['title', 'Align Center'],
      ['class', 'fwt-button']
    ],
    content: '<i class="fas fa-align-center"></i>',
    exec: 'justifyCenter'
  }
};

export const justifyRight = {
  name: 'div',
  prop: {
    attribute: [
      ['onmousedown', 'event.preventDefault();'],
      ['title', 'Align Right'],
      ['class', 'fwt-button']
    ],
    content: '<i class="fas fa-align-right"></i>',
    exec: 'justifyRight'
  }
};

export const insertImage = {
  name: 'div',
  prop: {
    attribute: [
      ['onmousedown', 'event.preventDefault();'],
      ['title', 'Picture'],
      ['class', 'fwt-button']
    ],
    content: '<i class="fas fa-image"></i>'
  }
};

export const blockLevel = {
  name: 'select',
  prop: {
    attribute: [
      ['onmousedown', 'event.preventDefault();'],
      ['class', 'fwt-button'],
      ['title', 'heading']
    ],
    dataset: [['cmd', 'formatBlock']]
  }
};

export const fontName = {
  name: 'div',
  prop: {
    attribute: [['class', 'fwt-button'], ['title', 'Font Name']]
  }
};

export const fontSize = {
  name: 'select',
  prop: {
    attribute: [
      ['onmousedown', 'event.preventDefault();'],
      ['class', 'fwt-button'],
      ['title', 'Font Size']
    ],
    dataset: [['cmd', 'fontSize']]
  }
};

export const foreColor = {
  name: 'input',
  prop: {
    attribute: [
      ['onmousedown', 'event.preventDefault();'],
      ['class', 'fwt-input'],
      ['type', 'color'],
      ['title', 'Color']
    ],
    dataset: [['cmd', 'foreColor']]
  }
};

export const content = {
  name: 'div',
  prop: {
    attribute: [['class', 'fwt-content'], ['contenteditable', true], ['spellcheck', false]]
  }
};

export const editor = {
  name: 'div',
  prop: {
    attribute: [['class', 'fwt-editor']]
  }
};

export const menu = {
  name: 'div',
  prop: {
    attribute: [['class', 'fwt-menu']]
  }
};
