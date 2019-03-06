export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
        invest4:[
            {
                img:"http://www.cqcbank.com/data/tosend/resource/upload/20181101/a7bd5a25-f861-4cf1-ab14-df5986b5aa0b.png",
                title:"个人银行卡盗刷险",
            },
            {
                img:"http://www.cqcbank.com/data/tosend/resource/upload/20181101/f0505938-111d-47c8-9031-8ed15702bf91.jpg",
                title:"金色夕阳",
            },
            {
                img:"http://www.cqcbank.com/data/tosend/resource/upload/20180926/afdc24db-3fd4-4e4f-ab4a-2e3f18ce56c2.jpg",
                title:"太健康*百万全家桶",
            },
            {
                img:"http://www.cqcbank.com/data/tosend/resource/upload/20180918/190e34c5-a0f7-4a83-863c-c801f64964b2.jpg",
                title:"指定车辆驾乘意外险",
            },
        ]
    })
}