class CardStore {
  constructor() {
    this._arrTask = [];
    this._arrProgress = [];
    this._arrComplete = [];
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

  get arrTask() {
    return this._arrTask;
  }

  get arrProgress() {
    return this._arrProgress;
  }

  get arrComplete() {
    return this._arrComplete;
  }
}

const cardStore = new CardStore();

export default cardStore;
