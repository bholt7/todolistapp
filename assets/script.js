let form = document.querySelector("form");
let tasks = document.querySelector(".tasks");
let input = document.querySelector("#task-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // create new task
  const task = document.createElement("div");
  // give the task the value of the individual input
  task.textContent = input.value;

  // add class to task
  task.classList.add("task-list");

  // add task to tasks list
  tasks.appendChild(task);
});
