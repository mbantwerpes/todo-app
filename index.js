const actionBtn = document.querySelector(".action-btn");

const taskList = document.querySelector(".taskList");

actionBtn.onclick = () => {
  const newP = document.createElement("p");
  newP.innerText = "Bla bli blub";

  taskList.appendChild(newP);
};
