<template>
  <div class="headerg">
    <!-- 顶部信息 -->
    <div  class="topbar">
      <el-container>
        <div style="width:100%">
          <div class="fl scale">
            <a href="" class="tag">简体</a>
            <span>|</span>
            <a href="">繁体</a>
            <span>|</span>
            <a href="">English</a>
          </div>
          <div style="padding-bottom: 5px;float: right;" class="fr scale">
            <span>
              <a href="">首页</a>
            </span>
            <span>24小时客服热线：96899</span>
            <span>|</span>
            <a href="">采购信息</a>
            <span>|</span>
            <a href="">各地分行</a>
            <div class="input-group">
              <el-input placeholder="请输入内容搜索" v-model="input1" class="input-sty-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>  
        </div>
      </el-container>
    </div>
    <!-- 头部信息 -->
    <el-header id="tag">
      <el-container>
        <div style="width:100%;">
          <div class="fl" style="height:90px">
            <a href="">
                <img src="http://www.cqcbank.com/data/tosend/resource/template/cn/images/logo.png" alt="重庆银行" class="logo">
            </a>
          </div>
          <div class="fr" style="padding:15px 0 0 0;">
            <el-button type="danger" @click="onNavpc = !onNavpc"><a style="color:white;font-weight:600;">网银登录</a></el-button>
          </div>
          <!-- nav部分 -->
          <div class="fr menu" >
            <ul class="navbar-nav" style="padding:0px;">
              <li v-for="tltleing in header" :key="tltleing.key" @mouseenter="over(tltleing)" @mouseleave="out(tltleing)">
                <a class="dropdown-toggle" href="" >{{tltleing.tltle}}</a>
                <div :class="{'hide':tltleing.show}">
                  <div class="dropdown-menu">
                    <div class="dropdown-menu-bot">
                        <el-container>
                      <div class="row">
                          <el-row>
                            <el-col :md="4" :sm="8" :xs="12" class="surface" v-for="titlefi in tltleing.tltles" :key="titlefi.key" >
                              <li class="title"><a href="">{{titlefi.maxtltle}}</a></li>
                              <li class=" mintitle"  v-for="titleri in titlefi.mintltles" :key="titleri.key"><a href="">{{titleri.mintltle}}</a></li>
                            </el-col>
                          </el-row>
                      </div>
                        </el-container>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </div>
        </div>
      </el-container>
    </el-header>
    <!-- 移动端头部 -->
    <van-nav-bar @click-left="onNavLeft = !onNavLeft" @click-right="onNavRight = !onNavRight" class="hidden-md-and-up" >
    <van-icon name="wap-nav" slot="left" />
      <img src="http://www.cqcbank.com/data/tosend/resource/template/cn/images/logo.png" slot="title" style="height:30px;" />
      <van-icon name="contact" slot="right" />
    </van-nav-bar>
    <van-popup v-model="onNavLeft" position="left" class="navdiv">
      <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <!-- 移动端nav部分 -->
      <el-collapse v-model="activeName">
        <el-collapse-item v-for="tltleing in header" :key="tltleing.key" :title="tltleing.tltle" :name="tltleing.key" style="padding-left:2px;">
          <div class="nav-tlt" v-for="titlefi in tltleing.tltles" :key="titlefi.key">
            <div class="nav-tltop"><a href="">{{titlefi.maxtltle}}</a></div>
            <div v-for="titleri in titlefi.mintltles" :key="titleri.key"><a href="">{{titleri.mintltle}}</a></div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </van-popup>
    <!-- 移动端登录部分 -->
    <van-popup v-model="onNavRight" position="top">
      <van-cell-group>
        <van-field v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名"/>
        <van-field v-model="password" type="password" label="密码" peholder="请输入密码" required/>
        <van-button type="danger" class="login_button" @click="Login">登录</van-button>
        <p style="text-align: center;">温馨提示: {{lay}}</p>
      </van-cell-group>
    </van-popup>
    <!-- pc端登录部分 -->
    <van-popup v-model="onNavpc">
      <van-cell-group>
        <div class="Navpc">
          <div class="Navpc_title">用户名登录</div>
          <div class="Navpc_input">
            <van-field v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名"/>
            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
            <van-button type="danger" class="vanst" @click="Login">登录</van-button>
            <p style="text-align: center;">温馨提示: {{lay}}</p>
          </div>
        </div>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1:'',//搜索框
      header:[],//头部数据,
      onNavLeft:false,
      onNavRight:false,
      onNavpc:false,
      activeName:['1'],
      input1:'',
      username:'',
      password:'',
      lay:'请输入账号密码!'
    }
  },
  created(){
    this.getaxios('/header','post',[this.getNav])
    window.onload = function(){
      var oDiv = document.getElementById("tag"), H = 0, Y = oDiv
      while (Y) {
        H += Y.offsetTop; 
        Y = Y.offsetParent;
      }
      window.onscroll = function(){
        var s = document.body.scrollTop || document.documentElement.scrollTop
        if(s>H) {
          oDiv.style = "position:fixed;top:0;z-index:99;background-color: #ffffff;box-shadow: 0 6px 7px #efeeee;"
        } else {
          oDiv.style = ""
        }
      }
    }
  },
  methods:{
    over(tltleing){
      this.header.forEach(function(item){
          item.show = true;
      })
      tltleing.show = false;
    },
    out(tltleing){
      tltleing.show = true;
    },
    getNav(data){
      this.header = data.hea
    },
    Login(){
      this.getaxios('/login','post',[this.getLogin])
    },
    getLogin(data){
      if (data.username == this.username&&data.password == this.password) {
        this.lay = '登录成功!'
        history.go(0)
      }else if(this.username == ''){
        this.lay = '请输入用户名!'
      }else if(this.password == ''){
        this.lay = '请输入密码!'
      }else{
        this.lay = '账号或密码错误!'
      }
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
.headerg{padding-top: 20px;}
.el-header{color: #333;line-height: 60px;padding: 0;height: 90px!important;width: 100%;}
.topbar{
  position: relative;padding-top: 5px;line-height: 30px;background-color: #f5f5f5;zoom: 1;
  a,span{padding: 0 5px;}
  a.tag{color: #da251c;}
  .input-group {width: 200px;display: inline-block;}
}
.input-sty-select /deep/.el-input__inner{height: 28px!important;}
.logo{width: auto;height: 50px;margin-top: 20px;margin-left: 15px;margin-bottom: 20px;}
.navbar-nav > li {
  
	padding-bottom: 15px;padding-top: 14px;line-height: 60px;float: left;width: 90px;text-align:right;
	a{color: #6e6e6e;font-size: 19px;}
	.dropdown-menu {
		position: absolute;
		text-align: left;
    z-index: 1000;
		left: 0;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    border: 0;
    border-radius: 0;
    border-top: 2px solid #ddd;
    opacity: 0.9;
    border-top-color: #f7bd1f;
    border-top-style: solid;
    border-top-width: 0;
    -moz-box-shadow: 0 0 6px #ccc;
    -webkit-box-shadow: 0 0 6px #ccc;
    box-shadow: 0 0 6px #ccc;
    -moz-opacity: 0.9;}
}
.dropdown-menu-bot {text-align: left;background-color: #e9ebec;padding: 20px 20px 18px;line-height: 2;background: #f8f8f8;}
.row {
  margin-right: -15px;margin-left: -15px;width:100%;
  .surface{
    padding: 0 15px 0 15px;
    .title{
      line-height: 32px;padding: 12px 0 10px 0;
      a{color: #000;font-size: 16px;}
    }
    .mintitle{
      color: #6e6e6e;
      a{font-size: 14px;font-weight: normal;}
    }
  }  
}
.van-nav-bar .van-icon {color: red;font-size: 24px;padding: 0 0 18px 0;}
.navdiv{width: 180px;height: 100%;}
.nav-tlt{
  text-align: center;
  .nav-tltop{font-size: 18px;font-weight: bold;color:#6c6c6c !important;border-top: 1px solid #ebeef5}
}
.login_button{
  width: 100%;
  .van-button__text{color: white;font-size: 16px;}
}

.Navpc{
  padding: 40px;
  .Navpc_title{font-size: 20px;line-height: 52px;height: 52px;border-bottom: 2px solid #da251c;}
}
.vanst{
  width: 100%;
  .van-button__text{color: white;}
}

.hide{display: none;}


@media (max-width: 1500px){
  
}
@media (max-width:1300px){
  
}
@media (max-width: 992px){
  .topbar{display: none;}
  .el-header{display: none;}
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
