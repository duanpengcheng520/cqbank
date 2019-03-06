<template>
    <div class="bg_grey">
        <el-container>
            <div style="width:100%">
                <div class="topTitle">
                    <h3>特色业务</h3>
                    <a href="" class="more">更多></a>
                </div>
                <div class="tsyw-ebank-owl">
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="item in imgs" :key="item" style="text-align: center;">
                            <img :src="item" class="img_sr">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </el-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgs:[
                'http://www.cqcbank.com/data/tosend/resource/upload/20181123/643be009-8057-4956-a137-a5c0836569ca.JPG',
                'http://www.cqcbank.com/data/tosend/resource/upload/20181123/594615db-ea29-4cfe-bc21-88e8ad1545fe.JPG',
                'http://www.cqcbank.com/data/tosend/resource/upload/20181123/4a10de9b-4dbe-454f-830e-2cf5d1c4eb96.JPG',
                'http://www.cqcbank.com/data/tosend/resource/upload/20181123/abb70a07-4238-4a7c-a982-ac1a78f1c006.JPG',
                'http://www.cqcbank.com/data/tosend/resource/upload/20181123/fb577cea-5293-44d3-abb5-77aeb985c600.png',
                'http://www.cqcbank.com/data/tosend/resource/upload/20181123/6f89da89-353c-4f88-83db-2016dd240cde.png',
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.bg_grey{
    background-color: #fafafb;padding-bottom: 20px;
    .topTitle{
        margin-top: 16px;margin-bottom: 16px;position: relative;border-bottom: solid 1px #dcdcdc;width: 100%;
        h3{font-size: 24px;color: #3b3d3e;border-bottom: 3px solid #da251c;line-height: 28px;padding: 8px 10px;display: inline-block;}
        a.more{color: #da251a;position: absolute;right: 4px;bottom: 8px;}
        
    }
}
.tsyw-ebank-owl{
    margin: 0 auto;padding-top: 15px;
}
.img_sr{width: 270px;height: 200px;}

@media (max-width: 992px) {
    .bg_grey .topTitle h3 {font-size: 18px;padding: 4px 10px;}
    .img_sr{width: 100%; height: 90%;}
}













.el-container {
  padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;
}
@media (min-width: 768px){
	.el-container{width: 750px;}
}
@media (min-width: 992px){
  .el-container {width: 970px;}
  .menu{width: 470px;}
}
@media (min-width: 1200px){
  .el-container{width: 1200px !important;}
  .menu{width: 620px;}
}
</style>

