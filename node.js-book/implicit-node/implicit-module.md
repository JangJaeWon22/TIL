# implicit-module(내장 모듈)
  ###### os
  - 운영체제의 정보를 가져와서 출력 해봤습니다.
  ###### url
  - url의 구조를 뜯어보았습니다.
  ###### querystring
  - querystring을 이용해서 search 부분을 사용하기 쉽게 객체로 만드는 모듈입니다.
  ###### hash
  - 단방향 암호화(복화화 할 수 없는 암호화 방식 = 해시함수)에 대해 공부했습니다.
  ###### fs
  - fs는 기본적으로 콜백 형식의 모듈입니다.(따라서 fs 모듈을 프로미스 형식으로 사용합니다.)
  - fs는 readFile로 읽을 뿐만 아니라 writeFile로 파일을 만들 수 도 있습니다.

---


  # implicit-object(내장 객체)
  ###### global-prac
  - 전역 객체라는 점을 활용하여 파일 간에 간단한 데이터를 공유 하는 법 공부했습니다.

  ###### filename-dirname
  - 노드에서 파일 사이에 모듈 관계가 있는 경우 현재파일의 경로와 파일명을 알아 볼 수 있도록 console.log로 한번 찍어보았습니다.

  ###### this
  - 최상위 스코프에 존재하는 this와 함수 내부의 this를 비교해보았습니다.
  - 최상위 스코프 this = module.exports // 함수 내부 this = global 객체

  ###### require
  - require.cache : 다음 번에 사용을 위해 cache에 있는 것을 재사용
  - requre.main : 노드 실행 시 첫 모듈