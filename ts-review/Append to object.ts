type AppendToObject1<T, K extends string, V> = {
  [k in keyof T | K]: k extends keyof T ? T[k] : V;
};


type Result2 = AppendToObject1<Test, "value", 4>;
