// 实现 exclude ,从T中剔除可以给U的类型
// 需要注意的，T 中包含 U 类型的理解。
/* 
  如果 T ，U 是联合类型的话，那可以对联合类型进行拆分，分别进行 extends 判断。
  extends 有点像拆分的意思。如果 T，U表示的一个可以拆分的类型，
  那么分别对T，U拆分后进行extends 条件判断。*/
/* 
  T，U不是联合类型的话，那么只进行一次判断。
*/
/* 
  联合类型有
  元组；tuple
  联合类型：'a'|'c'
  keyof Object
  
*/
/* 
  注意 class 类型是一个不可拆分的整体
*/
type mExclude<T, U> = T extends U ? never : T;
type a = {
  t: string;
  a: string;
};
type b = {
  s: string;
  a: string;
};

type ts = a extends b ? never : a;

type d = mExclude<keyof a, keyof b>;
const aaa: d = "t";
