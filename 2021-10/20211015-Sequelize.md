# TIL

### 내가 편하게 쓸려고 만드는 Sequelize

- Sequelize 모듈 설치
    
    ```jsx
    npm i sequelize mysql2 -S
    
    npm i sequelize-cli -D
    ```
    
- 사용준비
    
    ```jsx
    npx sequelize init
    ```
    
    - models 폴더 안 index.js 파일 생성
    - config/config.json 생성
    - 아이디 비밀번호는 development에 수정
- db생성
    
    ```jsx
    npx sequelize db:create
    ```
    
- 사용자 모델 생성
    
    ```jsx
    //참고 한칸씩만 띄워서 사용하는데 dataType 설정할땐 다 붙혀서 해야됨
    
    npx sequelize model:generate 
    --name Post 
    --attributes 
    songName:string,
    userId:string,
    desc:string,
    singer:string,
    url:string,
    date:date,
    category1:string,
    category2:string,
    category3:string
    ```
    
    - 추가 수정 사항
        
        moduels의 기본값들 수정 할 부분 있으면 수정하고
        
        migrations의 파일도 수정 해준다.
        
- 테이블 생성
    
    ```jsx
    npx sequelize db:migrate
    ```
    
- op 사용!
    - op를 사용하면 or 와 and 연산자를 중첩하여 사용해서 AND/OR 조건을 만들어 낼 수 있음.
    
    ```jsx
    const { Op } = require("sequelize");
    ```