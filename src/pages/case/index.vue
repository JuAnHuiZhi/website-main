<template>  
  <div class="container-wrapper">
    <div class="imgwrapper">
     <img src="./bg2.jpg" alt="二维码">  
    </div>
    <div class="subnav-wrapper">
      <el-row class="menu-inside">
        <el-col :span="16" class="subheight">
          <el-tabs :before-leave="moreState ">
            <el-tab-pane label="人才招聘"></el-tab-pane>
            <el-tab-pane label="人才理念"></el-tab-pane>
          </el-tabs>  
        </el-col>
        <el-col :span="6" class="inside-right subheight">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="subheight dblock">
            <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i></el-breadcrumb-item>  
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{}">工程案例</el-breadcrumb-item>
          </el-breadcrumb>    
        </el-col>   
      </el-row>
    </div> 
     <div class="clumb-main">
        <div class="clumb-title fleft">
          <p class="font22 mp0">招聘信息</p>
          <p class="font24 mp0">RECRUITMENT</p>
          <Recruitment /> 
        </div>    
     </div>
  </div>
</template>
<script>
import Recruitment from 'components/recruitment'
export default {
  name: 'casePage',
  components: {
    Recruitment,  
  }   
}
</script>
<style lang="stylus" scoped>
  .container-wrapper {
    width: 100%;
    margin-top: 1px;
    /* background: rgba(0, 0, 0, 0.3);   */
    .imgwrapper {
      width: 100%;
      // height: 800px;
      // background-color: #000;
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
    .case-wrapper {
      width: 1200px;
      height: 800px;
    }
  }  
</style>
