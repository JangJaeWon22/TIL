# Error

Access to XMLHttpRequest at '주소A' from origin '주소B' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

###### 에러 발생 시기

 항해 99 시즌 중 주특기로 연마 후 프론트 단과 백 단이 만나서 서로 미니 프로젝트를 하기 위해 사전 연습을 실행 했다.

연습의 로직은 회원가입이였다. 아주 간단하게 연결만 보는 것 까지

- Back 부분에서는 배운 것 그대로 구현 해 나갔다.
- 프론트 단의 코드 내용은 하나도 몰랐다.... 하지만 눈치 것 DB를 요청하는 부분을 찾아 냈다.
    - 서버로 정보를 요청하는 부분을 찾았는데 무슨 코드인지 하나도 몰랐다. 이게 React인가...
        
        일단 고쳐 나가야 겠다.
        
    - fatch와 ixos 문법 중 json으로 변환을 알아서 시켜주는 ixos 부분으로 수정했다
    
    ```jsx
    const signupFB = (username, password, email) => {
      return function (dispatch, getState, { history }) {
            
        axios
        .post(
          "http://127.0.0.1:8080/api/user",
          {
            username: username,
            password: password,
            email: email,
          },
        )
        .then((res) => {
          alert(res.data.username)
          console.log(res.data)
      })
        .catch((err) => {
          console.log(err);
        });
    ```
    
    post 요청을 하는 부분에 나의 local 주소와 같게 적어 두었다.
    
    - 여기서 중요한 점이 있었다. 같은 [localhost:](http://localhost:3000)8080 으로 해두면 안된다. 서버쪽은 8080포트, 클라이언트 쪽은 3000포트로 지정했다.
    - 단 api로 req, res는 서버쪽 포트를 지정해줘서 연동 시켰다.
- 이제 설정 다 했다. 두근두근....
    
    하지만 에러...
    
    Access to XMLHttpRequest at '주소A' from origin '주소B' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    
- 멘탈이 나갈뻔 했다.
    
    ixos 문법이 잘 못 된건지.. 서버 쪽 문제는 아닌거 같았다.
    

**찾아보니 CORS 정책을 위반해서 나온 에러라고 한다.**

- CORS 관련 이슈는 왜 발생 할까..
    
    CORS(Cross Origin Resource Sharing)는 교차 출처 리소스 공유.
    
    추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근 할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제이다. 웹 애플리케이션은 리소스가 자신의 출처(도메인, 프로토콜, 포트)와 다를 때 교차 출처 HTTP 요청을 실행합니다.
    
- 대충 보안 상 문제로 헤더에 값을 추가해서 보내라고 한다.
    
    ```jsx
      const signupFB = (username, password, email) => {
      return function (dispatch, getState, { history }) {
      const headers = {
        //   "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };

      
        axios
        .post(
          "http://127.0.0.1:8080/api/user",
          {
            username: username,
            password: password,
            email: email,
          },
          { headers: headers },
        )
        .then((res) => {
          alert(res.data.username)
          console.log(res.data)
      })
        .catch((err) => {
          console.log(err);
        });
    ```
    

위와 같이 코드를 추가하여 실행한다.  두구두구....

똑같은 에러가 떴다.

- 2차멘붕... 백단에서 조치 해보자
    
    간단했다. 백단에서도 조치가 필요했었다.
    
    단 2줄 이면 됐다.
    
    - 서버 npm에 추가 설치
    
    npm i cors
    
    - 메인파일인 app.js에 require("cors") 후 미들웨어 등록
    
    ```jsx
    const cors = require("cors")
    
    app.use(cors());
    ```
    
    - 성공했다..
    
    처음으로 2파일 연동을 시킨 대 역사적인 순간 행복했다.