const routes = [
    {
        path: '/',
        name: 'AppLayout',
        component: () => import('../layouts/AppLayout.vue'),
        children: [
            {
                path: '/',
                name: 'TopAnime',
                meta: {requireAuth: false},
                component: () => import('../views/TopAnime.vue')
            },
            {
                path: '/top-manga',
                name: 'TopManga',
                meta: {requireAuth: false},
                component: () => import('../views/TopManga.vue')
            },
            {
                path: '/schedule',
                name: 'ScheduleAnime',
                meta: {requireAuth: false},
                component: () => import('../views/ScheduleAnime.vue')
            },
            {
                path: '/forum',
                name: 'Forum',
                meta: {requireAuth: true},
                component: () => import('../views/Forum.vue')
            },
            {
                path: '/forum/:id',
                name: 'ForumDetail',
                meta: {requireAuth: true},
                component: () => import('../views/ForumDetail.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: {requireAuth: false},
        component: () => import('../views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {requireAuth: false},
        component: () => import('../views/auth/Register.vue')
    }
];

export default routes;