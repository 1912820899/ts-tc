type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

// 我
type StringToUnion<T extends string, A extends any[] = []> =
  T extends `${infer k}${infer b}` ? StringToUnion<b, [...A, k]> : A[number];

// 哦草，别人写的这个牛逼呀，充分利用的联合的特性。哦草卧槽卧槽
type StringToUnion1<T extends string> =
  T extends `${infer someLetter}${infer rest}`
    ? someLetter | StringToUnion<rest>
    : never;
