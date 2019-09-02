export function exec(command, value = null) {
  document.execCommand(command, false, value);
}

function stateHandler(select, command) {
  const check = document.queryCommandState(command);
  if (check) {
    select.classList['add']('fwt-active-button');
  } else {
    return select.classList['remove']('fwt-active-button');
  }
}

function addEventListener(select1, type, select2, command, cb) {
  if (command) {
    return select1.addEventListener(type, () => stateHandler(select2, command));
  }
  return select1.addEventListener(type, e => cb(e));
}

function elementHandler(parent, obj) {
  const content = document.querySelectorAll('.fwt-content')[0];
  const element = document.createElement(obj.name);
  const prop = obj.prop;
  Object.keys(prop).forEach(key => {
    const objOfKey = prop[key];
    switch (key) {
      case 'attribute':
        for (let i = 0; i < objOfKey.length; i++) {
          const valueAttr = objOfKey[i];
          element.setAttribute(valueAttr[0], valueAttr[1]);
        }
        break;
      case 'dataset':
        for (let i = 0; i < objOfKey.length; i++) {
          const valueAttr = objOfKey[i];
          element.dataset[valueAttr[0]] = valueAttr[1];
        }
        break;
      case 'content':
        element.innerHTML = prop[key];
        break;
      case 'exec':
        const command = prop[key];
        element.onclick = () => exec(command);
        addEventListener(content, 'keyup', element, command);
        addEventListener(content, 'mouseup', element, command);
        addEventListener(element, 'click', element, command);
        break;
      case 'event':
        const listEvent = prop[key];
        for (let i = 0; i < listEvent.length; i++) {
          const event = listEvent[i];
          // event[1] = 1 => element
          // event[1] = 0 => content
          if (event[1]) {
            addEventListener(element, event[0], null, null, e => event[2](e));
          } else {
            addEventListener(content, event[0], null, null, e => event[2](e));
          }
        }
    }
  });
  parent.appendChild(element);
  return element;
}

export function createElement(parent, data) {
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      elementHandler(parent, element);
    }
    return;
  }
  return elementHandler(parent, data);
}

export function getSelector(selector) {
  const check = selector.charAt(0);
  switch (check) {
    case '.':
      return document.getElementsByClassName(selector.substring(1))[0];
    case '#':
      return document.getElementById(selector.substring(1));
    default:
      const regex = /^[a-z]+$/;
      if (regex.test(firstChar)) {
        return document.getElementsByTagName(selector)[0];
      }
  }
}
