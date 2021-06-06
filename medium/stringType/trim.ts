// 去掉类型左右的空格
type Trim<T extends string> = T extends `${" "}${infer K}`
  ? Trim<K>
  : T extends `${infer D}${" "}`
  ? Trim<D>
  : T;

type trimed = Trim<"      Hello World         ">;
