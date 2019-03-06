export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
        ch:[
            {title:'“中国名片——人民币发行70周年纪念展”重庆站巡展将于3月8日在重庆开幕'},
            {title:'重庆银行获准银行间债券市场B类主承销资格'},
            {title:'我行在 “全球银行品牌价值500强”榜单中排名跃升12位'},
            {title:'重庆银行恭祝大家新年快乐！'},
            {title:'市委第四巡视组巡视重庆银行党委工作动员会召开'},
        ]
    })
}