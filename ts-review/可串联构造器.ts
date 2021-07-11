type Chainable12<T extends object> = {
  option<K extends string, V>(k1: K, v: V): Chainable12<T & { K: V }>;
  get(): T;
};
