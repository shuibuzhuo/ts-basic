var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function reverseSorted1(input) {
    return input.sort().reverse();
}
var init1 = [1, 2, 3, 4, 5];
var res1 = reverseSorted1(init1);
console.log("init1", init1); //  [ 5, 4, 3, 2, 1 ]
console.log("res1", res1); //  [ 5, 4, 3, 2, 1 ]
// 会修改传递进来的原数组，有副作用
// 加上 readonly 只读修饰符
function reverseSorted2(input) {
    // return input.sort().reverse(); // 报错，Property 'sort' does not exist on type 'readonly number[]'.ts(2339)
    // return input.slice().sort().reverse() // ok
    return __spreadArray([], input, true).sort().reverse(); // ok
}
var init2 = [1, 2, 3, 4, 5];
var res2 = reverseSorted2(init2);
console.log("init2", init2); //  [ 5, 4, 3, 2, 1 ]
console.log("res2", res2); //  [ 5, 4, 3, 2, 1 ]
