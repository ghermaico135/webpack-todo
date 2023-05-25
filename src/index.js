/** @format */

import './style.css';
import store from './modules/storage.js';
import {
  addTask,
  displayTask,
  clearField,
  input,
  removeTask,
  edit,
  checklist,
  clearAll,
} from './modules/utility.js';

const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('#clearBtn');

// Display
window.addEventListener('load', () => {
  displayTask(store.tasks);
});

// add
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value === '') {
    // console.log("error")
  } else {
    addTask(store.tasks);
    displayTask(store.tasks);
    clearField();
  }
});

// remove
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('trashBtn')) {
    removeTask(e.target.id);
    displayTask(store.tasks);
  }
});

// edit
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('description')) {
    e.target.addEventListener('change', () => {
      edit(e);
    });
  }
});

// checklist
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkBtn')) {
    checklist(e);
  }
});

// clearALL
clearBtn.addEventListener('click', () => {
  clearAll();
});

export default store;
