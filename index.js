import { createChildElement, detectSelector } from './utils/core';

const objMenuEditor = {
  attr: [
    {
      key: 'id',
      value: 'menu-editor'
    }
  ]
};

const objBtn = {
  bold: {
    dataset: [
      {
        key: 'cmd',
        value: 'bold'
      }
    ],
    content: '<i class="fas fa-bold"></i>'
  },
  underline: {
    dataset: [
      {
        key: 'cmd',
        value: 'underline'
      }
    ],
    content: '<i class="fas fa-underline"></i>'
  },
  insertimage: {
    dataset: [
      {
        key: 'cmd',
        value: 'insertimage'
      }
    ],
    content: '<i class="fas fa-image"></i>'
  },
  alignleft: {
    dataset: [
      {
        key: 'cmd',
        value: 'justifyLeft'
      }
    ],
    content: '<i class="fas fa-align-left"></i>'
  },
  aligncenter: {
    dataset: [
      {
        key: 'cmd',
        value: 'justifyCenter'
      }
    ],
    content: '<i class="fas fa-align-center"></i>'
  },
  alignright: {
    attr: [
      {
        key: 'title',
        value: 'Align Right'
      }
    ],
    dataset: [
      {
        key: 'cmd',
        value: 'justifyRight'
      }
    ],
    content: '<i class="fas fa-align-right"></i>'
  },
  formatblock: {
    attr: [
      {
        key: 'title',
        value: 'Format Header'
      }
    ],
    dataset: [
      {
        key: 'cmd',
        value: 'formatBlock'
      }
    ],
    child: [
      {
        attr: [
          {
            key: 'title'
          },
          {
            key: 'value'
          }
        ]
      }
    ]
  },
  fontname: {
    attr: [
      {
        key: 'title',
        value: 'Format Header'
      }
    ],
    dataset: [
      {
        key: 'cmd',
        value: 'formatBlock'
      }
    ],
    child: {
      element: 'option',
      attr: [
        {
          key: 'title'
        },
        {
          key: 'value'
        }
      ]
    }
  }
};

window.fWrite = (seletor, obj) => {
  const editor = detectSelector(seletor);
  const menuEditor = createChildElement(editor, 'div', objMenuEditor);

  // Create Bold button
  createChildElement(menuEditor, 'button', objBtn.bold);
  // Create Underline button
  createChildElement(menuEditor, 'button', objBtn.underline);
  // Create Image button
  createChildElement(menuEditor, 'button', objBtn.insertimage);
  // Create Align Left button
  createChildElement(menuEditor, 'button', objBtn.alignleft);
  // Create Align Center button
  createChildElement(menuEditor, 'button', objBtn.aligncenter);
  // Create Align Right button
  createChildElement(menuEditor, 'button', objBtn.alignright);
  // Create Header button
  const heading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
  for (let i = 0; i < heading.length; i++) {
    objBtn.formatblock.child.content = heading[i];
    objBtn.formatblock.child.attr[0].value = heading[i];
    objBtn.formatblock.child.attr[1].value = heading[i];
  }
  const header = createChildElement(menuEditor, 'select', objBtn.formatblock);

  // Create font button
  const fontBtn = createChildElement(menuEditor, 'select', objBtn.fontname);
  const fontList = [
    'Arial',
    'Comic Sans MS',
    'Courier',
    'Georgia',
    'Tahoma',
    'Times New Roman',
    'Verdana'
  ];
  for (let i = 0; i < fontList.length; i++) {
    objBtn.fontname.child[0].content = fontList[i];
    objBtn.fontname.child[0].attr[0].value = fontList[i];
    objBtn.fontname.child[0].attr[1].value = fontList[i];
    createChildElement(fontBtn, 'option', objBtn.fontname.child[0]);
  }
};
