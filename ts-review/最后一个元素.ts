type Last12<T extends any[]> = [1, ...T][T["length"]];

type tail1 = Last12<arr1>; // expected to be 'c'
type tail2 = Last12<arr2>; // expected to be 1
