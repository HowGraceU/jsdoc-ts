# 定义变量 @type

## 基础类型

``` js
let s: string;
```

## Promise 类型

``` js
const promisedString: Promise<string> = new Promise((resolve, reject) => {
	if (true) {
		resolve('string');
	} else {
		reject('string');
	}
});
```

## 浏览器宿主类型

``` js
let win: Window;

const myElement: HTMLElement = document.querySelector(selector);
```

## 联合类型

``` js
let sb: string | boolean;
```

## 数组类型

``` js
let ns: number[];

let nds: Array<number>;
```

## 对象类型

``` js
let ns: number[];

let nds: Array<number>;
```

## 类型断言

先定义一个可能为 number 或者 string 的变量 numberOrString

``` js
let numberOrString: number | string = Math.random() < 0.5 ? "hello" : 100;
```

将 numberOrString 赋值给 typeAssertedNumber，typeAssertedNumber 被程序断言为 number 类型，而不会是 string 类型

``` js
let (typeAssertedNumber as number) = numberOrString
```

[对应 jsdoc 代码](../jsdoc/type.md)
