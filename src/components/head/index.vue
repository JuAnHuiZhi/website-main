<template>
  <header class="header--wrapper">
    <nav class="nav-wrapper">
      <div class="img-wrapper">
        <img src="./logo.png" alt="">    
      </div>
      <div class="user-wrapper">
        <div class="icon">
          <i class="el-icon-user-solid"></i>  
        </div>  
      <!--头像引用 <img :src="desc_img" alt=""> -->
      <span>{{ account }}</span>    
    </div>        
      <ul class="nav-item"> 
        <li><router-link to="/">网页首页</router-link></li>
         <li><router-link to="/about">关于我们</router-link></li>
        <li><router-link to="/case">工程案例</router-link></li>
        <li><router-link to="/product">产品展示</router-link></li>
        <li><router-link to="/talent">人才招聘</router-link></li>
        <li><router-link to="">联系我们</router-link></li>
      </ul>
      
    </nav>  
  </header>
</template>
<script>
export default {
  name: 'headpage',
  data() {
    return{
      logo_src:'assets/logo.png',
      desc_img: [{
        desc: '头像',
        img: ''    
      }],
      account: 'august',
    } 
  }    
}
</script>

<style lang="stylus" scoped>
  .header--wrapper {
     width: 100%;
     height: 90px;
     border-bottom: 1px solid #7D848C;
     background-color: #fff;
     line-height: 90px;
     overflow: hidden;
 }
  .nav-wrapper {
     width: 1200px;
     height: 100%;
     align-items: center;
     margin: 0 auto;
     font-size: 16px;
 }
 .nav-wrapper .img-wrapper   {
    width:80px;
    height: 90px;
    padding: 0px 20px;
    font-weight: bold;
    line-height: 120px;
    float: left
 }
  .nav-wrapper .nav-item {
    float:right
  } 
  .nav-wrapper ul li {
     float: left; 
 }
  .nav-wrapper ul li a{
    display: block;
    height: 90px;
    padding: 0 10px;
    color: #000;
    text-decoration: none;  
    font-size: 16px;
    line-height: 90px;
 }
  .nav-wrapper ul li a:hover {
    color: #409EFF;
    border-bottom: 3px solid #409EFF;  
    font-weight: bold;

}
  .nav-wrapper .user-wrapper {
    border:1px solid #ccc; 
    cursor: pointer; 
    border-width:0 1px;
    padding:0px 8px;  
    float: right;
  }
  .user-wrapper .icon {
    float: left;
    height: 90px;
    color: #409EFF;
 }
  .user-wrapper span {
    float: left;
    color: #409EFF; 
    height: 90px;   
    font-weight: bold;
    margin-left: 3px;
}  

</style>
