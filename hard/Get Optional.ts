// Implement the advanced util type GetOptional<T>, which remains all the optional fields
// 实现高级工具类型，保留所有可选类型

type IA = GetOptional<{ foo: number; bar?: undefined }>; // expected to be { bar?: string }

// 第一层判断过滤掉必须属性，第二层判断过滤掉类型为undefined的必须属性
type IsOptional<T> = T & undefined extends never
  ? false
  : [T] extends [undefined]
  ? false
  : true;

type OptionalKey<T> = {
  [k in keyof T]: IsOptional<T[k]> extends true ? k : never;
}[keyof T];

type GetOptional<T> = {
  [k in OptionalKey<T>]?: T[k];
};
