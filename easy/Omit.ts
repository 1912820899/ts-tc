type myOmit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P];
};
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = myOmit<Todo, "description" | "title">;

// type a = Omit;
// 实现 Omit ，这个非常精彩，并且高端混合。
// 官方实现，利用了 Pick 和 Exclude ，需要对 这两个关键词有充分的理解才可以。
// Pick<T,K>范型，可以从 T 中挑选出可以用于K 的类型
// Exclude<T,U> 从T 中剔除掉 可以用于 U 的类型
