// 妙啊
type IsUnion<T, B = T> = T extends T
  ? [Exclude<B, T>] extends [never]
    ? false
    : true
  : never;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
// [B] extneds [T] 返回 false 
// 因为前一个判断 T extends B，左边如果是联合类型T， 会导致extends左边的联合类型T被拆分成单个。而 extends 右边的 联合类型B不会被拆分。
// 这样进入下一个判断的时候，其实 [B] 就是[string|number],而 [T]是[string]，显而易见始终会进入 fasle分之。
// 这里巧妙的利用了元组把联合类型，合并成一个类型，这样可以进行整体判断。
type D<T, B = T> = T extends B ? ([B] extends [T] ? false : true) : never;

type dd = D<string | number>;

type ccc = [string|number] extends [string] ? true : false;

type D1<T, B = T> = T extends B ? [T] : B;

type dd1 = D1<string | number>;

