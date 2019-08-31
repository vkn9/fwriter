export const MenuEditor = {
  name: 'div',
  prop: {
    attribute: [['id', 'menu-editor']]
  }
};

export const blockLevel = {
  name: 'select',
  prop: {
    attribute: [['title', 'heading']],
    dataset: [['cmd', 'formatBlock']]
  }
};

export const bold = {
  name: 'button',
  prop: {
    dataset: [['cmd', 'bold']],
    content: '<i class="fas fa-bold"></i>'
  }
};

export const underLine = {
  name: 'button',
  prop: {
    dataset: [['cmd', 'underline']],
    content: '<i class="fas fa-underline"></i>'
  }
};

export const insertImage = {
  name: 'button',
  prop: {
    dataset: [['cmd', 'insertimage']],
    content: '<i class="fas fa-image"></i>'
  }
};

export const justifyLeft = {
  name: 'button',
  prop: {
    dataset: [['cmd', 'justifyLeft']],
    content: '<i class="fas fa-align-left"></i>'
  }
};

export const justifyCenter = {
  name: 'button',
  prop: {
    dataset: [['cmd', 'justifyCenter']],
    content: '<i class="fas fa-align-center"></i>'
  }
};

export const justifyRight = {
  name: 'button',
  prop: {
    dataset: [['cmd', 'justifyRight']],
    content: '<i class="fas fa-align-right"></i>'
  }
};
