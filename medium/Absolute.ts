type Test = 0;
type Result = Absolute<Test>; // expected to be "100"

type Absolute<T extends string | number | bigint> =
  `${T}` extends `${"-"}${infer n}` ? n : `${T}`;

type ts = Absolute<Test>;
