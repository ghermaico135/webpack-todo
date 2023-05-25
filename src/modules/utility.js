/** @format */
import store from './storage.js';

const todoListContainer = document.querySelector('#todo-list-container');
const input = document.querySelector('#textInput');

// Add
const addTask = (tasks) => {
  tasks.push({
    index: tasks.length + 1,
    description: input.value,
    completed: false,
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// remove
const removeTask = (index) => {
  store.tasks = store.tasks.filter(
    (task) => Number(task.index) !== Number(index),
  );
  localStorage.setItem('tasks', JSON.stringify(store.tasks));
};

// display
const displayTask = (tasks) => {
  let content = '';
  tasks.forEach((task, index) => {
    task.index = index + 1;
    content += `
<div class="todo-list"  id="${task.index}">
<div class="task-list">
<input type="checkbox"  class="checkBtn" ${
  task.completed ? 'checked' : null
} id="${task.index}"/>
<input type="text" id="${task.index}" class="description text-value"  value="${
  task.description
}" />
</div>
<div>
<img class="trashBtn" src="https://img.icons8.com/plasticine/100/trash--v1.png" alt="trash--v1" id="${
  task.index
}"/>
</div>
</div>
`;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  todoListContainer.innerHTML = content;
};

const clearField = () => {
  input.value = '';
};

// edit
const edit = (e) => {
  const newTasks = [];
  store.tasks.forEach((task) => {
    if (Number(e.target.id) === Number(task.index)) {
      task.description = e.target.value;
    }
    newTasks.push(task);
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  displayTask(newTasks);
};

// checklist
const checklist = (e) => {
  store.tasks.forEach((task) => {
    if (task.index === +e.target.id) {
      if (e.target.checked) {
        task.completed = true;
      } else {
        task.completed = false;
      }
    }
  });

  localStorage.setItem('tasks', JSON.stringify(store.tasks));

  displayTask(store.tasks);
};

// clearAll
const clearAll = () => {
  store.tasks = store.tasks.filter((task) => task.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(store.tasks));
  displayTask(store.tasks);
};

export {
  addTask,
  displayTask,
  clearField,
  input,
  removeTask,
  edit,
  checklist,
  clearAll,
};
