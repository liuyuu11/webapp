import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '../views/login.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Login,
        name: 'Login',
        hidden: true
    }, {
        path: '/hello',
        name: 'Hello',
        component: Hello
    }]
})
