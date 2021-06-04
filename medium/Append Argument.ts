type Fn = (a: number, b: string) => number;

type AppendArgument<T, U> = T extends (...arg1: infer A) => infer B
  ? (...arg: [...A, U]) => B
  : never;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

type tuple = [a: string, b: number];

const a: tuple = ["asdasdasd", 112312312];
