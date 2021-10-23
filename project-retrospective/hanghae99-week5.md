# 5주차 프로젝트 - 3조 backend

### 🖥 구현 사이트

http://happyarong.shop.s3-website.ap-northeast-2.amazonaws.com/

### 🎧 영상 링크

구현 영상 : https://www.youtube.com/watch?v=cfT0ilynghU

### 🌼 구현 메인페이지

![image](public/hi.png)

## 프로젝트 소개

### 클로닝 대상 서비스

- Instagram
- link : https://www.instagram.com/

- 선택 이유
  파일업로드와 좋아요 기능을 구현해보는 것을 목적으로 삼고 스코프를 합리적으로 가져가기 위해 웹서비스를 탐색하던 중
  웹버전 인스타그램이 적합하다고 판단함

### 구현 기능

- 로그인 (JWT 토큰) 구현
- 게시글 CRUD 구현
- 게시글 좋아요 기능 구현
- 댓글 기능 구현

## 프로젝트 기간

2021/10/18 ~ 2021/10/22

## 1. Developers

### Backend (Node.js)

- 양주혁
- 장재원
- 홍성현

### Frontend (React)

- 이아영
- 조민갑
- 최진식

## 2. API, DB 설계

https://docs.google.com/spreadsheets/d/1C2EIqLhK7BeodXyVxayOFfIX0kb5Aue_fLQQk4xZhFM/edit?usp=sharing

## 3. 기술스택

|     종류      |  이름   |
| :-----------: | :-----: |
|   개발 언어   | Node.js |
| 데이터베이스  |  Mysql  |
| 웹 프레임워크 | Express |

## 4. 적용 라이브러리

|     종류     |        설명        |
| :----------: | :----------------: |
|     cors     |  교차 리소스 공유  |
|    dotenv    |   환경변수 설정    |
| jsonwebtoken | 회원 계정 JWT 적용 |
|    multer    |    이미지 저장     |
|    mysql     |       Mysql        |
| randomstring |   이미지명 지정    |
|  sequelize   |     MySQL ORM      |
|   winston    |      logging       |
|    morgan    |      logging       |
|     jest     |      testcode      |

---

## 📠 회고록

1. 5일이라는 시간동안 최대한 많은 기능을 가져오기 위해 노력

- 현재 실력을 가늠하여 팔로우 기능에 시간을 투자하기에는 부담이 컸다.
- 생각보다 기능들끼리 묶여 있어서 어떻게 분리하면 최대한의 기능을 챙길 수 있을까 고민
- 웹 서비스에서 기본적인 CRUD가 이뤄지지 않고 앱에서 이뤄지고 있어서 별도로 게시글 작성 할 수 있도록 함
- front-end에서 뷰작업이 끝나는 시점에서 서버를 배포하고 front-end분들이 편하게 작업을 할 수 있는 방법에 대해 back-end 팀원들이 내부적으로 많이 의논 함
- 현재 문제가 되는 부분을 최대한 가지고 있기 위해 logging 구현. (파일로 log 저장)
- jest test code를 작성하여 시스템 로직에 맞게 msg가 전달이 되는지 확인.

2. 프로젝트를 시작하면서 미쳐 파악하지 못한점

- 전체 게시물을 조회 할 때, 좋아요 갯수와 댓글을 같이 불러와서 front-end에서 뿌려주는 작업을 진행을 해야된다는 점을 미쳐 시작할 때 파악하지 못해, 뒤늦게 작업을 하게 됨.
- 좋아요 갯수는 join을 사용해 해당 게시글의 id값을 가진 좋아요 db를 불러와 갯수를 join 시킴.
- 댓글의 항목은 서버 배포 3시간 전 알게되었음.
- 게시글의 해당 id값을 가진 댓글 db를 불러와 join을 시킬 생각이였지만, 미들웨어로 댓글 db의 내용을 findAll 하여 전달을 해도 표현이 가능한가에 대해 팀원들의 회의를 통해 후자를 택함.
- 하지만 front-end 댓글을 각 게시글의 id의 값으로 분류 후 화면에 찍어주는 일이 생각보다 까다롭게 느껴져서 시간 관계 상 더 파고들며 댓글을 어떻게든 보여주는 작업을 못하게 되었다.

