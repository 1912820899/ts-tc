type Capitalize2<T> = T extends `${infer F}${infer Res}`
  ? `${Uppercase<F>}${Res}`
  : never;

type capitalized1 = Capitalize2<"hello world">; // expected to be 'Hello world'
