interface Todo {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: string;
};


type Keys = GetReadonlyKeys<Todo>; // expected to be "title" | "description"

type GetReadonlyKeys<T> = Pick<T, keyof T> extends Pick<T, keyof T>
  ? keyof T
  : false;
type a = GetReadonlyKeys<Todo>;
