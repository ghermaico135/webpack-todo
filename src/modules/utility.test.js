/** @format */

jest.mock('./utility');

const {
  addTask,
  removeTask,
  edit,
  checklist,
  clearAll,
} = require('./utility.js');

describe('Add and remove task', () => {
  document.body.innerHTML = '<div> <ul id="list"></ul></div>';

  test('Add one new task to the list', () => {
    const add = addTask('miki');
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
    expect(add.length).toEqual(1);
  });

  test('remove one task from the list', () => {
    removeTask(1);
    const list = document.querySelectorAll('#list li');
    expect(list.length).toEqual(0);
  });

  test('should check edit todo description with value of two', () => {
    expect(edit(1, 'dog')).toBe('dog');
  });

  test('should check the status changed to true', () => {
    expect(checklist(1, 'unChecked')).toBeFalsy();
  });

  test('should check the status changed to false', () => {
    expect(checklist(2, 'checked')).toBeTruthy();
  });

  test('Should remove the completed one', () => {
    expect(clearAll().length).toEqual(1);
  });
});
