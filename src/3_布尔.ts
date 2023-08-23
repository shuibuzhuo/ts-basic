// 自动推导 isTrue 是布尔类型
let isTrue = true
isTrue = 'true' // 报错，Type 'string' is not assignable to type 'boolean'.ts(2322)

// 显示定义类型
let isTrue2: boolean = true
isTrue2 = 'true' // 报错，Type 'string' is not assignable to type 'boolean'.ts(2322)
