// // 正常
// const n1 = 1
// const n2 = 2

// function add(n1, n2) {
//   return n1 + n2
// }

// const res = add(n1, n2)
// console.log(res) // 3

// // 没有给 add 函数加上类型，n1 是字符串，add 函数就变成了字符串拼接，而不是加法了
// const n1 = '1'
// const n2 = 2

// function add(n1, n2) {
//   return n1 + n2
// }

// const res = add(n1, n2)
// console.log(res) // '12'

// // 给 add 函数加上类型定义
// const n1 = '1'
// const n2 = 2

// function add(n1: number, n2: number) {
//   return n1 + n2
// }

// // 报错，Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// const res = add(n1, n2)
// console.log(res)
