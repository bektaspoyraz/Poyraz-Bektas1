function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Ali", age: 30 };

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
