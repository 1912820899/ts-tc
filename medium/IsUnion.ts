// 妙啊
type IsUnion<T, B = T> = T extends T
  ? [Exclude<B, T>] extends [never]
    ? false
    : true
  : never;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
// 这里不明白 [B] extends [T] 是false
type D<T, B = T> = T extends B ? ([B] extends [T] ? true : false) : never;

type dd = D<string | number>;

type ccc = [string | number] extends [string | number] ? true : false;

type D1<T, B = T> = T extends B ? [T] : B;

type dd1 = D1<string | number>;

