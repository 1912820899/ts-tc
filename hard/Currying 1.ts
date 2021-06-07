const add = (a: number, b: number) => a + b;
const three = add(1, 2);

const curriedAdd = Currying(add);
const five = curriedAdd(2)(3);

// 函数科里化 别人实现的🐂🍺
type CurryingCb<F extends (...args: any[]) => any> = Parameters<F> extends [
  infer P,
  ...infer rest
]
  ? (first: P) => CurryingCb<(...args: rest) => ReturnType<F>>
  : ReturnType<F>;

declare function Currying<F extends (...args: any[]) => any>(
  fn: F
): CurryingCb<F>;
// 这里没有想到函数的定义方法。新知识点，函数取参数类型的工具 Parameters 