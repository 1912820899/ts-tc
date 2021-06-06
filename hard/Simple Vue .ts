interface IData {
  (): {
    [k: string]: any;
  };
}

interface IComputed {
  [k: string]: () => string;
}

interface IMethods {
  [k: string]: () => any;
}

interface Option {
  data?: IData;
  computed?: IComputed & ThisType<IData>;
  methods?: IMethods & ThisType<IData>;
}

interface Instance {
  [k: string]: () => void;
}

type SimpleVue = (
  obj: Option
) => Instance & ThisType<IComputed> & ThisType<IData>;

declare const SimpleVue: SimpleVue;

const instance = SimpleVue({
  data() {
    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
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
