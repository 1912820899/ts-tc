// 从T中挑选k的部分类型
type myPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type a = {
  t: string;
  d: string;
  c: string;
};
type d = Pick<a, "t" | "d">;

// 复盘
// Pick 第二个参数需要是联合类型
// Pick 返回一个 object 类型