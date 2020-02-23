<template>
  <div id="home">
    <div>
      <nav-bar><div slot="center">购物中心</div></nav-bar>
      <scroll class="scroll" ref="scroll" :probeType="3" @scroll="showArrow" @pullingUp="showMore">
        <home-swiper :banners="banners"/>
        <home-recommend :recommends="recommends"/>
        <home-image></home-image>
        <tab-control class="tab-control" :titles="['流行','最新','精选']" @tabcontrolClick="tabcontrolClick"/>
        <goods-list :goods="goods[currentType].list"></goods-list>
      </scroll>
      <backtop @click.native="backtopClick" class="back-top" v-show="isShow"/>
      
    </div>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar"
import HomeSwiper from "views/home/childComps/HomeSwiper"
import HomeRecommend from "views/home/childComps/HomeRecommend"
import HomeImage from "views/home/childComps/HomeImage"
import TabControl from "content/tabcontrol/TabControl"
import GoodsList from "common/goodslist/GoodsList"
import Scroll from "common/betterscroll/Scroll"
import Backtop from "common/backtop/Backtop"


import {getHomeMutidata, getGoodsList} from "network/home/index.js"

export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeImage,
    TabControl,
    GoodsList,
    Scroll,
    Backtop
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        "pop":{page:0, list:[]},
        "new":{page:0, list:[]},
        "sell":{page:0, list:[]}
      },
      isShow:false,
      currentType:'pop'
    }
  },
  created(){
    //get banners and recommendations
    this.getHomeMutidata()

    //get goodslist
    this.getGoodsList('pop')  
    this.getGoodsList('new') 
    this.getGoodsList('sell')  
  },
  methods:{
    getHomeMutidata(){
      getHomeMutidata().then(res=>{
        this.banners = res.data.data.banner.list      
        this.recommends = res.data.data.recommend.list 
      })
    },
    getGoodsList(type){
      let page = this.goods[type].page + 1
      getGoodsList(type, page).then(res=>{
        this.goods[type].list = res.data.data.list
        page++
      })
    },
    showArrow(position){
      this.isShow = (-position.y) > 1000
    },
    backtopClick(){
      this.$refs.scroll.backToTop(0, 0, 500)
    },
    showMore(){
      
    },
    tabcontrolClick(currentIndex){
      console.log(currentIndex)
      switch(currentIndex){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
    }
     
  }
 
}
</script>
<style scoped>
.tab-control{
  position:sticky;
  top:44px;
  background-color: #fff;
  z-index:9;
}
.scroll{
  height: 100vh;
}
</style>