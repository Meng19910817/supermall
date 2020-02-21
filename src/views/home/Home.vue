<template>
  <div id="home">
    <div>
      <nav-bar><div slot="center">购物中心</div></nav-bar>
      <home-swiper :banners="banners"/>
      <home-recommend :recommends="recommends"/>
    </div>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar"
import {getHomeMutidata} from "network/home/index.js"
import HomeSwiper from "views/home/childComps/HomeSwiper"
import HomeRecommend from "views/home/childComps/HomeRecommend"

export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        "pop":{page:1, list:[1,2,3]}
      }
    }
  },
  created(){
    getHomeMutidata().then(res=>{
      this.banners = res.data.data.banner.list
      
      this.recommends = res.data.data.recommend.list
      
    })
  }
 
}
</script>
<style scoped>

</style>