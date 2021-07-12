type Merge2<T, U> = {
  [k in keyof T | keyof U]: k extends keyof U
    ? U[k]
    : k extends keyof T
    ? T[k]
    : never;
};

type ts2 = Merge2<Foo, Bar>;