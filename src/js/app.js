import "@sass/style.sass";
import formUI from "./views/form";

const container = document.querySelectorAll(".js-cell");
const btnTask = document.querySelector(".js-task");
const btnProgress = document.querySelector(".js-progress");
const btnComplete = document.querySelector(".js-complete");

// events
btnTask.addEventListener("click", (e) => {
  e.preventDefault();
  btnTask.classList.toggle("active-btn");
  formUI.showForm("taskForm");
});

btnProgress.addEventListener("click", (e) => {
  e.preventDefault();
  btnProgress.classList.toggle("active-btn");
  formUI.showForm("progressForm");
});

btnComplete.addEventListener("click", (e) => {
  e.preventDefault();
  btnComplete.classList.toggle("active-btn");
  formUI.showForm("activeForm");
});

container.forEach((el) => {
  el.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target.name;
    formUI.init(name);
    formUI.renderTask();
    if (name === "taskForm") {
      btnTask.classList.remove("active-btn");
    } else if (name === "progressForm") {
      btnProgress.classList.remove("active-btn");
    } else {
      btnComplete.classList.remove("active-btn");
    }
  });
});
// Heandlers
