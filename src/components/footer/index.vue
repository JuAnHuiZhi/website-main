<template> 
  <div class="footer--wrapper">
    <div class="footertop commonw">
      <ul class="footerdetails">
        <li><router-link to="/"><h3>网站首页</h3></router-link></li>
        <li><router-link to="/">公司展示</router-link></li>
        <li><router-link to="/">企业文化</router-link></li>
        <li><router-link to="/">公司荣耀</router-link></li>
        <li><router-link to="/">品牌历程</router-link></li>
      </ul>  
      <ul class="footerdetails">
        <li><router-link to="/"><h3>产品展示</h3></router-link></li>
        <li><router-link to="/">产品展示</router-link></li>
        <li><router-link to="/">产品展示</router-link></li>
        <li><router-link to="/">产品展示</router-link></li>
        
      </ul>  
      <ul class="footerdetails">
        <li><router-link to="/"><h3>公司详情</h3></router-link></li>
        <li><router-link to="/">公司资讯</router-link></li>  
        <li><router-link to="/">行业资讯</router-link></li>  
        <li><router-link to="/">媒体报告</router-link></li>  
        <li><router-link to="/">科技新闻</router-link></li>  
        <li><router-link to="/">自媒体新闻</router-link></li>  
      </ul>  
      <ul class="footerdetails">
        <li><router-link to="/"><h3>下载中心</h3></router-link></li>
        <li><router-link to="/">帮助文档</router-link></li>  
        <li><router-link to="/">档案下载</router-link></li>  
      </ul> 
      <ul class="footerdetails">
        <li><router-link to="/"><h3>解决方案</h3></router-link></li>
        <li><router-link to="/">商业放方案</router-link></li>  
        <li><router-link to="/">社区方案</router-link></li>  
        <li><router-link to="/">校园方案</router-link></li>  
        <li><router-link to="/">商业楼宇</router-link></li>  
        <li><router-link to="/">交通枢纽</router-link></li> 
      </ul> 
      <ul class="footerdetails">
        <li><router-link to="/"><h3>人才招聘</h3></router-link></li>
        <li><router-link to="/">人才招聘</router-link></li>  
        <li><router-link to="/">人才理念</router-link></li>  
      </ul>  
      <div class="wrapper-right">
        <img src="./weixin.jpg" alt="二维码">  
        <p class="copy">{{ Copyright }}</p>
        <p class="format"> {{ Format }}</p>
      </div>
    </div>
  </div>  
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
    width: 100%;
    height: 350px;
    border-top: 1px solid #409EFF;
  .footertop {
    margin-top: 46px;
    margin-bottom: 48px;
    height: 100%
      .footerdetails {
        float: left   
        padding: 20px; 
      }
        li {
          height: 42px;
          line-height 42px;
          color: #abacb7;  
          cursor: pointer;
          
          h3 {
            font-size: 18px 
            color: #000  
          }
          a {
            color: #000
            font-size: 13px 
          }
          a:hover {
            color: #409EFF
          }
        }
  }
  .wrapper-right {
    margin-top: 36px;
    float: right;  
    color: #ccc;
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
