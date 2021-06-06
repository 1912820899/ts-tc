// 实现字符串的匹配替换

type Replace<T extends string, U extends string, K extends string> =
  T extends `${infer a}${U}${infer r}` ? `${a}${K}${r}` : T;

type ReplaceAll<T extends string, U extends string, K extends string> =
  T extends `${infer a}${U}${infer r}` ? ReplaceAll<`${a}${K}${r}`, U, K> : T;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'

type replacedAll = ReplaceAll<"t y p e s", " ", "">;
