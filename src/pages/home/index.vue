<template>  
  <div class="container-wrapper">
    <div class="barnner-wrapper">
      <carousel/>
    </div>
    <div class="indxNesmin">
      <banner :pagetitle="pagetit"/>         
    </div>
  </div>
</template>
<script>
import carousel from "components/carousel";
import banner from "components/banner"

export default {
  name: 'headPage',
  data() {
    return {
      pagetit:{
        zntitle: '新闻资讯',
        usatitle: 'NEWS CENTER'      
      }  
    }  
  },
  components: {
    carousel,
    banner 
  }    
}
</script>
<style lang="stylus" scoped>
  .container-wrapper 
    width 100%
    margin-top 2px

    .barnner-wrapper
      width 100%
    
    .indxNesmin
      padding-top 56px    
</style>
