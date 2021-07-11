const promise12 = Promise.resolve(3);
const promise22 = 42;
const promise32 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// expected to be `Promise<[number, number, string]>`

declare function PromiseAll<T extends readonly any[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P]
}>

const pax1 = PromiseAll([promise1, promise2, promise3] as const)