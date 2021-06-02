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
