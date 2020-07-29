<template>
  <div class="case">
    <router-link to="" class="client-case"> 
      <p class="case-img"><img src="./case1.jpg" alt="" class="img-size"/></p> 
      <p class="case-title">客户案例</p> 
      <!-- <div @mouseenter="enter">MOVER</div>  
      <div @mouseleave="leave" v-show="seen">你的小可爱突然出现</div> -->
    </router-link>
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
  methods: {
    enter() {
      this.seen = true;    
    },
    leave() {
      this.seen = false;    
    }    
  }    
}
</script>
<style lang="stylus" scoped>
.case{
   height: 100%
    
  .client-case {
    display: block; 
    height: 100%; 
    .case-img {
      width: 100%
      height: 60%;

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
    }  
   }
   .client-case:hover {
     color: red;
   }
  }
</style>
