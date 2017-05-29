<template>
    <main class="details2">
        <div v-for="val in obj.heads">{{val}}</div>
        <ol>
            <div v-for="val1 in contain">
            <li v-for="val2 in val1">{{val2}}</li>
            </div>
        </ol>
    </main>
</template>
<script>
    export default {
        name: 'details2',
        data() {
            return {
                num: '',
                obj: {
                    heads: ['拖延症', '透视']
                },
                contain: [['1. 拖延症的类型',
                    '2. 拖延症从何而来？',
                    '3. 第三节拖延症的危害',
                    '4. 战拖，从抗击懒惰开始',
                    '5. 再见吧，拖拉斯基',
                    '6. 让完美主义见鬼去吧',
                    '7. 没有任何借口',
                    '8. 打造强大的执行力',
                    '9. 有目标的人才不拖延',
                    '10. 时间管理，终结拖延恶习',
                '11. 来吧！给自己来点正能量'],
                    ['1.一点透视 1',
                    '2.一点透视 2',
                    '3.二点透视 1',
                    '4.二点透视 2',
                    '5.三点透视',
                    '6.平面',
                    '7.立体',
                    '8.组合',
                    '9.光影',
                    '10.调子',
                    '11.色彩']
                ]
            }
        },
        mounted: function () {
            this.num = this.$route.query.id;
            //演示请点击前两条数据
            if (this.num >= 0 && this.num < 2) {
                this.obj.heads = this.obj.heads.slice(this.num, this.num + 1);
                this.contain=this.contain.slice(this.num,this.num+1);
            }
            else {
                this.obj.heads = this.obj.heads.slice(0, 1);
                this.contain = this.contain.slice(0, 1);
            }
        }
    }
</script>
<style src="../assets/css/details2.less" lang="less" scoped>
</style>