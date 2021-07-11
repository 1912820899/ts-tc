type Fn1 = (a: number, b: string) => number;
type AppendArgument1<T, U> = T extends (...arg: infer A) => number
  ? (...arg: [...A, U]) => number
  : never;

type Result1x = AppendArgument1<Fn, boolean>
