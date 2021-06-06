type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.

// 利用了元组类型查询 tuple[number] 获取元组中所有的类型的联合
type AnyOf<T extends any[]> = T[number] extends
  | false
  | ""
  | { [key: string]: never }
  | 0
  | []
  ? false
  : true;
