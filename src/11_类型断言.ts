let message: any;
message = 'acb';
message.startsWith('a'); // 没有代码提示

(<string>message).startsWith('a'); // 类型断言的两种写法
(message as string).startsWith('a'); // 类型断言的两种写法
