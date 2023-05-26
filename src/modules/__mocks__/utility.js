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
const tasks = [];

tasks.push(
  {
    index: tasks.length + 1,
    description: 'miki',
    completed: false,
  },
  {
    index: tasks.length + 1,
    description: 'javascript',
    completed: true,
  },
  {
    index: tasks.length + 1,
    description: 'html',
    completed: false
  },
);

const edit = (id, newInput) => {
  const tasks = [
    {
      index: 1,
      description: 'cat',
      completed: false,
    },
  ];
  let result = '';
  const newTasks = [];
  tasks.forEach((task) => {
    if (id === task.index) {
      task.description = newInput;
      result = task.description;
    }
    newTasks.push(task);
  });

  return result;
};

// checklist
const checklist = (id, isChecked) => {
  const tasks = [
    {
      index: 1,
      description: 'cat',
      completed: true,
    },
    {
      index: 2,
      description: 'dog',
      completed: false,
    },
  ];

  const status = isChecked;

  let result = '';
  tasks.forEach((task) => {
    if (task.index === id) {
      if (status === 'checked') {
        task.completed = true;
        result = true;
      } else {
        task.completed = false;
        result = task.completed;
      }
    }
  });

  setItems(tasks);
  return result;
};

const clearAll = () => {
  let tasks = [
    {
      index: 1,
      description: 'cat',
      completed: true,
    },
    {
      index: 2,
      description: 'dog',
      completed: false,
    },
  ];

  tasks = tasks.filter((task) => task.completed !== true);
  return tasks;
};

exports.addTask = addTask;
exports.removeTask = removeTask;
exports.edit = edit;
exports.checklist = checklist;
exports.clearAll = clearAll;
