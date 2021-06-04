//In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

type flatten = Flatten<[1, 2, [3, 4],[5]]>; // [1, 2, 3, 4, 5]


//TODO: 只能扁平化二维数组，多位数组暂时不行 
type Flatten<U extends any[], L extends any[] = []> = U extends [
  infer k,
  ...infer b
]
  ? k extends any[]
    ? Flatten<b, [...L, ...k]>
    : b["length"] extends 0
    ? [...L, k]
    : Flatten<b, [...L, k]>
  : L;

type a = [] extends [infer k] ? k : false;
