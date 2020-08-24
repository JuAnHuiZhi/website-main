<template>
    <el-carousel :interval="5000" arrow="always" class="hightBanner">
    <el-carousel-item v-for="( item,index ) in imgLst" :key="index">
      <img :src="item.url" alt="公司详情">
    </el-carousel-item>
  </el-carousel>     
</template>
<script>
export default {
  name: 'carousel',   
  data() {
    return {
      imgLst: [
        {
          url: require('img/bg.jpg'),    
        },
        {
          url: require('img/bg2.jpg'),    
        },  
        {
          url: require('img/bg3.jpg'),    
        },        
      ]    
    }    
  } 
}
</script>
<style>

  .el-carousel__container {
    height: 550px;    
  }  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
