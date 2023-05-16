/** @format */

class Storage {
	getItem() {
		const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
		return tasks;
	}

	setItem(tasks) {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}
}

export default Storage;
