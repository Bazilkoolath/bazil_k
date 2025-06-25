class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case "add":
      case "addition":
        return this.add();
      case "subtract":
      case "subtraction":
        return this.subtract();
      case "multiply":
      case "multiplication":
        return this.multiply();
      case "divide":
      case "division":
        return this.divide();
      default:
        return "Invalid operation. Use add, subtract, multiply, or divide.";
    }
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    if (this.b === 0) {
      return "Error: Division by zero.";
    }
    return this.a / this.b;
  }
}

const calc1 = new Calculator(50,50.5, "add");
console.log("Result:", calc1.calculate());

const calc2 = new Calculator(50, 0.5, "divide");
console.log("Result:", calc2.calculate());
