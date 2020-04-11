class CardStore {
  constructor() {
    this.arrTask = [];
    this.arrProgress = [];
    this.arrComplete = [];
  }
  addArrTask(card) {
    this.arrTask.push(card);
  }
  addArrProgress(card) {
    this.arrProgress.push(card);
  }
  addArrComplete(card) {
    this.arrComplete.push(card);
  }

  getArrTask() {
    return this.arrTask;
  }

  getArrProgress() {
    return this.arrProgress;
  }

  getArrComplete() {
    return this.arrComplete;
  }
}

const cardStore = new CardStore();

export default cardStore;
