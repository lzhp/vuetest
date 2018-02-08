import Vue from 'vue'
import VueRouter from 'vue-router'
//import routes from './routes.js'
import App from './App.vue'

Vue.use(VueRouter)

//import App from './App.vue'
import Father1 from './components/comm/father.vue'
import Father2 from './components/comm2/father.vue'

const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
const My404 = { template: '<div>404</div>' }

const routes = [
    { path: '/', component: Home },
    { path: '/first', component: First },
    { path: '/1', component: Father1 },
    { path: '/2', component: Father2 },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '*', component: My404 }
]


const Router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
})

// Vue.config.debug = true;

// // 1. 定义（路由）组件。
// // 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }

// import App from './App.vue'
// import Father1 from './components/comm/father.vue'
// import Father2 from './components/comm2/father.vue'



// // 2. 定义路由
// // 每个路由应该映射一个组件。 其中"component" 可以是
// // 通过 Vue.extend() 创建的组件构造器，
// // 或者，只是一个组件配置对象。
// // 我们晚点再讨论嵌套路由。
// const routes = [
//     { path: '/', component: App },
//     { path: '/first', component: First },
//     { path: '/1', component: Father1 },
//     { path: '/2', component: Father2 },
//     { path: '/foo', component: Foo },
//     { path: '/bar', component: Bar },
//     { path: '*', component: App }
// ]

// // 3. 创建 router 实例，然后传 `routes` 配置
// // 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//     mode: 'history',
//     //base: __dirname,
//     routes // （缩写）相当于 routes: routes
// })

// // 4. 创建和挂载根实例。
// // 记得要通过 router 配置参数注入路由，
// // 从而让整个应用都有路由功能
// // const myapp = new Vue({
// //     router: router
// // }).$mount('#app')

// new Vue({
//     el: '#app',
//     template: '<Father1/>',
//     components: { Father1 }
// })