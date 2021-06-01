// 实现获取函数返回类型
type myReturnType<T> = T extends (...args: any) => infer P ? P : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = myReturnType<typeof fn>; // should be "1 | 2"

// myReturnType 的秒处在于，可以类型全部获取，我操，这个解构操作是真的骚啊！
// 知识点 infer 操作符
// ...获取全部类型参数