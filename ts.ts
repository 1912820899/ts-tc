type Foo = {
  a: number;
  b: string;
};
type Bar = {
  a: string;
  b: number;
  c: string;
};





type dj = Record<keyof Foo, Bar>;
