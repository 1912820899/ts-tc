type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'

type Replace<T extends string, U extends string, K extends string> =
  T extends `${infer a}${U}${infer r}` ? `${a}${K}${r}` : T;

// 学到了，

type replacedAll = ReplaceAll<'t y p e s', ' ', ''>

type ReplaceAll<T extends string, U extends string, K extends string> =
  T extends `${infer a}${U}${infer r}` ? Replace<`${a}${K}${r}`, U, K> : T;