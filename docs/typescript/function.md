# 函数定义 @param @returns @this

## 定义函数参数和返回值

``` js
function stringsStringStrings(p1: string, p2?: string, p3?: string, p4: string = 'test'): string{
  return p1 + p2 + p3 + p4;
}
```

## 指定函数的 this

``` js
function clickCallback(this: HTMLDivElement, e: any): void {
	console.log(this.innerHTML);
}
```

[对应 jsdoc 代码](../jsdoc/function.md)
