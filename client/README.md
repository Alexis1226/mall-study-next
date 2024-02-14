###

프론트엔드 마이그레이션 참고 사이트

- https://www.educative.io/answers/steps-for-migrating-an-existing-react-project-to-next-js

# Mall

![Mall image](/public/Mall.png)
기존에 작업했던 쇼핑몰 [어플리케이션](https://github.com/Alexis1226/mall-study)을 Next.js로 마이그레이션한 프로젝트

## 설치 및 실행

```bash
$ git clone https://github.com/Alexis1226/mall-study.git

# for client-side
$ yarn client

# for server-side
$ yarn server
```

http://localhost:3000 으로 접속

## 기술 스택

Frontend: React.js, Typescript, Vite, Recoil, React-Query, SCSS

Backend: GraphQL, AplloClient, Firebase

Deployment: Vercel & Heroku

### Trouble Shooting

- RootLayout에서 라이브러리 세팅 불가 [블로그](https://alexisw.tistory.com/44)
