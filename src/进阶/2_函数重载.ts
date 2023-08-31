function reverse1(stringOrArray: string | string[]) {
  if (typeof stringOrArray === "string") {
    return stringOrArray.split("").reverse().join("");
  } else {
    return stringOrArray.slice().reverse();
  }
}
// 输出的值是确定的，但是类型却不是明确的
// 原因：函数无法通过参数的类型，来进行自动的类型匹配
const reverseStr1 = reverse1("hello"); // 输出'olleh'，类型是 string | string[]
const reverseArr1 = reverse1(["h", "e", "l", "l", "o"]); // 输出 ['o', 'l', 'l', 'e', 'h']，类型是 string | string[]

// 使用函数重载，定义不同的函数形式
// 同样的函数，使用不同的函数签名
function reverse2(string: string): string;
function reverse2(arr: string[]): string[];
function reverse2(stringOrArray: string | string[]) {
  if (typeof stringOrArray === "string") {
    return stringOrArray.split("").reverse().join("");
  } else {
    return stringOrArray.slice().reverse();
  }
}
const reverseStr2 = reverse2("hello"); // 类型是 string
const reverseArr2 = reverse2(["h", "e", "l", "l", "o"]); // 类型是 string[]

// 功能
// 参数的 2 种形式
// 1. 时间戳
// 2. 年月日
function makeDate1(timestampOrYear: number, month?: number, day?: number) {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day);
  } else {
    return new Date(timestampOrYear)
  }
}

const day1 = makeDate1(2020, 1, 1)
const day2 = makeDate1(12345678910)
const day3 = makeDate1(2020, 1) // 编译时没有报错，没有进行函数重载时，对参数没有严格的校验，但在运行时，这行代码会报错，因为我们代码的逻辑处理不了这样的传参

// 进行函数重载
function makeDate2(timestamp: number): Date
function makeDate2(year: number, month: number, day: number) // 这里 month 和 year 都是必须传的
function makeDate2(timestampOrYear: number, month?: number, day?: number) {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day);
  } else {
    return new Date(timestampOrYear)
  }
}

const day4 = makeDate2(2020, 1, 1)
const day5 = makeDate2(12345678910)
const day6 = makeDate2(2020, 1) // 报错
// No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.ts(2575)
// 通过函数重载，我们可以明确定义函数的使用范围，以及不同的函数签名，这将大大地提高我们对于一个函数使用的准确性
