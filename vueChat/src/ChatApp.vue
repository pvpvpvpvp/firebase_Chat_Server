<template>
  <div id="app">
      <div>
          <h2>채널 목록</h2>
          <ul>
              <li v-for="(channel, index) in channels"
              v-bind:key="index">
              <router-link v-bind:to="'/chat/' + channel">{{channel}}</router-link>
              </li>
          </ul>
      </div>
    <router-view></router-view>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
