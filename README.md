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