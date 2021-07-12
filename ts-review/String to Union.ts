type StringToUnion2<
  T extends string,
  U extends any[] = []
> = T extends `${infer F}${infer Res}`
  ? StringToUnion2<Res, [...U, F]>
  : U[number];



  
type Result4 = StringToUnion2<'123'>;
