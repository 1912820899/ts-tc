/* 巧妙利用 第二个参数做数据储存，infer 做数据分离 */
type Flatten2<T extends any[], U extends any[] = []> = T extends [
  infer F,
  ...infer Res
]
  ? F extends any[]
    ? Flatten2<[...F, ...Res], U>
    : Flatten2<Res, [...U, F]>
  : U;




type flatten12 = Flatten2<[1, 2, [3, [4]], [[[5]]]]>;
