// Get an Object that is the difference between O & O1

type Diff<O, O1> = {
  [k in
    | Exclude<keyof O, keyof O1>
    | Exclude<keyof O1, keyof O>]: k extends Extract<keyof O, k>
    ? O[k]
    : k extends Extract<keyof O1, k>
    ? O1[k]
    : never;
};

type Diff2<
  O extends {},
  O1 extends {},
  K extends keyof O = keyof O,
  K1 extends keyof O1 = keyof O1
> = {
  [k in Exclude<K, K1> | Exclude<K1, K>]: k extends K
    ? O[k]
    : k extends K1
    ? O1[k]
    : never;
};
