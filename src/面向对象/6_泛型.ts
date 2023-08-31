// 泛型的基本使用
const list1: number[] = [10, 20, 30];
const list2: Array<number> = [10, 20, 30];

// 定义一个函数，获取一个数组中的最后一个元素
function getLastElementInArray1(arr: Array<number>) {
  return arr[arr.length - 1];
}

const el1 = getLastElementInArray1([10, 20, 30]);
const el2 = getLastElementInArray1(["a", "b", "c"]); // 报错，Type 'string' is not assignable to type 'number'.ts(2322)

// 解决方法1：使用 Array<any>
function getLastElementInArray2(arr: Array<any>) {
  return arr[arr.length - 1];
}

const el3 = getLastElementInArray2([10, 20, 30]); // 不报错了，但 el3 类型是 any
const el4 = getLastElementInArray2(["a", "b", "c"]); // 不报错了，但 el4 类型是 any

// 解决方法2：使用泛型
function getLastElementInArray3<T>(arr: Array<T>) {
  return arr[arr.length - 1];
}

const el5 = getLastElementInArray3([10, 20, 30]); // el5 的类型是 number
const el6 = getLastElementInArray3(["a", "b", "c"]); // el6 的类型是 string
const el7 = getLastElementInArray3<string>(["a", "b", "c"]); // 可以显式地声明泛型的类型是 string

// 上面显式指明 string 可能看起来有点多余，但如果泛型是联合类型，显式指明类型就很有用了
const el8 = getLastElementInArray3(["a", "b", "c"]); // el8 的类型是 string
const el9 = getLastElementInArray3<string | number>(["a", "b", "c"]); // el9 的类型是 string | number

function makeTuple<T, U>(x: T, y: U) {
  return [x, y];
}

const tuple1 = makeTuple(1, "one"); // tuple1 是 (string | number)[]
const tuple2 = makeTuple(true, 1); // tuple2 是 (number | boolean)[]
const tuple3 = makeTuple<boolean, number>(true, 1); // 可以显式指定类型

// 可以给 U 设置默认类型为 number
function makeTuple2<T, U = number>(x: T, y: U) {
  return [x, y];
}

makeTuple2<string>("haha", 100); // 这个时候泛型 U 就可以不传具体类型
