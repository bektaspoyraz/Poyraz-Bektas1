type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type pNum = Promise<number>;
type regularNum = number;

let val1: UnwrapPromise<pNum> = 10;
let val2: UnwrapPromise<regularNum> = 20;
let val3: UnwrapPromise<pNum> = 30;

console.log("Soru 11 Başarılı!", val1, val2, val3);
