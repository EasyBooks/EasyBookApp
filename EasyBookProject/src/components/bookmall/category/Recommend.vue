<template>
	<div>
		<!-- 轮播推荐 -->
		<div id="shuffling">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="130">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
		</div>
		<!-- 类别宫格 -->
		<van-grid>
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
		</van-grid>
		<!-- 今日必看 -->
		<div>
			<van-cell value="今日必看" />
			<van-row>
				<van-col v-for="(item, index) in must" :key="index" :span="6" align="center">
						<van-image width="90" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<span>{{item.title}}</span>
				</van-col>
			</van-row>
		</div>
		<!-- 今日热推 -->
		<div>
			<van-cell value="今日热推" />

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				must: [{
					img: '',
					title: 'test'
				}, {
					img: '',
					title: 'test'
				}, {
					img: '',
					title: 'test'
				}, {
					img: '',
					title: 'test'
				}, ],
			}
		}
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

	#shuffling {
		width: 95%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 10px;
	}
</style>
