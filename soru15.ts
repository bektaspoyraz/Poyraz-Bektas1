type PickByValueType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K]
};

type Sample = { name: string; age: number; active: boolean; };
type StringOrNumberProps = PickByValueType<Sample, string | number>;

const valid: StringOrNumberProps = {
  name: "Ali",
  age: 30
};

const invalid: StringOrNumberProps = {
  name: "Veli",
  age: 40
};

console.log("Soru 15 Başarılı!", valid.name);
