type dep<T> = {
  readonly [P in keyof T]: T[P] extends {} ? dep<T[P]> : T[P];
};

/*
 网友解法，实在是秒啊！太精彩了。
 这个递归实在是秒，先进性判断是否符合，然后进行赋值
 */
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [P in keyof T]: DeepReadonly<T[P]> };

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};
type D = {
  a: "13";
};
type aa = Readonly<X>;
type c = Pick<X, Exclude<keyof X, keyof D>>;
type tsdep = dep<X>;
const ad: tsdep = {
  x: {
    a: 1,
    b: "hi",
  },
  y: "hey",
};

ad.x.a = "asdad";

// 复盘
type dee<T> = {
  readonly [k in keyof T]: T[k] extends object ? dee<T[k]> : T[k];
};
type tsdep1 = dee<X>;
// 依然觉得别人写的递归更妙
// 这里用 keyof 来查询索引类型， 需要充分理解输入索引签名类型。输入索引类型查询(keyof) 用于查找是否含有索引类型，有则返回索引类型，没有返回never，这个特性可以判断出具体的一个值是不具备索引签名的，因此巧妙的判断出来这个值不是对象类型
type dee1<T> = keyof T extends never
  ? T
  : {
      readonly [k in keyof T]: T[k];
    };
type tsdep2 = dee1<X>;
