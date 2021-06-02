/**
 * 
 Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
  K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
 这里非常秒的地方有几点
  1.利用了 & 合并类型
  2.使用Pick 来挑选所有 T中包含K 的字段，
  3.使用 Omit 排除掉所有 T中包含K 的字段，即获取不包含K 的T 中的所有字段
  4.-readonly 可以把除了符合条件的，其他的全部标记为 readonly
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type Readonly2<T, K extends keyof T = keyof T> = {
  readonly [p in keyof Pick<T, K>]: T[p];
} &
  {
    [p in keyof Omit<T, K>]: T[p];
  };
type a = Readonly2<Todo, "title" | "description">;
const todo: Readonly2<Todo, "title" | "description">;

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
