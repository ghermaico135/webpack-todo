/** @format */

import Storage from "./storage.js";

const todoListContainer = document.querySelector("#todo-list-container");
const input = document.querySelector("#textInput");

const addTask = (tasks) => {
	tasks.push({
		index: tasks.length + 1,
		description: input.value,
		completed: false,
	});
	localStorage.setItem("tasks", JSON.stringify(tasks));
};

const removeTask = (index) => {
	const store = new Storage();
	let tasks = store.getItem();
	tasks = tasks.filter((task) => Number(task.index) !== Number(index));
	console.log(tasks);
	store.setItem(tasks);
	localStorage.setItem("name", JSON.stringify(tasks));
};

const displayTask = (tasks) => {
	let content = "";
	tasks.forEach((task, index) => {
		task.index = index + 1;
		content += `
		<div class="todo-list"  id="${task.index}">
		<div class="task-list">
		<input type="checkbox"  class="checkBtn" ${
			task.completed ? "checked" : null
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
	localStorage.setItem("tasks", JSON.stringify(tasks));
	todoListContainer.innerHTML = content;
};

const clearField = () => {
	input.value = "";
};

export { addTask, removeTask, displayTask, clearField, input };
