type myOmit<T, K> = {
  [P in keyof T extends K ? never : K]: T[P];
};
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = myOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
