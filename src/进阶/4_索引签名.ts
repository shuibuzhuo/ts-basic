// 字符串作为索引
const person = {
  name: 'shuibuzhuo'
}

const pName = person['name']

// 数字作为索引
const nums = {
  100: 'haha'
}

const str = nums[100]

// 语法
type Dictionary = {
  [key: string]: any
}

// 举一个例子
type Person = {
  name: string
  age: number
}

type PersonDictionary = {
  [username: string]: Person
}

const persons: PersonDictionary = {
  shuibuzhuo: {
    name: '睡不卓',
    age: 20
  },
  zhangsan: {
    name: '张三',
    age: 30
  }
}
// 通过 persons[索引] 获取对应的值
const shuibuzhuo = persons['shuibuzhuo']
// 通过索引给 persons 这个字典添加新的成员
persons['lisi'] = {
  name: '李四',
  age: 22
}
// 如果属性名写错了，那么 TS 会进行检查
persons['wangwu'] = {
  /**
   * 报错
   * Type '{ nam: string; age: number; }' is not assignable to type 'Person'.
   *  Object literal may only specify known properties, but 'nam' does not exist in type 'Person'. Did you mean to write 'name'?ts(2322)
   */
  nam: '王武',
  age: 22
}
// 可以通过 persons[索引] 删除某个成员
delete persons['zhangsan']
// 注意：访问悬空的成员，TS 不会报错
const p1 = persons['missing'] // 值是 undefined
p1.name // TS 不会检查，不会报错
