// console.log('test');
// https://www.cnblogs.com/onepixel/p/5062456.html
// function A() {
//     function B() {
//         console.log('Hello, closure here');
//     }
//     return B;
// }
// let c = A();
// c();
// 当一个内部函数被其外部函数之外的变量引用时，就形成了闭包
// js垃圾回收机制-GC https://blog.csdn.net/qq_42543177/article/details/124644363

// function A() {
//     let count = 0;
//     function B() {
//         count++;
//         console.log(count);
//     }
//     return B;
// }
// let c = A();
// c();
// c();
// c();

// 当我们需要再模块中定义一些变量，并且希望这些变量一直保存再内存中但又不会污染全局变量时，就可以用闭包来定义这个模块。

// function lazy_sum(arr) {
//     var sum = function () {
//         return arr.reduce(function (x, y) {
//             return x + y;
//         });
//     }
//     return sum;
// }

// let f1 = lazy_sum([1,2,3,4]);
// let f2 = lazy_sum([1,2,3,4]);
// console.log(f1===f2);
// console.log(f1());
// console.log(f2());

// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push(function () {
//             return i * i;
//         });
//     }
//     return arr;
// }

// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];
// console.log(f1(), f2(), f3());

// https://www.liaoxuefeng.com/wiki/1022910821149312/1023021250770016
// 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
// 换句话说，闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
// 实现模块化，返回出来功能函数，并且不消耗外部变量，而是再内部定义变量


// call apply bind
// call和apply的作用时一样的， 都是用来调用函数并且改变函数内部this的指向，区别在于传参方式不同，call传参是一个一个传递
// apply的参数是以数组形式传递
// bind方法不会立即执行，而是返回一个新的函数，新函数this被绑定到指定的对象，调用时可以传参
// https://blog.csdn.net/nanxun201314/article/details/130394777

// call  fn.call([this], param...)
// apply fn.call([this], [param]...)   apply 参数形式为数组
// bind和call语法，一样，区别时只改变指向不执行
// https://www.cnblogs.com/vant-xie/p/16738598.html

// 去弹跳和节流 https://blog.csdn.net/redtopic/article/details/69396722
// debounce 防抖/去弹跳

// function debounce(fn, delay) {
//     let timer;
//     return () => {
//         // 上下文和参数
//         let context = this;
//         let args = arguments;
//         // 实际每次调用debounce都会定义timer，但是如果一直再执行的操作的话，最新一次的操作就把timer清了
//         // 然后再定义一个定时器，如果没有继续执行的操作的话，定时器再delay之后执行
//         // 进来每次都清掉，如果没有后序事件的话，才开始起作用
//         clearTimeout(timer);
//         timer = setTimeout(() => fn.apply(context, args), delay);
//     }
// }
// document.addEventListener('mousemove', debounce(()=>console.log(1), 3000))

// throttle 节流
// function throttle(fn, threshhold) {
//     // 记录上次执行的时间
//     let last;
//     let timer;
//     return () => {
//         let context = this;
//         let args = arguments;
//         let now = +new Date();
//         if (last && now < (last + threshhold)) {
//             // 不到时间，直接清除定时器，每次进来都会清除之前的
//             // 保证再当前区间结束前，已经定义了下一个时间的定时器
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                 last = now;
//                 fn.apply(context, args);
//             }, threshhold);
//         } else { // 最开始和到达时间的时候，执行并记录last
//             last = now;
//             fn.apply(context, args);
//         }
//     }
// }

// document.addEventListener('mousemove', throttle(()=>console.log(1), 3000))

