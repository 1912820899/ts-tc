class Test1 {
  name = 1;
  method1() {
    return this.name;
  }
  method2 = function (this: Test1) {
    return this.name;
  };
  method3 = () => {
    return this.name;
  };
}

const test1 = new Test1();

console.log(test1);
console.log(Test1);

class Parent {
  constructor() {
    this.setup();
  }

  setup = () => {
    console.log("parent");
  };
}

class Child extends Parent {
  constructor() {
    super();
  }

  setup = () => {
    console.log("child");
  };
}

const child = new Child(); // parent

class Parent2 {
  constructor() {
    this.setup();
  }

  setup() {
    console.log("parent");
  }
}

class Child2 extends Parent2 {
  constructor() {
    super();
  }
  setup() {
    console.log("child");
  }
}

const child2 = new Child2(); // child
