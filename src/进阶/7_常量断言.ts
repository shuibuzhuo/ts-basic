// 常量断言 const assertion
// 定义一个 const 变量，值是原始类型
const person1 = "shuibuzhuo";

// 报错，Cannot assign to 'person' because it is a constant.ts(2588)
person1 = "zhangsan";

// 改为 let，可以重新给 person 变量赋值
let person2 = "shuibuzhuo";

person2 = "lisi"; // ok

// 但是 JS 中，字符串本身是 immutable，不可改变的
// 报错，Index signature in type 'String' only permits reading.ts(2542)
person2[1] = "h";

// 定义一个 const 变量，值是对象
/**
 * 类型
 * const person3: {
 *   name: string;
 *   age: number;
 * }
 */
const person3 = {
  name: "shuibuzhuo",
  age: 20,
};

// 报错，Cannot assign to 'person3' because it is a constant.ts(2588)
person3 = {
  name: "zhangsan",
  age: 22,
};

// 但是 person 的成员变量，可以任意更改
person3.name = "zhangsan";
person3.age = 30;

// 希望对象的属性不可更改，可以有以下几种方式

// 1. 进行常量断言，常量断言可以用于断言任何类型
/**
 * 类型
 * const person4: {
 *   readonly name: "shuibuzhuo";
 *   readonly age: 20;
 * }
 */
const person4 = {
  name: "shuibuzhuo",
  age: 20,
} as const;

person4.name = "zhangsan"; // 报错，Cannot assign to 'name' because it is a read-only property.ts(2540)
person4.age = 30; // 报错，Cannot assign to 'age' because it is a read-only property.ts(2540)

// 对象中的原始类型属性和引用类型属性都可以被转换成 readonly
const person5 = {
  name: "shuibuzhuo",
  age: 20,
  friend: {
    name: "zhangsan",
    age: 23,
  },
  arr: [10, 20, 30],
} as const;

function layout(setting: {
  align: "left" | "center" | "right";
  padding: number;
}) {
  console.log(setting);
}

const param1 = {
  align: "left",
  padding: 0,
};

// align 是字面量类型，string 类型不能赋值给字面量类型
layout(param1); // 报错，Type 'string' is not assignable to type '"left" | "center" | "right"'.ts(2345)

// 常量断言之后，align 值变为字面量类型 'left'，可以赋值给 setting 参数了，但这里是把整个对象的属性都变为了 readonly
const param2 = {
  align: "left",
  padding: 0,
} as const;

layout(param2);

// 只对 align 属性进行常量断言，也可以成功赋值给 setting 参数
const param3 = {
  align: "left" as const,
  padding: 0,
};

layout(param3);