// Promise
// pending， resolved, rejected
// Promise构造函数接受一个函数作为参数，该函数的2个参数是resolve，reject
// ********创建一个promise对象会立即执行里面的代码，为了更好的控制代码的运行时刻，
// ********可以将其包含在一个函数中，并将这个Promise作为返回值
// 语法上来说， promise是一个构造函数
// 功能上来说， promise用来封装一个异步操作并可以获取其成功失败的结果值
// 本身已经是一个异步操作了，promise只是进行封装能拿到成功失败然后改变状态按照promise的方式执行
// 并且promise构造函数接受函数里的2个参数，一个是resolve，一个是reject
// resolve对应then， reject对应catch
// 并且可以支持链式操作，promise的一些方法，比如promise.all() promise.race()
// Promise对象是一个构造函数，用来生成promise实例
// then的第二个参数还是catch
// catch可以捕获then的第一函数里异常，所以一直建议用catch
// https://www.jianshu.com/p/9c93f55cdeb0
// let promise = new Promise((aa, bb) => {
//     let a = Math.floor(Math.random()*10);
//     setTimeout(()=>{
//         if (a < 5) {
//             aa(a+'---error');
//         } else {
//             bb(a+'---success');
//         }
//     },3000);
// })
// promise.then(res => console.log(res)).catch(e=>console.log(e));
// https://blog.csdn.net/qq_38290251/article/details/107395152
// read file 可以用promise封装，避免回掉函数使用的不方便
// let promise = new Promise((resolve, reject) => {
//     console.log('Hello word');
//     resolve(1112222);
// })
// promise.then(r=> console.log(111));

// 用promis实现红绿灯
// 红灯3秒亮一次，绿灯2秒亮一次，黄灯1秒亮一次
// function red() {
//     console.log('red');
// }
// function green() {
//     console.log('green');
// }
// function yellow() {
//     console.log('yellow');
// }

// let light = (time, cb) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{cb(), resolve()}, time)
//     })
// }

// let step = () => {
//     Promise.resolve().then(() => {
//         return light(3000, red)
//     }).then(() => {
//         return light(2000, green)
//     }).then(() => {
//         return light(1000, yellow)
//     }).then(()=>{
//         step();
//     })
// }

// step();

// Promise实现函数顺序执行
// const timeout = ms => new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })


// const ajax1 = () => timeout(2000).then(() => {
//         console.log('1');
//         return 1;
// })


// const ajax2 = () => timeout(1000).then(() => {
//         console.log('2');
//         return 2;
// })

// const ajax3 = () => timeout(2000).then(() => {
//         console.log('3');
//         return 3;
// })

// const mergePromise = ajaxArray => {
//     let arr = [];
//     let promise = Promise.resolve();
//     ajaxArray.forEach(ajax => {
//         console.log(promise);
//         promise = promise.then(ajax).then((res) => {
//             // console.log('1111---',res);
//             arr.push(res);
//             return arr;
//         })
//     });
//     // console.log(arr);
//     // return Promise.resolve().then(() => {return arr});
//     return promise;
// }

// mergePromise([ajax1, ajax2, ajax3]).then(res => {
//     console.log('done');
//     console.log(res);
// })

// throw error https://blog.csdn.net/sunyctf/article/details/137074134
// 下划线定义变量
// 构造函数，class内部，私有变量，辅助变量/临时变量
// 手写promise
// https://blog.csdn.net/m0_64751475/article/details/136087315?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7EPaidSort-1-136087315-blog-126992966.235%5Ev43%5Epc_blog_bottom_relevance_base1&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7EPaidSort-1-136087315-blog-126992966.235%5Ev43%5Epc_blog_bottom_relevance_base1&utm_relevant_index=1
// https://www.cnblogs.com/grow-up-up/p/17086579.html

// const PENDING = 'pending';
// const FULFILLED = 'fulfilled';
// const REJECTED = 'rejected';

// class MyPromise {
//     /**
//      *
//      * @param {Function} fn 构造函数接收的参数, 立即执行
//      */
//     constructor(fn) {
//         if(typeof fn !== 'function') {
//             throw TypeError('Param not a function');
//         }
//         this._state = PENDING;
//         this._value = undefined;
//         this._handles = [];
//         try {
//             fn(this._resolve.bind(this),this._reject.bind(this));
//         } catch (error) {
//             this._reject(error);
//         }
//     }
//     /**
//      *
//      * @param {any} value 转换为成功状态时返回的值
//      */
//     _resolve(value) {
//         this._changeState(FULFILLED, value);
//     }
//     /**
//      *
//      * @param {any} value 转换为失败状态时返回的值
//      */
//     _reject(value){
//         this._changeState(REJECTED, value);
//     }
//     /**
//      *
//      * @param {Struging} state 需要update的新状态
//      * @param {any} value 返回的值
//      */
//     _changeState(state, value) {
//         if (this._state !== PENDING) {return};
//         this._state = state;
//         this._value = value;
//     }
//     /**
//      * 取出队列里的人物依次执行
//      */
//     _runHandles() {
//         if (this._state === PENDING) {return};
//         while(this._handles.length) {
//             const task = this._handles.shift();
//         }
//     }
//     /**
//      *
//      * @param {any} handle handle对象
//      */
//     _runOneHandle(handle) {

