function showMessage(message: string): void {
  console.log(message);
}

showMessage("Hello, developers");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calc(10, 15));

function customError(): never {
  throw new Error("Error");
}

function sayHello(name: string): void {
  console.log(`Hello, ${name}!`);
}
let result = sayHello("John");

export {};
