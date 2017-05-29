<template>
	<div class="details">
		<section>
			<div v-for="(val,index) in obj">
				<img :src="val.imgs" alt="">
			</div>
			<div>
				<router-link :to="{path:'/details/details1',query: {id: this.num}}" tag="div" replace><span>简介</span></router-link>
				<router-link :to="{path:'/details/details2',query: {id: this.num}}" tag="div" replace><span>目录</span></router-link>
				<router-link :to="{path:'/details/details3',query: {id: this.num}}" tag="div" replace><span>评价</span></router-link>
			</div>
			<router-view></router-view>
		</section>
	</div>
</template>
<script>
	export default {
		name: 'details',
		data() {
			return {
				num: '',
				obj: [
					{imgs: "../../static/images/details.jpg" },
					{imgs:"../../static/images/details1.jpg"}
				]
			}
		},
		 mounted: function () {
			this.num = this.$route.query.id;
			//演示请点击前两条数据
			if(this.num>=0&&this.num<2){
				this.obj=this.obj.slice(this.num,this.num+1);
			}
			else{
				this.obj=this.obj.slice(0,1);
			}
			
		}
	}
</script>
<style scoped lang="less">	
    .details{
    section{
    	padding-top:40px;
    	padding-bottom: 50px;
    	display: flex;
    	flex-direction:column;
    	>div{
    		width: 100%;
            text-align: left;
    		align-self:flex-end;
            margin: 0px;
            border-top:0px;
    	}
    	>div:first-of-type{
			width: 100%;
    		>img{
				width:100%;
				display: block;
    		}
    	}
    	>div:nth-of-type(2){
    		width: 100%;
    		display:flex;
			margin:0;
    		>div{
				display: flex;
				justify-content:center;
    			text-align: center;
    			font-size:16px;
				flex:1;
				border-bottom:1px solid #E6EAF2;
				>span{
					width:50%;
					padding:8% 0%;
				}
    		}
    	}
    	
    }
}
.router-link-active{
	>span{
		color: #2CC17B;
    	border-bottom: 3px solid #2CC17B;
		}
 }
</style>