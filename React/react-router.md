### 理解单页面应用
单页面应用是使用一个html下，一次性加载js, css等资源，所有页面都在一个容器页面下，页面切换实质是组件的切换。

### react-router-dom 和 react-router 和 history 库三者什么关系
- history 可以理解为 react-router 的核心，也是整个路由原理的核心，里面集成了 popState, history.pushState等底层路由实现的原理方法。
- react-router 可以理解为是 react-router-dom 的核心，里面封装了 Router，Route，Switch 等核心组件,实现了从路由的改变到组件的更新的核心功能,在我们的项目中只要一次性引入 react-router-dom 就可以了。
- react-router-dom,在 react-router 的核心基础上，添加了用于跳转的 Link 组件，和 history 模式下的 BrowserRouter 和 hash 模式下的 HashRouter 组件等。所谓 BrowserRouter 和 HashRouter，也只不过用了 history 库中 createBrowserHistory 和 createHashHistory 方法

### 单页面实现核心原理
#### history 模式
**改变路由**
1. history.pushState

  ```
  history.pushState(state,title,path)
  ```

- state：一个与指定网址相关的状态对象， popstate 事件触发时，该对象会传入回调函数。如果不需要可填 null。
- title：新页面的标题，但是所有浏览器目前都忽略这个值，可填 null。
- path：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个地址。

2. history.replaceState

  ```
  history.replaceState(state,title,path)
  ```
参数和pushState一样，这个方法会修改当前的 history 对象记录， history.length 的长度不会改变。

**监听路由**
popstate 事件

popstate 事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮或者调用 history.back()、history.forward()、history.go()方法。

> 用 history.pushState() 或者 history.replaceState() 不会触发 popstate 事件

#### hash 模式
**改变路由**
window.location.hash

**监听路由**
onhashchange

### history 库
history 专注于记录路由 history 状态，在 history 模式下用 popstate 监听路由变化，在 hash 模式下用 hashchange 监听路由的变化。

#### memoryHistory
createMemoryHistory 用于在内存中创建完全虚拟的历史堆栈，只缓存历史记录，但与真实的地址栏无关（不会引起地址栏变更，不会和原生的 history 对象保持同步），也与 popstate, hashchange 事件无关。主要用于服务器渲染。它创建一个内存中的history对象，不与浏览器URL互动。


### 参考
https://juejin.cn/post/6886290490640039943#heading-18
