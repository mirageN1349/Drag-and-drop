import favorite from "./favorite";

function dragAndDrop() {
  const container = document.querySelectorAll(".js-cell");
  const cards = document.querySelectorAll(".js-card");
  const counter = document.querySelector(".header-favorites__counter");
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
  }

  function dragLeave() {
    this.style = "height: auto";
    if (this.id === "favoriteC") {
      counter.textContent = JSON.parse(localStorage.getItem("card")).length;
      const id = card.parents.getAttribute("data-card-id");
      console.log(id);
      favorite.deleteCardInObj(id);
    }
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
  }
}

export default dragAndDrop;
