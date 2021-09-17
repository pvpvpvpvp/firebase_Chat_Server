<template>
  <div id="app">  
          <el-container>
              <el-aside>
                <ul>
              <li v-for="(channel, index) in channels"
              v-bind:key="index">
              <router-link v-bind:to="'/chat/' + channel">{{channel}}</router-link>
              </li>     
          </ul>
               
              </el-aside>
            <router-view></router-view>
          </el-container>
          
          
  </div>
</template>

<script>
import axios from 'axios'
export default {   
      
    data:()=>{
        return{
             channels: [],
        }
    },
    created() {
        console.log("Main component created!");
        axios.get('http://localhost:5000/chat-server-9a345/us-central1/v1/channels')
        .then(response=>{
            console.log(response);
            this.channels = response.data.channels
            console.log("채널목록",response.data.channels);
        }).catch();
    }
    ,
    mounted: () => {
        console.log("Main component mounted!");
    },
    destroyed: () => {
        console.log("Main component destroyed!");
        //  리소스 정리 작업
    }
    
}
</script>

<style>
body{
    margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
    list-style-type: none;
    padding: 0;
}
.el-header{
    border-bottom: 1px solid black;
}
.el-header .el-footer{
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-aside {
    background-color: #4a3a4a;
    text-align: center;
    width: 100px!important;
}
.el-aside a{
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
}
.el-main{
    background-color: #ffffff;
    color: #333;
    text-align: center;

}
.el-container{
    height: 100vh;
}
.el-input{
    width: 50%;
}
.el-table{
    width: 70%;
}
.grid-content{
    min-height: 25px;
    padding: 0 6px;
    font-size: 14px;
}
.id{
   font-weight: bold;
   font-size: 12px;
   text-align: center; 
}
.date{
   font-size: 12px;
}



</style>
