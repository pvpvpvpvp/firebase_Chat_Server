### 참고 해야되는 파일들
```bash
vueChat 디렉토리의
src폴더 하위의
components/Chat.vue
router/index.js
ChatApp.vue
main.js
```

### 참고한 내용
```bash
부교재의 p222~246
강의 해주신 vue-example 에서
vue의 라우터 기능       routing.html
aixos방식의 비동기 통신 moviesapp.html
vue의 구조             sfc폴더
```

### 서버 가동
```bash
firebase serve --only functions
```

### 프로젝트 id

```bash
chat-server-9a345
```
### 채널 생성 API
```bash
curl -H 'Content-Type:application/json' -d '{"cname": "general"}' http://localhost:5000/chat-server-9a345/us-central1/v1/channels
```

### 채널 목록 확인 API
```bash
curl http://localhost:5000/chat-server-9a345/us-central1/v1/channels
```

### 초기화 API
```bash
curl -H 'Content-Type:applicat/json' -d '{}' http://localhost:5000/chat-server-9a345/us-central1/v1/reset
```


### general의 데이터를 읽어오는 API
```bash
http://localhost:5000/chat-server-9a345/us-central1/v1//channels/:cname/messages?cname=general
```

### npm install 한 것들?
```bash
npm i axios
```