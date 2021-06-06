// 利用 infer 代表最后一个元素。
type Last<T extends any[]> = T extends [...any[], infer last] ? last : never;
type arr2 = [3, 2, 1];
type c = Last<arr2>;
// 太妙了，手动添加一个元素，导致 length 变成新数组的最后一个元素
type Last1<T extends any[]> = [never,...T][T['length']]
type d = Last1<arr2>;

// 复盘，元组类型中 infer 和 length 的使用
// 元组类型中，补元素的技巧
// 可以补充 never，补充 infer 