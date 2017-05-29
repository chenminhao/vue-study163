<template>
    <div class="list">
        <nav>
            <router-link  to="/list/list1" tag="div" replace>免费排行</router-link>
            <router-link  to="/list/list2" tag="div" replace>畅销排行</router-link>
		</nav>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:'list'
    }
</script>
<style lang="less" scoped>
    @import '../assets/css/normalize.css';
    @import '../assets/css/list.less';
    .router-link-active{
		color: #2CC17B;
    	border-bottom: 3px solid #2CC17B;
 }
</style>