<template>  
  <div class="container-wrapper">
    <div class="imgwrapper">
     <img src="./img4.jpg" alt="二维码">  
    </div>
    <div class="subnav-wrapper">
      <el-row class="menu-inside">
        <el-col :span="16" class="subheight">
          <el-tabs>
            <el-tab-pane label="人才招聘"></el-tab-pane>
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
    <div class="content-wrapper">
      <div class="info-wrapper">
        <div class="title-wrapper fleft">
          <p class="font22">人才招聘</p>
          <p class="font24">RECRUITMENT</p>  
        </div>
        <div class="recontent-wrapper">
          <div class="recontent" @mouseenter="enter" @mouseleave="leave">
            <Recruitment/>
           <transition name="fade"> 
             <router-link to="" class="Delivery" v-show="seen">在线投递</router-link>
           </transition>
          </div>  
           <div class="recontent">
             <Recruitment/>
            <router-link to="" class="Delivery">在线投递</router-link>
           </div>  
            <div class="recontent">
              <Recruitment/>
            <router-link to="" class="Delivery">在线投递</router-link>  
              </div>  
             <div class="recontent">
               <Recruitment/>
            <router-link to="" class="Delivery">在线投递</router-link>
            </div>    
             <div class="recontent"><Recruitment/>
            <router-link to="" class="Delivery">在线投递</router-link></div>  
             <div class="recontent">
               <Recruitment/>
            <router-link to="" class="Delivery">在线投递</router-link>
             </div>
        </div>
        <bottomline/>  
      </div>      
    </div>  
  </div>
</template>
<script>
import Recruitment from 'components/recruitment'
import bottomline from 'components/bottomline'
export default {
  name: 'talentPage',
  data(){
    return {
      seen: false  
    }    
  },
  methods: {
    enter() {
      this.seen = true  
    },
    leave() {
      this.seen = false  
    } 
  },
  components: {
    Recruitment,  
    bottomline
  }   
}
</script>
<style lang="stylus" scoped>
  .container-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
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
      width: 100%;
      .info-wrapper {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      .title-wrapper {
        padding: 55px 0px;  
      }
      .recontent-wrapper {
        display: flex;
        flex-direction: row;  
        flex-wrap: wrap;
        padding-bottom: 44px;
        .recontent {
          width: 326px;
          height: 276px;
          border: 2px solid #f2f0ec;
          padding: 33px 30px 44px; 
          margin-left: 5px;
          margin-bottom: 5px

          .Delivery {
            width: 100%;
            height: 40px;
            line-height: 40px;
            background-color: #409EFF;
            font-size: 16px;
            color: #FFF;  
            display: block;
          }
        }    
      }
      }
      }
  }  
</style>
