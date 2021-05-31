// 牛皮，🐂🍺 类型也支持解构！

type Concat<T extends any[], U extends any[]> = [...T, ...U]

type Result = Concat<[1, 2], [3, 4]> // expected to be [1, 2,3,4];;
