<template>
    <div class="green-channel">
        <el-container>
            <el-row style="width:100%;">
                <el-col :md="3" :sm="6" :xs="6" class="el-col_s" v-for="quicks in quick" :key="quicks.key">
                  <div class="pmg tra">
                    <a href=""><img :src="quicks.img" alt=""></a>
                  </div>
                  <div class="pmg">
                    <a href="">{{quicks.title}}</a>
                  </div>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
          quick:[]
        }
    },
    created(){
      this.getaxios('/quick','post',[this.getquick])
    },
    methods:{
      getquick(data){
        this.quick = data.qui
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
.green-channel{
  text-align: center;padding-bottom: 30px;
  .el-col_s{padding: 25px 15px 0 15px;.tra{margin-top: 3px;}}
  li{padding-bottom: 10px;}
  .pmg{
    position: relative;padding-bottom: 10px;
    a{width: 100%;color: #000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  }
}

@media (min-width: 992px){
  .green-channel{
    .el-col_s{.tra{transition: 0.5s};}
    .el-col_s:hover .tra{margin-top: -3px;margin-bottom: 6px;}
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
