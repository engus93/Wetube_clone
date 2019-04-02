# #2 ExpressJS

## 01. server

###### 서버란 두가지 의미로 나뉜다. 물리적 서버와 소프트웨어적 서버

> - 물리적 서버 : 24/7 네트웨크에 연결되어 있는 컴퓨터
> - 소프트웨어적 서버 : 인터넷에 연결된 하나의 덩어리 또한 URL에 응답하고, 접속을 허용하는 일 등을 함
> - 서버란? 접속을 받아주는 무언가 → 항상 어떠한 접속을 Listen 하고 있는 것

## 02. Express

> Express는 Node.js에서 동작하는 Framwork이다.

###### ※ Express를 사용하는 이유 : 안정적으로 빠르고 쉽게 서버 구축이 가능

## 03. NPM

> npm (Node Package Manager)은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다. 자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자이다.

###### ※ Node.js를 설치하면 자동적으로 같이 설치됨

##### 1. node start

> `node ~.js`를 매번 해주는 불편함을 package.json 파일에 `"scripts": {"start" : "node index.js"}` 를 추가하면 `npm start`로 대체할 수 있다.

##### 2. nodemon, babel 적용

> `nodemon`과 `babel` 설치 후 `"scripts": {"start" : "nodemon --exec babel-node index.js --delay 2"}` 로 수정해준다.  
마지막에 delay 2를 넣어주는 이유로는 babel이 변환을 완료할 때까지의 시간을 주기 위해서이다. delay가 없으면 nodemon이 실행됐을때, babel이 변환이 완료됐을 때 총 2번의 서버 재시작이 이뤄지게 된다.

## 04. Middleware

> Middleware는 간단하게 표현하면 요청과 응답 사이 즉, **중간에서 어떠한 것을 처리하는 아이이다.**

```JS
const app = express();

const betweenHome = (req, res, next) => {
   console.log('Between'); 
   next();  
};
app.get("/", betweenHome, handleHome);
app.get("/profile", handleProfile);
```

###### ※ 이런식으로 처리한다면 모든 처리 과정에 넣어줘야 하기에 app.use를 이용해 모든 라우트 과정에 넣어줄 수도 있다.

```JS
const betweenHome = (req, res, next) => {
   console.log('Between'); 
   next();  
};
app.use(betweenHome);
app.get("/", handleHome);
app.get("/profile", handleProfile);
```

## 05. Routing

> Routing은 클라이언트에서 보내는 주소에 따라 다른 처리를 하는 것을 의미한다.

##### 1. named exports

```JS
// router.js
import express from "express"; 

export const userRouter = express.Router(); 

userRouter.get("/", (req,res) => res.send('user index'));
```

```JS
// app.js 
import { userRouter } from "./router";
... 
app.use("/user", userRouter);
```

---

##### 2. default exports

```JS
// router.js
import express from "express"; 

const userRouter = express.Router(); 

userRouter.get("/", (req,res) => res.send('user index'));

export default userRouter;
```

```JS
// app.js 
import userRouter from "./router";
... 
app.use("/user", userRouter);
```

---

> 1번 2번 전부 `/user`로 접속했을때에 `/user` + `/` 로 접속해주는 코드이다. 다른점은 export의 차이인데 named export는 변수 하나 하나 export 해주는 것이고 default는 파일 전부를 export 하는 것이다. 이처럼 파일들은 쪼개서 처리하고 파일을 정리하고 분할할 수 있는 것이 Routing이다.

## 06. Arrow Function

##### 1. implicit-arrow-linebreak (암시적 리턴)

```JS
lalala = () => true;
```
###### ※ 중괄호를 하면 암시적 성격을 잃음 → return을 해줘야 함

```JS
lalala = () => {
   return true;
}
```

