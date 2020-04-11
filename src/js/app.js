import "../css/style.css";
import formUI from "./views/form";

const container = document.querySelectorAll(".js-cell");
const btnTask = document.querySelector(".js-task");
const btnProgress = document.querySelector(".js-progress");
const btnComplete = document.querySelector(".js-complete");

// events
btnTask.addEventListener("click", (e) => {
  e.preventDefault();
  formUI.showForm("taskForm");
});

btnProgress.addEventListener("click", (e) => {
  e.preventDefault();
  formUI.showForm("progressForm");
});

btnComplete.addEventListener("click", (e) => {
  e.preventDefault();
  formUI.showForm("activeForm");
});

container.forEach((el) => {
  el.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target.name;
    formUI.init(name);
    formUI.renderTask();
  });
});
// Heandlers
// dragAndDrop();
