<template>
  <div class="hidden-xs-only rightSusWrap">
    <div class="item">
      <a href="" class="Rbtn">
        <p>我要<br>贷款</p>
      </a>
    </div>

    <div class="item Rcontact" @mouseenter="cg" @mouseleave="bc">
      <a href="" class="Rbtn">
        <span class="Ricon01" v-show="yc"></span>
         <p style="display:block;">客服<br>热线</p> <!-- 触摸显示 -->
      </a>
      <div class="Rbox" v-show="xs"><!-- 触摸显示 -->
        <div class="box-border">
          <div class="sev-t"> 
            <ul>				
              <li>贵宾服务专线:400-90-96899</li>
              <li>7*24小时客服热线:400-70-96899</li>
              <li>重庆地区:023-96899</li>
            </ul>
          </div>
          <span class="arrow-right"></span>
        </div>
        </div>
    </div>
    <div class="item Rcode" @mouseenter="fcg" @mouseleave="fbc">
      <a href="" class="Rbtn">
        <span class="Ricon02" v-show="fyc"></span>
         <p style="display:block;">关注<br>微信</p> <!-- 触摸显示 -->
      </a>
      <div class="Rbox" v-show="fxs"><!-- 触摸显示 -->
        <div class="box-border">
          <div class="sev-t"> 
            <ul>
              <li><img src="http://www.cqcbank.com/data/tosend/resource/upload/20181106/a922f9a7-543c-4986-9223-dc50270d1fe4.JPG"> <i>微信银行 </i></li>
              <li><img src="http://www.cqcbank.com/data/tosend/resource/upload/20181106/c8ff50ad-0213-4119-80fe-88a7a06f4124.JPG"> <i>重庆银行BCQ </i></li>
              <li><img src="http://www.cqcbank.com/data/tosend/resource/upload/20181106/2a40dc0e-f90c-4814-be2f-9190fb4f4542.JPG"> <i>长江财富汇 </i></li>
					  </ul>
          </div>
          <span class="arrow-right"></span>
        </div>
        </div>
    </div>

    <div class="item">
      <a href="" class="Rbtn">
        <p>业务<br>验证</p>
      </a>
    </div>
    <div class="item">
      <a class="Rbtn" @click="smoothscroll">
        <span class="Ricon03"></span>
         <p>回到<br>顶部</p> <!-- 触摸显示 -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      yc:true,
      xs:false,
      fyc:true,
      fxs:false,
    }
  },
  methods:{
    cg(){
      this.yc = false
      this.xs = true
    },
    bc(){
      this.yc = true
      this.xs = false
    },
    fcg(){
      this.fyc = false
      this.fxs = true
    },
    fbc(){
      this.fyc = true
      this.fxs = false
    },
    smoothscroll(){
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo (0,currentScroll - (currentScroll/5));
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rightSusWrap {
  position: fixed;right: 1px;bottom: 30%;z-index: 1000;
  .item {position: relative;}
  .box-border {position: relative;border: 1px solid #ccc;border-top: 4px solid #da251c;padding: 20px;background-color: #fff;
    -webkit-box-shadow: 0 3px 8px rgba(0,0,0,.15);
    -moz-box-shadow: 0 3px 8px rgba(0,0,0,.15);
    box-shadow: 0 3px 8px rgba(0,0,0,.15);
    .sev-t {overflow: hidden;}
    .arrow-right {display: block;width: 13px;height: 16px;background: url(http://www.cqcbank.com/data/tosend/resource/template/cn/images/arrow.png) no-repeat;position: absolute;right: -13px;top: 26px;}
  }
}
.Rbtn {
  width: 60px;height: 60px;text-align: center;display: block;margin-bottom: 6px;position: relative;background-color: #da251c;color: white;
  p {color: #fff;font-size: 16px;line-height: 25px;padding-top: 5px;display: none;}
  p:first-child {display: block;}
  span {width: 60px;height: 60px;display: block;cursor: pointer;}
  .Ricon01 {background: url(http://www.cqcbank.com/data/tosend/resource/template/cn/images/Ricon01.png) no-repeat center;}
  .Ricon02 {background: url(http://www.cqcbank.com/data/tosend/resource/template/cn/images/Ricon02.png) no-repeat center;}
  .Ricon03 {background: url(http://www.cqcbank.com/data/tosend/resource/template/cn/images/Ricon04.png) no-repeat center;}
}
.Rbox {
   position: absolute;top: -15px;right: 50px;padding-right: 25px;
}
.Rcontact .Rbox .box-border {
    width: 220px;
}
.Rcode{
  .Rbox {
    top: inherit;bottom: -35px;
    .box-border {
      width: 340px;text-align: center;border-top: 1px solid #ccc;
      i {display: block;color: #333;font-size: 14px;line-height: 16px;font-style: normal;}
      }
      .arrow-right {top: inherit;bottom: 50px;}
    }
  ul {margin: 5px;}
  li {
    float: left;margin: 5px;
    .Rcode li img {width: 100px;height: 100px;overflow: hidden;}
    }
}

</style>
