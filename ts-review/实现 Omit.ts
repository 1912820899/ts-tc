type MyOmit<T, K> = {
  [k in Exclude<keyof T, K>]: 1;
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type x = MyOmit<Todo, "description">;
