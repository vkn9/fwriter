export const editor = {
  name: 'div',
  prop: {
    attribute: [['class', 'fwt-editor']]
  }
};

export const MenuEditor = {
  name: 'div',
  prop: {
    attribute: [['class', 'fwt-menu']]
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

export const bold = {
  name: 'button',
  prop: {
    attribute: [['title', 'Strong'], ['class', 'fwt-button fwt-strong-button']],
    dataset: [['cmd', 'bold']],
    content: '<i class="fas fa-bold"></i>'
  }
};

export const underLine = {
  name: 'button',
  prop: {
    attribute: [['class', 'fwt-button fwt-underline-button']],
    dataset: [['cmd', 'underline']],
    content: '<i class="fas fa-underline"></i>'
  }
};

export const insertImage = {
  name: 'button',
  prop: {
    attribute: [['class', 'fwt-button']],
    dataset: [['cmd', 'insertimage']],
    content: '<i class="fas fa-image"></i>'
  }
};

export const justifyLeft = {
  name: 'button',
  prop: {
    attribute: [['class', 'fwt-button']],
    dataset: [['cmd', 'justifyLeft']],
    content: '<i class="fas fa-align-left"></i>'
  }
};

export const justifyCenter = {
  name: 'button',
  prop: {
    attribute: [['class', 'fwt-button']],
    dataset: [['cmd', 'justifyCenter']],
    content: '<i class="fas fa-align-center"></i>'
  }
};

export const justifyRight = {
  name: 'button',
  prop: {
    attribute: [['class', 'fwt-button']],
    dataset: [['cmd', 'justifyRight']],
    content: '<i class="fas fa-align-right"></i>'
  }
};

export const foreColor = {
  name: 'input',
  prop: {
    attribute: [['class', 'fwt-input'], ['type', 'color'], ['title', 'Color']],
    dataset: [['cmd', 'foreColor']]
  }
};

export const contentEditor = {
  name: 'div',
  prop: {
    attribute: [
      ['class', 'fwt-content'],
      ['contenteditable', true],
      ['spellcheck', false]
    ]
  }
};

export const exportContent = {
  name: 'button',
  prop: {
    attribute: [['id', 'fwt-export-content'], ['class', 'fwt-button']],
    content: '<i class="fas fa-save"></i>'
  }
};
