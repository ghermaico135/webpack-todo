/** @format */

import './style.css';
import Storage from './modules/storage.js';
import {
  addTask,
  removeTask,
  displayTask,
  clearField,
  input,
} from './modules/utility.js';

const addBtn = document.querySelector('#addBtn');

const store = new Storage();
const tasks = store.tasks;

window.addEventListener('load', () => {
  displayTask(tasks);
});

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value == '') {
    console.log('All Fields are required');
  } else {
    addTask(tasks);
    displayTask(tasks);
    clearField();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('trashBtn')) {
    const removeTask = (index) => {
      // let tasks = /;
      // console.log(tasks);
      store.tasks = store.tasks.filter(
        (task) => Number(task.index) !== Number(index)
      );

      console.log(store.tasks);
      store.setItem(store.tasks);
    };
    removeTask(e.target.id);
    displayTask(store.tasks);
  }
});

export { store };
