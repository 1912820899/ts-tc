type RemoveIndexSignature1<T> = {
  [k in keyof T as string extends k ? never : k]: T[k];
};

type Foo12 = {
  [key: string]: any;
  foo(): void;
};

type A12 = RemoveIndexSignature1<Foo12>; // expected { foo(): void }
