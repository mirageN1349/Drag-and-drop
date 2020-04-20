import favorite from "../views/favorite";

class CardStore {
  constructor() {
    this._arrTask = [];
    this._arrProgress = [];
    this._arrComplete = [];
    this.taskContainer = document.getElementById("taskC");
    this.progressContainer = document.getElementById("progressC");
    this.completeContainer = document.getElementById("completeC");
    this.counter = document.querySelector(".header-favorites__counter");
    this._arrFavorite = JSON.parse(localStorage.getItem("cardArr")) || [];
  }
  addArrTask(card) {
    this._arrTask.push(card);
  }
  addArrProgress(card) {
    this._arrProgress.push(card);
  }
  addArrComplete(card) {
    this._arrComplete.push(card);
  }
  addArrFavorite(card) {
    this._arrFavorite.push(card);
  }

  get arrTask() {
    return this._arrTask;
  }

  get arrProgress() {
    return this._arrProgress;
  }

  get arrComplete() {
    return this._arrComplete;
  }

  findCardInArr(id, arrName) {
    this.arrTask.forEach((card, index) => {
      let cardId = card._id.replace(/([0-9])\s+([^0-9])/g, "$1,$2").split("-");
      if (cardId[1] === id) {
        switch (arrName) {
          case "task":
            const cardTask = cardStore.transformCardInObj(
              card.title,
              card.body,
              "task-",
              id
            );
            cardStore.addArrTask(cardTask);
            this.arrTask.splice(index, 1);
            break;
          case "progress":
            const cardProgress = cardStore.transformCardInObj(
              card.title,
              card.body,
              "progress-",
              id
            );
            cardStore.addArrProgress(cardProgress);
            this.arrTask.splice(index, 1);
            break;
          case "complete":
            const cardComplete = cardStore.transformCardInObj(
              card.title,
              card.body,
              "complete-",
              id
            );
            cardStore.addArrComplete(cardComplete);
            this.arrTask.splice(index, 1);
            break;
          case "favorite":
            const cardFavorite = cardStore.transformCardInObj(
              card.title,
              card.body,
              "favorite-",
              id
            );
            cardStore.addArrFavorite(cardFavorite);
            localStorage.setItem("arrCard", JSON.stringify(this._arrFavorite));
            this.arrTask.splice(index, 1);
            break;
          default:
            break;
        }
        return;
      }
    });

    this.arrProgress.forEach((card, index) => {
      let cardId = card._id.replace(/([0-9])\s+([^0-9])/g, "$1,$2").split("-");
      if (cardId[1] === id) {
        switch (arrName) {
          case "task":
            const cardTask = cardStore.transformCardInObj(
              card.title,
              card.body,
              "task-",
              id
            );
            cardStore.addArrTask(cardTask);
            this.arrProgress.splice(index, 1);
            break;
          case "progress":
            const cardProgress = cardStore.transformCardInObj(
              card.title,
              card.body,
              "progress-",
              id
            );
            cardStore.addArrProgress(cardProgress);
            this.arrProgress.splice(index, 1);
            break;
          case "complete":
            const cardComplete = cardStore.transformCardInObj(
              card.title,
              card.body,
              "complete-",
              id
            );
            cardStore.addArrComplete(cardComplete);
            this.arrProgress.splice(index, 1);
            break;
          case "favorite":
            const cardFavorite = cardStore.transformCardInObj(
              card.title,
              card.body,
              "favorite-",
              id
            );
            cardStore.addArrFavorite(cardFavorite);
            this.arrProgress.splice(index, 1);
            break;
          default:
            break;
        }
        return;
      }
    });

    this.arrComplete.forEach((card, index) => {
      let cardId = card._id.replace(/([0-9])\s+([^0-9])/g, "$1,$2").split("-");
      if (cardId[1] === id) {
        switch (arrName) {
          case "task":
            const cardTask = cardStore.transformCardInObj(
              card.title,
              card.body,
              "task-",
              id
            );
            cardStore.addArrTask(cardTask);
            this.arrComplete.splice(index, 1);
            break;
          case "progress":
            const cardProgress = cardStore.transformCardInObj(
              card.title,
              card.body,
              "progress-",
              id
            );
            cardStore.addArrProgress(cardProgress);
            this.arrComplete.splice(index, 1);
            break;
          case "complete":
            const cardComplete = cardStore.transformCardInObj(
              card.title,
              card.body,
              "complete-",
              id
            );
            cardStore.addArrComplete(cardComplete);
            this.arrComplete.splice(index, 1);
            break;
          case "favorite":
            const cardFavorite = cardStore.transformCardInObj(
              card.title,
              card.body,
              "favorite-",
              id
            );
            cardStore.addArrFavorite(cardFavorite);
            this.arrComplete.splice(index, 1);
            break;
          default:
            break;
        }
      }
      return;
    });

    JSON.parse(localStorage.getItem("arrCard")).forEach((card, index) => {
      let cardId = card.id.replace(/([0-9])\s+([^0-9])/g, "$1,$2").split("-");
      if (cardId[1] === id) {
        switch (arrName) {
          case "task":
            const cardTask = cardStore.transformCardInObj(
              card.title,
              card.body,
              "task-",
              id
            );
            console.log("cardTask", cardTask);
            cardStore.addArrTask(cardTask);
            this._arrFavorite.splice(index, 1);
            localStorage.setItem("arrCard", JSON.stringify(this._arrFavorite));
            favorite.plusCounter();
            this.counter.textContent = favorite._counter;
            break;
          case "progress":
            const cardProgress = cardStore.transformCardInObj(
              card.title,
              card.body,
              "progress-",
              id
            );
            cardStore.addArrProgress(cardProgress);
            this._arrFavorite.splice(index, 1);
            localStorage.setItem("arrCard", JSON.stringify(this._arrFavorite));
            favorite.plusCounter();
            this.counter.textContent = favorite._counter;
            break;
          case "complete":
            const cardComplete = cardStore.transformCardInObj(
              card.title,
              card.body,
              "complete-",
              id
            );
            cardStore.addArrComplete(cardComplete);
            this._arrFavorite.splice(index, 1);
            localStorage.setItem("arrCard", JSON.stringify(this._arrFavorite));
            favorite.plusCounter();
            this.counter.textContent = favorite._counter;
            break;
          case "favorite":
            const cardFavorite = cardStore.transformCardInObj(
              card.title,
              card.body,
              "favorite-",
              id
            );
            cardStore.addArrFavorite(cardFavorite);
            this._arrFavorite.splice(index, 1);
            localStorage.setItem("arrCard", JSON.stringify(this._arrFavorite));
            favorite.plusCounter();
            this.counter.textContent = favorite._counter;
            break;
          default:
            break;
        }
      }
      return;
    });
  }

  deleteCardinArr(id, e) {
    this.arrTask.forEach((card, index) => {
      let cardId = card._id.replace(/([0-9])\s+([^0-9])/g, "$1,$2").split("-");
      if (cardId[1] === id) {
        this.arrTask.splice(index, 1);
        const parent = e.target.parentElement;
        this.taskContainer.removeChild(parent);
      }
    });

    this.arrProgress.forEach((card, index) => {
      let cardId = card._id.replace(/([0-9])\s+([^0-9])/g, "$1,$2").split("-");
      if (cardId[1] === id) {
        this.arrProgress.splice(index, 1);
        const parent = e.target.parentElement;
        this.progressContainer.removeChild(parent);
      }
    });

    this.arrComplete.forEach((card, index) => {
      let cardId = card._id.replace(/([0-9])\s+([^0-9])/g, "$1,$2").split("-");
      if (cardId[1] === id) {
        this.arrComplete.splice(index, 1);
        const parent = e.target.parentElement;
        this.completeContainer.removeChild(parent);
      }
    });
  }

  transformCardInObj(title, body, idName, id) {
    return {
      _id: idName + id,
      title: title,
      body: body,
    };
  }
}

const cardStore = new CardStore();

export default cardStore;
