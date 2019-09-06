import { fontName } from './../enum/element';
import { listFont } from './../enum/core';
import { exec } from './../utils/core';
fontName.child = [
  {
    name: 'span',
    prop: {
      attribute: [['class', 'fwt-fontname-current']],
      content: 'Arial'
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
            const sel = document.getElementsByClassName(
              'fwt-fontname-current'
            )[0];
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
