type MyreturnType<T> = T extends (a: any, b?: any) => infer B ? B : never;
