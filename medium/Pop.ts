// 卧槽了，居然可以 infer 这么灵活，不单可以代替一个元素，还可以代替一个数组，代替任意类型。
// 卧槽了，infer 居然可以在数组中这么灵活的运用，只要是未知待推断的内容，infer 有奇效啊，草了
type Pop<T extends any[]> = T extends [...infer V, any] ? V : never;

type arr1 = ["a", "b", "c", "d"];
type re1 = Pop<arr1>;
// 复盘 Pop 
// 利用 infer 可以推断任意类型
type Pop2<T extends any[]> = T extends [...infer K, any] ? K : never;
type re2 = Pop2<arr1>;