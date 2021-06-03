/* interface PromiseAll<T extends any[]> {
  (...args: T): Promise<Pm<T>[]>;
} */
type PromiseAll<T extends any[]> = (val:T) => [...Pm<T>];

type Pm<T> = T extends () => Promise<infer K> ? K : T;

type d = Pm<() => Promise<string>>;
const f: PromiseAll = (arr: any[]) => {
  let res = [];
  arr.forEach(async (fn) => {
    if (typeof fn == "function") {
      res.push(await fn());
    } else {
      res.push(fn);
    }
  });
  return res;
};
export var common;

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// expected to be `Promise<[number, number, string]>`
const p = Promise.all([promise1, promise2, promise3] as const);

// type a = PromiseAll<typeof promise1>;
async function PromiseAll(arr: any[]) {
  let res = [];
  arr.forEach(async (fn) => {
    if (typeof fn == "function") {
      res.push(await fn());
    } else {
      res.push(fn);
    }
  });
  return res;
}
const p1 = PromiseAll([promise1, promise2, promise3]);
