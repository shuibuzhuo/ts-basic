type Square = {
  size: number;
}

type Rectangle = {
  width: number;
  height: number;
}

// 图案
type Shape = Square | Rectangle

// 计算面积的函数
function area1(shape: Shape) {
  // 如果图案中有 size 属性，那么它就是正方形
  if ("size" in shape) {
    return shape.size * shape.size
  }
  // 如果图案中有 width 属性，那么它就是长方形
  if ("width" in shape) {
    return shape.width * shape.height
  }
}

// 功能正常，但是代码不是很整洁，所以我们重构下这个函数，使用类型守护，来判断对象的具体类型细节

// 类型守护
// 将判断属性的语句拿出来

// 是否是正方形
function isSquare1(shape: Shape): boolean {
  return "size" in shape
}

// 是否是正方形
function isRectangle1(shape: Shape): boolean {
  return "width" in shape
}

// 计算面积的函数
function area2(shape: Shape) {
  // 如果图案中有 size 属性，那么它就是正方形
  if (isSquare1(shape)) {
  // 报错
  //   Property 'size' does not exist on type 'Shape'.
  //    Property 'size' does not exist on type 'Rectangle'.ts(2339)
    return shape.size * shape.size
  }
  // 如果图案中有 width 属性，那么它就是长方形
  if (isRectangle1(shape)) {
    // 报错
    //   Property 'width' does not exist on type 'Shape'.
    //    Property 'width' does not exist on type 'Square'.ts(2339)
    return shape.width * shape.height
  }
}
// 类型守护功能没有生效，编译器没法判断 shape 变量是 Rectangle 类型还是 Square 类型，因为 isSquare 和 isRectangle 只是返回 boolean 类型
// 那么我们该如何让类型守护生效呢
// 我们要使用 shape is Square shape is Rectangle 这种语法
// 是否是正方形
function isSquare2(shape: Shape): shape is Square {
  return "size" in shape
}

// 是否是正方形
function isRectangle2(shape: Shape): shape is Rectangle {
  return "width" in shape
}

// 计算面积的函数
function area3(shape: Shape) {
  // 如果图案中有 size 属性，那么它就是正方形
  // 这里 shape 是 Square 类型
  if (isSquare2(shape)) {
    return shape.size * shape.size
  }
  // 如果图案中有 width 属性，那么它就是长方形
  // 这里 shape 是 Rectangle 类型
  if (isRectangle2(shape)) {
    return shape.width * shape.height
  }
}
