<template>
    <div>
        <div class="bg_grey">
        <el-container>
            <div style="width:100%">
                <div class="topTitle">
                    <h3>优惠资讯</h3>
                    <a href="" class="more">更多></a>
                </div>
                <div class="tsyw-ebank-owl">
                    <el-row>
                      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="pad">
                        <el-carousel height="237px">
                          <el-carousel-item v-for="item in imgs" :key="item">
                            <img :src="item">
                          </el-carousel-item>
                        </el-carousel>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="pad" style="padding-top:10px;">
                        <el-row>
                          <el-col v-for="title in discount" :key="title.key" :xs="24" class="dhy_liebiao">
                            <a href="">{{title.title}}</a>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                </div>
            </div>
        </el-container>
    </div>
    </div>
</template>

<script>
export default {
    data(){
      return{
        imgs:[
          'http://www.cqcbank.com/data/tosend/resource/upload/20181123/0d591e16-f615-46f6-abc4-8da13517adea.png',
          'http://www.cqcbank.com/data/tosend/resource/upload/20181123/c08d532c-c1d4-47b4-8add-dd4e110e8712.png',
          'http://www.cqcbank.com/data/tosend/resource/upload/20181123/3627d05a-bb0c-40bf-a04f-a330088e972c.png',
          'http://www.cqcbank.com/data/tosend/resource/upload/20181123/4d27445f-508d-46a4-9073-598fc6b7249b.png',
          'http://www.cqcbank.com/data/tosend/resource/upload/20181123/7344478b-537f-42a6-97da-b0732fe959bc.png',
        ],
        discount:[]
      }
    },
    created(){
      this.getaxios('/discount','post',[this.getdiscount])
    },
    methods:{
      getdiscount(data){
        this.discount = data.disc
      },
      getaxios(url,method,call) {
        this.axios({
          url:url,
          method:method
        }).then((ret) => {
          if(ret.data){
            call.forEach(element => {
              element(ret.data)
            });
          }else{
            console.log("获取data为空")
          }
        })
      }
    }
}
</script>

<style lang="scss" scoped>
.bg_grey{
  padding-bottom: 30px;margin-bottom: 30px;background-color: #fafafb;
  .topTitle{
    margin-top: 16px;margin-bottom: 16px;position: relative;border-bottom: solid 1px #dcdcdc;width: 100%;
    h3{font-size: 24px;color: #3b3d3e;border-bottom: 3px solid #da251c;line-height: 28px;padding: 8px 10px;display: inline-block;}
    a.more{color: #da251a;position: absolute;right: 4px;bottom: 8px;}
  }
}
.tsyw-ebank-owl{
  margin: 0 auto;padding-top: 15px;
  .pad{padding: 0 15px 0 15px;}
  .dhy_liebiao {
    height: 36px;line-height: 36px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    a{color: #666;}
    a:hover{color: red;}
  }
}
@media (max-width: 992px) {
  .bg_grey .topTitle h3 {font-size: 18px;padding: 4px 10px;}
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

