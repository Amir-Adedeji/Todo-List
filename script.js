const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <div class="actions">
      <button class="done-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  li.querySelector(".done-btn").addEventListener("click", () => {
    moveToCompleted(li, text);
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  todoList.appendChild(li);
}

function moveToCompleted(li, text) {
  li.remove();

  const completedItem = document.createElement("li");
  completedItem.innerHTML = `
    <span>${text}</span>
    <div class="actions">
      <button class="undo-btn">↩</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  completedItem.querySelector(".undo-btn").addEventListener("click", () => {
    addTask(text);
    completedItem.remove();
  });

  completedItem.querySelector(".delete-btn").addEventListener("click", () => {
    completedItem.remove();
  });

  completedList.appendChild(completedItem);
}
