// // public
// interface IPoint1 {
//   x: number
//   y: number
//   drawPoint: () => void
//   getDistances: (p: IPoint1) => number
// }

// class Point1 implements IPoint1 {
//   // 使用 public 访问修饰符，可以自动做下列事情
//   // 1. 定义成员变量
//   // 2. 进行 this.x = x  this.y = y
//   constructor(public x: number, public y: number = 2) {}

//   // 成员方法 drawPoint getDistances
//   drawPoint = () => {
//     console.log(`x: ${this.x}, y: ${this.y}`)
//   }

//   getDistances = (p: IPoint1) => {
//     return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
//   }
// }

// const p1 = new Point1(10, 20)
// // 可以直接修改属性，非常危险
// p1.x = 30
// p1.y = 40

// // private
// interface IPoint2 {
//   // 需要去掉一下两个属性的定义，否则会报下面的错 
//   // Class 'Point2' incorrectly implements interface 'IPoint2'.
//   // Property 'x' is private in type 'Point2' but not in type 'IPoint2'.ts(2420)
//   // x: number
//   // y: number
//   drawPoint: () => void
//   getDistances: (p: IPoint2) => number
// }

// class Point2 implements IPoint2 {
//   // 使用 public 访问修饰符，可以自动做下列事情
//   // 1. 定义成员变量
//   // 2. 进行 this.x = x  this.y = y
//   constructor(private x: number, private y: number = 2) {}

//   // 成员方法 drawPoint getDistances
//   drawPoint = () => {
//     console.log(`x: ${this.x}, y: ${this.y}`)
//   }

//   getDistances = (p: IPoint2) => {
//     return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
//   }
// }

// const p2 = new Point2(10, 20)
// // 这时候对于 x，y 的属性就不能随意设置了
// p2.x = 30 // Property 'x' is private and only accessible within class 'Point2'.ts(2341)
// p2.y = 40 // Property 'y' is private and only accessible within class 'Point2'.ts(2341)

// // 定义 getter setter
// interface IPoint3 {
//   drawPoint: () => void
//   getDistances: (p: IPoint3) => number
//   getX: () => number
//   getY: () => number
//   setX: (value: number) => void
//   setY: (value: number) => void
// }

// class Point3 implements IPoint3 {
//   // 使用 public 访问修饰符，可以自动做下列事情
//   // 1. 定义成员变量
//   // 2. 进行 this.x = x  this.y = y
//   constructor(private x: number, private y: number = 2) {}

//   // 成员方法 drawPoint getDistances
//   drawPoint = () => {
//     console.log(`x: ${this.x}, y: ${this.y}`)
//   }

//   getDistances = (p: IPoint3) => {
//     return Math.pow(p.getX() - this.x, 2) + Math.pow(p.getY() - this.y, 2)
//     // return 0 // 暂时 return 0，避免报错
//   }

//   setX = (value: number) => {
//     if (value < 0) {
//       throw new Error('value 不能小于0')
//     }
//     this.x = value
//   }

//   getX = () => {
//     return this.x
//   }

//   setY = (value: number) => {
//     if (value < 0) {
//       throw new Error('value 不能小于0')
//     }
//     this.y = value
//   }

//   getY = () => {
//     return this.y
//   }
// }

// const p3 = new Point3(10, 20)
// // // 这时候对于 x，y 的属性就不能随意设置了
// // p3.x = 30
// // p3.y = 40
// p3.setX(100)
// p3.setX(-50) // 报错，Error: value 不能小于0 at Point3.setX (E:\vue\ts-basic\src\面向对象\4_访问修饰符.js:29:23)

// 简写 get set
interface IPoint4 {
  drawPoint: () => void
  getDistances: (p: IPoint4) => number
  X: number
  getY: () => number
  setY: (value: number) => void
}

class Point4 implements IPoint4 {
  // 使用 public 访问修饰符，可以自动做下列事情
  // 1. 定义成员变量
  // 2. 进行 this.x = x  this.y = y
  constructor(private x: number, private y: number = 2) {} // 这里 x，y 可以写成 _x，_y 表示私有属性

  // 成员方法 drawPoint getDistances
  drawPoint = () => {
    console.log(`x: ${this.x}, y: ${this.y}`)
  }

  getDistances = (p: IPoint4) => {
    return Math.pow(p.X - this.x, 2) + Math.pow(p.getY() - this.y, 2)
    // return 0 // 暂时 return 0，避免报错
  }

  set X(value: number) {
    if (value < 0) {
      throw new Error('value 不能小于0')
    }
    this.x = value
  }

  get X() {
    return this.x
  }

  setY = (value: number) => {
    if (value < 0) {
      throw new Error('value 不能小于0')
    }
    this.y = value
  }

  getY = () => {
    return this.y
  }
}

// 如果编译报错，可以将编译器配置上 target 为 es5 
// tsc -t es5 xxx.ts
const p4 = new Point4(10, 20)
p4.X = 100
console.log(p4.X)

export {}
