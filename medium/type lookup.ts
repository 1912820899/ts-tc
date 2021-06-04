interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type LookUp<T extends { type: any }, U> = T extends { type: U } ? T : never;

// 这题领悟一个 extends 的原理，如果 extends 右边是一个联合类型，则只会计算一次，把 a 与 a|b 计算，只要其中一个满足，那么就会返回 true。
type dd = "a" extends "a" | "b" ? true : false;

type MyDog = LookUp<Dog | Cat, "dog">;

type LookUp1<T extends { type: any }, U> = Extract<T, { type: U }>;
type MyDog1 = LookUp1<Dog | Cat, "dog">;

type Arr<T extends { type: any }> = Extract<T,{type:any}>



type test = Arr<Cat|Dog>


type LookUp2<T extends { type: any }, U> = T['type'] extends U ? T : never;
type MyDog2 = LookUp2<Dog | Cat, "dog">;
