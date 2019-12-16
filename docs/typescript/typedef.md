# 类型定义 @typedef @callback

## 对象类型定义

``` js
type SpecialType = {
    prop1: string;
    prop2?: string;
    prop3?: number;
    prop4?: number;
}

let specialTypeObject: SpecialType;
```

## 函数类型定义

``` js
type Predicate = (data: string, index?: number) => boolean

let ok: Predicate = s => !(s.length % 2);
```

[对应 jsdoc 代码](../jsdoc/typedef.md)
