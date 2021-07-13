type case11 = IsUnion1<string>; // false
type case21 = IsUnion1<string | number>; // true
type case31 = IsUnion1<[string | number]>; // false

type IsUnion1<T, U = T> = T extends T
  ? [Exclude<U, T>] extends [never]
    ? false
    : true
  : false;
