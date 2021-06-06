type TranslateObj<T extends IComputed = IComputed> = {
  [k in keyof T]: ReturnType<T[k]>;
};

interface IDataCB {
  [k: string]: any;
}
interface IComputed {
  [k: string]: {
    (): any;
  };
}

interface IMethods {
  [k: string]: () => any;
}

interface Option<D extends IDataCB, C extends IComputed, M> {
  data: (this: void) => D;
  computed: C & ThisType<D>;
  methods: M & ThisType<D & M>;
}

interface Instance {}

// type SimpleVue<D, C, M> = (obj: Option<D, C, M>) => Instance;

declare function SimpleVue1<D, CC, M>(options: Option<D, CC, M>): any;

// const SimpleVue: SimpleVue<IDataCB, IComputed, IMethods> = () => {};
SimpleVue1({
  data() {
    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: "10",
    };
  },
  computed: {
    fullname() {
      // this.
      return this.firstname + " " + this.lastname;
    },
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase());
    },
  },
});
