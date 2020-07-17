<template>  
  <div class="container-warrper">
      <div class="inside-banner"> 
          <img src="../../assets/1569473641 (1).jpg"/>
       </div>
      <el-card class="box-card">
    <el-tabs :before-leave="moreState" >
      <el-tab-pane label="联系我们" name="contact">
          <div class="us">
              <h3>联系我们</h3>
              <div class="english">CONTACT US</div>
              <div class="main">
                  <img src="../../assets/1569492303.jpg">
                  <div class="right">
                      <h1>聚安汇智有限公司</h1>
                      <span>微信：wx123456</span>
                      <span>邮箱：wx123456</span>
                      <span>电话：wx123456</span>
                      <span>手机：wx123456</span>
                      <span>地址：wx123456</span>
          </div>
      </div>
          </div>
      </el-tab-pane>
      <el-tab-pane label="留言反馈" name="feedback">
          <div>
              <h3>留言反馈</h3><br>
              <h3>FEEDBACK</h3>
              <div class="Comprepair">
      <ul class="clearfix">
        <li>
          <label class="clearfix"> <span><em><font style='color:red'>*</font></em>您的昵称：</span>
            <input type="text" name="names" id="names" value="" class="inputext" v-model="name" placeholder="请输入您的昵称"/>
          </label>
        </li>
        <li>
          <label class="clearfix"> <span><em><font style='color:red'>*</font></em>您的电话：</span>
            <input type="text" name="phones" id="phones" value="" class="inputext" v-model="phone" placeholder="请输入您的电话"/>
          </label>
        </li>
        <li>
          <label class="clearfix"> <span><em><font style='color:red'>*</font></em>您的地址：</span>
            <input type="text" name="addresss" id="addresss" value="" class="inputext" v-model="addresss" placeholder="请输入您的地址"/>
          </label>
        </li>
        <li>
          <label class="clearfix"> <span><em></em>联系邮箱：</span>
            <input type="text" name="mail" id="mail" value="" class="inputext" v-model="email" placeholder="请输入您的邮箱"/>
          </label>
        </li>
        <li class="litextarea">
          <label class="clearfix"> <span><em></em>留言内容：</span>
            <textarea name="contents" id="contents"></textarea>
          </label>
        </li>
        <input type="hidden" name="dede_fields" value="name,text;phones,text;addresss,text;mail,text;contents,text" />
        <input type="hidden" name="dede_fieldshash" value="8b2a50fe7b12d03231635b708ed54935" />
        <li class="lisubmit">
          <label class="clearfix">
            <input type="submit" value="提交" class="submit" @click="submitForm($event)">
          </label>
        </li>
      </ul>
    </div>
          </div>
      </el-tab-pane>
    </el-tabs>
  </el-card>
  <us/>
  <feed/>
  </div>
</template>
<script>
 import us from 'pages/relation/us' 
 import feed from 'pages/relation/feed'
export default {
  name: 'relation',
   data () {
    return {
    //   isShow:false,
    //   activeName:'contact',
    //   user:this.$router.push({name:'us'})
    // },
    // {
    //   isShow:false,
    //   activeName:'contact',
    //   user:this.$router.push({name:'feed'})
    }
     components: {
         us,
         feed
     } 
  }, 
  methods:{
    submit: function(event) {
        event.preventDefault();
        let formData = new FormData();
        //下面是表单绑定的data 数据
        formData.append('name', this.name);
        formData.append('phone', this.phone);
        formData.append('address', this.address);
        formData.append('email', this.email);
        
        //vue-resource
        this.$http.post('/api', formData).then(res => {
              // success callback
          }, err => {
              // error callback
        });
        //axios
 
        //根据后台接收参数格式进行修改
        let config = {
             headers: {
               'Content-Type': 'multipart/form-data'
             }
         }
        
        axios.post('/api',formData, config).then(res => {
            // success callback
        }).catch(err => {
            // error callback
        });
    }
}
}
</script>
<style scoped>
h3{
    text-align: left;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
    
}
.english{
    text-align: left;
    padding-top: 10px;
    font-size: 22px;
    color: red;
    margin-left: 50px;
}
.main{
    padding-top: 30px;
    display: flex;
    margin-left: 50px;
    border: royalblue;
}
.right{
    width: 80%;
    /* margin-top: 5%; */
    border: 1px solid rgb(204, 195, 195);
    text-align: left;
    padding-left: 5%;
}
.right h1{
    margin-top: 8%;
    font-size: 22px;
    font-weight: 500;
    color: rgb(156, 6, 6);
}
.right span{
    display: block;
    padding: 5px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
  .container-warrper {
    width: 100%;
    height: 800px; 
    margin-top: 15px;
    /* background: rgba(0, 0, 0, 0.3);   */
  }  
  .inside-banner img{
      margin-top: -15px;
  }
  .Comprepair{
      margin:40px 50px 40px;
      height: 400px;
      border: 1px solid red;
  }
  .Comprepair label span {
    float: left;
    display: flex;
    width: 92px;
    font-size: 16px;
    margin-right: 20px;
    margin-bottom: 0;
    height: 57px;
    line-height: 57px;
    text-align: right;
}
label{
    cursor: pointer;
    width: 100%;
    height: 40px;

}
input[type="submit"] {
    cursor: pointer;
    background-color: firebrick; 
    color: floralwhite;
    width: 200px;
    height: 50px;
}
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
/* 留言反馈表格 */
.Comprepair label .inputext {
    height: 46px;
    line-height: 56px;
    float: left;
    width: 380px;
    margin-top: 20px;
}
</style>