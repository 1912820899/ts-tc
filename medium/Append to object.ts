// 给类型中添加新的属性
type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
// 再次理解一下 Extract，Exclude
// Extract<T,U> 从T中提取含有U的类型返回
// Exclude<T,U> 从T中排除掉含有U的类型，返回剩余的不包含U的类型
type AppendToObject<T extends {}, K extends string, V> = {
  [m in keyof T | K]: m extends K ? V : T[Extract<m, keyof T>];
};
