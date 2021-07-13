//Implement RemoveIndexSignature<T> , exclude the index signature from object types.

type Foox1 = {
  [key: string]: any;
  foo(): void;
};

type Ax1 = RemoveIndexSignature<Foox1>; // expected { foo(): void }

// 不能把 string extends K ? never : number extends K  ? never : K 替换成 Exclud<string|number,K> ,因为这里的k 也是一个联合类型。
// 分步操作，不能替换成联合操作。
type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: T[K];
};
