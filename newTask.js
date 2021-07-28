const newTaskForm = document.querySelector(".newTaskForm");

localStorage.setItem("tasks", JSON.stringify([]));

newTaskForm.onsubmit = (event) => {
  event.preventDefault();

  const inputValue = document.querySelector(".taskDescriptionInput").value;

  if (!inputValue) {
    alert("Bitte einen Namen für die Aufgabe eingeben.");
    return;
  }

  const checkedRadio = document.querySelector(".radioButtonInput:checked");
  const radioValue = checkedRadio.value;

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
