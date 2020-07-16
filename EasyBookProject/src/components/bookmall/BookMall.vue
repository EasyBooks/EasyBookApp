<template>
	<div>
		<div style="height:30px"></div>
		<van-search input-align="center" shape="round" placeholder="请输入搜索关键词" />
		<van-tabs v-model="activeName">
		  <van-tab title="推荐" to="/bookmall/recommend" name="a"></van-tab>
		  <van-tab title="男生" to="/bookmall/men" name="b"></van-tab>
		  <van-tab title="女生" to="/bookmall/women" name="c"></van-tab>
		</van-tabs>
		<router-view></router-view>	
	</div>
</template>

<script>
	import { Search } from 'vant';
	import { Tab, Tabs } from 'vant';
	export default{
		components:{
			Search,
			Tab,
			Tabs 
		},
		data(){
			return{
				activeName:'a'
			}
		}
	}
</script>

<style>
</style>
