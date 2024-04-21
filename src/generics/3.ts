function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//Приклад для перевіки
const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };

const mergedObject = merge(objA, objB);
console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }

export {};
