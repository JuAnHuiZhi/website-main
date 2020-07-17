<template>
  <div class="feed">
      <!-- 防止链接跳转 -->
     <!-- <a href="javascript:;"></a> -->
      <h3>留言反馈</h3><br>
      <h3>FEEDBACK</h3>
      <!-- <div class="main">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="您的昵称" prop="name">
              <el-input></el-input>
               <el-input v-model="ruleForm.name"></el-input> -->
              <!-- </el-form-item>
              <el-form-item label="您的电话" prop="tel">
              <el-input></el-input>
              </el-form-item>
              <el-form-item label="您的地址" prop="addders">
              <el-input></el-input>
              </el-form-item>
              <el-form-item label="联系邮箱" prop="email">
              <el-input></el-input>
              </el-form-item>
              <el-form-item label="活动形式">
                  <el-input type="textarea"></el-input> -->
              <!-- <el-input type="textarea" v-model="form.desc"></el-input> -->
              <!-- </el-form-item>
          </el-form>
         
      </div> --> 
       <form class="form-horizontal" action="/plus/diy.php" enctype="multipart/form-data" method="post" onsubmit="return checkForm();">
    <input type="hidden" name="action" value="post" />
    <input type="hidden" name="diyid" value="1" />
    <input type="hidden" name="do" value="2" />
    <div class="Comprepair">
      <ul class="clearfix">
        <li>
          <label class="clearfix"> <span><em><font style='color:red'>*</font></em>您的昵称：</span>
            <input type="text" name="names" id="names" value="" class="inputext" placeholder=""/>
          </label>
        </li>
        <li>
          <label class="clearfix"> <span><em><font style='color:red'>*</font></em>您的电话：</span>
            <input type="text" name="phones" id="phones" value="" class="inputext" placeholder=""/>
          </label>
        </li>
        <li>
          <label class="clearfix"> <span><em><font style='color:red'>*</font></em>您的地址：</span>
            <input type="text" name="addresss" id="addresss" value="" class="inputext" placeholder=""/>
          </label>
        </li>
        <li>
          <label class="clearfix"> <span><em></em>联系邮箱：</span>
            <input type="text" name="mail" id="mail" value="" class="inputext" placeholder=""/>
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
            <input type="submit" value="提交" class="submit">
          </label>
        </li>
      </ul>
    </div>
  </form>
      
  </div>
</template>

<script>
export default {
  name: 'feed',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    text-align: left;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
}
.feed{
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    border: 2px solid rosybrown;
    /* background-color: antiquewhite; */
}
form{
    display: block;
}
input[type="hidden" i]{
    -webkit-appearance: initial;
    background-color: initial;
    cursor: default;
    padding: initial;
    border: initial;
    display: none;
}
input, textarea, select, button {
    text-rendering: auto;
    /* color: initial; */
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 13.3333px Arial;
    font-size: 14px;
    line-height: 24px;
    color: #333;
    font-family: 'Microsoft YaHei';
}
.Comprepair li {
    margin-bottom: 13px;
}
body, button, input, select, textarea {
    font-size: 14px;
    line-height: 24px;
    color: #333;
    font-family: 'Microsoft YaHei';
}
.main{
   padding-top: 30px;
    display: flex;
    margin-left: 50px;
    border: royalblue;
}
</style>