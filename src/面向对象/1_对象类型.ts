// 使用类型推导 
const person1 = {
  firstName: '阿莱克斯',
  lastName: '刘',
  age: 18
}

console.log(person1.firstName) // ok
console.log(person1.lastName) // ok
console.log(person1.age) // ok
console.log(person1.nickName) // 报错，Property 'nickName' does not exist on type '{ firstName: string; lastName: string; age: number; }'.ts(2339)

// 给一个 object 类型，相当于给了一个 {} 
const person2: object = {
  firstName: '阿莱克斯',
  lastName: '刘',
  age: 18
}

console.log(person2.firstName) // 报错，Property 'firstName' does not exist on type 'object'.ts(2339)
console.log(person2.lastName) // 报错，Property 'lastName' does not exist on type 'object'.ts(2339)
console.log(person2.age) // 报错，Property 'age' does not exist on type 'object'.ts(2339)
console.log(person2.nickName) // 报错，Property 'nickName' does not exist on type 'object'.ts(2339)
