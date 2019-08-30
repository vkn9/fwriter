export const objMenuEditor = {
    name: 'div',
    prop: {
      attribute: [
        ['id', 'menu-editor']
      ]
    }
  };

  export const ObjHeading = {
    name: 'select',
    prop: {
      attribute: [
        ['title', 'heading']
      ],
      dataset: [
        ['cmd', 'formatBlock']
      ]
    }
  }

export const objBtn = [
    {
      name: 'button',
      prop: {
        dataset: [
          ['cmd', 'bold']
        ],
        content: '<i class="fas fa-bold"></i>'
      }
    },
    {
      name: 'button',
      prop: {
        dataset: [
          ['cmd', 'underline']
        ],
        content: '<i class="fas fa-underline"></i>'
      }
    },
    {
      name: 'button',
      prop: {
        dataset: [
          ['cmd', 'insertimage']
        ],
        content: '<i class="fas fa-image"></i>'
      }
    },
    {
      name: 'button',
      prop: {
        dataset: [
          ['cmd', 'justifyLeft']
        ],
        content: '<i class="fas fa-align-left"></i>'
      }
    },
    {
      'name': 'button',
      prop: {
        dataset: [
          ['cmd', 'justifyCenter']
        ],
        content: '<i class="fas fa-align-center"></i>'
      }
    },
    {
      name: 'button',
      prop: {
        dataset: [
          ['cmd', 'justifyRight']
        ],
        content: '<i class="fas fa-align-right"></i>'
      }
    }
  ];

