// 烤肉串 FooBarBaz -> for-bar-baz

// 关键点在 理解递归循环遍历
type KebabCase<S extends string> = S extends `${infer a}${infer b}`
  ? b extends Uncapitalize<b>
    ? `${Uncapitalize<a>}${KebabCase<b>}`
    : `${Uncapitalize<a>}-${KebabCase<`${Uncapitalize<b>}`>}`
  : S;
type ts = KebabCase<"FooBarBaz">;
