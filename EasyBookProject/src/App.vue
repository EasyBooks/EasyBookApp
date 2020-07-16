<template>
  <div id="app">
	  <router-view></router-view>
	  <!-- 路由标签导航 -->
	  <van-tabbar route v-model="active">
	    <van-tabbar-item replace to="/bookmall" icon="home-o">书城</van-tabbar-item>
	    <van-tabbar-item replace to="/bookcase" icon="search">书架</van-tabbar-item>
	    <van-tabbar-item replace to="/usercenter" icon="setting-o">个人中心</van-tabbar-item>
	  </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';


export default {
  name: 'app',
  components: {
  Tabbar, TabbarItem
  },
  data(){
	  return{
		  active:0
	  }
  }
}
</script>

<style>

</style>
