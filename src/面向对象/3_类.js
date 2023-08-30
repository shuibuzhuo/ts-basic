// 把和点相关的属性和方法都定义在一个类里
var Point1 = /** @class */ (function () {
    function Point1() {
        var _this = this;
        // 成员方法 drawPoint getDistances
        this.drawPoint = function () {
            console.log("x: ".concat(_this.x, ", y: ").concat(_this.y));
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
    }
    return Point1;
}());
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
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        var _this = this;
        // 成员方法 drawPoint getDistances
        this.drawPoint = function () {
            console.log("x: ".concat(_this.x, ", y: ").concat(_this.y));
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
        this.x = x;
        this.y = y;
    }
    return Point2;
}());
var point3 = new Point2(10, 20);
point3.drawPoint();
