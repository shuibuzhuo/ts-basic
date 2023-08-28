// 基本的函数表达式
const log = function(message) {
  console.log(message)
}

// 给函数的参数定义类型
const log2 = (message: string) => console.log(message)
log2('hello')
log2(3)
log2(true)

// 给多个参数定义类型
const log3 = (message: string, code: number) => {
  console.log(message, code)
}

log3('hello', 100)
log3('hello') // 报错，Expected 2 arguments, but got 1.ts(2554)

// 可选参数
const log4 = (message: string, code?: number) => {
  console.log(message, code)
}

log4('hello', 100)
log4('hello') // ok, code 为 undefined

// 默认值
const log5 = (message: string, code: number = 100) => {
  console.log(message, code)
}

log5('hello', 100)
log5('hello') // ok, code 默认 100
log5('hello', 200) // ok，code 被覆盖为 200
