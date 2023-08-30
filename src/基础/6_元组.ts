// // 元组：指定类型、指定长度
// const person1: [number, string] = [20, 'shuibuzhuo']
// person1[0] = 'aBC'
// person1[1] = 100
// person1[2] = 'hello'

// // bug，可以通过 push 突破元组的限制
// person1.push('test')

// // 对比，类型推导的话，不会形成元组 类型
// const person2 = [20, 'shuibuzhuo']
// person2[0] = 'aBC' // ok
// person2[1] = 100 // ok
// person2[2] = 'hello' // ok
