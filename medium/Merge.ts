//Merge two types into a new type. Keys of the second type overrides keys of the first type.
type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: string;
};
type Merge<F, S> = {
  [k in keyof F | keyof S]: k extends Extract<keyof F, keyof S>
    ? S[k]
    : k extends Exclude<keyof F, keyof S>
    ? F[k]
    : k extends Exclude<keyof S, keyof F>
    ? S[k]
    : never;
};

type ts = Merge<Foo, Bar>;

// 这里主要用了，联合类型的提取公共部分和联合类型的筛选排除公共部分