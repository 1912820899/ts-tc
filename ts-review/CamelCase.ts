// TODO: 没有完全 实现
type CamelCase1<T> = T extends `${infer L}-${infer R}`
  ? CamelCase1<`${L}${Capitalize<R>}`>
  : T;
type test1 = CamelCase1<"for-bar-baz">;
