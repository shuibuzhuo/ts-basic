// 不用泛型显式声明
const list1: number[] = [1, 2, 3, 4]
// 使用泛型显式声明
const list2: Array<number> = [1, 2, 3, 4]
// 自动推导
const list3 = [1, 2, 3, 4]
// 数组可以包含任意类型的元素
const list4 = [1, 'abc']
// 数组里的元素类型是任意的
const list5: any[] = [1, 'acb', true]
