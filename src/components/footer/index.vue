<template> 
  <footer class="footer--wrapper">
    <div class="footertop commonw">
      <ul class="footerdetails">
        <h3><li>公司简介</li></h3>
        <li>公司展示</li>
        <li>企业文化</li>
        <li>公司荣誉</li>
        <li>品牌历程</li>
      </ul>  
      <ul class="footerdetails">
         <h3><li>产品分类</li></h3>
        <li>产品分类</li>
        <li>产品分类</li>
        <li>产品分类</li>
        
      </ul>  
      <ul class="footerdetails">
       <h3><li>新闻资讯</li></h3>
        <li>公司资讯</li>
        <li>行业资讯</li>
        <li>媒体报告</li>
        <li>科技新闻</li>
        <li>自媒体新闻</li>
      </ul>  
      <ul class="footerdetails">
        <h3><li>下载中心</li></h3>
        <li>帮助文档</li>
        <li>档案下载</li>
      </ul> 
      <ul class="footerdetails">
        <h3><li>解决方案</li></h3>
        <li>商业</li>
        <li>社区</li>
        <li>校园</li>
        <li>商业楼宇</li>
        <li>交通枢纽</li>
      </ul> 
      <ul class="footerdetails">
        <h3><li>人才招聘</li></h3>
        <li>人才招聘</li>
        <li>人才理念</li>
      </ul>  
      <div class="fright">
        <img src="./weixin.jpg" alt="二维码">  
        <p class="copy">{{ Copyright }}</p>
        <p class="format"> {{ Format }}</p>
      </div>
    </div>
  </footer>  
</template>
<script>
export default {
  name: 'footerpage',
  data() {
    return{
      Details: [
        {
          aboutme : [    
          ]
        }  
      ],
      Copyright : 'Copyright © 2002-2019 某某集团有限公司 版权所有' ,
      Format : '网站备案号：粤ICP备9898888号' 
    }  
  }    
}
</script>
<style lang="stylus"scoped>
  .footer--wrapper {
    widht: 100%;
    height: 350px;
    border-top: 1px solid #F56C6C;
  .footertop {
    margin-top: 46px;
    margin-bommon: 48px;
      .footerdetails {
        float: left   
        padding: 20px; 
      }
        li {
          height: 42px;
          line-height 42px;
          color: #abacb7;  
          cursor: pointer;
        }
  }
  .fright {
    margin-top: 36px;
    float: right;  
    line-height: 46px;
  }
  .fbommon {
    width: 100%;
    height: 54px
    line-height: 54px;
    background-color: #ccc;
  }
  }


</style>
