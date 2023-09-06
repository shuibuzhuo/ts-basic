type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "shuibuzhuo",
  age: 20,
};

// 不用 ts 做检查
function getValueByKey1(obj: any, key: string) {
  const value = obj[key];

  return value;
}

const age1 = getValueByKey1(person, "age");
const email1 = getValueByKey1(person, "email"); // 没有报错，不应该

// 加上 ts
function getValueByKey2(obj: any, key: "name" | "age") {
  const value = obj[key];

  return value;
}

const age2 = getValueByKey2(person, "age");
const email2 = getValueByKey2(person, "email"); // 报错了

// 利用 keyof 操作符
function getValueByKey3(obj: Person, key: keyof Person) {
  const value = obj[key];

  return value;
}

const age3 = getValueByKey3(person, "age");
const email3 = getValueByKey3(person, "email"); // 报错了

// 单独定义 PersonKey
type PersonKey = keyof Person;
function getValueByKey4(obj: Person, key: PersonKey) {
  const value = obj[key];

  return value;
}

const age4 = getValueByKey4(person, "age");
const email4 = getValueByKey4(person, "email"); // 报错了

// 使用泛型 Obj, Key
function getValueByKey5<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];

  return value;
}

const age5 = getValueByKey5(person, "age");
const email5 = getValueByKey5(person, "email"); // 报错了

// 定义设置 val 的函数
function setValueByKey<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  val: Obj[Key]
) {
  obj[key] = val;
}

setValueByKey(person, "age", 30);
