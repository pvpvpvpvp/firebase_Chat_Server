<template>
   <div id="app"><ul>
       <li>{{cname1}}</li>
       <li v-for="(mes, index) in messages" v-bind:key="index">{{mes.body}}<br/>{{mes.date}}</li>
       <li><input type="text" v-model="message"><input type="button" value="SEND"
       @click="send_message"></li>
       </ul></div> 
</template>

<script>
import axios from 'axios'
export default {
  methods:{
        send_message(){
            axios.post('http://localhost:5000/chat-server-9a345/us-central1/v1//channels/'+this.$route.params.cname+'/messages',{                
               headers: { 'Content-type': 'application/x-www-form-urlencoded', },
               "body" : this.message
            })
            .then((response,resq)=>{
                this.checksend=true;
                console.log(response);
                console.log(resq);
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
