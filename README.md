# OTT 서비스 Front APP

OTT Front APP 부분 개발

![image](https://github.com/gustjr123/vod-front/assets/26512495/60eaf729-5aad-48de-9406-4a62ab51af76)
![image](https://github.com/gustjr123/vod-front/assets/26512495/4042fa48-f47d-4954-9043-15f7067e50e1)

- - -

## 명령어
#### 실행
``` bash
npm start
```
#### 정적파일 생성 (빌드)
``` bash
npm run build
```

- - -

## cloud front 사용 시 주의

※ 영상 or 썸네일[s3 저장된 파일] 제목에 공백(' ') 또는 한글이 포함되면 안된다.

- - -

## 참고 사항

- API 접근을 위한 Access Token 관련 설명

API에 접근하기 위한 사용자 인가를 위한 OIDC 방식을 활용하는 것이다.

코드에 사용된 cognito에서는 API같은 리소스에 대한 인증 인가를 위한 accessToken과 OAUTH 2.0이 이 accessToken에 대한 것이다.

OIDC는 OAuth 2.0에서 확장하여 신원 인증을 추가한 프로토콜로 인가과정에서 사용자의 신원정보를 포함하여 완전한 신원관리를 위한 것이다.(IdToken)

여기서 API Gateway의 권한 부여자를 위해서 인증에 사용되는 토큰은 OIDC를 위한 IdToken을 활용하여 인증을 한다.
