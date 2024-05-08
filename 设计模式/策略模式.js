class Strategies {
  getResult(num1, num2) {
    throw new Error("this method should be overridden!");
  }
}

class Multiply extends Stategies {
  getResult(num1, num2) {
    return num1 * num2;
  }
}

class Minus extends Stategies {
  getResult(num1, num2) {
    return num1 - num2;
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }
  getResult(num1, num2) {
    return this.strategy.getResult(num1, num2);
  }
}
