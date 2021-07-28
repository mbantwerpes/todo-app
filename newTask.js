const newTaskForm = document.querySelector(".newTaskForm");

localStorage.setItem("tasks", JSON.stringify([]));

newTaskForm.onsubmit = (event) => {
  event.preventDefault();

  const checkedRadio = document.querySelector(".radioButtonInput:checked");
  const radioValue = checkedRadio.value;

  const inputValue = document.querySelector(".taskDescriptionInput").value;

  const newTask = {
    radioValue,
    inputValue,
  };

  appendTaskToLocalStorage(newTask);
};

const appendTaskToLocalStorage = (newTask) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));
};
