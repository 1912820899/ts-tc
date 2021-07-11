type MyOmit<T, K> = {

};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type x = MyOmit<Todo, "description">;
