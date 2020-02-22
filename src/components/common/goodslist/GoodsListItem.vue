<template>
  <div class="goods" >
      <img :src="obj.show.img" alt="">
      <div class="goods-info">
        <p>{{obj.title}}</p>
        <span class="price">{{obj.price}}</span>
        <span class="collect">{{obj.cfav}}</span>
      </div> 
  </div>
</template>
<script>
export default {
  name:"GoodsListItem",
  props:{
    obj:{
      type:Object,
      default(){
        return {}
      }
    }
  }
  
}
</script>
<style scoped>
.goods{
  padding-bottom: 40px;
  position: relative;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods img{
  border-radius: 5px;
  width:100%;
}
.goods span{
  padding: 0 10px
}

.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
.goods-info .price{
  color:var(--color-high-text)
}
</style>