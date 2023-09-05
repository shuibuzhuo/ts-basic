function double() {
    this.value = this.value * 2;
}
var valid = {
    value: 100,
    double: double,
};
valid.double();
console.log(valid.value); // 200
var invalid = {
    valve: 100,
    double: double,
};
invalid.double();
console.log(invalid.valve); // 编译不报错，但是逻辑错误，值还是100
function double2() {
    this.value = this.value * 2;
}
var valid2 = {
    value: 100,
    double2: double2,
};
valid2.double2();
var invalid2 = {
    vlve: 100,
    double2: double2,
};
invalid2.double2(); // 编译报错
function double3(a, b) {
    console.log("a", a);
    console.log("b", b);
    this.value = this.value * 2;
}
var valid3 = {
    value: 100,
    double3: double3,
};
valid3.double3(500, "600"); //
