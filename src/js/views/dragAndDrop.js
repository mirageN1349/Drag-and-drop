export const dragAndDrop = () => {
  const cards = document.querySelectorAll(".js-card");
  const cells = document.querySelectorAll(".js-cell");
  let card = 0;

  cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
  });

  function dragStart() {
    card = this;
    setTimeout(() => {
      this.classList.add("hide");
    }, 0);
  }

  function dragEnd() {
    this.classList.remove("hide");
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
  }

  function dragLeave() {
    this.classList.remove("hovered");
  }

  function dragDrop() {
    console.log(card);
    this.appendChild(card);
    this.classList.remove("hovered");
  }

  cells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", dragDrop);
  });
};
