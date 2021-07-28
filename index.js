const taskList = document.querySelector(".taskList");

const tasks = JSON.parse(localStorage.getItem("tasks"));

const createTaskListItem = (task) => {
  const label = document.createElement("label");
  label.className = "taskItem";

  const input = document.createElement("input");
  input.className = "taskItem__checkbox";
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "tasks");
  input.checked = task.isDone;

  const span = document.createElement("span");

  span.className = "taskItem__labelText";
  span.innerText = task.taskName;

  label.append(input, span);

  return label;
};

const renderTasks = (filter) => {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    if (filter) {
      if (filter === task.when) {
        const nodeTaskItem = createTaskListItem(task);
        taskList.append(nodeTaskItem);
      }
    } else {
      const nodeTaskItem = createTaskListItem(task);
      taskList.append(nodeTaskItem);
    }
  });
};

// Render tasks once on page load
renderTasks();

// Get all radiobuttons and add onchange handler
const radios = document.querySelectorAll(
  'input[type=radio][name="taskListWhen"]'
);

const changeWhenHandler = (event) => {
  renderTasks(event.target.value);
};

radios.forEach((radio) => {
  radio.addEventListener("change", changeWhenHandler);
});
