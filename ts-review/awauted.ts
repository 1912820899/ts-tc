type getReturnType<T> = T extends Promise<infer K> ? K : never;
