// 从T中挑选k的部分类型
type myPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type a = {
  t: string;
  d: string;
  c: string;
};
type d = myPick<a, "t" | "d">;
