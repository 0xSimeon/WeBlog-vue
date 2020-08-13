import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '',
		name: 'Home',
		component: Home,
	},
	{
		path: '/posts/:id',
		name: 'BlogPost',
		component: () => import('../views/BlogPost.vue'),
	},
	{
		path: '/author/:username',
		name: 'Author',
		component: () => import('../views/Author.vue'),
  },

  {
		path: '/author/simeon',
		name: 'Author',
		component: () => import('../views/Author.vue'),
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
