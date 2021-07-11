type DeepReadonly1<T> = {
  readonly [k in keyof T]: T[k] extends object ? DeepReadonly1<T[k]> : T[k];
};

