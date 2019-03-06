export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
        lat:[
            {title:'关于个人循环类消费贷款暂停POS渠道用款服务的通知'},
            {title:'《不宜流通人民币硬币》标准'},
            {title:'关于聚利宝业务（南方现金增利A）2018年国庆节暂停申购的公告'},
            {title:'诚信守法用外汇 合规经营促发展'},
            {title:'网络安全 一路随行'},
        ]
    })
}