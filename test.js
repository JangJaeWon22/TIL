v = [
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
];

// x : 행, col / y: 열, row
let y = v.length;
let x = v[0].length;
console.log(y, x);
let visited = [];
for (let i = 0; i < y; i++) {
  visited.push(new Array(x).fill(0));
}
// console.log(visited);
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
    console.log(row, col);
    // 범위안에 들어가고 && 방문한적이 없으면 DFS 탐색
    visited[row][col] = 1; // 방문 처리
    console.log(visited);
    number++;
    console.log("number =", number);
    // 동 서 남 북 순으로 찾는다.
    for (let n = 0; n < moveRow.length; n++) {
      console.log("n :", n, "move:", row + moveRow[n], col + moveCol[n]);
      console.log("row:", row, row + moveRow[n], moveRow[n]);
      console.log("col:", col, col + moveCol[n], moveCol[n]);
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
console.log("complex:", complex);
const a = [...complex];
const max = Math.max(...a);

const answer = [complex.length, max];

console.log(answer);
return answer;
