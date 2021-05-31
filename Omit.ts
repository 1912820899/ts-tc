type myOmit<T, K> = {
  [P in keyof T extends K ? never : K]: T[P];
};
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type a = keyof Todo;
type b = "title" | "description" | "completed";
let aa: a;
let bb: b;
aa = bb;
aa = "completed";
bb = "description";
type TodoPreview = myOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
