

# Redux

> store.getState()  
> 

## 1. store & state

`state` 是应用的状态，理论是一个**对象**

```
    // 例如
    var state = {
        text: 'Hello World'
    };
```

`store` 是应用状态 `state` 的管理者，包含下列四个函数：

* `getState()                  # 获取整个 state`
* `dispatch(action)            # ※ 触发 state 改变的【唯一途径】※`
* `subscribe(listener)         # 您可以理解成是 DOM 中的 addEventListener`


二者的关系是：`state = store.getState()`

## 2. Action

`action`（动作）是我们实现用户行为追踪的关键

> 例如 `{ type: 'INCREMENT' }`  
> 现在您只需要记住 `action` 只是一个包含 **`type`** 属性的普通**对象**即可  

## 3. Reducer

本质是更新`state`的函数