<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
  name:"Scroll",
  components:{
    BScroll
  },
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    click:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      click:this.click
    })

    this.scroll.on("scroll",(position)=>{
      this.$emit("scroll", position)
    })

    this.scroll.on("pullingUp",()=>{
      console.log("pulling up....")
      this.$emit("pullingUp")
    })
  }, 
  methods:{
    backToTop(x,y,time){
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>
<style scoped>

</style>