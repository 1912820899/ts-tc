type A1 = IsNever1<never>; // expected to be true
type B1 = IsNever1<undefined>; // expected to be false
type C1 = IsNever1<null>; // expected to be false
type D2 = IsNever1<[]>; // expected to be false
type E1 = IsNever1<number>; // expected to be false

type IsNever1<T> = [T] extends [never] ? true : false;
