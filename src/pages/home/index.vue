<template>  
  <div class="container-warrper">
    <relation/>
  </div>
</template>
<script>
import relation from 'pages/relation'

export default {
  name: 'headPage' ,
   components: {
    relation,   

  }  
}
</script>
<style scoped>
  .container-warrper {
    width: 100%;
    /* height: 800px; */
    margin-top: 15px;
    /* background: rgba(0, 0, 0, 0.3);   */
  }  
</style>
