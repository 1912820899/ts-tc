type MyReadonly23<T, K extends keyof T> = {
  readonly [k in K]: T[k];
} &
  {
    [k in Exclude<keyof T, K>]: T[k];
  };

  
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo1: MyReadonly23<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo1.title = "Hello"; // Error: cannot reassign a readonly property
todo1.description = "barFoo"; // Error: cannot reassign a readonly property
todo1.completed = true; // OK
