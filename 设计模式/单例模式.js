class Singleton {
  constructor() {
    if (!Singletion.instance) {
      Singleton.instance = this;
    }
    return Singletion.instance;
  }
}
