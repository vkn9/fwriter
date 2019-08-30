/**
 * Tạo element con trong DOM
 * @param {*} parent Element cha sẽ bọc element được tạo ra
 * @param {*} element Element con sẽ được tạo ra
 * @param {*} obj Thuộc tính của element con
 */
export function createChildElement(parent, element, obj) {
  // Tao nhieu element
  if (Array.isArray(obj)) {
  }
  // Tao mot element
  const childElement = document.createElement(element);
  Object.keys(obj).forEach(key => {
    const objOfKey = obj[key];
    switch (key) {
      case 'attr':
        for (let i = 0; i < objOfKey.length; i++) {
          const valueAttr = objOfKey[i];
          childElement.setAttribute(valueAttr.key, valueAttr.value);
        }
        break;
      case 'dataset':
        for (let i = 0; i < objOfKey.length; i++) {
          const valueAttr = objOfKey[i];
          childElement.dataset[valueAttr.key] = valueAttr.value;
        }
        break;
      case 'content':
        childElement.innerHTML = obj[key];
      case 'child':
        createChildElement(childElement, objOfKey.element, objOfKey.obj);
    }
  });
  parent.appendChild(childElement);
  return childElement;
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
        return document.getElementsByTagName(selector);
      }
  }
}
