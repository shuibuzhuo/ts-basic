interface IPoint4 {
  drawPoint: () => void;
  getDistances: (p: IPoint4) => number;
  X: number;
  getY: () => number;
  setY: (value: number) => void;
}

// 使用 export 导出变量
export class Point4 implements IPoint4 {
  // 使用 public 访问修饰符，可以自动做下列事情
  // 1. 定义成员变量
  // 2. 进行 this.x = x  this.y = y
  constructor(private x: number, private y: number = 2) {} // 这里 x，y 可以写成 _x，_y 表示私有属性

  // 成员方法 drawPoint getDistances
  drawPoint = () => {
    console.log(`x: ${this.x}, y: ${this.y}`);
  };

  getDistances = (p: IPoint4) => {
    return Math.pow(p.X - this.x, 2) + Math.pow(p.getY() - this.y, 2);
    // return 0 // 暂时 return 0，避免报错
  };

  set X(value: number) {
    if (value < 0) {
      throw new Error("value 不能小于0");
    }
    this.x = value;
  }

  get X() {
    return this.x;
  }

  setY = (value: number) => {
    if (value < 0) {
      throw new Error("value 不能小于0");
    }
    this.y = value;
  };

  getY = () => {
    return this.y;
  };
}
