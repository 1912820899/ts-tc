type Absolute3<T> = T extends `${infer F}${infer Res}`
  ? F extends "-"
    ? Res
    : T
  : T;

type Result3 = Absolute3<'-100'>; // expected to be "100"
