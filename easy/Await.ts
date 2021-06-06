// 提取 Promise 包裹的类型，主要利用了 infer 关键字
// infer 代表一个待推断的类型，一般用在 extends 中，成功部分
type Awaited<T> = T extends Promise<infer K> ? K:never

type p = Promise<string>

type d = Awaited<p>