3.  winston 적용

- 현재 나의 담당은 댓글 작성 조회 수정 삭제, 좋아요 추가 조회 삭제 기능을 맡았고, 어떻게 하면 logger을 이쁘게 보여주며, 잘 가지고 다닐까 하는 생각이들었다.

```
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : 8080 포트에서 서버가 가동되었습니다.
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : GET /likes/:postId 200 "postId가 2의 글에 user1님이 좋아요를 했습니다."
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : GET /likes/:postId 200 "postId가 1의 글에 좋아요를 한 사람이 없습니다."
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : GET /likes/:postId 200 "postId가 2의 글에 1개의 좋아요가 있습니다."
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : DELETE /likes/:postId 200 "postId가 2의 글에 user1님이 좋아요를 취소 했습니다."
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : GET /likes/:postId 200 "postId가 1의 글에 user1님이 좋아요를 했습니다."
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : GET /replyList/:postId 200 "0개의 댓글을 조회했습니다."
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : POST /replyPost/:postId 200 "user1님이 댓글을 등록했습니다."
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : GET /replyList/:postId 200 "1개의 댓글을 조회했습니다."
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : PUT /replyUpdate/:replyId 200 "user1님의 댓글을 찾을 수 없습니다."
2021-10-19 16:10:19 [인스타그램 클론 코딩] info : DELETE /replyDelete/:replyId 200 "user1님의 댓글을 찾을 수 없습니다."
```

- 위와 같이 로고가 찍히게 하고 error 와 info를 각 컨트롤러의 res.send 직전에 삽입했다.
- 그리고 계속 console.log을 찍어 대는게 아니라 production 일때는 console로 표현이 안되게 했다.
- 서버를 못보고 있을때 발생한 에러또는 작업 현황을 알기위해 file 시스템으로 적용 시켰지만, 현재 프로젝트의 진행과정을 고려하여 일자별, 어떤 조건에 대해 log 저장 파일 초기화 하는 작업을 진행하지 못해서 많이 아쉬웠다.

4.  jest

- 수요일 중간 점검 멘토링 과정 중 테스트 코드를 작성 해보라고 말씀 하심.
- 어떤 부분을 테스트 해야될지에 대해 고민 하다가 좋아요 기능에서 로직이 실행 될 때 적절한 res.send({msg})가 전달 되는지 확인하려고 했다.
- 일단 db에 어떤 조건(좋아요를 한사람이 있는지 없는지 check)를 만족했을 경우에 res.send가 바뀌기 때문에 mockReurnValue을 사용하여 구현 했다.

```
  const req = {
    params: { postId: 1 },
  };
  const res = {
    locals: { userId: "adc" },
    status: jest.fn(() => res),
    send: jest.fn(),
  };
```

- 위의 내용을 전제로 res.send가 잘 나오는지 확인 했다.

```
    expect(res.send).toHaveBeenCalledWith({
      msg: "좋아요는 한번만 할 수 있습니다",
    });
```

- 모든 조건을 충족하여 test가 pass 되었다.
- res.send 가 jest.fn()으로 또 가짜 함수로 감싸주는 것 때문에 object가 메시지의 종류 별로 생성이되면서 object1,2,3으로 그에 따른 메시지가 담겨벼렸다.
- 그래서 마지막 msg에 첫번째 던져주는 msg를 넣어도 pass가 되어 버려서 올바른 test가 아닌걸로 확인 되었다.
- 긴 고민 끝에 항해99 질문방에 올렸지만 답변을 받지 못한 채 끝이 나버려서 많이 아쉬웠습니다.
