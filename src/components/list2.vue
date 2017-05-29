<template>
    <div class="list">
		<section>
			<ul>
				<li v-for="val in json">
					<div><a><img :src="val.imgs" alt=""></a>
					</div>
					<div>
                        <div>{{val.texts}}</div>
                         <div>{{val.peoples}}</div>
					</div>
				</li>
			</ul>
		</section>
    </div>
</template>
<script>
    export default{
        name:'list2',
        data () {
            return {
                json:[
                    {"imgs":"../../static/images/rank6.jpg","texts":"精读新概念英语3【公开课】","peoples":"95760人学过"},
                    {"imgs":"../../static/images/rank7.jpg","texts":"心理咨询师网络培训班","peoples":"95760人学过"},
                    {"imgs":"../../static/images/rank8.png","texts":"从零开始学会计—让你轻松掌握会计基础知识","peoples":"95760人学过"},
                    {"imgs":"../../static/images/rank9.jpg","texts":"windows下的技巧与工具（基于win7/8/10）","peoples":"95760人学过"},
                    {"imgs":"../../static/images/rank10.jpg","texts":"这可能是史上最易懂的日语语法课","peoples":"95760人学过"},
                    {"imgs":"../../static/images/rank1.jpg","texts":"如何克服拖延症！","peoples":"95760人学过"},
                    {"imgs":"../../static/images/rank3.jpg","texts":"恋爱学堂－最实用的恋爱教学（男士篇）","peoples":"95760人学过"},
                    {"imgs":"../../static/images/rank4.png","texts":"手把手教你做霸气简历","peoples":"95760人学过"},
                    {"imgs":"../../static/images/rank5.png","texts":"2016新版Ps平面设计基础及进阶","peoples":"95760人学过"},
                    {"imgs":"../../static/images/rank2.jpg","texts":"设计师必学手绘～基础","peoples":"95760人学过"}
                    
                ]
            }
        }
    }
</script>
<style lang="less" src="../assets/css/list.less" scoped>
    @import '../assets/css/normalize.css';
</style>