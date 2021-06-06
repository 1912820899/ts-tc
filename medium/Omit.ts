// type a = Omit;
// 实现 Omit ，这个非常精彩，并且高端混合。
// 官方实现，利用了 Pick 和 Exclude ，需要对 这两个关键词有充分的理解才可以。
// Pick<T,K>范型，可以从 T 中挑选出可以用于K 的类型
// Exclude<T,U> 从T 中剔除掉 可以用于 U 的类型

type myOmit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = myOmit<Todo, "description" | "title">;

// 复盘 Omit,Omit<T,U>作用，从T中排除掉与U相同部分



// 官方 Omit 实现更精简
type Omit2<T,U> = Pick<T,Exclude<keyof T,U>>
type aa = Omit2<Todo, "description" | "title">;

// 复盘 总结 Pick 和 Omit 属于同类型的范型类型
// Pick<T,U> 从 T 中选出 联合类型 U 的内容。但是前提条件是 U 必须在 T 中
// Omit 与Pick 一致，唯一不同是，Omit 用于排除掉 符合 U 的元素类型。