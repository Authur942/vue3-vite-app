import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/dashboard'
	},
	{
		path: '/Home',
		name: 'Home',
		component: () => import('../View/Home.vue'),
		children: [
			{
				path: '/dashboard',
				name: 'Dashboard',
				meta: {
					title: '系统首页'
				},
				component: () => import('../components/Dashboard.vue')
			}
		]
	},
	{
		path: '/Login',
		name: 'Login',
		meta: {
			title: '登录'
		},
		component: () => import('../View/Login.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | vue3-vite-app`
	const role = localStorage.getItem('ms_username')
	if (!role && to.path !== '/Login') {
		next('/Login')
	} else if (to.meta.permission) {
		role === 'admin' ? next() : next('/403')
	} else {
		next()
	}
})

export default router
