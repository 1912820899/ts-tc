// 实现绝对值
type Test = 0;
type Result1 = Absolute<Test>; // expected to be "100"

type Absolute<T extends string | number | bigint> =
  `${T}` extends `${"-"}${infer n}` ? n : `${T}`;

type ts = Absolute<Test>;
