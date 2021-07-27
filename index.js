const actionBtn = document.querySelector(".action-btn");

const taskList = document.querySelector(".taskList");

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

actionBtn.onclick = () => {
  taskList.appendChild(createTaskListItem("Hallo du da, ich eine Aufgabe!"));
};
