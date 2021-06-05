//Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.

type NodeA = {
  type: "A";
  name: string;
  flag: number;
};

type NodeB = {
  type: "B";
  id: number;
  flag: number;
};

type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type ReplacedNodes = ReplaceKeys<
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }>; // {type: 'A', name: never} | NodeB | {type: 'C', name: never} // would replace name to never

// 在联合类型中 T extends T 可以有联合计算性，具体就是说，可以对联合类型中的每一个类型都进行独立的处理，最后再进行联合。
type ReplaceKeys<T, U, R> = T extends T
  ? {
      [k in keyof T]: k extends Extract<k, U> ? R[Extract<k, keyof R>] : T[k];
    }
  : never;
/* type ReplaceKeys<U, T, Y> = U extends U
  ? { [P in keyof U]: P extends T ? (P extends keyof Y ? Y[P] : never) : U[P] }
  : never;
 */
