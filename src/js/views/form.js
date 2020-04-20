import cardStore from "../store/cardStore";
import dragAndDrop from "./dragAndDrop";
import favorite from "./favorite";

class FormUI {
  constructor() {
    this.form = null;
    this.title = null;
    this.body = null;
    this.container = null;
    this.card = null;
    this.btn = null;
    this.id = null;
  }

  init(name) {
    this.form = document.forms[`${name}`];
    this.container = this.form.parentElement;
    this.title = this.form.elements["inputTitle"];
    this.body = this.form.elements["inputBody"];
    this.form.classList.toggle("active");
  }

  pushCardInArr() {
    if (this.container.id === "taskC") {
      cardStore.addArrTask(
        formUI.transformCardInObj(this.title.value, this.body.value, `task-`)
      );
      return;
    }
    if (this.container.id === "progressC") {
      cardStore.addArrProgress(
        formUI.transformCardInObj(
          this.title.value,
          this.body.value,
          `progress-`
        )
      );
      return;
    }
    if (this.container.id === "completeC") {
      cardStore.addArrComplete(
        formUI.transformCardInObj(
          this.title.value,
          this.body.value,
          `complete-`
        )
      );
      return;
    }
  }

  transformCardInObj(title, body, id) {
    return {
      _id: id + this.id,
      title: title,
      body: body,
    };
  }

  showForm(name) {
    this.form = document.forms[`${name}`];
    this.form.classList.toggle("active");
  }

  renderTask() {
    const title = this.title.value;
    const body = this.body.value;

    if (!title) {
      alert("Введите название задачи!");
      this.form.classList.toggle("active");
      return;
    }
    if (!body) {
      alert("Введите описание задачи!");
      this.form.classList.toggle("active");
      return;
    }

    const fragment = formUI.templateTask(title, body);

    this.container.insertAdjacentHTML("beforeend", fragment);
    formUI.pushCardInArr();
    dragAndDrop();
    this.btn = document.querySelector(".list-card__button");
    this.form.reset();

    console.log("task:", cardStore.arrTask);
    console.log("progress:", cardStore.arrProgress);
    console.log("complete:", cardStore.arrComplete);
    console.log("favorite:", JSON.parse(localStorage.getItem("arrCard")));
    console.log(" ");
  }

  getBtn() {
    return this.btn;
  }

  templateTask(title, body) {
    const id = Math.random();
    this.id = id;
    return `
    <div class="list-card js-card" draggable="true" id="${this.id}" >
    <div class="list-card__title">${title}</div>
    <div class="list-card__info">${body}</div>
    <button class="list-card__button btnF" data-card-id="${this.id}">Отложить</button>
  </div>
    `;
  }
}

const formUI = new FormUI();

export default formUI;
