// 烤肉串 FooBarBaz -> for-bar-baz

// 复盘烤肉串，关键理解 infer a 其实已经是一个已知的内容，可以被随意操作。因此只需要处理后面的未知内容 infer b 即可。

// 关键点在 理解递归循环遍历
type KebabCase<S extends string> = S extends `${infer a}${infer b}`
  ? b extends Uncapitalize<b>
    ? `${Uncapitalize<a>}${KebabCase<b>}`
    : `${Uncapitalize<a>}-${KebabCase<`${Uncapitalize<b>}`>}`
  : S;
type ts = KebabCase<"FooBarBaz">;

