type lookUp<T, K> = T extends { type: K } ? T : never;

type MyDog12 = lookUp<Cat | Dog, 'dog'> // expected to be `Dog`