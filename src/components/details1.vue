<template>
    <div class="detail">
        <div v-for="val in obj">
            <div>
                <div>{{val.titles}}</div>
                <div>
                    <span><img :src="val.imgs" alt=""></span>
                    <span>{{val.sums}}</span>
                    <span>{{val.peoples}}</span>
                </div>
            </div>
            <div>
                免费
            </div>
            <div></div>
            <div class="active">
                <div>概要</div>
                <div>{{val.outlines}} </div>
            </div>
            <div class="active">
                <div>适用人群</div>
                <div>{{val.Suitables}}</div>
            </div>
            <div class="active">
                <div>机构/讲师</div>
                <div>
                    <img :src="val.imgs1" alt="">
                    <div>
                        <p>{{val.heads}}</p>
                    </div>
                </div>
                <div>{{val.containers}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'details1',
        data() {
            return {
                num:'',
                obj: [
                    {
                        titles: "如何克服拖延症！", imgs: "../../static/images/xin.png", sums: "5分", peoples: "95754人在学", outlines: "如果你的情况符合以下任何一种：下定决心想干某件事，然后，然后就没有然后了……早上7点睡醒，...", Suitables: "白领 职场小白", imgs1: "../../static/images/bsl.jpg", heads: "变色龙课堂", containers: "变色龙课堂是专注，PPT设计制作课程开发，PPT模板下载，演示演讲课程等www.ppt20.com"
                    },
                     {
                        titles: "设计师必学手绘～基础", imgs: "../../static/images/xin.png", sums: "5分", peoples: "134046人在学", outlines: "学习基础手绘设计的三个基本知识－透视、结构、光影色彩。透过示范，学生可以运用三个基本要素，熟悉设计图手绘的基本步骤之一：草稿打底，上色及描线。", Suitables: "设计手绘无基础者免费公开课－适合泛设计师及准设计师的手绘入门课手绘基础启迪之后，强烈建议继续巩固的系列课程【设计师必学手绘～全修】，可以保证对设计手绘的全面掌握的超能力。", imgs1: "../../static/images/bsl.jpg", heads: "安思手绘", containers: "《设计师的马克笔》图书作者 跨界营销人与创意人。安思手绘（Vianswer）创办人，英国WMP公司新产品开发顾问。曾任英商IMS企管咨询大中华区..."
                    }
                ]
            }
        },
        mounted:function() {
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
<style src="../assets/css/details1.less" lang="less" scoped>

</style>