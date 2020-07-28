<template>
  <div>
    <router-link to="" class="client-case"> 
      <p class="case-img"><img src="./case1.jpg" alt="" class="img-test"/></p> 
      <p class="case-title">客户案例1</p>   
    </router-link>
  </div>    
</template>
<script>
export default {
  name: ''    
}
</script>
<style lang="stylus" scoped>
  .client-case {
    display: block;  
    .case-img {
      width: 100%
      height: 80%;

      .img-test {
        width: 100%
        height: 100%
      }
      .case-title {
        width: 100%
        hegiht: 20%  
        line-height: 20%
      }    
    }  
  }
</style>
