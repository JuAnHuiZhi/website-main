<template>  
  <div class="container-wrapper">
    <div class="imgwrapper">
     <img src="./img3.jpg" alt="二维码">  
    </div>
     <div class="subnav-wrapper">
      <el-row class="menu-inside">
        <el-col :span="17" class="subheight">
          <el-tabs>
            <el-tab-pane label="产品展示"></el-tab-pane>
          </el-tabs>  
        </el-col>
        <el-col :span="5" class="inside-right subheight">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="subheight dblock">
            <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i></el-breadcrumb-item>  
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{}">产品展示</el-breadcrumb-item>
          </el-breadcrumb>    
        </el-col>   
      </el-row>
    </div>
    <div class="content-wrapper">
      <div class="show-wrapper">
        <banner :pagetitle="pagetit" class="mleft20"/> 
        <div class="show-item">
          <casewra/> 
          <casewra/>
          <casewra/>
          <casewra/>
          <casewra/>
          <casewra/>
          <casewra/>     
        </div>   
        <bottomline/> 
      </div>  
    </div>
  </div>
</template>
<script>
import banner from 'components/banner'
import bottomline from 'components/bottomline'
import casewra from 'components/casewra'
export default{
  name: 'productPage',
  data() { 
    return {
      pagetit: {
        zntitle: '产品展示',
        usatitle: 'PRODUCT CENTER'    
      }  
    }
  },
  components: {
    banner,
    bottomline,
    casewra 
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
    .content-wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;

      .show-wrapper {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        
        .show-item {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;    
        }
      }   
    }
  }  
</style>
