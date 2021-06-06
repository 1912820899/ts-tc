// 实现排列组合
type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

//复盘 这里使用 extend
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;

// 这里对 Item extends Item 联合，会进行循环联合，never｜string = string，
type loopUnion<Union extends string, Item extends string = Union> =
  Item extends Item ? `loop ${Item}` : never;

type result = loopUnion<"A" | "B">;
