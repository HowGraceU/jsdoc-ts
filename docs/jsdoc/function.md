# 函数定义 @param @returns @this

## 定义函数参数和返回值

``` js
/**
 * @param {string}  p1 - 必填 string 参数
 * @param {string=} p2 - 可选 string 参数
 * @param {string} [p3] - 可选 string 参数
 * @param {string=} [p4="test"] - 带有默认值的可选 string 参数
 * @return {string} 返回值类型
 */
function stringsStringStrings(p1, p2, p3, p4 = 'test'){
  return '';
}
```

## 指定函数的 this

``` js
/**
 * @this {HTMLDivElement}
 * @param {*} e
 */
function clickCallback(e) {
	console.log(this.innerHTML);
}
```

[对应 TypeScript 代码](../typescript/function.md)
