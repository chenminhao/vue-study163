<template>
  <div id="app">
   <header style="z-index: 999;background:#fff;">
			<div @click="index($event)">云课堂</div>
			<div>
				<div>
					<i class="iconfonts">&#xe614;</i>
				</div>
				<div>
					<i class="iconfonts">&#xe680;</i>
					<i @click="shows" class="iconfonts">&#xe606;</i>
				</div>
			</div>
		</header>
    <router-view></router-view>
    <footer>
			    ©1997-2017 网易公司 版权所有
		</footer>
		<div class="subnav" v-show="count">
			<ul>
				<li>我的学习</li>
				<li>我的购物车</li>
				<li>我的订单</li>
				<li>我的优惠劵</li>
				<li>登录/注册</li>
			</ul>
		</div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
	computed:mapGetters([
			'count'
	]),
	methods:{
		index:function(){
			this.$router.push('/');
		},
		...mapActions([
			'shows'
		])
	}
}
</script>

<style lang="less" src="./assets/css/index.less" scoped>
</style>
