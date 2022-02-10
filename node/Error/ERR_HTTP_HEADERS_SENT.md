# Error

### Cannot set headers after they are sent to the client

**Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client at ServerResponse.setHeader**

무슨 오류이지... 고민 했다..

파파고를 돌려보자..

> 오류 [ERR_]HTTP_HEADERS_SENT]: 헤더를 ServerResponse에서 클라이언트로 보낸 후 헤더를 설정할 수 없습니다.세트헤더

먼 말인지 찾아봤다...

### 실수로 두 번 호출되는 콜백이나 몸이 전송된 후에 발생하는 오류를 찾아보는 것이다.

> [https://avengersrhydon1121.tistory.com/150](https://avengersrhydon1121.tistory.com/150) [익명의 개발노트]

#### 코드 상태를 보자

- 문제의 코드

```jsx
const likeUser = await Like.findOne({
  where: {
    [Op.and]: [{ userId }, { postId }],
  },
});
if (!likeUser) {
  const like = await Like.create({
    postId,
    userId,
  });
  res.status(200).send({ result: like, msg: "좋아요 완료" });
}
res.status(200).send({ msg: "좋아요는 한번만 할 수 있습니다." });
```

2번이나 호출 되는건지 한참 고민했다.

설마.. 하는 마음에 if문이 끝나고 return을 안해줘서 그 다음에 있는 res.status(200).send가 실행이 되어서 그런가 했다.

맞았다..

그냥 return말고 else로 한번 감싸줬다.

- 수정 코드

```jsx
const likeUser = await Like.findOne({
  where: {
    [Op.and]: [{ userId }, { postId }],
  },
});
if (!likeUser) {
  const like = await Like.create({
    postId,
    userId,
  });
  res.status(200).send({ result: like, msg: "좋아요 완료" });
} else {
  res.status(200).send({ msg: "좋아요는 한번만 할 수 있습니다." });
}
```

하 이런 오류가 뜨네... 다음엔 좀 더 프로그램을 견고하게 짜야겠다.. 컴퓨터가 잘 알려주네요! 이런 친절한 에러메세지 고맙네요
