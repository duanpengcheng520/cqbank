<template>
    <div>
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in swipeImgs" :key="item">
                <img :src="item" style="width:100%;height:100%;">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return{
            swipeImgs:[
                'http://www.cqcbank.com/data/tosend/resource/upload/20181219/e4536c06-951d-4a38-95d0-9574a7ff7d42.JPG',
                'http://www.cqcbank.com/data/tosend/resource/upload/20181219/f1153502-e59a-4c43-909f-876be0137a8c.png',
                'http://www.cqcbank.com/data/tosend/resource/upload/20181130/70ca2853-c6a5-46b5-a46f-d617099211e7.jpg',
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
