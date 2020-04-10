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

  showForm(name) {
    this.form = document.forms[`${name}`];
    this.form.classList.toggle("active");
  }

  renderTask() {
    let fragment = FormUI.templateTask(this.title.value, this.body.value);
    this.container.insertAdjacentHTML("beforeend", fragment);
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
