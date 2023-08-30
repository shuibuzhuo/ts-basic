// any 会关闭类型检查，方便快速开发，可以被赋予任何类型的值，但也会带来潜在的类型安全问题
let randomValue1: any = 100
randomValue1 = true
randomValue1 = 'abc'
randomValue1 = {}
randomValue1() // 编译通过，但是运行报错，TypeError: randomValue1 is not a function
randomValue1.toUpperCase() // 编译通过，但是运行报错，TypeError: randomValue1.toUpperCase is not a function

// unknown 也可以被赋予任何类型的值，但对它的值进行操作之前，必须进行类型检查或类型断言，所以 unknown 类型是类型安全的
let randomValue2: unknown = 100
randomValue2 = true
randomValue2 = 'abc'
randomValue2 = {}
// 直接使用和 any 一样的代码
randomValue2() // 编译报错，'randomValue2' is of type 'unknown'.ts(18046)
randomValue2.toUpperCase() // 编译报错，'randomValue2' is of type 'unknown'.ts(18046)

// 使用 unknown 需要进行改造，保证了类型安全
if (typeof randomValue2 === 'function') {
  randomValue2()
}

if (typeof randomValue2 === 'string') {
  randomValue2.toUpperCase()
}
