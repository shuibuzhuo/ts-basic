type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };
type Person = { name: string; email: string };

let point2d: Point2D = { x: 0, y: 0 };
let point3d: Point3D = { x: 0, y: 0, z: 0 };
let person: Person = { name: "shuibuzhuo", email: "shuibuzhuo@qq.com" };

// 属性多的，可以赋值给属性少的
point2d = point3d;
// 反之不行，因为 point2d 缺少 Point3D 需要的 z 属性
// 报错，Property 'z' is missing in type 'Point2D' but required in type 'Point3D'.ts(2741)
point3d = point2d;
// 为了欺骗 TS，可以使用类型断言
point3d = point2d as Point3D;

// 两个属性完全不同的对象
point3d = person; // 报错，Type 'Person' is missing the following properties from type 'Point3D': x, y, zts(2739)
person = point3d; // 报错，Type 'Point3D' is missing the following properties from type 'Person': name, emailts(2739)
// 双重断言
point3d = person as any as Point3D;

export {};
