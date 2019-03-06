<template>
  <div class="news-recommend">
    <el-container>
      <el-row style="width:100%">
        <el-col :sm="12" class="pad">
          <div class="dhy_tit">
            重行动态
            <a href="/cn/jrch/xwzx/chdt/index.html" class="more">更多&gt;</a>
          </div>
          <el-row>
            <el-col v-for="title in chnews" :key="title.key" :xs="24" class="dhy_liebiao">
              <a href="">{{title.title}}</a>
            </el-col>
          </el-row>
        </el-col>
        <el-col :sm="12" class="pad">
          <div class="dhy_tit">
            最新公告
            <a href="/cn/jrch/xwzx/chdt/index.html" class="more">更多&gt;</a>
          </div>
          <el-row>
            <el-col v-for="title in chnews" :key="title.key" :xs="24" class="dhy_liebiao">
              <a href="">{{title.title}}</a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      chnews:[],
      latnews:[],
    }
  },
  created(){
    this.getaxios('/chnews','post',[this.getchnews])
    this.getaxios('/latnews','post',[this.getlatnews])
  },
  methods:{
    getchnews(data){
      this.chnews = data.ch
    },
    getlatnews(data){
      this.latnews = data.lat
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
    },
  }
}
</script>

<style lang="scss" scoped>
.news-recommend{
  padding: 20px 0px 50px 0px;background-color: #fafafb;
  .pad{padding: 0 15px 0 15px;}
  .dhy_tit {
    font-size: 24px;margin-top: 10px;position: relative;margin-bottom: 20px;height: 40px;line-height: 40px;overflow: hidden;
    .more {color: #da251a;font-size: 14px;position: absolute;right: 0;top: 0;}
  }
  .dhy_liebiao {
    height: 36px;line-height: 36px;overflow: hidden;white-space: nowrap; text-overflow: ellipsis;
    a:hover{color: red;}
  }
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

