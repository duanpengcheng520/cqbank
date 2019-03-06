export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
        invest2:[
            {title:'居间实物贵金属-金叶珠宝'},
            {title:'居间实物贵金属-陕西黄金（仅限西安地区）'},
            {title:'"长江金"业务介绍'},
            {title:'"长江金"客户交易端软件下载'},
        ]
    })
}