// 映射修饰符 Mapped Modifier
type Point = {
  readonly x: number;
  y?: number;
};

// 映射工具类型
type Mapped<T> = {
  [P in keyof T]: T[P];
};

// 映射出来的类型
type MappedPoint = Mapped<Point>;

// 给映射工具类型增加映射修饰符 readonly
type ReadonlyMapped<T> = {
  readonly [P in keyof T]: T[P]; // readonly 就是映射修饰符
};

type ReadonlyPoint = ReadonlyMapped<Point>;

// 添加可选修饰符
type OptionalMapped<T> = {
  [P in keyof T]?: T[P];
};

type OptionalPoint = OptionalMapped<Point>;

// 减掉 readonly 修饰符
type MinusReadonlyMapped<T> = {
  -readonly [P in keyof T]: T[P];
};

type MinusReadonlyPoint = MinusReadonlyMapped<Point>;

type MinusOptionalMapped<T> = {
  [P in keyof T]-?: T[P];
};

type MinusOptionalPoint = MinusOptionalMapped<Point>;

// 举例
class State<T> {
  constructor(public current: T) {}

  update(next: T) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 10, y: 20 });
state.update({ x: 10, y: 50 });
console.log(state.current); // { x: 10, y: 50 }

// 但其实，我们只需要更新 y，而且如果这个对象有很多属性的话，现在的写法，要把所有的属性都传入，很不方便，我们应该只需要传入改变了的属性就可以了
/**
 * 但如果现在，我们只传入 y，会报错
 * Argument of type '{ y: number; }' is not assignable to parameter of type '{ x: number; y: number; }'.
  Property 'x' is missing in type '{ y: number; }' but required in type '{ x: number; y: number; }'.ts(2345)
 */
state.update({ y: 100 });

// 解决方法：定义类型 Partial
class State2<T> {
  constructor(public current: T) {}

  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

// Partial 也是 typescript 中的内置类型，所以这里不定义，也可以使用
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

const state2 = new State2({ x: 10, y: 20 });
state2.update({ y: 50 }); // ok
/**
 * 报错
 * Argument of type '{ z: number; }' is not assignable to parameter of type 'Partial<{ x: number; y: number; }>'.
  Object literal may only specify known properties, and 'z' does not exist in type 'Partial<{ x: number; y: number; }>'.ts(2345)
 */
state2.update({ z: 100 });
