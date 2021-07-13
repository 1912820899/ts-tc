/* interface Todo1 {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

type Keys = GetReadonlyKeys<Todo1>; // expected to be "title" | "description"

type GetReadonlyKeys<T, U extends object = {}> = {
  [k in readonly (keyof T) extends keyof T ? keyof T : never]: k;
};
 */