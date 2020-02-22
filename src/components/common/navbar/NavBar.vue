<template>
  <div class="nav-bar">
    <div class="nav-bar-item-left"><slot name="left"></slot></div>
    <div class="nav-bar-item"><slot name="center"></slot></div>
    <div class="nav-bar-item-right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name:"NavBar"
}
</script>
<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  background-color: var(--color-tint);
  text-align: center;
  color: white;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);

  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:9;
  
}
.nav-bar-item{
  flex:1;
  padding-top: 10px;
}
.nav-bar-item-left,.nav-bar-item-right{
  width: 60px;
  height: 44px;
}

</style>