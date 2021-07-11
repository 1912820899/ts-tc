type Trim1<T> = TrimLeft1<TrimRight1<T>>;
// 配合上一个的 TrimLeft 来使用
type TrimRight1<T> = T extends `${infer real} ` ? TrimRight1<real> : T;

type trimed1x = Trim1<"Hello World   ">;
