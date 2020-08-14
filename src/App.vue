<template>
  <div id="app">
		<router-view></router-view>
		<tab-bar>
		  <tab-bar-item path="/home">
			  <img src="./assets/img/tabbar/首页(1).png" slot="item-img">
			  <img src="./assets/img/tabbar/首页.png" slot="item-img-active">
			  <div slot="item-text">首页</div>
		  </tab-bar-item>
		  <tab-bar-item path="/category">
			  <img src="./assets/img/tabbar/分类(1).png" slot="item-img">
			  <img src="./assets/img/tabbar/分类.png" slot="item-img-active">
			  <div slot="item-text">分类</div>
		  </tab-bar-item>
		  <tab-bar-item path="/cart">
			  <img src="./assets/img/tabbar/购物车(1).png" slot="item-img">
			  <img src="./assets/img/tabbar/购物车.png" slot="item-img-active">
			  <div slot="item-text">购物车</div>
		  </tab-bar-item>
		  <tab-bar-item path="/profile">
			  <img src="./assets/img/tabbar/我的(1).png" slot="item-img">
			  <img src="./assets/img/tabbar/我的.png" slot="item-img-active">
			  <div slot="item-text">我的</div>
		  </tab-bar-item>
		</tab-bar>
  </div>
</template>

<script>
	import TabBar from './components/common/tabbar/tabbar.vue'
	import TabBarItem from './components/common/tabbar/tabbaritem.vue'
	
	export default {
		name: 'App',
		components: {
		  TabBar,
		  TabBarItem
		}
	}
</script>

<style>
	@import "assets/css/base.css"
</style>
