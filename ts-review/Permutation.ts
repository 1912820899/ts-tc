type Permutation1<T > = {
  [k in T]:T[k]

type perm1 = Permutation<"A" | "B" | "C">;
