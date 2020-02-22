<template>
  <div id="home">
    <div>
      <nav-bar><div slot="center">购物中心</div></nav-bar>
      <home-swiper :banners="banners"/>
      <home-recommend :recommends="recommends"/>
      <home-image></home-image>
      <tab-control class="tab-control" :titles="['流行','最新','精选']"/>
      <goods-list :goods="goods['pop'].list"></goods-list>
      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li> 
      </ul>
      
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

import {getHomeMutidata, getGoodsList} from "network/home/index.js"

export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeImage,
    TabControl,
    GoodsList
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        "pop":{page:0, list:[]},
        "new":{page:0, list:[]},
        "sell":{page:0, list:[]}
      }
    }
  },
  created(){
    //get banners and recommendations
    this.getHomeMutidata()

    //get goodslist
    this.getGoodsList('pop')  
    // this.getGoodsList('new') 
    // this.getGoodsList('sell')  
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
      // console.log(page)
      getGoodsList(type, page).then(res=>{
        this.goods[type].list = res.data.data.list
        //console.log(res.data.data.list)
        page++
      })
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
</style>