import cardStore from "../store/cardStore";
import dragAndDrop from "./dragAndDrop";

class Favorite {
  constructor() {
    this.title = null;
    this.body = null;
    this.container = document.querySelector(".favorites");
    this.btn = null;
    this.card = null;
    this.id = null;
    this._arrFavorites = [];
    this._counter = null;
    this.counterEl = document.querySelector(".header-favorites__counter");
  }

  checkArrFavorites(id) {
    let flag = true;
    this._arrFavorites.map((card) => {
      console.log(card.id, id);
      if (parseFloat(card.id) === parseFloat(id)) {
        flag = false;
      }
    });
    return flag;
  }

  get arrFavorites() {
    return this._arrFavorites;
  }

  deleteCard(index) {
    this.arrFavorites.splice(index, 1);
  }

  checkArrinCardStore(card) {
    this._arrFavorites = JSON.parse(localStorage.getItem("arrCard")) || [];
    let cardId = card._id.replace(/([0-9])\s+([^0-9])/g, "$1,$2").split("-");
    if (parseFloat(cardId[1]) === parseFloat(this.id)) {
      this._arrFavorites.push({
        title: card.title,
        body: card.body,
        id: card._id,
      });

      localStorage.setItem("arrCard", JSON.stringify(this._arrFavorites));
      favorite.plusCounter();
      this.counterEl.textContent = this._counter;
    }
  }

  plusCounter() {
    if (JSON.parse(localStorage.getItem("arrCard"))) {
      this._counter = JSON.parse(localStorage.getItem("arrCard")).length;
    } else {
      this._counter = 0;
    }
  }

  get counter() {
    return this._counter;
  }

  init(id) {
    this.id = id;
    cardStore.arrTask.forEach((card) => {
      favorite.checkArrinCardStore(card);
    });

    cardStore.arrProgress.forEach((card) => {
      favorite.checkArrinCardStore(card);
    });

    cardStore.arrComplete.forEach((card) => {
      favorite.checkArrinCardStore(card);
    });
  }

  renderTask() {
    this.clearFavoriteContainer();
    let fragment = `<h3 class="favorites-title">Отложенные</h3>`;
    JSON.parse(localStorage.getItem("arrCard")).forEach((card) => {
      fragment += Favorite.templateOfTask(card.title, card.body, card.id);
    });

    return fragment;
  }

  showTaskInFavorites() {
    if (this._counter) {
      const fragment = favorite.renderTask();
      this.container.insertAdjacentHTML("afterbegin", fragment);
    }
    dragAndDrop();
  }

  clearFavoriteContainer() {
    this.container.innerHTML = "";
  }

  static templateOfTask(title, body, id) {
    let cardId = id.replace(/([0-9])\s+([^0-9])/g, "$1,$2").split("-");
    return `
    <div class="favorites-card js-card" draggable="true" id="${cardId[1]}">
            <div class="favorites-card__title">${title}</div>
            <div class="favorites-card__info">${body}</div>
            <button class="favorites-card__button" >Отложить</button>
          </div>
    `;
  }
}

const favorite = new Favorite();

export default favorite;
