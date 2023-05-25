/** @format */

jest.mock('./utility');

const { addTask, removeTask } = require('./utility.js');

describe('Add and remove task', () => {
  document.body.innerHTML = '<div> <ul id="list"></ul></div>';

  it('Add one new task to the list', () => {
    const add = addTask('miki');
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
    expect(add.length).toEqual(1);
  });

  it('remove one task from the list', () => {
    removeTask(1);
    const list = document.querySelectorAll('#list li');
    expect(list.length).toEqual(0);
    // expect(list.childNodes.length).toEqual(0);
  });
});
