const taskList = document.querySelector(".taskList");

const tasks = JSON.parse(localStorage.getItem("tasks"));

const createTaskListItem = (descriptionText) => {
  const label = document.createElement("label");
  label.className = "taskItem";

  const input = document.createElement("input");
  input.className = "taskItem__checkbox";
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "tasks");

  const span = document.createElement("span");

  span.className = "taskItem__labelText";
  span.innerText = descriptionText;

  label.append(input, span);

  return label;
};

tasks.forEach((task) => {
  console.log(task.inputValue);
  const nodeTaskItem = createTaskListItem(task.inputValue);
  taskList.append(nodeTaskItem);
});

const radios = document.querySelectorAll(
  'input[type=radio][name="taskListWhen"]'
);

const changeWhenHandler = (event) => {
  console.log(event.target.value);
};

radios.forEach((radio) => {
  radio.addEventListener("change", changeWhenHandler);
});
