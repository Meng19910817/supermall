<template>
  <div id="recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:"HomeRecommend",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
#recommend{
  display: flex;
  text-align: center;
  margin-top: 10px;
  font-size: var(--font-size);
  border-bottom: 10px solid #f2f2f2
}
.recommend-item{
  flex:1;
}

.recommend-item img{
  width: 60px;
  height: 60px;
}
</style>