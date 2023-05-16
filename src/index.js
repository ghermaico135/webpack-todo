/** @format */

import "./style.css";
import store from "./modules/storage.js";
import { addTask, displayTask, clearField, input } from "./modules/utility.js";

const addBtn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clearBtn");

window.addEventListener("load", () => {
	displayTask(store.tasks);
});

addBtn.addEventListener("click", (e) => {
	e.preventDefault();

	if (input.value === "") {
		// console.log("All Fields are required");
	} else {
		addTask(store.tasks);
		displayTask(store.tasks);
		clearField();
	}
});

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("trashBtn")) {
		const removeTask = (index) => {
			store.tasks = store.tasks.filter(
				(task) => Number(task.index) !== Number(index)
			);
			localStorage.setItem("tasks", JSON.stringify(store.tasks));
		};

		removeTask(e.target.id);
		displayTask(store.tasks);
	}
});

// Edit
document.addEventListener("change", () => {
	const paragraph = document.querySelectorAll(".description");
	paragraph.forEach((p) => {
		p.addEventListener("keyup", (e) => {
			store.tasks.forEach(() => {
				const newValue = e.target.input.value;
				console.log(input.value);
				store.tasks.description = newValue;
				localStorage.setItem("tasks", JSON.stringify(store.tasks));
				// localStorage.setItem("todoTask", JSON.stringify(todoTask));
			});
		});
	});
});

//checklist
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("checkBtn")) {
		store.tasks.forEach((task) => {
			if (task.index === +e.target.id) {
				if (e.target.checked) {
					task.completed = true;
				} else {
					task.completed = false;
				}
			}
		});

		localStorage.setItem("tasks", JSON.stringify(store.tasks));

		displayTask(store.tasks);
	}
});

//clearALL
clearBtn.addEventListener("click", () => {
	store.tasks = store.tasks.filter((task) => task.completed !== true);
	localStorage.setItem("tasks", JSON.stringify(store.tasks));
	displayTask(store.tasks);
});

export default store;
