import "@sass/style.sass";
import formUI from "./views/form";
import favorite from "./views/favorite";

const container = document.querySelectorAll(".js-cell");
const btnTask = document.querySelector(".js-task");
const btnProgress = document.querySelector(".js-progress");
const btnComplete = document.querySelector(".js-complete");
const counter = document.querySelector(".header-favorites__counter");
const btnFavorite = document.querySelector(".header-favorites");
const favoriteContainer = document.querySelector(".favorites");

const arrFavorites = localStorage.getItem("card");
let count = JSON.parse(arrFavorites);

// events
btnFavorite.addEventListener("click", (e) => {
  favoriteContainer.classList.toggle("active-favorites");
  favorite.showTaskInFavorites();
});

// click btn task
btnTask.addEventListener("click", (e) => {
  showForm(e, "taskForm");
});

// click btn progress
btnProgress.addEventListener("click", (e) => {
  showForm(e, "progressForm");
});

// click btn complete
btnComplete.addEventListener("click", (e) => {
  showForm(e, "activeForm");
});

// click btn addFavorite
container.forEach((el) => {
  el.addEventListener("click", (e) => {
    onBtnFavoriteCardClick(e);
  });
});

// form submit
container.forEach((el) => {
  el.addEventListener("submit", (e) => {
    onFormSubmit(e);
  });
});

// Heandlers
// submit form
function onFormSubmit(e) {
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
}

// click btn favorites on card
function onBtnFavoriteCardClick(e) {
  if (e.target.classList.contains("btnF")) {
    const id = e.target.getAttribute("data-card-id");
    const result = favorite.checkArrFavorites(id);
    if (result) {
      favorite.init(id);
    } else {
      console.log("Вы уже добавили этот билет");
      return;
    }
  }
}

// show form
function showForm(e, formName) {
  e.preventDefault();
  if (formName === "taskForm") {
    btnTask.classList.toggle("active-btn");
  }
  if (formName === "progressForm") {
    btnProgress.classList.toggle("active-btn");
  }
  if (formName === "activeForm") {
    btnComplete.classList.toggle("active-btn");
  }
  formUI.showForm(`${formName}`);
}

counter.textContent = count.length;
