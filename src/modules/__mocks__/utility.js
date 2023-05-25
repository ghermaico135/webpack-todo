/** @format */

const getItem = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return tasks;
};

const setItems = (task) => {
  localStorage.setItem('tasks', JSON.stringify(task));
};

const addTask = (task) => {
  const tasks = getItem();
  tasks.push({
    index: tasks.length + 1,
    description: task,
    completed: false,
  });
  const list = document.querySelector('#list');
  const listItem = document.createElement('li');
  list.appendChild(listItem);

  setItems(tasks);
  return tasks;
};

const removeTask = (index) => {
  let tasks = getItem();

  tasks = tasks.filter((task) => Number(task.index) !== Number(index));
  const list = document.querySelector('#list');

  list.removeChild(list.firstElementChild);
  setItems(tasks);
};

// edit.test;
const edit = (e) => {
  const tasks = getItem();
  const newTasks = [];
  tasks.forEach((task) => {
    if (Number(e.target.id) === Number(task.index)) {
      task.description = e.target.value;
    }
    newTasks.push(task);
  });
  setItems(tasks);
  // displayTask(newTasks);
};

// checklist
const checklist = (e) => {
  const tasks = getItem();
  tasks.forEach((task) => {
    if (task.index === +e.target.id) {
      if (e.target.checked) {
        task.completed = true;
      } else {
        task.completed = false;
      }
    }
  });

  setItems(tasks);

  // displayTask(store.tasks);
};

const clearAll = () => {
  let tasks = getItem();
  tasks = tasks.filter((task) => task.completed !== true);
  setItems(tasks);
  // displayTask(store.tasks);
};

exports.addTask = addTask;
exports.removeTask = removeTask;
exports.edit = edit;
exports.checklist = checklist;
exports.clearAll = clearAll;
