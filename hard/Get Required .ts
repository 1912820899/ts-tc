//Implement the advanced util type GetRequired<T>, which remains all the required fields
type I = GetRequired<{ foo: number; bar?: string | undefined }>; // expected to be { foo: number }

// Tip：别人的实现，这里构造一个新的类型对象，key 是泛型的 K，value 是经过滤后的必须属性的key。然后利用索引取值，而这里的值又刚好是经过滤后的必须属性的key。非常秒
type RequiredKey<T> = {
  [K in keyof T]: T[K] & undefined extends never ? K : never;
}[keyof T];

type GetRequired<T> = {
  [K in RequiredKey<T>]: T[K];
};


// Tip： undefined 与任何除 undefined 以外的其他类型的交叉类型都是 never
type dada1 = (string | number | undefined )& undefined