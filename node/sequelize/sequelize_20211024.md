# TIL

## Sequlize mysql 관계 형성 연습

### 관계 정의 시 사용 하는 메서드

- hasOne
- hasMany
- belongsTo
- belongsToMany

---

> belongTo는 다른 모델의 정보가 들어가는 테이블에 사용하면 된다.

---

### 1:1 관계

- User : Info
  - User → Info ⇒ hasOne
  ```jsx
  static associate(db) {
  	db.User.hasOne(db.Info, {foreignKey: "infoUser", sourceKey: "name",});
  }
  ```
  - User ← Info ⇒ belongTo
  ```jsx
  static associate(db) {
    db.Info.belongTo(db.User, {foreignKey: "infoUser", targetKey: "name",});
  }
  ```

---

### 1:N 관계

- User : Comment
  - User → Comment
  ```jsx
  static associate(db) {
    db.User.hasMany(db.Comment, {foreignKey: "commenter", sourceKey: "name",});
  }
  ```
  - User ← Comment
  ```jsx
  static associate(db) {
    db.Comment.belongTo(db.User, {foreignKey: "commenter", targetKey: "name",});
  }
  ```

---

### N:M 관계

- Post : Hashtag
  - Post → Hashtag
  ```jsx
  static associate(db) {
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
  }
  ```
  - Post ← Hashtag
  ```jsx
  static associate(db) {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  }
  ```
  자동으로 생성된 PostHashtag 모델에도 접근 가능함.
  db.sequelize.models.PostHashTag

---

### 🔗 관계 쿼리

findOne이나 findAll 메서드를 호출할 때 프로미스의 결과로 모델을 반환.

```jsx
const user = await User.findOne({});
console.log(user.nick);
```

User 모델의 정보에도 바로 접근 가능함

    - mysql의 Join 기능을 지원

```jsx
const user = await User.findOne({
  include: [
    {
      model: Comment,
    },
  ],
});
console.log(user.Comments);
```

- 관계가 설정 되어있다면 getComments(조회), setComments(수정), addComment(하나 생성), addComments(여러개 생성), removeComments(삭제) 메서드를 지원합니다.
  - 동사 위 모델의 이름이 붙음 (모델 이름 바꿀 때는 as를 사용)

```jsx
//관계를 설정할때 ad 사용
db.User.hasMany(db.Comment, {
  foreignKey: "commenter",
  sourceKey: "id",
  as: "Answers",
});
```

- 위 같은 값을 사용해서 쿼리 할때

```jsx
const user = await User.findOne({});
const comments = await user.getAnswers();
console.log(comments);
```

- as를 설정하면 include 시 추가되는 댓글 객체도 user.Answers로 바뀝니다
- include나 관계 쿼리 메서드에도 where나 attributes 같은 옵션을 사용할 수 있습니다.

```jsx
const user = await User.findOne({
  include: [{
    model: Comment,
    where: {
      id:1,
    },
    attributes: ['id'],
  }]
});

//또는
const comments = await user.getComments({
  where: {
    id: 1,
  },
  attributes: ['id'];
})
```
