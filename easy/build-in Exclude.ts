// 这里的 extends 有点像挑选相同的，取交集的意思。
// 从 T 中挑选出 与 U 重合的类型，然后返回 never ，否则返回类型自身
// 感觉做个 extends 会对 T 和 U 中所有的类型都进行判断。类似如下：
/*
  如果 T 是 'a'|'b',  U 是 'a'|'c'
  'a' extends 'a' ? => 'a'
  'a' extends 'c' ? => never
  'b' extends 'a' ? => never
  'b' extends 'c' ? => never
  最后返回 => 'a'
*/
// Exclude 在联合类型中使用,从T排除掉U，返回剩余 T

type myExclude<T,U> = T extends U ? never:T

type a = 'a'|'b'|'c'
type b = 'a'|'b'|'d'|'j'

type k = myExclude<a,b>
type ak = Exclude<a,b>