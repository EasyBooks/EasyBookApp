<template>
	<div>
		<!-- 轮播 -->
		<div id="shuffling">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="130">
			  <van-swipe-item>1</van-swipe-item>
			  <van-swipe-item>2</van-swipe-item>
			  <van-swipe-item>3</van-swipe-item>
			  <van-swipe-item>4</van-swipe-item>
			</van-swipe>
		</div>
		<!-- 宫格 -->
		<van-grid>
		  <van-grid-item icon="photo-o" text="文字" />
		  <van-grid-item icon="photo-o" text="文字" />
		  <van-grid-item icon="photo-o" text="文字" />
		  <van-grid-item icon="photo-o" text="文字" />
		</van-grid>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'vant';
	import { Grid, GridItem } from 'vant';
	export default{
		
	}
</script>

<style>
	 .my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;
		border-radius: 1.25rem;
	  }
	  
	  #shuffling{
		  width:95%;
		  margin-left: auto;
		  margin-right: auto;
		  margin-top:10px;
	  }
</style>
