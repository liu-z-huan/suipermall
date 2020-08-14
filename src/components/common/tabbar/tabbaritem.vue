<template>
	<div class="tab-bar-item" @click="itemClick">
		<!-- <img src="../../assets/img/tabbar/首页(1).png">
		<div>首页</div> -->
		<slot v-if="isActive" name="item-img"></slot>
		<slot v-else name="item-img-active"></slot>
		<div :class="{active:!isActive}">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"TabBarItem",
		props:{
			path:String
		},
		data(){
			return{
				// isActive:true
			}
		},
		computed:{
			isActive(){
				return this.$route.path !==this.path
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex:1;
		text-align: center;
		height:49px;
		font-size: 14px;
	}
	.tab-bar-item img{
		height: 24px;
		width: 24px;
		margin-top:3px;
		vertical-align: middle;
		margin-bottom:3px;
	}
	.active{
		color:red
	}
</style>
