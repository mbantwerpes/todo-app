import {
  parseJSONFromLocalStorage,
  stringifyJSONToLocalStorage,
} from "./utils/localStorage.js";

const newTaskForm = document.querySelector(".newTaskForm");

// localStorage.setItem("tasks", JSON.stringify([]));

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
    id: getRandomInt(1, Number.MAX_SAFE_INTEGER),
    when,
    taskName,
    isDone: false,
  };

  appendTaskToLocalStorage(newTask);

  newTaskForm.reset();
};

const appendTaskToLocalStorage = (newTask) => {
  const tasks = parseJSONFromLocalStorage("tasks", []);

  tasks.push(newTask);

  stringifyJSONToLocalStorage("tasks", tasks);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
