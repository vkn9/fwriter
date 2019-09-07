import { listFont } from './../enum/core';
import { exec } from './../utils/core';
const fontName = {
  name: 'div',
  prop: {
    attribute: [['class', 'fwt-button fwt-dropdown'], ['title', 'Font Name']],
    event: [
      [
        'click',
        1,
        () => {
          const sel = document.getElementsByClassName('fwt-button-menu')[0];
          if (window.getComputedStyle(sel).display === 'none') {
            return (sel.style.display = 'flex');
          }
          return (sel.style.display = 'none');
        }
      ]
    ]
  }
};

fontName.child = [
  {
    name: 'span',
    prop: {
      attribute: [['class', 'fwt-fontname-current']],
      content: listFont[0]
    }
  },
  {
    name: 'ul',
    prop: {
      attribute: [['class', 'fwt-button-menu']]
    },
    child: []
  }
];

for (let i = 0; i < listFont.length; i++) {
  const font = listFont[i];
  fontName.child[1].child.push({
    name: 'li',
    prop: {
      content: font,
      event: [
        [
          'click',
          1,
          () => {
            const sel = document.getElementsByClassName('fwt-fontname-current')[0];
            if (sel) {
              sel.innerHTML = font;
              exec('fontName', font);
            }
          }
        ]
      ]
    }
  });
}

export { fontName };
