export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
        disc:[
            {title:'美食惠餐饮 满减特惠'},
            {title:'“一元乐享 快乐童年”儿童专享季'},
            {title:'重行送惊洗 5元靓爱车'},
            {title:'“漫享好时光”漫咖啡买一送一'},
            {title:'“7-11”刷卡满20减10活动'},
        ]
    })
}