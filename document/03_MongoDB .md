# #3 MongoDB

## 1. MongoDB란?

![MongoDB Logo](https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png)

> `MongoDB`는 C++로 작성된 오픈소스이며 크로스 플랫폼 도큐먼트 지향 데이터베이스 시스템이다. NoSQL 데이터베이스로 분류되는 몽고DB는 JSON과 같은 동적 스키마형 문서들을 선호함에 따라 전통적인 테이블 기반 관계형 데이터베이스 구조의 사용을 삼간다.

출처: https://kkyunstory.tistory.com/1

#### 1.1 NoSQL이란?

> `NoSQL`이란? **Not Only SQL**의 약자로 기존의 RDBMS의 한계를 극복하기 위해 만들어진 새로운 형태의 데이터저장소 입니다. **관계형 DB가 아니므로, RDMS처럼 고정된 스키마 및 JOIN 이 존재하지 않습니다.**

#### 1.2 도큐먼트 지향 (Document Oriented)

> **Key : Value 형태**의 `JSON`과 비슷한 형태라고 생각하면 쉽다.

## 2. 실행 방법

###### ※ 먼저 윈도우 환경 변수에 `C:\Program Files\MongoDB\Server\3.2\bin`를 추가해준다.

```bash
# db 폴더를 먼저 생성해준다.
mkdir C:\data\db

# Server를 실행 시킨 뒤에
mongod

# 접속한다.
mongo
```

## 3. Mongoos

![Mongoose Logo](https://res.cloudinary.com/dxwefujke/image/upload/v1528398729/20160620102203_885_o1fgwu.jpg)

> `Mongoose`는 MongoDB 기반 ODM(Object Data Mapping) Node.JS 전용 라이브러리이다. ODM은 데이터베이스와 객체지향 프로그래밍 언어 사이 호환되지 않는 데이터를 변환하는 프로그래밍 기법이다. **즉 MongoDB 에 있는 데이터를 JavaScript 객체로 사용 할 수 있도록 해준다.**

출처: https://velopert.com/594

#### 3.1 MongoDB와 연동하기

```JS
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:PORT-Number/DB-Name");
```

## 4. Data Schema

```JS
// models/Comment.js

import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
```

> Schema 안에 여러 Attribute를 줄 수 있다. 또한 위에 내용에서 `creator`의 집중을 하면 `ref`를 확인할 수 있다. `ref`는 다른 Model의 내용을 참조한다는 뜻이다.

출처: https://docs.mongodb.com/manual/core/data-modeling-introduction/
