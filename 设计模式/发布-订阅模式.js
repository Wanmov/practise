class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, cb) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(cb);
  }
  off(eventName, cb) {
    if (!this.events[eventName]) return;
    if (!cb) this.events[eventName] = [];
    this.events[eventName] = this.events[eventName].filter(
      (item) => item !== cb
    );
  }
  once(eventName, cb) {
    const onceCallback = (...args) => {
      cb.apply(this, args);
      this.off(eventName, onceCallback);
    };
    this.on(eventName, onceCallback);
  }
  emit(eventName, ...args) {
    const cbs = this.events[eventName];
    if (cbs) {
      cbs.forEach((cb) => {
        cb.apply(this, args);
      });
    }
  }
}
