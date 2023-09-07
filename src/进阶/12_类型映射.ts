// 类型映射 Mapped Types

// 定义一个类型 Point
type Point1 = {
  x: number;
  y: number;
  z: number;
};

// 定义一个 center 变量，代表原点，原点的坐标应该是不允许被修改的
const center1: Point1 = {
  x: 0,
  y: 0,
  z: 0,
};

// 但是这里修改了没有报错
center1.x = 100;

// 一种解决办法：利用常量断言
const center2 = {
  x: 0,
  y: 0,
  z: 0,
} as const;

center2.x = 100; // 报错，Cannot assign to 'x' because it is a read-only property.ts(2540)

// 另一种解决方法，使用 Readonly 类型
type Point2 = {
  x: number;
  y: number;
  z: number;
};

type ReadonlyPoint2 = {
  readonly x: number;
  readonly y: number;
  readonly z: number;
};

const center3: ReadonlyPoint2 = {
  x: 0,
  y: 0,
  z: 0,
};

// 代码会报错
// 但是，现在这种写法会产生重复代码，不利于维护
center3.x = 100; // Cannot assign to 'x' because it is a read-only property.ts(2540)

// 想要解决这个问题，就需要使用 typescript 的类型映射功能

// 语法
// 每一次循环的变量 item，【item】这个名字是自定义的，可以更改，比如改成 【key】
// 可以被循环的联合类型 Union
// 类型输出 Output
type ReadonlyPoint3 = {
  [item in Union]: Output;
};

// 运用到我们这里
type Point3 = {
  x: number;
  y: number;
  z: number;
};

// 这里的 type Point4 映射了 type Point3，两者完全一致
type Point4 = {
  [item in "x" | "y" | "z"]: number;
};

// 我们可以给每一次的循环变量进行修饰
type ReadonlyPoint4 = {
  readonly [item in "x" | "y" | "z"]: number;
};

// 使用 keyof
type ReadonlyPoint5 = {
  readonly [item in keyof Point3]: number;
};

// 如果 Point 的类型里面的类型不一致，比如 x: number 改成了 x: string，其他的属性类型依旧是 number
type Point5 = {
  x: string;
  y: number;
  z: number;
};

type ReadonlyPoint6 = {
  readonly [item in keyof Point5]: Point5[item]; // 属性的类型也是动态的了
};

const point6: ReadonlyPoint6 = {
  x: "10", // 这里刚开始是数字 0 的时候，会报错，要求我们改成字符串
  y: 0,
  z: 0,
};

point6.x = "200"; // 报错，依旧是 readonly，不可更改

// 使用泛型，让 Readonly 更通用
type Point7 = {
  x: string;
  y: number;
  z: number;
};

// 这个 Readonly 类型，typescript 内部定义好了，所以注释掉这个类型，也能获取到内置的 Readonly 类型
export type Readonly<T> = {
  readonly [item in keyof T]: T[item];
};

const readonlyCenter: Readonly<Point7> = {
  x: "10",
  y: 20,
  z: 30,
};

readonlyCenter.x = "20";
