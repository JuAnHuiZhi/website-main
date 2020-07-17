<template>
  <header class="header--warpper">
    <div class="logo"></div>
    <nav class="nav-warpper">
      <ul> 
        <li><a href="">网站首页</a></li>
        <li><a href="">关于我们</a></li>
        <li><a href="">产品展示</a></li>
        <li><a href="">工程案例</a></li>
        <li><a href="">人才招聘</a></li>
        <li><a href="">联系我们</a></li>
      </ul>      
    </nav> 
    <div class="user-warpper">
      <div class="icon"></div>  
      <!--头像引用 <img :src="desc_img" alt=""> -->
      <span>August</span>    
    </div>   
  </header>
</template>
<script>
export default {
  name: 'head',
  data() {
    return{
      desc_img: [{
        desc: '头像',
        img: ''    
      }]
    } 
  }    
}
</script>

<style lang="stylus" scoped>
  .header--warpper {
     width: 100%;
     height: 90px;
     box-shadow: 0px 0px 20px 0px #CCC;
     background-color: #fff;
     transition: 0.3s;
     line-height: 90px;
 }
 .logo {
    width:80px;
    height: 90px;
    padding:0px 20px;
    color: azure;
    font-weight: bold;
    float: left;
    border: 1px solid #000;
 }
  .nav-warpper {
    
     float: left;   
     font-size: 16px
     margin-left: 60px;  
 }
  .nav-warpper ul li {
     float: left;
     width: 120px;    
 }
  .nav-warpper ul li a{
    display: block;
    height: 90px;
    padding: 0 10px;
    color: #000;
    text-decoration: none;  
    font-size: 15px;
    line-height: 90px;
 }
  .nav-warpper ul li a:hover {
    color: #FFA500;
    border-bottom: 3px solid #FFA500;  
}
  .user-warpper {
    float: right;
    margin-right: 30px;    
  }
  .user-warpper .icon {
    float: left;
    width: 90px;
    height: 90px;
    cursor: pointer; 
    margin-right: 5px;
    border: 1px #ccc solid; 
 }
  .user-warpper span {
    float: left;
    color: #666;    
    cursor: pointer;
}  

</style>
