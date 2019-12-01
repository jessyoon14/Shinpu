import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './pages/HomePage.vue';

Vue.use(Router)
export default new Router({
    routes: [{
        //redirect nonexistent address to home
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/members',
        name: 'members',
        component: () =>
            import('./pages/MembersPage.vue')

    },
    {
        path: '/history',
        name: 'history',
        component: () =>
            import('./pages/HistoryPage.vue')
    }
    ]
})