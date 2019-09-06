import { fontName } from './../enum/element';

fontName.child = [
  {
    name: 'span',
    prop: {
      content: 'Hahahahaha'
    }
  },
  {
    name: 'ul',
    child: [
      {
        name: 'li',
        content: 'Hahahaha'
      }
    ]
  }
];

export { fontName };
