class shapeFactory {
  chooseShape(shape) {
    switch (shape) {
      case "circle":
        return new Circle();
      case "rectangle":
        return new Rectangle();
      default:
        throw new Error("no such shape");
    }
  }
}

class Circle {
  constructor() {
    console.log("Circle created");
  }
}

class Rectangle {
  constructor() {
    console.log("Rectangle created");
  }
}
