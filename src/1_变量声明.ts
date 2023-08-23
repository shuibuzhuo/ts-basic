var number1 = 1
let number2 = 2
const number3 = 3

// // Cannot assign to 'number3' because it is a constant.ts(2588)
// // const 声明的变量，不能重新赋值
// number3 = 4

// for 块里面定义的 var 变量外面可以访问到，因为 var 没有块级作用域，这里 i 是定义在 doSomething 函数作用域里
// function doSomething1() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i)
//   }
//   console.log('final', i)
// }

// doSomething1()

// Cannot find name 'i'.ts(2304) 
// let 有块级作用域，所以报错了
function doSomething2() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log('final', i)
}

doSomething2()

export {}
