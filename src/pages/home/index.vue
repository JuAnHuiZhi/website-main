<template>  
  <div class="container-warrper">
    <div class="imgwrapper">
     <img src="./bg.jpg" alt="二维码">  
    </div>
  </div>
</template>
<script>
export default {
  name: 'headPage'    
}
</script>
<style lang="stylus" scoped>
  .container-warrper {
    width: 100%;
    margin-top: 2px;
    /* background: rgba(0, 0, 0, 0.3);   */
    .imgwrapper {
      width: 100%;
      // height: 800px;
      // background-color: #000;
      img {
        width:100%   
      }
    }
  }  
</style>
