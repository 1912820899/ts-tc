/* 完美利用 */
type Permutation1<T, U = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation1<Exclude<U, T>>]
  : never;



  
type perm1 = Permutation1<"A" | "B" | "C">;
