export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
        username:'admin',
        password:'admin'
    })
}