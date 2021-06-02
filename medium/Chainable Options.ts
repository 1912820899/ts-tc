/* 
  链式配置，关键在于理解范型引用，在一个类型定义中，T 可以理解为 局部变量，T 算是一个引用类型，每一个option操作都会给T 添加新的只值
*/
type Chainable<T> = {
  option<K extends string, V>(key: K, val: V): Chainable<T & { [k in K]: V }>;
  get(): T;
};
declare const config: Chainable<{}>

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}