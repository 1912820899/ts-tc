//Implement RemoveIndexSignature<T> , exclude the index signature from object types.

type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }

type RemoveIndexSignature<T> = {
  [k in Exclude<keyof T, string>]: T[k];
};

type a = keyof Foo extends keyof Foo ? keyof Foo : never;

type FieldState = {
  value: string;
};

type FormState = { isValid: boolean } & { [fieldName: string]: FieldState };

// 将它用于从某些地方获取的 JavaScript 对象
declare const foo: FormState;

const isValidBool = foo.isValid;
const somethingFieldState = foo["something"];






// 使用它来创建一个对象时，将不会工作
const bar: FormState = {
  // 'isValid' 不能赋值给 'FieldState'
  isValid:true
};
