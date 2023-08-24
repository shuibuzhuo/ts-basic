// any 会关闭类型检查，方便快速开发，但也会带来潜在的类型安全问题
var randomValue = 100;
randomValue = true;
randomValue = 'abc';
randomValue = {};
// randomValue() // 编译通过，但是运行报错，TypeError: randomValue is not a function
randomValue.toUpperCase();
