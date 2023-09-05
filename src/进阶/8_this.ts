function double() {
  this.value = this.value * 2;
}

const valid = {
  value: 100,
  double,
};

valid.double();
console.log(valid.value); // 200

const invalid = {
  valve: 100,
  double,
};

invalid.double();
console.log(invalid.valve); // 编译不报错，但是逻辑错误，值还是100

function double2(this: { value: number }) {
  this.value = this.value * 2;
}

const valid2 = {
  value: 100,
  double2,
};

valid2.double2();

const invalid2 = {
  vlve: 100,
  double2,
};

invalid2.double2(); // 编译报错

// this 必须是第一位参数
function double3(this: { value: number }, a: number, b: string) {
  console.log("a", a);
  console.log("b", b);
  this.value = this.value * 2;
}

const valid3 = {
  value: 100,
  double3,
};

valid3.double3(500, "600"); // 参数正常打印， a 500 b 600
