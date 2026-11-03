const form = document.querySelector("#todoForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const error = document.querySelector("#error");
const openCount = document.querySelector("#openCount");
const allBtn = document.querySelector("#allBtn");
const activeBtn = document.querySelector("#activeBtn");
const completedBtn = document.querySelector("#completedBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function(task, index) {
    if (filter === "active" && task.completed) return;
    if (filter === "completed" && !task.completed) return;

    const li = document.createElement("li");
    if (task.completed) {
      li.className = "completed";
    }

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Undo" : "Complete";
    completeButton.addEventListener("click", function() {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      showTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      tasks.splice(index, 1);
      saveTasks();
      showTasks();
    });

    li.appendChild(text);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });

  const openTasks = tasks.filter(function(task) {
    return !task.completed;
  });
  openCount.textContent = openTasks.length;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const value = taskInput.value.trim();

  if (value.length < 3) {
    error.textContent = "Task must be at least 3 characters long.";
    taskInput.classList.add("invalid");
    return;
  }

  error.textContent = "";
  taskInput.classList.remove("invalid");

  tasks.push({
    text: value,
    completed: false
  });

  saveTasks();
  taskInput.value = "";
  showTasks();
});

taskInput.addEventListener("input", function() {
  if (taskInput.value.trim().length >= 3) {
    error.textContent = "";
    taskInput.classList.remove("invalid");
  }
});

allBtn.addEventListener("click", function() {
  filter = "all";
  showTasks();
});

activeBtn.addEventListener("click", function() {
  filter = "active";
  showTasks();
});

completedBtn.addEventListener("click", function() {
  filter = "completed";
  showTasks();
});

showTasks();
