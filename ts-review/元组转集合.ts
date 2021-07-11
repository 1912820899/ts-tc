type TupleToUnion1<T extends any[]> = T[number];
type Arr1 = ['1', '2', '3']

const a: TupleToUnion1<Arr1> // expected to be '1' | '2' | '3'