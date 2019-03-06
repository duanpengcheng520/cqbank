export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
        invest3:[
            {
                title:"银华抗通胀",
                percent:"161815",
                merit:"产品代码",
                type:"股票型基金",
                rate:"中高风险",
            },
            {
                title:"兴全磐稳增利",
                percent:"340009",
                merit:"产品代码",
                type:"债券型基金",
                rate:"中低风险",
            },
            {
                title:"南方全球精选",
                percent:"202801",
                merit:"产品代码",
                type:"股票型基金",
                rate:"中风险",
            },
        ]
    })
}