//     }
//     /**
//      *
//      * @param {Function} onFullfilled 成功时执行的回调函数
//      * @param {Function} onRejected 失败时执行的回调函数
//      */
//     then(onFullfilled,onRejected){
//         // 先处理传过来的函数，再进行判断执行什么操作
//         return new MyPromise((resolve, reject) => {
//             this._addToHandles(onFullfilled,FULFILLED, resolve,reject);
//             this._addToHandles(onRejected, REJECTED, resolve, reject);
//             this._runHandles();
//         });
//     }
//     catch(){}
//     finally(){}
//     all(){}
//     race(){}
//     _addToHandles() {
//         this._handles.push({fn,state,resolve,reject});
//     }
// }

// let a = new MyPromise((resolve, reject) => {
//     resolve(123);
// });
// console.log(a);

// Ajax
// XMLHttpRequest.readyState：一个无符号整型数字，表示请求的状态码，取值如下所示：
// 0：未初始化，尚未调用 open() 方法；
// 1：启动，已调用 open() 方法，但尚未调用 send() 方法；
// 2：发送，已调用 send() 方法，但尚未接收到响应；
// 3：接收，已接收到部分响应数据，但尚未完成；
// 4：完成，已接收到全部响应数据，可以在客户端使用了。

// XMLHttpRequest.status：一个无符号整型数字，表示请求的响应状态码，常见的响应状态码如下所示：
// 200：请求成功，服务器成功处理了请求；
// 404：请求失败，服务器未找到请求的页面；
// 500：服务器暂时不可用。
// function ajax() {
//     // 创建 XMLHttpRequest 对象
//     var request = new XMLHttpRequest();
//     // 实例化请求对象
//     request.open("GET", 'url');
//     // 监听 readyState 的变化
//     request.onreadystatechange = function() {
//         // 检查请求是否成功
//         if(this.readyState === 4) {
//             // 将来自服务器的响应插入当前页面
//             if(this.status === 200) {
//                 //请求成功，执行成功回调函数
//             } else {
//                 // 请求失败，执行失败回调函数
//             }
//         }
//     };
//     // 将请求发送到服务器
//     request.send();
// }

// var let const
// var 变量提升，可多次声明
// let/const 块级作用域，不可重复声明
// const必须初始化
// https://blog.csdn.net/qq_53225741/article/details/127339622

// null和undefined
// https://www.jb51.net/article/284204.htm
// null 空对象的引用   Number(null)  0
// undefined 未定值     Number(undefined)  NaN
// typeof null 'object'  typeof undefined 'undefined'
// null == undefined true  === false
// 判断null === null ， typeof 并且转bool为false

// JS数据类型和类型转换
// https://blog.csdn.net/weixin_69422396/article/details/135621587
// https://blog.csdn.net/m0_65655447/article/details/134207028
// BigInt https://juejin.cn/post/6844903902295359502   10 == 10n true 10 === 10n false
// 一元加号 + 将操作数转换成数字
// Object.prototype.toString().call()

// 如何实现输出OK
// var a;
// if (a==1&&a==2&&a==3) {console.log('OK')}

// var a = [1,2,3];
// a.toString = a.shift;
// if(a==1&&a==2&&a==3) {console.log('OK')}
// console.log(a);

// 数字每三位数加逗号
// let a = 1234567890;
// a += '';
// let reversed = [...a].reverse();
// let res = [];
// for(let i=0; i<a.length; i++) {
//     if (i!==0&& i%3===0) {
//         res.push(',')
//     }
//     res.push(reversed[i]);
// }
// console.log(res.reverse().join(''));

