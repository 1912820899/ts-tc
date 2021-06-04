type h = " Hello World  ";
type TrimLeft<T extends string> = T extends `${" "}${infer dj}` ? dj : false;

type a = TrimLeft<h>;
