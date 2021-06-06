// 实现一个字符串首字母大写的范型类
type Capitalize1<T extends string> = T extends `${infer K}${infer D}`
  ? `${Uppercase<K>}${D}`
  : T;

type capitalized = Capitalize1<"h">; // expected to be 'Hello world'
// 字符串模版中 infer 推断规则  1个 infer 代表整个字符串，2个 infer 第一个代表第一个字符串的第一位，第二个infer 代表字符串的剩余
/*
  typescript 4.1 新增 字符串模版和几个字符串处理工具范型
  Uppercase<T> 全部大写 
  Unuppercase<T> 全部小写
  Capitalize<T> 首字母大写
  Uncapitalize<T> 首字母小写
*/
