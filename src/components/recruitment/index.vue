<template>
  <div class="rec-wrapper">
    <h3 class="posTitle tleft">{{ professon.posTitle }}</h3>
    <p class="h13 tleft"></p>
    <p class="proName tleft l24">职业名称：{{ professon.posName }}</p> 
    <p class="posType tleft l24">职业类型: {{ professon.posType }}</p>   
    <p class="jopExper tleft l24">工作经验: {{ professon.jopExper }}</p>   
    <p class="creaNumber tleft l24">招聘人数: {{ professon.creaNumber }}</p>   
    <p class="dataEqual tleft l24">学历要求: {{ professon.eduClaim }}</p>   
    <p class="jopDescribe tleft l24">发布时间: {{ professon.dataEqual }}</p>   
    <p class="h13"></p>
    <h4 class="f16 tleft">工作描述：</h4>
    <p class="jopDescribe tleft l24">{{ professon.jopDescribe }}</p>
  </div>     
</template>

<script>
export default {
  name: 'recruitment',
  data() {
    return {
      professon: {
        posTitle: '前端开发',
        posName: '前端开发',
        posType: '全职',
        jopExper: 1+'年',
        creaNumber: 10+'人',
        dataEqual: '2020-7-28',
        eduClaim: '本科',
        jopDescribe: '负责相关产品的需求以及前端程序的实现，提供合理的前端架构。'   
      }
    }  
  }    
}
</script>

<style lang="stylus">
  .rec-wrapper {
    width: 100%;
    height: 100%;
    
    .tleft {
      text-align: left;  
    }
    .posTitle {
      font-size: 18px;
      color: #000;
      padding: 0px 0px 5px 0;  
    }
    .h13 {
      height: 13px;  
    }
    .l24 {
      height: 24px
      line-height: 24px;  
      color: #929292;
      
    }
  }
</style>