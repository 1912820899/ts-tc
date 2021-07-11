type TupleToObject<T extends readonly any[]> = {
  [k in T[number]]: k;
};
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

const result123: TupleToObject<typeof tuple> = {
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
  tesla: "tesla",
};
