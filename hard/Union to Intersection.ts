/* type I = Union2Intersection<"foo" | 42 | true>; // expected to be 'foo' & 42 & true

type Union2Intersection<T> = T extends T ?  */





type dja = (((x: { foo: string }) => any) | ((x: { bar: string; }) => any)) extends (x: infer V) => any ? V : never;

