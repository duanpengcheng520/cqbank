export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
        invest5:[
            {title:'“长江直通车”业务介绍'},
            {title:'“长江直通车”业务特色'},
            {title:'“长江直通车”业务办理流程'},
        ]
    })
}