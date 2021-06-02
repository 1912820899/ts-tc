type Pop<T extends any[]> = Extract<
  T extends [...any[], infer K] ? K : never,
  T
>;
type arr1 = ["a", "b", "c", "d"];
type re1 = Pop<arr1>;
type a<T> = T extends [...any[], infer K] ? K : never;
type b = a<arr1>;
type c = Extract<arr1, ["d"]>;
