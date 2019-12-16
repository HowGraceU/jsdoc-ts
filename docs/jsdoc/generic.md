# 定义泛型 @template

## 关于泛型

[泛型](https://www.typescriptlang.org/docs/handbook/generics.html)这个概念在 JavaScript 中并不存在，是一个 TypeScript 的概念，而且在各种开源库中大量使用。

最基本的作用是使函数的返回值是根据传入参数来决定，看一下例子。

## 使用泛型

定义一个 filter 函数，定义一个泛型 T，传入参数的类型未知

``` js
/**
 * @template T
 * @param {T} x
 * @param {T} y
 * @return {T}
 */
function filter(x, y){ return Math.random() > 0.5? x: y }
```

当函数的参数都为数字时，返回值也会被推导为数字，当参数都为字符串时，返回值被推导为字符串，当传入参数既有数字又有字符串时，返回值为第一次检测到 T 的类型，即 number，若有检测则会报错。

``` js
var num = filter(1, 2); // number
var string = filter('1', '2'); // string
var any = filter(1, '2'); // number
```

## 更多

点击[泛型](https://jkchao.github.io/typescript-book-chinese/typings/generices.html#%E5%8A%A8%E6%9C%BA%E5%92%8C%E7%A4%BA%E4%BE%8B)查看更多关于泛型的介绍

[对应 TypeScript 代码](../typescript/generic.md)
