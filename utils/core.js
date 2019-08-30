function addProp(obj, element) {
  Object.keys(obj).forEach(key => {
    const objOfKey = obj[key];
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
        element.innerHTML = obj[key];
    }
  });
}

function createElement(parent, obj) {
  if (!obj || !obj.name) return false;
  const childElement = document.createElement(obj.name);
  if (obj.prop) {
    addProp(obj.prop, childElement);
  }
  parent.appendChild(childElement);
  if (obj.child && obj.child.length > 0) {
    for (let i = 0; i < obj.child.length; i++) {
      const element = obj.child[i];
      createChildElement(childElement, element);
    }
  }
  return childElement;
}

export function createChildElement(parent, data) {
  // Create many element
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      createElement(parent, element)
    }
  }
  // Create single element
  return createElement(parent, data);
}

export function detectSelector(selector) {
  const firstChar = selector.charAt(0);
  switch (firstChar) {
    case '.':
      return document.getElementsByClassName(selector.substring(1))[0];
    case '#':
      return document.getElementById(selector.substring(1));
    default:
      const onlyLowercase = /^[a-z]+$/;
      if (onlyLowercase.test(firstChar)) {
        return document.getElementsByTagName(selector)[0];
      }
  }
}

export function initChildElement(obj, count) {
  if (!obj.child) obj.child = []
  for (let i = 0; i < count; i++) {
    if (!obj.child[i]) obj.child[i] = {};
    if (!obj.child[i].prop) obj.child[i].prop = {};
    
    if (!obj.child[i].prop.attribute) obj.child[i].prop.attribute = [];
    if (!obj.child[i].prop.dataset) obj.child[i].prop.dataset = [];
  }
  return obj;
}