"use strict";
exports.__esModule = true;
// 定义联合类型
var union;
union = 100;
union = 'hello';
union = true; // 报错，Type 'boolean' is not assignable to type 'string | number'.ts(2322)
// 联合类型的应用
function merge1(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
var mergeNumberRes1 = merge1(10, 20);
var mergeStringRes1 = merge1('hello', 'world');
console.log('mergeNumberRes', mergeNumberRes1); // 30
console.log('mergeStringRes', mergeStringRes1); // helloworld
// 字面量类型（literal）
var union3;
union3 = 0;
union3 = 1;
union3 = 100; // Type '100' is not assignable to type '0 | 1 | 2'.ts(2322)
// 联合类型 + 字面量类型的应用
function merge2(n1, n2, resultType) {
    if (resultType === 'as-string') {
        return n1.toString() + n2.toString();
    }
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
var mergeNumberRes2Number = merge2(10, 20, 'as-number');
var mergeNumberRes2String = merge2(10, 20, 'as-string');
var mergeStringRes2 = merge2('hello', 'world', 'as-string');
console.log('mergeNumberRes2Number', mergeNumberRes2Number); // 30
console.log('mergeNumberRes2String', mergeNumberRes2String); // helloworld
console.log('mergeStringRes2', mergeStringRes2); // helloworld
