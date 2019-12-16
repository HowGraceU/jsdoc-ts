# 类型定义 @typedef @callback

## 对象类型定义

``` js
/**
 * @typedef {Object} SpecialType - 创建一个 SpecialType 类型，为 object
 * @property {string} prop1 - 定义 key 为 prop1 的属性，值为 string 类型
 * @property {string=} prop2 - 定义 key 为 prop2 的可选属性，值为 string 类型
 * @prop {number} [prop3] - 定义 key 为 prop3 的可选属性，值为 number 类型
 * @prop {number} [prop4=42] - 定义 key 为 prop4 的可选属性，默认值为 42 的 number 类型
 */

/** @type {SpecialType} */
var specialTypeObject;
```

## 函数类型定义

``` js
/**
 * @callback Predicate
 * @param {string} data
 * @param {number} [index]
 * @returns {boolean}
 */

/** @type {Predicate} */
var ok = s => !(s.length % 2);
```

[对应 TypeScript 代码](../typescript/typedef.md)
