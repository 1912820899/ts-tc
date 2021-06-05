// 实现驼峰 for-bar-baz -> forBarBaz
type test = CamelCase<"for-bar-baz">;
/*
// Tip: 只支持 for-bar-baz -> forBarBaz
 type CamelCase<S extends string, L extends string = S> =
  S extends `${infer a}${"-"}${infer b}`
    ? L extends S
      ? `${a}${CamelCase<b, L>}`
      : `${Capitalize<a>}${CamelCase<b, L>}`
    : `${Capitalize<S>}`;
 */

// 别人的实现 🐂🍺
type CamelCase<S extends string> = S extends `${infer H}-${infer R}`
  ? R extends Capitalize<R>
    ? `${H}-${CamelCase<R>}`
    : `${H}${CamelCase<Capitalize<R>>}`
  : S;
