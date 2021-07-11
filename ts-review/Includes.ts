type Includes1<T extends any[], K> = T extends [infer First, ...infer Rest]
  ? [First] extends [K]
    ? [K] extends [First]
      ? 1
      : 2
    : Includes1<Rest, K>
  : never;




