// type a = Omit;
// 实现 Omit ，这个非常精彩，并且高端混合。
// 官方实现，利用了 Pick 和 Exclude ，需要对 这两个关键词有充分的理解才可以。
// Pick<T,K>范型，可以从 T 中挑选出可以用于K 的类型
// Exclude<T,U> 从T 中剔除掉 可以用于 U 的类型

type myOmit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P];
};
type O<T, K extends keyof T> = {
  [P in K as P extends keyof T ? never : keyof K]: T[P];
};
type Om<T, K extends keyof T> = {
  [Key in keyof T extends K as Key ?  : Keynever]: T[Key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = myOmit<Todo, "description" | "title">;
type TodoPreview1 = Om<Todo, "description" | "title">;
type a = Omit<Todo, "description" | "title">;

// 复盘 Omit,Omit<T,U>作用，从T中排除掉与U相同部分
// Exclude 从 T中排除与U相同部分
type Omit2<T,U> = Pick<T,Exclude<keyof T,U>>
type aa = Omit2<Todo, "description" | "title">;


//UNKNOWN: Exclude Extrade 针对 联合类型生效 