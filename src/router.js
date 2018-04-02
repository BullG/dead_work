import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

<<<<<<< HEAD
import store from '@/store'
// 拆分打包
const Home = resolve => require.ensure([], () => resolve(require('@/views/home/Home.vue')), 'Home')
const About = resolve => require.ensure([], () => resolve(require('@/views/about/About.vue')), 'About')
const About1 = resolve => require.ensure([], () => resolve(require('@/views/about1/About1.vue')), 'About1')
const About2 = resolve => require.ensure([], () => resolve(require('@/views/about2/About2.vue')), 'About2')
const About3 = resolve => require.ensure([], () => resolve(require('@/views/about3/About3.vue')), 'About3')
const About4 = resolve => require.ensure([], () => resolve(require('@/views/about4/About4.vue')), 'About4')
=======
import store from './store'
// 拆分打包
const Home = resolve => require.ensure([], () => resolve(require('./views/home/Home.vue')), 'Home')
const About = resolve => require.ensure([], () => resolve(require('./views/about/About.vue')), 'About')
const About1 = resolve => require.ensure([], () => resolve(require('./views/about1/About1.vue')), 'About1')
const About2 = resolve => require.ensure([], () => resolve(require('./views/about2/About2.vue')), 'About2')
const About3 = resolve => require.ensure([], () => resolve(require('./views/about3/About3.vue')), 'About3')
const About4 = resolve => require.ensure([], () => resolve(require('./views/about4/About4.vue')), 'About4')
>>>>>>> b88631b7eed6bdecc019f115b21932ee1d380c13

const router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            children: [{
                    path: '/about/about1',
                    name: 'about1',
                    component: About1
                },
                {
                    path: '/about/about2',
                    name: 'about2',
                    component: About2
                },
                {
                    path: '/about/about3',
                    name: 'about3',
                    component: About3
                },
                {
                    path: '/about/about4',
                    name: 'about4',
                    component: About4
                }
            ]
        }
    ]
})
router.beforeEach((route, redirect, next) => {
    /* 显示加载中动画 */
    store.commit('updateLoadingStatus', true)
    next()
})

router.afterEach(route => {
    /* 隐藏加载中动画 */
    store.commit('updateLoadingStatus', false)
<<<<<<< HEAD
    window.scrollTo(0, 0)
=======
>>>>>>> b88631b7eed6bdecc019f115b21932ee1d380c13
})
export default router