// 调用签名
// 第一种写法
type Add1 = (a: number, b: number) => number
// 第二种写法
type Add2 = {
  (a: number, b: number): number
}

const add1: Add1 = (a: number, b: number) => a + b
const add2: Add2 = (a: number, b: number) => a + b

// 使用花括号的写法的 3 个好处
// 1. 函数类型更容易扩展，可以把 type 写成 interface，interface 可以做接口合并和扩展
interface Add3 {
  (a: number, b: number): number
}

// 2. 可以给类型定义更多属性
type Add4 = {
  (a: number, b: number): number
  debugName: string
}

const add4: Add4 = (a: number, b: number) => a + b
add4.debugName = '附加信息'

// 3. 可以进行函数重载
type Add5 = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}

const add5: Add5 = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0)
}
