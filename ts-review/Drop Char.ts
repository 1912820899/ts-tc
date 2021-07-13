type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

type DropChar<T, K extends string> = T extends `${infer A}${K}${infer Res}`
  ? DropChar<`${A}${Res}`, K>
  : T;
