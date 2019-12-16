# 定义变量 @type

## 基础类型

``` js
/**
 * @type {string}
 */
var s;
```

## Promise 类型

``` js
/** @type {Promise<string>} */
var promisedString = new Promise((resolve, reject) => {
	if (true) {
		resolve('string');
	} else {
		reject('string');
	}
});
```

## 浏览器宿主类型

``` js
/** @type {Window} */
var win;

// You can specify an HTML Element with DOM properties
/** @type {HTMLElement} */
var myElement = document.querySelector(selector);
```

## 联合类型

``` js
/**
 * @type {string | boolean}
 */
var sb;
```

## 数组类型

``` js
/** @type {number[]} */
var ns;

/** @type {Array<number>} */
var nas;
```

## 对象类型

``` js
/** @type {{ a: string, b: number }} */
var var9;

/**
 * 属性为 string，值为 number
 * @type {Object.<string, number>}
 */
var stringToNumber;
```

## 类型断言

先定义一个可能为 number 或者 string 的变量 numberOrString

``` js
/**
 * @type {number | string}
 */
var numberOrString = Math.random() < 0.5 ? "hello" : 100;
```

将 numberOrString 赋值给 typeAssertedNumber，typeAssertedNumber 被程序断言为 number 类型，而不会是 string 类型

``` js
var typeAssertedNumber = /** @type {number} */ (numberOrString)
```

## 导入类型

先定义一个可能为 number 或者 string 的变量 numberOrString

``` js
/**
 * @param { import("./a").Pet } p
 */
function walk(p) {
	console.log(`Walking ${p.name}...`);
}
```

[对应 TypeScript 代码](../typescript/type.md)
