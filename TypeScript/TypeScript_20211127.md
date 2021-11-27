# TIL

## TypeScript express req, res에 임의 값을 넣어보자

### 1. 현재 setting 환경 공유

#### - signUpUser interface 만들자.

- src/interface/joi.ts

```jsx
export interface signUpUser {
   email : string
   nickname: string
   password: string
   confirmPassword: string
}
```

#### - veriftJoi.ts

```jsx
import { Request, Response, NextFunction } from 'express';
import * as Joi from "joi"
import { logger } from "../config/logger"
import {signUpUser} from "../interfaces/joi"

class VerifyJoi {
  //회원가입 시 joi 검증 실행
  public singUpUser = async (req: Request, res: Response, next: NextFunction) => {
    const joiSchema = Joi.object({
      email : Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .max(50)
        .required(),
      nickname: Joi.string().min(2).max(10).required(),
      password: Joi.string().regex(
        /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
      ),
      confirmPassword: Joi.ref("password"),
    });
    const { email, nickname, password, confirmPassword } : singUpUser = req.body;
    try {
      const verifyBody : singUpUser = await joiSchema.validateAsync({
        email,
        nickname,
        password,
        confirmPassword,
      });
      ///////// 이 부분 입니다 /////////
      res.signUpUser = verifyBody;////
      //////////////////////////////
      next();
    } catch (error) {
      const message : string = "아이디와 비밀번호의 형식이 올바르지 않습니다.";
      logger.info(`verifyJoi-singUpUser middlewares 500 error:${message}`);
      return res.status(500).send({ message });
    }
  }
}
```

- 현재 코드상에서 확인 해보면 res.signUpUser에서 오류가 난다. express.response에서 저런 값은 없어서 그렇다.
- 하지만 커스텀이 가능하다. 그방법을 알아보자

---

### 2. express 커스텀 하기

- 우선 루트에 있는 tsconfig.json을 수정해주어야 한다. 우리가 수정할 부분은 “typeRoots”라는 속성이다.

```jsx
{
   "compilerOptions": {
      "typeRoots": ["./node_modules/@types","./src/customType"],
      ...
   }
}
```

- 그리고 src 폴더 내에 customType 폴더를 만들고 express.d.ts 파일을 만들자

```jsx
import {signUpUser} from "../interfaces/joi"

declare global {
	namespace Express {
		interface Response {
			signUpUser?: signUpUser;
		}
		interface Request {
		}
	}
}
```

- 끝.... 생각보다 간단하다.. req 값을 넣을때는 request에 넣어주면 된다.
- 변환하는 과정 멀다...
