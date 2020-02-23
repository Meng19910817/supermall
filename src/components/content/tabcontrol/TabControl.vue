<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="index">
      <span :class="{active:currentIndex == index}" @click="changeIndex(index)">{{item}}</span>

    </div>   
  </div>
</template>
<script>
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    changeIndex(index){
      this.currentIndex = index
      this.$emit("tabcontrolClick", index)
    }
  }
}
</script>
<style scoped>
.tab-control{
  display: flex;
  height: 44px;
  font-size:var(--color-text);
  text-align: center;
}
.tab-control-item{
  flex:1;
  padding:5px;
}
.tab-control-item span{
  padding: 3px;
  border-bottom: 3px solid;
}
.active{
  color:var(--color-high-text)
}
</style>