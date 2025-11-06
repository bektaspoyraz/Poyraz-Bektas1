type CreateGetters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

type UserProps = { id: number; name: string; };
type UserGetters = CreateGetters<UserProps>

const userGetters: UserGetters = {
  getId: () => 1,
  getName: () => "Ali"
};

const errorGetter: UserGetters = {
  getId: () => 1,
  getName: () => "Ali"
};

console.log("Soru 13 Başarılı!", userGetters.getName());
