/** @format */

class Storage {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }
}

const store = new Storage();
export default store;
