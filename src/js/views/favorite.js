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

  checkArrinCardStore(card) {
    if (parseFloat(card._id) === parseFloat(this.id)) {
      this._arrFavorites.push({
        title: card.title,
        body: card.body,
        id: card._id,
      });

      localStorage.setItem("card");
    } else {
      return;
    }
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
    let fragment = "";
    JSON.parse(localStorage.getItem("card")).forEach((card) => {
      fragment += Favorite.templateOfTask(card.title, card.body, card.id);
    });

    return fragment;
  }

  showTaskInFavorites() {
    const fragment = favorite.renderTask();
    this.container.insertAdjacentHTML("afterbegin", fragment);
    dragAndDrop();
  }

  clearFavoriteContainer() {
    this.container.innerHTML = "";
  }

  counterMinus() {
    let counter = this._arrFavorites.length - 1;
    return counter;
  }

  static templateOfTask(title, body, id) {
    return `
    <div class="favorites-card js-card" draggable="true" data-card-id="${id}">
            <div class="favorites-card__title">${title}</div>
            <div class="favorites-card__info">${body}</div>
            <button class="favorites-card__button" >Отложить</button>
          </div>
    `;
  }
}

const favorite = new Favorite();

export default favorite;
