import "@sass/style.sass";
import formUI from "./views/form";
import favorite from "./views/favorite";
import cardStore from "./store/cardStore";

const container = document.querySelectorAll(".js-cell");
const btnTask = document.querySelector(".js-task");
const btnProgress = document.querySelector(".js-progress");
const btnComplete = document.querySelector(".js-complete");
const counter = document.querySelector(".header-favorites__counter");
const btnFavorite = document.querySelector(".header-favorites");
const favoriteContainer = document.querySelector(".favorites");
const wrapper = document.querySelector(".wrapper");
const taskContainer = document.getElementById("taskC");

// counter favorite task
favorite.plusCounter();
counter.textContent = favorite._counter;

// events
// click btn favorite
btnFavorite.addEventListener("click", (e) => {
  clickFavoriteBtn();
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
      favorite.showTaskInFavorites();
      cardStore.deleteCardinArr(id, e);
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

// clcick favorite btn
function clickFavoriteBtn(e) {
  btnFavorite.classList.toggle("margin-r");
  favoriteContainer.classList.toggle("active-favorites");
  document.body.classList.toggle("width-hero");
  wrapper.classList.toggle("right-wrapper");

  favorite.showTaskInFavorites();
}
