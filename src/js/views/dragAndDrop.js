import favorite from "./favorite";
import cardStore from "../store/cardStore";

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
    this.style = "min-height: 200px";
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave() {
    if (this.id === "favoriteC") {
      // counter.textContent = JSON.parse(localStorage.getItem("card")).length;
      return;
    }
    this.style = "height: auto";
  }

  function dragDrop() {
    if (this.id === "progressC") {
      card.classList.remove("green");
      card.classList.add("red");
      const id = card.id;
      cardStore.findCardInArr(id, "progress");
      this.style = "height: auto";

      console.log("task:", cardStore.arrTask);
      console.log("progress:", cardStore.arrProgress);
      console.log("complete:", cardStore.arrComplete);
      console.log("favorite:", JSON.parse(localStorage.getItem("arrCard")));
      console.log(" ");
    }
    if (this.id === "completeC") {
      card.classList.remove("red");
      card.classList.add("green");
      const id = card.id;
      cardStore.findCardInArr(id, "complete");
      this.style = "height: auto";

      console.log("task:", cardStore.arrTask);
      console.log("progress:", cardStore.arrProgress);
      console.log("complete:", cardStore.arrComplete);
      console.log("favorite:", JSON.parse(localStorage.getItem("arrCard")));
      console.log(" ");
    }
    if (this.id === "taskC") {
      card.classList.remove("green");
      card.classList.remove("red");
      const id = card.id;
      cardStore.findCardInArr(id, "task");
      this.style = "height: auto";

      console.log("task:", cardStore.arrTask);
      console.log("progress:", cardStore.arrProgress);
      console.log("complete:", cardStore.arrComplete);
      console.log("favorite:", JSON.parse(localStorage.getItem("arrCard")));
      console.log(" ");
    }
    if (this.id === "favoriteC") {
      const id = card.id;
      cardStore.findCardInArr(id, "favorite");

      console.log("task:", cardStore.arrTask);
      console.log("progress:", cardStore.arrProgress);
      console.log("complete:", cardStore.arrComplete);
      console.log("favorite:", JSON.parse(localStorage.getItem("arrCard")));
      console.log(" ");
    }
    this.appendChild(card);
  }
}

export default dragAndDrop;
