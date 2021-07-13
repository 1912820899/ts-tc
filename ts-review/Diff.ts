// Get an Object that is the difference between O & O1
type Diff3<T, U> = {
  [k in Exclude<keyof U, keyof T>]: U[k];
};

type Foo1 = {
  name: string;
  age: string;
};
type Bar1 = {
  name: string;
  age: string;
  gender: number;
};
type resDiff = Diff3<Foo1, Bar1>;
