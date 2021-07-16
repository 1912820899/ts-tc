type Computed<T> = T extends Record<string, (...args: any[]) => any>
  ? { [k in keyof T]: ReturnType<T[k]> }
  : never;
declare function SimpleVue<D, C, M>(option: {
  data?: () => D;
  computed?: C & ThisType<D & Computed<C>>;
  methods?: M & ThisType<M & D & Computed<C>>;
}): any;

SimpleVue({
  data() {
    return {
      list: "sss",
    };
  },
  computed: {
    cList() {
      return this.list;
    },
    dList() {
      console.log(this);
    },
  },
  methods: {
    hi() {
      console.log(this.cList);
      console.log(this.dList);
    },
  },
});
