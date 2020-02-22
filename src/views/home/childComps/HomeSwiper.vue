<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
         <img :src="item.image"/>
        </a>
      </swiper-item>  
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from "common/swiper"
export default {
  name:"HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
#home-swiper{
  padding-top: 44px;
}
</style>