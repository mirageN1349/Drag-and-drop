function dragAndDrop() {
  const container = document.querySelectorAll(".js-cell");
  const cards = document.querySelectorAll(".js-card");
  let card;

  // events
  container.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", dragDrop);
  });

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
    card = 0;
  }

  function dragOver(e) {
    e.preventDefault();
    this.style = "min-height: 250px";
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
  }

  function dragLeave() {
    this.classList.remove("hovered");
    this.style = "height: auto";
  }

  function dragDrop() {
    if (this.id === "progressC") {
      card.classList.remove("green");
      card.classList.add("red");
    }
    if (this.id === "completeC") {
      card.classList.remove("red");
      card.classList.add("green");
    }
    if (this.id === "taskC") {
      card.classList.remove("green");
      card.classList.remove("red");
    }

    this.appendChild(card);
    this.classList.remove("hovered");
  }
}

export default dragAndDrop;
