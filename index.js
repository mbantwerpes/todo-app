import {
  parseJSONFromLocalStorage,
  stringifyJSONToLocalStorage,
} from "./utils/localStorage.js";

const taskList = document.querySelector(".taskList");

const tasks = parseJSONFromLocalStorage("tasks");

const toggleTask = (taskId) => {
  stringifyJSONToLocalStorage(
    "tasks",
    tasks.map((task) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone;
      }
    })
  );
};

const createTaskListItem = (task) => {
  const label = document.createElement("label");
  label.className = "taskItem";

  const input = document.createElement("input");
  input.className = "taskItem__checkbox";
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "tasks");
  input.checked = task.isDone;
  input.addEventListener("change", () => {
    toggleTask(task.id);
  });

  const span = document.createElement("span");

  span.className = "taskItem__labelText";
  span.innerText = task.taskName;

  label.append(input, span);

  return label;
};

const renderTasks = () => {
  taskList.innerHTML = "";
  const renderedTasks = tasks.map((task) => createTaskListItem(task));
  taskList.append(...renderedTasks);
};

// Render tasks once on page load
renderTasks();

const renderFilteredTasks = (filter) => {
  taskList.innerHTML = "";
  const filteredTasks = tasks.filter((task) => filter === task.when);
  filteredTasks.forEach((filteredTask) => {
    taskList.append(createTaskListItem(filteredTask));
  });
};

// Get all radiobuttons and add onchange handler
const radios = document.querySelectorAll(
  'input[type=radio][name="taskListWhen"]'
);

radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    renderFilteredTasks(event.target.value);
  });
});

document.querySelector(".action-btn").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:8080/newTask.html";
});
