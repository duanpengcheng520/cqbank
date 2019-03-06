<template>
    <div>
      <div>
        <el-container>
          <el-tabs v-model="activeName" class="tit" style="width:100%;margin-top: 20px;" >
            <!-- 投资理财 -->
            <el-tab-pane label="投资理财">
              <el-row>
                <el-col v-for="lics in invest1" :key="lics.key" :md="8" :sm="8" class="f_recom" style="padding:0 15px 0 15px;">
                  <div class="f_recom_item">
                    <h3>{{lics.title}}</h3>
                    <div class="f_percent">
                      <span class="f_percent_z">{{lics.percent}}</span><span class="f_percent_h">%</span>
                    </div>
                    <p class="f_textnew">{{lics.merit}}</p>
                    <ul class="f_tc">
                      <li class="f_rmb"><span>{{lics.money}}</span>万</li>
                      <li class="f_rmb"><span>{{lics.time}}</span>天</li>
                      <li class="f_rmb f_fxdj">{{lics.rate}}</li>
                    </ul>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <!-- 贵金属 -->
            <el-tab-pane label="贵金属">
              <div class="tsyw-ebank-owl">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" class="pad">
                    <img src="http://www.cqcbank.com/data/tosend/resource/upload/20180829/3b1b230c-f812-4939-b4ec-c5c7c2a1a57e.jpg" width="100%" height="250px">
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" class="pad" style="padding-top:10px;">
                    <el-row>
                      <el-col v-for="title in invest2" :key="title.key" :xs="24" class="dhy_liebiao">
                        <a href="">{{title.title}}</a>
                      </el-col>
                    </el-row>
                  </el-col>
                  </el-row>
              </div>
            </el-tab-pane>
            <!-- 基金 -->
            <el-tab-pane label="基金">
              <el-row>
                <el-col v-for="lics in invest3" :key="lics.key" :md="8" :sm="8" class="f_recom" style="padding:0 15px 0 15px;">
                  <div class="f_recom_item">
                    <h3>{{lics.title}}</h3>
                    <div class="f_percent">
                      <span class="f_percent_z">{{lics.percent}}</span>
                    </div>
                    <p class="f_textnew">{{lics.merit}}</p>
                    <ul class="f_tc">
                      <li class="f_rmb" style="width:50%;">{{lics.type}}</li>
                      <li class="f_rmb f_fxdj" style="width:50%;">{{lics.rate}}</li>
                    </ul>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <!-- 银保 -->
            <el-tab-pane label="银保">
              <el-row class="metal_pic">
                <el-col v-for="imgs in invest4" :key="imgs.key"  :md="6" :sm="12" style="padding:0 15px 0 15px;text-align: center;">
                  <img :src="imgs.img">
                  <h3><a href="">{{imgs.title}}</a></h3>
                </el-col>
              </el-row>
            </el-tab-pane>
            <!-- 长江直通车 -->
            <el-tab-pane label="长江直通车">
              <div class="tsyw-ebank-owl">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" class="pad">
                    <img src="http://www.cqcbank.com/data/tosend/resource/upload/20180829/16e73d54-9be2-489c-a50c-bd4484a65bf8.jpg" width="100%" height="250px">
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" class="pad" style="padding-top:10px;">
                    <el-row>
                      <el-col v-for="title in invest5" :key="title.key" :xs="24" class="dhy_liebiao">
                        <a href="">{{title.title}}</a>
                      </el-col>
                    </el-row>
                  </el-col>
                  </el-row>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-container>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      activeName:"",
      invest1:[],
      invest2:[],
      invest3:[],
      invest4:[],
      invest5:[],
    }
  },
  created(){
    this.getaxios('/invest1','post',[this.getinvest1])
    this.getaxios('/invest2','post',[this.getinvest2])
    this.getaxios('/invest3','post',[this.getinvest3])
    this.getaxios('/invest4','post',[this.getinvest4])
    this.getaxios('/invest5','post',[this.getinvest5])
  },
  methods:{
    getinvest1(data){
      this.invest1 = data.invest1
    },
    getinvest2(data){
      this.invest2 = data.invest2
    },
    getinvest3(data){
      this.invest3 = data.invest3
    },
    getinvest4(data){
      this.invest4 = data.invest4
    },
    getinvest5(data){
      this.invest5 = data.invest5
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
.tit {
  /deep/ .is-top{color: black;}
  /deep/ .el-tabs__active-bar{background-color: red;}
  /deep/ .is-active{font-size: 24px;color: #3b3d3e;font-weight: bold;}
  }
.f_recom{
  margin-bottom: 30px;
  .f_recom_item {
    background: #fff;border: 1px solid #dee0e6;text-align: center;overflow: hidden;height: 230px;padding:20px 0;box-sizing: border-box;
    h3{margin: 0;padding: 0;font-weight: normal;color: #000;height: 36px;font-size: 24px;}
  }
  .f_percent {
    font-weight: bold;font-size: 48px;height: 50px;padding-top: 20px;
    .f_percent_z{font-size: 48px;color: #ff6600;}
    .f_percent_h{font-size: 30px;color: #ff6600;}
  }
  .f_textnew {
    color: #aeaeae;font-size: 14px;line-height: 28px;
  }
  .f_tc {
    overflow: hidden;height: 55px;
    li {float: left;width: 33%;text-align: center;font-size: 18px;color: #000;}
    .f_rmb {
      padding-top: 14px;line-height: 36px;
      span{font-size: 30px;}
    }
    .f_fxdj {color: #009940;}
  }
}
@media (max-width: 992px){
  .f_recom .f_recom_item h3{font-size: 15px;}
}
@media (max-width: 768px){
  .f_recom .f_recom_item h3{font-size: 24px;}
}

.metal_pic{
  img {height: 220px;max-width: 100%;}
  h3 {
    font-size: 16px;overflow: hidden;white-space: nowrap;margin: auto;text-overflow: ellipsis;padding: 6px 0 9px 0;text-align: center;
    a{color: #666;font-weight: normal;font-size: 16px;}
  }
} 

.tsyw-ebank-owl{
  margin: 0 auto;padding-bottom: 6px;
  .pad{padding: 0 15px 0 15px;}
  .dhy_liebiao {
    height: 36px;line-height: 36px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    a{color: #666;}
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

