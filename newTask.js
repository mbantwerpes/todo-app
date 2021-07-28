const newTaskForm = document.querySelector(".newTaskForm");

localStorage.setItem("tasks", JSON.stringify([]));

newTaskForm.onsubmit = (event) => {
  event.preventDefault();

  const taskName = document.querySelector(".taskDescriptionInput").value;

  if (!taskName) {
    alert("Bitte einen Namen für die Aufgabe eingeben.");
    return;
  }

  const checkedRadio = document.querySelector(".radioButtonInput:checked");
  const when = checkedRadio.value;

  const newTask = {
    when,
    taskName,
    isDone: false,
  };

  appendTaskToLocalStorage(newTask);
};

const appendTaskToLocalStorage = (newTask) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));
};
