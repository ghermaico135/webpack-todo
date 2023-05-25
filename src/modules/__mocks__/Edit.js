/** @format */

// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('description')) {
//     e.target.addEventListener('change', () => {
//       const newTasks = [];
//       store.tasks.forEach((task) => {
//         if (Number(e.target.id) === Number(task.index)) {
//           task.description = e.target.value;
//         }
//         newTasks.push(task);
//       });
//       localStorage.setItem('tasks', JSON.stringify(newTasks));
//       displayTask(newTasks);
//     });
//   }
// });
