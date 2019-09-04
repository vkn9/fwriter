export const bold = {
  name: 'button',
  prop: {
    attribute: [['title', 'Bold (⌘+B)'], ['class', 'fwt-button']],
    content: '<i class="fas fa-bold"></i>',
    exec: 'bold'
  }
};

export const underLine = {
  name: 'button',
  prop: {
    attribute: [['title', 'Underline (⌘+U)'], ['class', 'fwt-button']],
    content: '<i class="fas fa-underline"></i>',
    exec: 'underline'
  }
};

export const justifyLeft = {
  name: 'button',
  prop: {
    attribute: [['title', 'Align Left'], ['class', 'fwt-button']],
    content: '<i class="fas fa-align-left"></i>',
    exec: 'justifyLeft'
  }
};

export const justifyCenter = {
  name: 'button',
  prop: {
    attribute: [['title', 'Align Center'], ['class', 'fwt-button']],
    content: '<i class="fas fa-align-center"></i>',
    exec: 'justifyCenter'
  }
};

export const justifyRight = {
  name: 'button',
  prop: {
    attribute: [['title', 'Align Right'], ['class', 'fwt-button']],
    content: '<i class="fas fa-align-right"></i>',
    exec: 'justifyRight'
  }
};

export const insertImage = {
  name: 'button',
  prop: {
    attribute: [['title', 'Picture'], ['class', 'fwt-button']],
    content: '<i class="fas fa-image"></i>'
  }
};

export const blockLevel = {
  name: 'select',
  prop: {
    attribute: [['class', 'fwt-select'], ['title', 'heading']],
    dataset: [['cmd', 'formatBlock']]
  }
};

export const fontName = {
  name: 'select',
  prop: {
    attribute: [['class', 'fwt-select'], ['title', 'Font Name']],
    dataset: [['cmd', 'fontName']]
  }
};

export const fontSize = {
  name: 'select',
  prop: {
    attribute: [['class', 'fwt-select'], ['title', 'Font Size']],
    dataset: [['cmd', 'fontSize']]
  }
};

export const foreColor = {
  name: 'input',
  prop: {
    attribute: [['class', 'fwt-input'], ['type', 'color'], ['title', 'Color']],
    dataset: [['cmd', 'foreColor']]
  }
};

export const content = {
  name: 'div',
  prop: {
    attribute: [
      ['class', 'fwt-content'],
      ['contenteditable', true],
      ['spellcheck', false]
    ]
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
