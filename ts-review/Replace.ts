type Replace1<
  T extends string,
  K extends string,
  V extends string
> = T extends `${infer L}${K}${infer R}` ? `${L}${V}${R}` : 1;

type replaced2 = Replace1<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
