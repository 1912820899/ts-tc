type TupleToUnion<T extends any[]> = T[number];
type Arr = ["1", "2", "3"];

const a: TupleToUnion<Arr>;

// 复盘
// 利用 索引访问类型(查找类型) 通过索引可以查出来类型。
type ToUnion<T extends any[]> = T[number];

