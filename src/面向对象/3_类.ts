interface IPoint {
  x: number
  y: number
  drawPoint: () => void
  getDistances: (p: IPoint) => number
}

// 把和点相关的属性和方法都定义在一个类里
class Point1 implements IPoint {
  // 成员变量 x, y
  x: number
  y: number

  // 成员方法 drawPoint getDistances
  drawPoint = () => {
    console.log(`x: ${this.x}, y: ${this.y}`)
  }

  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
  }
}

// // 普通用法
// const point1 = new Point1()
// point1.drawPoint() // x: undefined, y: undefined

// // 定义 point2 的 x，y 的初始值
// const point2 = new Point1()
// point2.x = 10
// point2.y = 20
// point2.drawPoint() // x: 10, y: 20

// 在类里面定义构造函数
// 把和点相关的属性和方法都定义在一个类里
class Point2 implements IPoint {
  // // 成员变量 x, y
  // x: number
  // y: number

  // constructor(x: number, y: number) {
  //   this.x = x
  //   this.y = y
  // }

  // 成员变量 x, y
  x: number
  y: number

  // 定义可选参数和参数默认值
  constructor(x?: number, y: number = 2) {
    this.x = x || 10
    this.y = y
  }

  // 成员方法 drawPoint getDistances
  drawPoint = () => {
    console.log(`x: ${this.x}, y: ${this.y}`)
  }

  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
  }
}

// 实例化的时候传入 x，y 的值
const point3 = new Point2(10, 20)
point3.drawPoint() // x: 10, y: 20

class Point3 implements IPoint {
  // 使用 public 访问修饰符，可以自动做下列事情
  // 1. 定义成员变量
  // 2. 进行 this.x = x  this.y = y
  constructor(public x: number, public y: number = 2) {}

  // 成员方法 drawPoint getDistances
  drawPoint = () => {
    console.log(`x: ${this.x}, y: ${this.y}`)
  }

  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
  }
}

export {}
