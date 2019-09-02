import {
  bold,
  underLine,
  insertImage,
  justifyLeft,
  justifyCenter,
  justifyRight,
  foreColor
} from './../enum/element';
import { blockLevel } from './../modules/block_level';
import { fontName } from './../modules/font_name';
import { fontSize } from './../modules/font_size';
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
      createElement(parent, element);
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
  if (!obj.child) obj.child = [];
  for (let i = 0; i < count; i++) {
    if (!obj.child[i]) obj.child[i] = {};
    if (!obj.child[i].prop) obj.child[i].prop = {};

    if (!obj.child[i].prop.attribute) obj.child[i].prop.attribute = [];
    if (!obj.child[i].prop.dataset) obj.child[i].prop.dataset = [];
  }
  return obj;
}

export function initButton(obj) {
  const buttonDefault = [
    bold,
    underLine,
    insertImage,
    justifyLeft,
    justifyCenter,
    justifyRight
  ];
  let objBtn = [];
  if (!obj || !obj.button || obj.button.length === 0) return buttonDefault;
  const listButton = obj.button;
  for (let i = 0; i < listButton.length; i++) {
    const element = listButton[i];
    switch (element) {
      case 'bold':
        objBtn.push(bold);
        break;
      case 'underLine':
        objBtn.push(underLine);
        break;
      case 'insertImage':
        objBtn.push(insertImage);
        break;
      case 'justifyLeft':
        objBtn.push(justifyLeft);
        break;
      case 'justifyCenter':
        objBtn.push(justifyCenter);
        break;
      case 'justifyRight':
        objBtn.push(justifyRight);
        break;
      case 'blockLevel':
        objBtn.push(blockLevel);
        break;
      case 'fontName':
        objBtn.push(fontName);
        break;
      case 'fontSize':
        objBtn.push(fontSize);
        break;
    }
  }
  return objBtn;
}

export function execCommand(selector, obj) {
  if (!obj || obj.length === 0) return false;
  for (let i = 0; i < obj.length; i++) {
    const element = obj[i];
    const listTarget = selector.querySelectorAll(element[0]);
    listTarget.forEach(el => {
      switch (element[1]) {
        case 'button':
          el.addEventListener('click', () => {
            const textSelect = window.getSelection().toString();
            if (textSelect === '') return;
            if (el.classList.contains('fwt-active-button')) {
              el.classList.remove('fwt-active-button');
            } else {
              el.classList.add('fwt-active-button');
            }
            const formatText = el.dataset.cmd;
            if (formatText === 'insertimage') {
              const image = prompt('image');
              document.execCommand(formatText, true, image);
            } else {
              document.execCommand(formatText, true);
            }
          });
          break;
        case 'select':
          el.addEventListener('change', () => {
            const value = el.options[el.selectedIndex].value;
            document.execCommand(el.dataset.cmd, false, value);
          });
        case 'input':
          el.addEventListener('change', () => {
            document.execCommand(el.dataset.cmd, false, el.value);
          });
      }
    });
  }
}

export function execCommandSelect() {}
