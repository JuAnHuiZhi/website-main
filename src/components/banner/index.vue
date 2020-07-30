<template>
  <div class="page-banner">
    <p class="font22">{{ pagetitle.zntitle }}</p>  
    <p class="font24">{{ pagetitle.usatitle }}</p>
  </div>    
</template>
<script>
export default {
  props: {
    pagetitle: Object,    
  }    
}
</script>
<style scoped>
  .page-banner {
    padding: 55px 0px;    
  }  
</style>
