<template>
  <header class="header--wrapper">
    <nav class="nav-wrapper">
       <img src="./logo.png" alt=""> 
      <ul> 
        <li><a href="">网站首页</a></li>
        <li><a href="">关于我们</a></li>
        <li><a href="">产品展示</a></li>
        <li><a href="">工程案例</a></li>
        <li><a href="">人才招聘</a></li>
        <li><a href="">联系我们</a></li>
      </ul>
      <div class="user-wrapper">
        <div class="icon">
          <img src="./hed.png" alt="头像" class="head">  
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
      account: 'August',
    } 
  }    
}
</script>

<style lang="stylus" scoped>
  .header--wrapper {
     width: 100%;
     height: 90px;
     display: flex;
     border-bottom: 1px solid #7D848C;
     background-color: #fff;
     line-height: 90px;
 }
  .nav-wrapper {
     float: left;   
     width: 900px;
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
    border-width:0 1px;
    padding-right: 8px;
    float: l;    
  }
  .user-wrapper .icon {
    float: left;
    width: 90px;
    height: 90px;
    cursor: pointer; 
 }
  .user-wrapper span {
    float: left;
    color: #666;    
    cursor: pointer;
}  

</style>
