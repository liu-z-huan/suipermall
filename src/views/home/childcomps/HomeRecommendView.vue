<template>
	<div class="recommends">
		<div v-for="item in recommends" class="recommend-item">
			<a href="item.link">
				<img :src="item.image">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:"HomeRecommendView",
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.recommends{
		display:flex;
		text-align: center;
		font-size: 12px;
		padding:13px 0 20px;
		border-bottom: 10px solid #eee;
	}
	.recommend-item{
		flex:1;
		margin-bottom: 10px;
	}
	.recommend-item img{
		width: 70px;
	}
</style>
