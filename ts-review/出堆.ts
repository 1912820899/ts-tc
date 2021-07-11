type Pop1<T extends any[]> = [0, ...T] extends [0, ...infer U, Last12<T>]
  ? U
  : never;
type re1x = Pop1<arr1>; // expected to be ['a', 'b', 'c']
type re2x = Pop1<arr2>; //
