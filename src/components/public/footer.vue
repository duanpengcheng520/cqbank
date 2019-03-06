<template>
	<div class="footer">
		<div class="footer_top">
			<el-container>
					<el-col :md="4" :sm="8" class="hidden-xs-only hidden-sm-and-down footer_logo">
						<img src="http://www.cqcbank.com/data/tosend/resource/template/cn/images/hourphone.png">
					</el-col>
					<el-col :md="4" :sm="8" class="footer_title">
						<div class="title"><a href="">帮助中心</a></div>
						<div class="title_buttom">
							<ul>
								<li><a href="">隐私保密条款</a></li>
								<li><a href="">网站声明</a></li>
								<li><a href="">安全说明</a></li>
								<li><a href="">联系我们</a></li>
							</ul>
						</div>
					</el-col>
					<el-col :md="4" :sm="8" class="footer_title">
						<div class="title"><a href="">关于重行</a></div>
						<div class="title_buttom">
							<ul>
								<li><a href="">重行动态</a></li>
								<li><a href="">重行招聘</a></li>
							</ul>
						</div>
					</el-col>
					<el-col :md="4" :sm="8" class="footer_title">
						<div class="title"><a href="">友情链接</a></div>
						<div class="title_buttom">
							<ul>
								<li><a href="">兴义万丰村镇银行</a></li>
								<li><a href="">重庆鈊渝金融租赁股份有限公司</a></li>
							</ul>
						</div>
					</el-col>
					<el-col :md="6" class="hidden-xs-only hidden-sm-and-down ewm">
						<div class="ewm_box">
							<img src="http://www.cqcbank.com/data/tosend/resource/upload/20181106/a922f9a7-543c-4986-9223-dc50270d1fe4.JPG" alt="">
							<p>微信银行 </p>
						</div>
						<div class="ewm_box">
							<img src="http://www.cqcbank.com/data/tosend/resource/upload/20181106/c8ff50ad-0213-4119-80fe-88a7a06f4124.JPG" alt="">
							<p>重庆银行BCQ </p>
						</div>
						<div class="ewm_box">
							<img src="http://www.cqcbank.com/data/tosend/resource/upload/20181106/2a40dc0e-f90c-4814-be2f-9190fb4f4542.JPG" alt="">
							<p>长江财富汇 </p>
						</div>
					</el-col>
			</el-container>
		</div>
		<div class="footer_bot">
			<el-container>
				<el-col :xs="22" class="footer_ep">
					<p>版权所有 © 重庆银行股份有限公司</p>
					<p>
						<span class="footer_down">渝ICP备12006582号 渝公网安备 500103015-00549 号</span>
					</p>
				</el-col>
			</el-container>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{

		}
	}
}
</script>

<style lang="scss" scoped>
.footer_top {
	padding-bottom: 30px;padding-top: 30px;background-color: #4f4f4f;
	.footer_logo {background: url("http://www.cqcbank.com/data/tosend/resource/template/cn/images/foot_logo.png") no-repeat;padding-top: 60px;font-size: 22px;padding-left: 0;width: 200px;}
	.footer_title{padding: 0 20px 0 20px;}
	.title{padding-bottom:10px;}
	.title a{color: white;font-size: 16px;}
	.title_buttom ul{padding:0;li{padding: 3px 0 3px 0;a{color: #d6d5d5;}}}
	.ewm {margin:  0 0 0 80px;
		.ewm_box {float: left;text-align: center;width: 31%;margin-left: 2.3%;
			img {width: 100%;display: block;margin: 0 auto;}
		}
		p {padding-top: 5px;color: white;}
	}
}
.footer_bot {
    background-color: #3a3a3a;padding: 20px 0;text-align: center;line-height: 1.8;
	p,span{color: white;font-size: 14px}
}
















.clear{clear:both}
.el-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 768px){
	.el-container{
    width: 750px;
	}
}
@media (min-width: 992px){
	.el-container {
    width: 970px;
	}
}
@media (min-width: 1200px){
  .el-container{
	  width: 1200px !important;
  }
}
</style>
