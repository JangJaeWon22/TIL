# Algorithm TIL

## test

### **문제 설명**

R x C 크기의 흑백 이미지가 있습니다. 1 x 1 크기의 각 칸은 한 개의 픽셀을 나타내며, 검은색 또는 흰색으로 이루어져 있고, 검은색 부분은 0, 흰색 부분은 1로 표현됩니다. 이때, 우리는 흰색으로만 이루어진 영역이 몇 개인지 찾으려고 합니다. 영역이란, 픽셀들이 가로 또는 세로로 서로 연결되어 있을 때 1개의 영역이라고 하며, 픽셀의 개수가 그 영역의 넓이가 됩니다. **단, 대각선으로 연결된 것은 같은 영역이 아닙니다.**

예를 들면, 6 x 5 크기의 이미지가

![https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/eda8d258-1341-4231-9ff8-023b338a42c6/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%91%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%BC6_mefybp.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/eda8d258-1341-4231-9ff8-023b338a42c6/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%91%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%BC6_mefybp.png)

로 주어질때, 흰색 영역은 4개이며, 가장 큰 넓이는 8이 됩니다.흑백 이미지가 매개변수 v로 주어질 때, 흰색 영역의 개수와 흰색 영역 중에서 가장 큰 넓이를 return 하도록 solution 함수를 완성해 주세요. 단, 영역의 개수와 넓이 순으로 return 해주세요. 위의 예시의 경우, [4,8]을 return 하면 됩니다.

### 제한사항

- 흑백 이미지 v는 2차원 배열로 주어지며, 0 또는 1로만 이루어져 있습니다.
- v는 R x C 크기의 2차원 배열입니다.
  - R , C : 50 이하의 자연수

---

### 입출력 예

[제목 없음](https://www.notion.so/e0524b94ab344126ab41425abf0b9c4d)

### 입출력 예 설명

입출력 예 #1문제의 예시와 같습니다.

```jsx
function solution(v) {
  // x : 행 / y: 열
  let y = v.length;
  let x = v[0].length;
  console.log(x, y);
  let visited = [];
  for (let i = 0; i < y; i++) {
    visited.push(new Array(x).fill(0));
  }

  const moveRow = [0, 0, 1, -1]; // 동, 서, 남, 북
  const moveCol = [1, -1, 0, 0]; // 동, 서, 남, 북

  const rangeCheck = (row, col) => {
    if (row >= 0 && row < y && col >= 0 && col < x) {
      return true;
    }
    return false;
  };

  const DFS = (row, col) => {
    if (
      rangeCheck(row, col) === true &&
      v[row][col] === 1 &&
      visited[row][col] === 0
    ) {
      // 범위안에 들어가고 && 방문한적이 없으면 DFS 탐색
      visited[row][col] = 1; // 방문 처리
      number++;
      for (let n = 0; n < moveRow.length; n++) {
        DFS(row + moveRow[n], col + moveCol[n]);
      }
    }
  };

  const complex = [];
  let number = 0;

  for (let row = 0; row < y; row++) {
    for (let col = 0; col < x; col++) {
      if (Number(v[row][col]) === 1 && visited[row][col] === 0) {
        DFS(row, col);
        complex.push(number);
        number = 0;
      }
    }
  }
  // console.log(complex)
  const a = [...complex];
  const max = Math.max(...a);

  const answer = [complex.length, max];

  return answer;
}
```

- 테스트케이스가 1개 틀렸다.

- 머리가 터질꺼 같다..

- 해결 중...
