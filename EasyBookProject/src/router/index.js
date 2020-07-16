import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const BookCase = () =>import("../components/bookcase/BookCase.vue");
const BookMall = () =>import("../components/bookmall/BookMall.vue");
const UserCenter = () =>import("../components/usercenter/UserCenter.vue");
const Recommend = () =>import("../components/bookmall/category/Recommend.vue");
const Men = () =>import("../components/bookmall/category/Men.vue");
const Women = () =>import("../components/bookmall/category/Women.vue");
let routes = [
	{path:'/bookcase',component:BookCase},//书架
	{path:'/bookmall',component:BookMall,
		children:[
			{path:'recommend',component:Recommend},//推荐
			{path:'men',component:Men},//男生分类
			{path:'women',component:Women}//女生分类
		]
	},//书城
	{path:'/usercenter',component:UserCenter}//用户中心
]

export default new Router({routes});
