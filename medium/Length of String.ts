//Compute the length of a string literal, which behaves like String#length.
// 卧槽，首次愉快又流畅的实现 string 长度的获取，附带也实现的了,字符串转数组的方法/
type SLen<T extends string, L extends any[] = []> = T extends ""
  ? L
  : T extends `${infer k}${infer m}`
  ? SLen<m, [...L, k]>
  : never;
// 字符串转数组，只需要把上面 第四行的 ？L['length'] 改为 ?L 即可

type ss = SLen<"lpz">;
