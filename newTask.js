const newTaskForm = document.querySelector(".newTaskForm");

newTaskForm.onsubmit = (event) => {
  event.preventDefault();

  const checkedRadio = document.querySelector(".radioButtonInput:checked");
  const radioValue = checkedRadio.value;

  const inputValue = document.querySelector(".taskDescriptionInput").value;

  console.log(radioValue, inputValue);
};
