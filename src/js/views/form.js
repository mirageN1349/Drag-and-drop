import cardStore from "../store/cardStore";
import dragAndDrop from "./dragAndDrop";

class FormUI {
  constructor() {
    this.form = null;
    this.title = null;
    this.body = null;
    this.container = null;
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
        formUI.transformCardInObj(this.title.value, this.body.value)
      );
    }
    if (this.container.id === "progressC") {
      cardStore.addArrProgress(
        formUI.transformCardInObj(this.title.value, this.body.value)
      );
    }
    if (this.container.id === "completeC") {
      cardStore.addArrComplete(
        formUI.transformCardInObj(this.title.value, this.body.value)
      );
    }
  }

  transformCardInObj(title, body) {
    return {
      _id: `${Math.random()}`,
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
      return;
    }
    if (!body) {
      alert("Введите описание задачи!");
      return;
    }

    let fragment = FormUI.templateTask(title, body);
    this.container.insertAdjacentHTML("beforeend", fragment);
    dragAndDrop();
    formUI.pushCardInArr();
    this.form.reset();
  }

  static templateTask(title, body) {
    return `
    <div class="list-card js-card" draggable="true">
    <div class="list-card__title">${title}</div>
    <div class="list-card__info">${body}</div>
  </div>
    `;
  }
}

const formUI = new FormUI();

export default formUI;
