"use strict";
// // public
// interface IPoint1 {
//   x: number
//   y: number
//   drawPoint: () => void
//   getDistances: (p: IPoint1) => number
// }
Object.defineProperty(exports, "__esModule", { value: true });
var Point4 = /** @class */ (function () {
    // 使用 public 访问修饰符，可以自动做下列事情
    // 1. 定义成员变量
    // 2. 进行 this.x = x  this.y = y
    function Point4(x, y) {
        var _this = this;
        if (y === void 0) { y = 2; }
        this.x = x;
        this.y = y;
        // 成员方法 drawPoint getDistances
        this.drawPoint = function () {
            console.log("x: ".concat(_this.x, ", y: ").concat(_this.y));
        };
        this.getDistances = function (p) {
            return Math.pow(p.X - _this.x, 2) + Math.pow(p.getY() - _this.y, 2);
            // return 0 // 暂时 return 0，避免报错
        };
        this.setY = function (value) {
            if (value < 0) {
                throw new Error('value 不能小于0');
            }
            _this.y = value;
        };
        this.getY = function () {
            return _this.y;
        };
    } // 这里 x，y 可以写成 _x，_y 表示私有属性
    Object.defineProperty(Point4.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value 不能小于0');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point4;
}());
var p4 = new Point4(10, 20);
p4.X = 100;
console.log(p4.X);
