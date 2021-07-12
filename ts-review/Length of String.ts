type StringLength<
  T extends string,
  U extends any[] = []
> = T extends `${infer F}${infer Res}`
  ? StringLength<Res, [...U, F]>
  : U["length"];

type lenS = StringLength<"asdasd">;
