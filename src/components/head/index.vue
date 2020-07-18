<template>
  <header class="header--wrapper">
    <nav class="nav-wrapper">
       <img src="./logo.png" alt=""> 
      <ul> 
        <li><router-link to="/">网页首页</router-link></li>
         <li><router-link to="/about">关于我们</router-link></li>
        <li><router-link to="/case">工程案例</router-link></li>
        <li><router-link to="/product">产品展示</router-link></li>
        <li><router-link to="/talent">人才招聘</router-link></li>
        <li><router-link to="">联系我们</router-link></li>
      </ul>
      <div class="user-wrapper">
        <div class="icon">
          <i class="el-icon-user-solid"></i>  
        </div>  
      <!--头像引用 <img :src="desc_img" alt=""> -->
      <span>{{ account }}</span>    
    </div>        
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
     height: 90px;
     display: flex;
     border-bottom: 1px solid #7D848C;
     background-color: #fff;
     line-height: 90px;
 }
  .nav-wrapper {
     width: 1200px;
     display: flex;
     align-items: center;
     margin: 0 auto;
     font-size: 16px;
 }
 .nav-wrapper .logo {
    width:80px;
    height: 90px;
    padding: 0px 20px;
    font-weight: bold;
    float: left;
 }
  .nav-wrapper ul {
    margin: 0 auto;  
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
    font-size: 15px;
    line-height: 90px;
 }
  .nav-wrapper ul li a:hover {
    color: #07108D;
    border-bottom: 3px solid #07108D;  
    font-weight: bold;

}
  .nav-wrapper .user-wrapper {
    border:1px solid #ccc; 
    cursor: pointer; 
    border-width:0 1px;
    padding:0px 8px;  
  }
  .user-wrapper .icon {
    float: left;
    height: 90px;
 }
  .user-wrapper span {
    float: left;
    color: #07108D; 
    height: 90px;   
    font-weight: bold;
    margin-left: 3px;
}  

</style>
