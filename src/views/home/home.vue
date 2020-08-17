<template>
	<div id="home">
		<nav-bar class='home-nav'><div slot="center">购物街</div></nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<home-recommend-view :recommends="recommends"></home-recommend-view>
		<feature-view></feature-view>
		<tab-control 
			:titles="['流行','新款','精选']" 
			class="tab-control"
			@tabClick = "tabClick" />
		<goods-list :goods="showGoods" class="goods-list"></goods-list>
		
		<ul>
			<li>11</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>11</li>
			<li>1</li>
			<li>1</li>
		</ul>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import TabControl from '../../components/content/tabcontrol/TabControl.vue'
	
	import HomeSwiper from './childcomps/HomeSwiper.vue'
	import HomeRecommendView from './childcomps/HomeRecommendView.vue'
	import FeatureView from './childcomps/FeatureView.vue'
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	
	import {getHomeMultidata,getHomeGoods} from '../../network/home.js'
	
	export default{
		name:"Home",
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommendView,
			FeatureView,
			TabControl,
			GoodsList
		},
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				currentType:'pop'
			}
		},
		created(){
				//请求多个数据
			this.getHomeMultidata(),
			//请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		methods:{
			//事件监听相关方法
			tabClick(index){
				switch(index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
			},
			//网络请求相关方法
			getHomeMultidata(){
				getHomeMultidata().then(res => {
					// console.log(res);
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			},
			getHomeGoods(type){
				const page = this.goods[type].page + 1;
				getHomeGoods(type,page).then(res => {
					// console.log(res);
					this.goods[type].list.push(...res.data.list);
					this.goods[type].page +=1
				})
			}
		}
	}
</script>

<style>
	#home{
		padding-top:44px;
	}
	.home-nav{
		background-color: var(--color-tint);
		color:white;
		position:fixed;
		left:0;
		right:0;
		top:0;
		z-index:9;
	}
	.tab-control{
		background-color: white;
		position: sticky;
		top:44px;
		z-index:9;
	}
</style>
