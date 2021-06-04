type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type Permutation<T extends string, U extends any[] = []> = [T];

// type ts = Permutation<"A" | "B" >;
/* 
type c = {
  [k in number]:"A" | "B"
} */
/* 
function assertNever<T>(value: T extends never ? true : false) {}

assertNever<never>(false);
 */
// UNKNOWN: 没有对Permutation进行实现
// 这里对 Item extends Item 联合，会进行循环联合，never｜string = string，
type loopUnion<Union extends string, Item extends string = Union> =
  Item extends Item ? `loop ${Item}` : never;

  

type result = loopUnion<"A" | "B" >; 