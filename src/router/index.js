import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('@/components/Main')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/login/Login')
        },
        {
            path: '/regist',
            name: 'regist',
            component: () => import('@/views/regist/Regist')
        },
        {
            path: '/find/id',
            name: 'findId',
            component: () => import('@/views/find/Id')
        },
        {
            path: '/find/password',
            name: 'findPassword',
            component: () => import('@/views/find/Password')
        },
        {
            path: '/mypage',
            name: 'mypage',
            component: () => import('@/views/myPage/My')
        },
        {
            path: '/coupon',
            name: 'coupon',
            component: () => import('@/views/coupon/Coupon')
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('@/views/faq/Faq')
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('@/views/detail/Detail')
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
