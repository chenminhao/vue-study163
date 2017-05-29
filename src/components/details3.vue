<template>
    <div class="details3">
        <div v-for="vals in arrc">
            <div v-for="val in vals">
                <div class="nImg">
                    <img :src="val.imgs">
                </div>
                <div class="nText">
                    <div>
                        <span>{{val.texts}}</span>
                        <span>{{val.dates}}</span>
                    </div>
                    <div>
                        {{val.comments}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'details3',
        data() {
            return {
                arrc: [
                    [
                        { "imgs": "../../static/images/people1 (1).jpg", "texts": "dia02431", "dates": "5月23日", "comments": "说的有道理！" },
                        { "imgs": "../../static/images/people1 (2).jpg", "texts": "我是谁", "dates": "5月23日", "comments": "" },
                        { "imgs": "../../static/images/people1 (3).jpg", "texts": "告白88", "dates": "5月23日", "comments": "秃驴" },
                        { "imgs": "../../static/images/people1 (4).jpg", "texts": "太牛他", "dates": "5月23日", "comments": "" },
                        { "imgs": "../../static/images/people1 (2).jpg", "texts": "屋顶上的舞", "dates": "5月23日", "comments": "" }
                    ],
                    [
                        { "imgs": "../../static/images/people1 (1).jpg", "texts": "dia02431", "dates": "5月23日", "comments": "66666666" },
                        { "imgs": "../../static/images/people1 (4).jpg", "texts": "太牛他", "dates": "5月23日", "comments": "5555555" },
                        { "imgs": "../../static/images/people1 (2).jpg", "texts": "屋顶上的舞", "dates": "5月23日", "comments": "222222" },
                          { "imgs": "../../static/images/people1 (2).jpg", "texts": "我是谁", "dates": "5月23日", "comments": "hhhhhhh" },
                        { "imgs": "../../static/images/people1 (3).jpg", "texts": "告白88", "dates": "5月23日", "comments": "秃驴" }
                    ]
                ]
            }
        },
        mounted: function () {
        this.num = this.$route.query.id;
        //演示请点击前两条数据
        if (this.num >= 0 && this.num < 2) {
            this.arrc=this.arrc.slice(this.num,this.num+1);
        }
        else {
            this.arrc = this.arrc.slice(0, 1);
        }
    }
    }
</script>
<style src="../assets/css/details2.less" lang="less" scoped>
</style>