// 目前不支持 内部的类型限制

type TranslateObj<T> = T extends Record<string, (...args: any[]) => any>
  ? { [k in keyof T]: ReturnType<T[k]> }
  : never;

interface IDataCB {
  [k: string]: string | number;
}
interface IComputed {
  [k: string]: () => any;
}
interface IMethods {
  [k: string]: () => any;
}

interface Option<D, C, M> {
  data: (this: void) => D;
  computed: C & ThisType<D>;
  methods: M & ThisType<D & M & TranslateObj<C>>;
}

interface Instance {}

declare function SimpleVue1<D, C, M>(
  options: Option<D, C, M>
): any;

SimpleVue1({
  data() {
    return {
      firstname: "leo",
      lastname: "xiaoxin",
      amount: 1,
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase());
    },
  },
});
