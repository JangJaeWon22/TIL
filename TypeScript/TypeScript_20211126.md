# TIL

## TypeScript 시작하기

### 1. 정의

TypeScript는 MicroSoft에서 개발하며 유지보수 하는 오픈소스 프로그래밍 언어이다.
기본적으로 JavaScript의 슈퍼셋인언어이다.
기존 JavaScript에서는 Type 미지원으로 인하여 잦은 오타 및 개발자가 parameter나 Type을 혼돈하는 경우가 많았다.
코드 어시스턴트나 Type을 지원함으로써 개발자의 실수와 Type오류를 줄였다.

---

### 2. 개발 환경 setting

##### - node.js가 설치 되어야 함.

##### - 모듈 설치 및 setting

```jsx
    // 타입 스크립트 설치
    npm install -g typescript

    // package 생성
    npm init

    // tsconfig.json  설정
    tsc -init
```

##### - tsconfig.json 설정 변경

```jsx
{
   "compilerOptions": {
       "module": "commonjs",
       "target":"ES2015",
       "sourceMap":true
   },
   "include": ["index.ts"],
   "exclude": ["node_modules"]
}
```

##### - index.ts 파일 생성

```jsx
console.log("hello");
```

##### - 터미널 창 실행

```jsc
// node.js는 typescipt를 이해하지 못하기 때문에 일반적으로 js 코드를 컴파일 하는 작업이 필요함
    tsc
```

##### - index.js, index.js.map 생성된 거 확인.

##### - package.json 내용 변경

- 실행 될때 마다 컴파일 되도록 수정

```jsx
...

// 스크립트에서 실행전 prestart로 npm start 시 자동으로 tsc(컴파일)해줌
"scripts": {
    "start": "node index.js",
    "prestart": "tsc"
  },

...
```

---

### 3. 파일 분리 및 자동 실행

##### - tcs-watch 설치

```jsx
npm install -D tsc-watch
```

##### - src, dist 폴더 생성

      - src에는 ts 파일을 넣고
      - 컴파일 된 파일은 dist에 넣을 예정

##### - tsconfig.json 수정

        - compilerOptions에 outDir: dist 설정을 해주면서 컴파일 된 js파일을 dist로 보냄
        - include에서 src/\*_/_ 설정 해줌 -> src의 모든 파일을 컴파일 함.

```jsx
{
    "compilerOptions": {
        "module": "commonjs",
        "target":"ES2015",
        "sourceMap":true,
        "outDir": "dist"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```

##### - package.json script 부분 수정

```jsx
...

  "scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\" "
  },

...
```

##### - .gitignore에 dist 추가

##### - 실행

```jsx
    npm start

    //결과
    오후 3:42:01 - Starting compilation in watch mode...

    오후 3:42:03 - Found 0 errors. Watching for file changes.
```

> 별도로 nodemon을 사용 할경우
> npm install --save-dev nodemon ts-node
> "scripts": {
> "start": "nodemon — exec ts-node src/index.ts"
> }

---

### 4.class로 가지고 놀기

##### - src/index.ts

```jsx
class Human {
    // class 밖에서도 사용 할 수 있도록 public로 설정
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const jaewon = new Human("jaewon", 100, "male")

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
};

console.log(sayHi(jaewon))

export {};
```

---

### 5. test 해보기

```jsx
class User{
    public email: string;
    public password: string;
    public age: number;
    public name: string;
    public phone: string;
    public date: string;
    constructor(
        email:string,
        password:string,
        age:number,
        name:string,
        phone:string,
        date:string
    ) {
        this.email = email;
        this.password = password;
        this.age = age;
        this.name = name;
        this.phone = phone;
        this.date = date;
    }
}

const userInfo: User = new User("abc@email.com", "123123", 20, "jaewon", "010-1234-1234", "2021-11-26")

let registerUser: [User] = [userInfo];

console.log(registerUser)

export {};
```
