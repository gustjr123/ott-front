# Vod Project

This project start for vod app for front

## Available Scripts

In the project directory, you can run:

### `npm start`

어플리케이션 실행

### `npm run build`

배포용 build파일 생성

## cloud front 사용법 주의

※ 영상 or 썸네일[s3 저장된 파일] 제목에 공백(' ') 또는 한글이 포함되면 안된다.

[추가] ALB 리스터 80포트를 443 root(/)로 리디렉션하도록 설정

[추가] API 접근을 위한 Access Token 관련 설명

API에 접근하기 위한 사용자 인가를 위한 OIDC 방식을 활용하는 것이다.

코드에 사용된 cognito에서는 API같은 리소스에 대한 인증 인가를 위한 accessToken과 OAUTH 2.0이 이 accessToken에 대한 것이다.

OIDC는 OAuth 2.0에서 확장하여 신원 인증을 추가한 프로토콜로 인가과정에서 사용자의 신원정보를 포함하여 완전한 신원관리를 위한 것이다.(IdToken)

여기서 API Gateway의 권한 부여자를 위해서 인증에 사용되는 토큰은 OIDC를 위한 IdToken을 활용하여 인증을 한다.
