// 简单的一个 includes 实现，主要利用了 对象索引 和 extends 判断, 下面的实现有问题，
// 索引类型查找 T[number] 找到 所有 T 的类型的联合
type Includes<T extends any[], K> = K extends T[number] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type test = ["Kars", "Esidisi", "Wamuu", "Santana"][number]