type Flatten<T> = T extends (infer U)[] ? U : T;

type NumArray = number[];
type Str = string;

let el1: Flatten<NumArray> = 123;
let el2: Flatten<Str> = "hello";

console.log("Soru 19 Başarılı!", el1, el2);
