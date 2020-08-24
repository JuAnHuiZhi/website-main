<template>
  <div class="case">
    <div class="case-item mleft20">
    <router-link to="" class="client-case"> 
      <p class="case-img"><img src="./case1.jpg" alt="" class="img-size"/></p> 
      <p class="case-title">客户案例</p> 
    </router-link>
    </div>
  </div>    
</template>
<script>
export default {
  name: '',
  data() {
    return {
      seen: false,      
    }    
  },
  }    
</script>
<style lang="stylus" scoped>
.case{
   height: 100%
   .case-item {
      display: flex;
      border: 1px solid #ccc;
      width: 270px;
      height: 260px; 
      flex-direction: column;
      margin-bottom: 10px;
      text-align: center;    
  .client-case {
    display: block; 
    color: #000;
    height: 100%; 
    .case-img {
      width: 100%
      height: 60%;
      transition: all 1s;
      overflow: hidden;

      .img-size {
        width: 100%
        height: 100%
      }
    }
    .case-title {
      width: 100%;
      height: 40%;
      line-height: 104px;
      font-size: 18px;
      transition: all 1s;
    }  
   }
  }
  .case-item:hover {
    box-shadow:10px 0 10px -10px #888,
             -10px 0 10px -10px  #888;
     color: #409EFF;
     transition-duration: 1s;
  }
  .case-item:hover .case-title {
    color: #409EFF;  
    transform: scale(1);
    transition-duration: 1s;
  }
  .case-item:hover .case-img {
    color: #409EFF;  
    transition: transform 1s;
    transform: scale(1.05);
  }
  }
</style>
