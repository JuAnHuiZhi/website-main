<template>
<div class="hrhig">
   <div class="pageinfo-wrapper">
     <router-link class="pageinfo" to="">{{ bottomTit }}</router-link>   
   </div> 
</div>  
</template>
<script>
export default {
  name: 'botline',
  data() {
    return {
      bottomTit: '共1页6条记录'    
    }    
  } 
}
</script>
<style lang="stylus" scoped>
 .hrhig {
    display: flex;
    padding-bottom: 30px;
      
  .pageinfo-wrapper {
    width: 100%;
    font-size: 14px;
    text-align: center;
    padding-top: 40px;
    margin: 40px auto 60px auto;
    border-top: 5px solid #f4f5f6; 
    display: flex;
    justify-content: center;


    .pageinfo {
      display: block;  
      width: 124px;
      height: 38px;
      border: 1px solid #ccc;  
      line-height: 38px; 
      color: #ccc;
      font-weight: bold;   
      cursor: default;
    }
    .pageinfo:hover {
      background-color: #409EFF;
      border: 1px solid #409EFF;  
      color: #fff     
    }
  }        
  }
</style>
