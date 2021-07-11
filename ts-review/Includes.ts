/* type Includes1<T extends any[], K> = K extends T[number] ? K extends [] : false; */

type Includes1<T extends any[], K> = T extends [infer First, ...infer Rest]
  ? First extends K
    ? K extends First
      ? 1
      : 2
    : Includes1<Rest, K>
  : never;

type x1a = Includes1<[boolean, 2, 3, 5, 6, 7], false>;

type ax = true | false;
type ab = false;

type ac = ax extends false ? 1 : 2;



type x11 = 1 | 2 | 3;

type x12 = 2;



type rs1 = x11 extends x12 ? true : false;



type rs2 = [x11] extends [x12] ? true : false;



