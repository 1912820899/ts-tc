type TrimLeft1<T> = T extends ` ${infer K}` ? TrimLeft1<K> : T;

type trimed1 = TrimLeft1<"  Hello World  ">;
