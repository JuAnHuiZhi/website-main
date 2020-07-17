<template>
  <div class="us">
      <!-- 防止链接跳转 -->
     <!-- <a href="javascript:;"></a> -->
      <h3>联系我们</h3>
      <div class="english">CONTACT US</div>
      <div class="main">
          <img src="../../assets/1569492303.jpg">
          <div class="right">
              <h1>聚安汇智有限公司</h1>
              <span>微信：wx123456</span>
              <span>邮箱：wx123456</span>
              <span>电话：wx123456</span>
              <span>手机：wx123456</span>
              <span>地址：wx123456</span>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'relation',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    text-align: left;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
    
}
.english{
    text-align: left;
    padding-top: 10px;
    font-size: 22px;
    color: red;
    margin-left: 50px;
}
.main{
    padding-top: 30px;
    display: flex;
    margin-left: 50px;
    border: royalblue;
}
.right{
    width: 80%;
    /* margin-top: 5%; */
    border: 1px solid rgb(204, 195, 195);
    text-align: left;
    padding-left: 5%;
}
.right h1{
    margin-top: 8%;
    font-size: 22px;
    font-weight: 500;
    color: rgb(156, 6, 6);
}
.right span{
    display: block;
    padding: 5px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>