//In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

type flatten = Flatten<[[[1]], 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

// 实现数组扁平化，利用了第二个范型参数来保存数据
type Flatten<U extends any[], L extends any[] = []> = U extends [
  infer k,
  ...infer b
]
  ? k extends any[]
    ? Flatten<[...k, ...b], L>
    : Flatten<b, [...L, k]>
  : L;

type a = [1] extends [] ? 1 : false;

// 复盘，重写递归逻辑
type Flatten1<U extends any[]> = U extends [infer a, ...infer b]
  ? a extends any[]
    ? Flatten<[...a, ...b]>
    : [a, ...Flatten1<b>]
  : U;
type flatten1 = Flatten1<[[[1]], 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
