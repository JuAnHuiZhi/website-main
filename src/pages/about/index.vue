<template>  
  <div class="container-wrapper">
    <div class="imgwrapper">
     <img src="./aboutme.jpg" alt="二维码">  
    </div>
    <div class="subnav-wrapper">
      <el-row class="menu-inside">
        <el-col :span="16" class="subheight">
          <el-tabs>
            <el-tab-pane label="关于我们"></el-tab-pane>
          </el-tabs>  
        </el-col>
        <el-col :span="6" class="inside-right subheight">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="subheight dblock">
            <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i></el-breadcrumb-item>  
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{}">关于我们</el-breadcrumb-item>
            <el-breadcrumb-item :to="{}">公司简介</el-breadcrumb-item>
          </el-breadcrumb>    
        </el-col>   
      </el-row>
    </div>
    <div class="content-wrapper">
      <div class="about-wrapper">
        <banner :pagetitle="pagetit"/>
      </div>    
    </div>
  </div>
</template>
<script>
import banner from 'components/banner'
export default {
  name: 'aboutPage',
  data() {
    return {
      pagetit: {
        zntitle: '公司简介',
        usatitle: 'COMPANY PROFILE'  
      } 
    }
  },
  components: {
    banner,
  }    
}
</script>
<style lang="stylus" scoped>
  .container-wrapper {
    width: 100%;
    margin-top: 2px;
    .imgwrapper {
      width: 100%;
    img {
        width:100%   
      } 
    }
    .subnav-wrapper {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #ccc; 
      .menu-inside {
        width: 1200px;
        height: 60px;
        line-height: 60px;
        margin: 0 auto;
        .inside-right {
          border-left: 1px solid #ccc;
          margin-left: 5px;
          font-size: 14px;
        }
      }
    }
    .content-wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      .about-wrapper {
        display: flex;
        width: 1200px;
        margin: 0 auto;
      }  
    }
  }  
</style>