// 正则表达式
// https://blog.csdn.net/XSL_HR/article/details/130190704
// 定义正则  1. new RegExp(patetern, modifiers)     2. /patetern/modifiers pattern 匹配模式， modifiers 修饰，全局g/大小写i/多行m
// \w 数字字母下划线 \d 数字 \s空白字符
// * 零个或多个  ？零个或一个 +至少一个
// ^开头 $结尾
// test测试正则   match提取
// search检索，到第一个符合的返回index  'abrs123adfs455bnna'.search(/\d/)  4
// match提取符合的结果， 不是全局的话返回第一个的具体信息
// 'abrs123adfs455bnna'.match(/\d/)  [0: '1',groups: undefined, index: 4, input: 'abrs123adfs455bnna']
// 'abrs123adfs455bnna'.match(/\d/g)  ['1', '2', '3', '4', '5', '5']

// async/await
// async标记一个函数为异步函数，返回一个Promise对象， await表示等待执行，只能再async内使用

// vue/react/angular区别
// 1、vue.js更轻量，压缩后大小只有20K+, 但React压缩后大小为44k，Angular压缩后大小有56k，所以对于移动端来说，vue.js更适合；

// 2、vue.js更易上手，学习曲线平稳，而Angular入门较难，概念较多(比如依赖注入)，它使用java写的，很多思想沿用了后台的技术；react需学习较多东西，附带react全家桶。

// 3、vue.js吸收两家之长，借用了angular的指令(比如v-show,v-hide，对应angular的ng-show,ng-hide)和react的组件化(将一个页面抽成一个组件，组件具有完整的生命周期)

// 4、vue.js还有自己的特点，比如计算属性

// ES6
// let const 块级作用域，不会变量提升
// 解构 [a,b] = [1,2]  for(let [key, value] of map) {}
// 字符串模板 ``
// 数组  includes startsWith endsWith
// 数值 bigInt
// 函数，箭头函数， 默认值   function(a, b=5) {}
// 数组 Array.from Array.of Array.fill
// 对象Object.assign(target, source1, source2) Object.keys() Object.values()
// Set Map
// Promise
// class
// 扩展运算符 ...

// for in 和for of
// for in遍历对象，不仅遍历自身，还遍历原型链上的属性 对象，数组
// for of 遍历可遍历对象，数组，字符串,不会遍历原型链上属性 数组，字符串，set， map
// for(let i of 'abc') {console.log(i);}
// 阶乘
// function fac(n) {
//     if (n===1) return 1;
//     return n*fac(n-1);
// }
// console.log(fac(5));


// JD interview
// let arr = [
//     { id: 1, title: 'child1', parentId: 0 },
//     { id: 2, title: 'child2', parentId: 0 },
//     { id: 3, title: 'child1_1', parentId: 1 },
//     { id: 4, title: 'child1_2', parentId: 1 },
//     { id: 5, title: 'child2_1', parentId: 2 }
//   ]

// let  tree=[
//     {
//       'id': 1,
//       'title': 'child1',
//       'parentId': 0,
//       'children': [
//         {
//           'id': 3,
//           'title': 'child1_1',
//           'parentId': 1
//         },
//         {
//           'id': 4,
//           'title': 'child1_2',
//           'parentId': 1
//         }
//       ]
//     },
//     {
//       'id': 2,
//       'title': 'child2',
//       'parentId': 0,
//       'children': [
//         {
//           'id': 5,
//           'title': 'child2_1',
//           'parentId': 2
//         }
//       ]
//     }
// ]

// function convertArrToTree(arr) {
//     let tree = [];
//     const len = arr.length;
//     for(let i=0; i<len;i++) {
//         if(arr[i].parentId === 0) {
//             tree.push(arr[i]);
//         } else {
//             let parent = tree.filter(o => o.id === arr[i].parentId)[0];
//             if (!parent.children) {
//                 parent.children = [];
//             }
//             parent.children.push(arr[i]);
//         }
//     }
//     return tree;
// }
// console.log(convertArrToTree(arr));
