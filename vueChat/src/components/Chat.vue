<template>
   <div id="app"><ul>
       <el-container class="main">
           <el-header><li>{{cname1}}</li></el-header>
           <el-main> 
               <li v-for="(mes, index) in messages" v-bind:key="index">
                    <el-row>
                        <el-col :span="3">
                            <img src="../assets/logo.png" width=50>
                        </el-col>
                         <el-col :span="21">
                            <el-row>
                                 <el-col :span="3" class="id">
                                     {{mes.user.name}}
                                 </el-col>
                                 <el-col :span="21" class="date">
                                     {{mes.date}}
                                 </el-col>
                            </el-row>
                            <el-col :span="24" class="grid-content">
                                    {{mes.body}}
                            </el-col>
                        </el-col>
                    </el-row>
                </li>
            </el-main>
      <el-footer> 
          <input class="el-input" type="text" v-model="message">
          <input class="el-button" type="button" value="SEND"
            @click="send_message">
        </el-footer>
        </el-container>
        </ul></div>
      
</template>

<script>
import axios from 'axios'
export default {
  methods:{
        send_message(){
            axios.post('http://localhost:5000/chat-server-9a345/us-central1/v1//channels/'+this.$route.params.cname+'/messages',{                
               headers: { 'Content-type': 'application/x-www-form-urlencoded', },
               "body" : this.message,
                "user":{
                    "avatat":"",
                    "name":"홍길동",
                    "id":0

                }
            })
            .then((response,resq)=>{
                console.log(response);
                console.log(resq);
                this.checksend=true;
            }).catch();
            
        }
    }
    ,
    data(){ 
        return {
             cname1: '',
             message:"",
             messages:[],
             checksend: false
            }
    } 
    , 
    mounted(){ 
        this.cname1 = this.$route.params.cname 
        console.log("Sub component mounted!");
    },
    created() {
         console.log("Sub component created!");
        axios.get('http://localhost:5000/chat-server-9a345/us-central1/v1//channels/'+this.$route.params.cname+'/messages')
        .then(response=>{
            console.log(response);
            this.messages = response.data.messages.reverse();
            console.log("메세지 목록",response.data);
        }).catch();
    },
    destroyed: () => {
        console.log("Sub component destroyed!");
        //  리소스 정리 작업
    }
    ,
     watch: { //라우터 변화를 탐지해서 다시불러옴
        '$route' (to, from) {
            this.cname1=to.params.cname;
            console.log("to",to.params.cname);
            axios.get('http://localhost:5000/chat-server-9a345/us-central1/v1//channels/'+to.params.cname+'/messages')
            .then(response=>{
                console.log(response);
                this.messages = response.data.messages.reverse();
                console.log("메세지 목록",response.data);
            }).catch();
        }, 
        checksend: function(){
            axios.get('http://localhost:5000/chat-server-9a345/us-central1/v1//channels/'+this.$route.params.cname+'/messages')
            .then(response=>{
                console.log(response);
                this.messages = response.data.messages.reverse();
                console.log("메세지 목록",response.data);
                this.checksend=false
            }).catch();
            
        } 
    }

                 
}


</script>

<style scoped>

</style>
