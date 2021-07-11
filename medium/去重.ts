const adj = [0, 3, 4, 5, 6] as const;
type adj1 = [0, 3, 4, 5, 6];
type kajd1 = keyof adj1;

type Ta<T> = {
  [k in keyof T]: { [x: number]: T[k] } extends { [key: number]: any }
    ? k
    : never;
};

type ax1 = Ta<adj1>; // expect [0,1,2,3,4]

type arrx1 = ["0", "1", "2", "3", "4"]; // expect [0,1,2,3,4]


type arrx2 = [0, 1, 2, 3, 4];

type ax2 = {
  [k in Ta<adj1>[number]]: Ta<adj1>[k];
};

