const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const counter = document.getElementById("counter");

let total = 0;

function addTask() {
  const text = taskInput.value;

  if (text === "") {
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = text;
  deleteBtn.textContent = "Delete";

  let done = false;

  span.addEventListener("click", function () {
    if (done === false) {
      span.style.textDecoration = "line-through";
      done = true;
    } else {
      span.style.textDecoration = "none";
      done = false;
    }
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
    total = total - 1;
    counter.textContent = total;
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  total = total + 1;
  counter.textContent = total;
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
