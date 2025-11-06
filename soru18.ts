type LastParameter<T> = T extends (...args: [...infer _Rest, infer L]) => any ? L : never;

const fn1 = (a: string, b: number, c: boolean) => {};
const fn2 = (a: Date) => {};

let p1: LastParameter<typeof fn1> = true;
let p2: LastParameter<typeof fn2> = new Date();

console.log("Soru 18 Başarılı!", p1);
