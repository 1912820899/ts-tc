// 去掉左侧所有空格
type h = "    Hello World  ";
type TrimLeft<T extends string> = T extends `${" "}${infer dj}`
  ? TrimLeft<`${dj}`>
  : T;

type a = TrimLeft<h>;
