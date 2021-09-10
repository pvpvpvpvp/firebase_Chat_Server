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
curl -H 'Content-Type:applicat/json' -d '{}' http://localhost:5000/chat-server-dd7d4/us-central1/v1/reset
```