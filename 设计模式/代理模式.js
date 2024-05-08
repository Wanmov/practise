class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `${this.make}-${this.model}`;
  }
}

function createLoggingProxy(target) {
  return new Proxy(target, {
    get(target, property, receriver) {
      console.log(`Reading property: ${property}`);
      return Reflect.get(target, property, receriver);
    },
    set(target, property, value, receriver) {
      console.log(`Setting property: ${property} to ${value}`);
      return Reflect.set(target, property, value, receriver);
    },
  });
}
