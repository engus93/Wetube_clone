# #2 ExpressJS

## 01. server

###### 서버란 두가지 의미로 나뉜다. 물리적 서버와 소프트웨어적 서버

> - 물리적 서버 : 24/7 네트웨크에 연결되어 있는 컴퓨터
> - 소프트웨어적 서버 : 인터넷에 연결된 하나의 덩어리 또한 URL에 응답하고, 접속을 허용하는 일 등을 함
> - 서버란? 접속을 받아주는 무언가 → 항상 어떠한 접속을 Listen 하고 있는 것

## 02. Express

![Express](https://miro.medium.com/max/832/1*uPL1uCtLBRSk6akPL2hNzg.jpeg)

> `Express`는 `Node.js`에서 동작하는 Framwork이다.

###### ※ Django는 Python의 Framwork다.

#### Express의 특징

- `Express`를 찾는 이유는 안정적으로 빠르고 쉽게 서버 구축이 가능하기 때문이다.
- Git 마지막 commit이 오래 되었다. → "그 만큼 구조가 안정기에 접어들었다." 라고 판단

## 03. NPM

![Npm Logo](https://heropy.blog/css/images/vendor_icons/npm.png)

> npm (Node Package Manager)은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다. 자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자이다.

###### ※ Node.js를 설치하면 자동적으로 같이 설치됨

##### 1. node start

> `node ~.js`를 매번 해주는 불편함을 package.json 파일에 `"scripts": {"start" : "node index.js"}` 를 추가하면 `npm start`로 대체할 수 있다.

##### 2. nodemon, babel 적용

> `nodemon`과 `babel` 설치 후 `"scripts": {"start" : "nodemon --exec babel-node index.js --delay 2"}` 로 수정해준다.
> 마지막에 delay 2를 넣어주는 이유로는 babel이 변환을 완료할 때까지의 시간을 주기 위해서이다. delay가 없으면 nodemon이 실행됐을때, babel이 변환이 완료됐을 때 총 2번의 서버 재시작이 이뤄지게 된다.

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

## 5. Babel

![Babel Logo](https://jaeyeophan.github.io/images/babel.png)

#### Babel 설정법

##### .babelrc

```JSON
{
  "presets": ["@babel/preset-env"]
}
```

> babelrc이라는 File을 생성해서 preset에 맞는 값을 넣어준다.

##### package.json

```JSON
"scripts": {
    "start": "babel-node index.js"
}
```

> node 앞에 `babel-`을 추가하면 node가 바벨과 연동이 된다.

## 6. Nodemon

![Nodemon Logo](https://krauser085.github.io/assets/img/nodemon.png)

> `nodemon`은 `node.js` 서버 개발시에 소스코드에 수정이 있을 경우, 자동으로 서버를 재시작 해주는 툴이다.

#### 설정법

##### package.json

```JSON
"scripts": {
    "start": "nodemon --exec babel-node index.js --delay 2"
}
```

> 제일 앞에 `nodemon --exec`를 붙여주고 서버가 `babel`과 시간차로 재시작 되는 것을 막기 위해 제일 끝에 `--delay 2`를 넣는다.

## 07. Arrow Function

##### implicit-arrow-linebreak (암시적 리턴)

```JS
lalala = () => true;
```

###### ※ 중괄호를 하면 암시적 성격을 잃음 → return을 해줘야 함

```JS
lalala = () => {
   return true;
}
```

## 08. Routing

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

## 9. Pug

![Pug Logo](https://www.nodejsera.com/library/assets/img/pug-logo.png)

> `Pug`는 html code를 최소화시키도록 도와주는 도구이다. 정적인 파일과 동적인 파일의 장단점을 결합시켰다.

#### 1. Pug 문법

```HTML
doctype html
html
    head
        title #{pageTitle} | #{siteName}
    body
        include ../partials/header
        main
            block content
        include ../partials/footer
```

###### ※ pug 확장자 안에서 JS 코드를 쓰려면 #{ } 안에서 사용하면 된다.

#### 2. Template Engine Pug의 장점

- HTML을 간단하게 표현해서 가독성이 좋다.
- 마크업 문법보다 코드량이 적어 생산성이 좋아진다.
- JS 연산 결과를 쉽게 보여줄 수 있다.
- 정적인 부분과 동적인 부분을 따로 할 수 있다.
- 타 Express Engine보다 Google Trend 수치가 높다.
- Pug는 Jade였다.

###### ※ Pug는 기존에 Jade라는 이름을 가지고 있었습니다. 하지만 이미 상표권이 있는 이름이였기 때문에 Pug라는 이름으로 바꾸게 됩니다.

## 10. Locals

```JS
//middlewares.js
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next();
};
```

###### 변수 또는 객체를 글로벌 선언해 사용할 수 있게 하는 `locals` 다른 곳에서는 routes를 선언함으로 그 안에 데이터를 사용 가능 ex) routesl.join

## 11. Mixin

> `mixin`은 `pug` 함수로서 **반복되는** HTML을(혹은 어떤 의미덩어리를) 함수 형태로 만들 수 있도록 기능을 제공하는 것이다.

```HTML
<!-- 선언 -->
mixin list

ul
li foo
li bar
li baz
```

```HTML
<!-- 사용하기 -->
+list
```

```HTML
<!-- 우리가 보는 실질적 내용 -->
<ul></ul>
<li>foo</li>
<li>bar</li>
<li>baz</li>
```

## 12. Status Code

> HTTP 응답 상태 코드는 특정 HTTP 요청이 성공적으로 완료되었는지 알려줍니다. 응답은 5개의 그룹으로 나누어집니다.

- 정보를 제공하는 응답
- 성공적인 응답
- 리다이렉트
- 클라이언트 에러
- 서버 에러
