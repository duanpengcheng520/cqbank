<template>
  <div>
    <HEADER></HEADER>
    <SWIPE></SWIPE>
    <QUICK></QUICK>
    <BUSINESS></BUSINESS>
    <INVEST></INVEST>
    <DISCOUNT></DISCOUNT>
    <NEWS></NEWS>
    <FOOTER></FOOTER>
    <START></START>
  </div>
</template>

<script>
import HEADER from '@/components/public/header'
import SWIPE from '@/components/public/swipe'
import QUICK from '@/components/public/quick'
import BUSINESS from '@/components/public/business'
import INVEST from '@/components/public/invest'
import DISCOUNT from '@/components/public/discount'
import NEWS from '@/components/public/news'
import FOOTER from '@/components/public/footer'
import START from '@/components/public/start'
export default {
  data(){
    return{
      
    }
  },
  components:{
    HEADER,SWIPE,QUICK,BUSINESS,INVEST,DISCOUNT,NEWS,FOOTER,START
  }
}
</script>

<style scoped>

</style>

