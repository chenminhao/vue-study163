<template>
  <div class="index">
    <section class="swiper-containers swiper-container-vertical swiper-container-free-mode">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
               <div class="swiper-slide"  v-for="val in swipers"><img :src="val" alt=""></div>
			    </div>
			     <div class="swiper-pagination"></div>
			</div>
		<nav>
			<ul>
				<li v-for="val1 in json1">
					<div>
						<img :src="val1.imgs" alt="">
						<p>{{val1.texts}}</p>
					</div>
				</li>
			</ul>
		</nav>
		<div>
			<div>
				<div>免费好课</div>
				<div @click="cmh()">免费排行榜&nbsp;&gt;</div>
			</div>
			<ul>
				<li v-for="val2 in json2">
					<img :src="val2.imgs" alt="">
					<p>{{val2.texts}}</p>
				</li>
			</ul>
		</div>
		<div>
			<div>
				<div>畅销好课</div>
				<div>畅销排行榜&nbsp;&gt;</div>
			</div>
			<ul>
				<li v-for="val3 in json3">
					<img :src="val3.imgs" alt="">
					<p>{{val3.texts}}</p>
					<div class="money">{{val3.moneys}}</div>
				</li>
			</ul>
		</div>
		<div>
			<div>专题</div>
			<img  v-for="val4 in special" :src="val4" alt="">
		</div>
		<div>
			<div>
				<div>办公效率</div>
				<div>更多&nbsp;&gt;</div>
			</div>
			<ul>
				<li v-for="val5 in json5">
					<img :src="val5.imgs" alt="">
					<p>{{val5.texts}}</p>
				</li>
			</ul>
		</div>
		<div class="swiper-scrollbarss"></div>
		</section>
  </div>
</template>

<script>
import '../../static/js/swiper-3.4.2.min.js'
import '../assets/css/swiper-3.4.2.min.css'

export default {
  name: 'index',
  data () {
    return {
      swipers:[
          "../../static/images/lbt1.png",
          "../../static/images/lbt2.jpg",
          "../../static/images/lbt3.jpg",
          "../../static/images/lbt4.jpg"
      ],
			json1:[
					{"imgs":"../../static/images/nav1.png","texts":"微专业"},
					{"imgs":"../../static/images/nav2.png","texts":"办公效率"},
					{"imgs":"../../static/images/nav3.png","texts":"编程开发"},
					{"imgs":"../../static/images/nav4.png","texts":"产品与设计"},
					{"imgs":"../../static/images/nav5.png","texts":"生活方式"},
					{"imgs":"../../static/images/nav6.png","texts":"市场营销"},
					{"imgs":"../../static/images/nav7.png","texts":"职业发展"},
					{"imgs":"../../static/images/nav8.png","texts":"更多课程"}
				],
			json2:[
				{"imgs":"../../static/images/main-1-1.jpg","texts":"好玩儿的PPT动画技巧"},
				{"imgs":"../../static/images/main-1-2.png","texts":"折纸进阶教程"},
				{"imgs":"../../static/images/main-1-3.jpg","texts":"新版标准日本语初级(上册)精讲"},
				{"imgs":"../../static/images/main-1-4.jpg","texts":"PPT从菜鸟到高手实用教程"},
				{"imgs":"../../static/images/main-1-5.png","texts":"从零开始学炒股"},
				{"imgs":"../../static/images/main-1-6.jpg","texts":"女神经教你WPS"}
		],
			json3:[
				{"imgs":"../../static/images/main-2-1.png","texts":"手机视频达人全攻略","moneys":"￥96"},
				{"imgs":"../../static/images/main-2-2.jpg","texts":"赢得时间的30种妙计","moneys":"￥96"},
				{"imgs":"../../static/images/main-2-3.jpg","texts":"通关面试必修的4门课","moneys":"￥96"},
				{"imgs":"../../static/images/main-2-4.jpg","texts":"PPT从菜鸟到高手实用教程","moneys":"￥96"},
				{"imgs":"../../static/images/main-2-5.jpg","texts":"松哥中级统计教程","moneys":"￥96"},
				{"imgs":"../../static/images/main-2-6.png","texts":"用心理学拯救低效人生","moneys":"￥96"}
		],
		special:[
          "../../static/images/special1.jpg",
          "../../static/images/special2.jpg",
          "../../static/images/special3.jpg"
      ],
				json5:[
				{"imgs":"../../static/images/main-3-1.jpg","texts":"Excel Power Pivot数据建模分析"},
				{"imgs":"../../static/images/main-3-2.jpg","texts":"你不知道的Windows"},
				{"imgs":"../../static/images/main-3-3.jpg","texts":"十分钟玩转PPT"},
				{"imgs":"../../static/images/main-3-4.jpg","texts":"30天玩爆数据透视表"},
				{"imgs":"../../static/images/main-3-5.jpg","texts":"和秋叶一起学Excel"}
		]
    }
  },
  methods:{
    cmh:function(){
      this.$router.push('/list/list1');
    }
  },
  mounted(){
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="../assets/css/index.less" scoped>
</style>
