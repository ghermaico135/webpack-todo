/** @format */

class Storage {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  setItem(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

export default Storage;
