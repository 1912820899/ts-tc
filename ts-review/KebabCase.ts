// FooBarBaz -> for-bar-baz

type Keba<
  T extends string,
  U extends string = ""
> = T extends `${infer F}${infer Res}`
  ? Keba<
      Res,
      U extends ""
        ? `${U}${Lowercase<F>}`
        : Lowercase<F> extends F
        ? `${U}${Lowercase<F>}`
        : `${U}-${Lowercase<F>}`
    >
  : U;

type x1dxa3 = Keba<"FooBarBaz">;
