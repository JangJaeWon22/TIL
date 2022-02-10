# Algorithm TIL

## 피보나치 함수 - 백준 1003 문제

### [문제]

다음 소스는 N번째 피보나치 수를 구하는 C++ 함수이다.

```c++
int fibonacci(int n) {
    if (n == 0) {
        printf("0");
        return 0;
    } else if (n == 1) {
        printf("1");
        return 1;
    } else {
        return fibonacci(n‐1) + fibonacci(n‐2);
    }
}
```

fibonacci(3)을 호출하면 다음과 같은 일이 일어난다.

fibonacci(3)은 fibonacci(2)와 fibonacci(1) (첫 번째 호출)을 호출한다.
fibonacci(2)는 fibonacci(1) (두 번째 호출)과 fibonacci(0)을 호출한다.
두 번째 호출한 fibonacci(1)은 1을 출력하고 1을 리턴한다.
fibonacci(0)은 0을 출력하고, 0을 리턴한다.
fibonacci(2)는 fibonacci(1)과 fibonacci(0)의 결과를 얻고, 1을 리턴한다.
첫 번째 호출한 fibonacci(1)은 1을 출력하고, 1을 리턴한다.
fibonacci(3)은 fibonacci(2)와 fibonacci(1)의 결과를 얻고, 2를 리턴한다.
1은 2번 출력되고, 0은 1번 출력된다. N이 주어졌을 때, fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.

### [입력]

첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있고, N이 주어진다. N은 40보다 작거나 같은 자연수 또는 0이다.

### [출력]

각 테스트 케이스마다 0이 출력되는 횟수와 1이 출력되는 횟수를 공백으로 구분해서 출력한다.

### [풀이]

fibonacci(0) = 0 => 0 호출 1번, 1 호출 0번

fibonacci(1) = 1 => 0 호출 0번, 1 호출 1번

fibonacci(2) = fibonacci(2-1) + fibonacci(2-2)

fibonacci(2) = fibonacci(1) + fibonacci(0)

            1호출, 0호출   1호출, 0호출

                1      0       0     1

fibonacci(2) = 2 => 1호출 1번, 0호출 1번

fibonacci(3) = fibonacci(3-1) + fibonacci(3-2)

입력 값 3에 대한 0 호출회수 = (입력 값 2에 대한 0 호출회수) + (입력 값 1에 대한 0 호출회수)
입력 값 3에 대한 1 호출회수 = (입력 값 2에 대한 1 호출회수) + (입력 값 1에 대한 1 호출회수)

fibonacci(4) = fibonacci(4-1) + fibonacci(4-2)
2 1

입력 값 4에 대한 0 호출 = (입력값 3에 대한 0 호출) + (입력값 2에 대한 0 호출)
입력 값 4에 대한 1 호출 = (입력값 3에 대한 1 호출) + (입력값 2에 대한 1 호출)

| N 값       | 0   | 1   | 2   | 3   | 4   | 5   | 6   |
| ---------- | --- | --- | --- | --- | --- | --- | --- |
| 0 호출횟수 | 1   | 0   | 1   | 1   | 2   | 3   | 5   |
| 1 호출횟수 | 0   | 1   | 1   | 2   | 3   | 5   | 8   |

```python
zero = [1, 0, 1]
one = [0, 1, 1]


def fibonacci(num):
    length = len(zero)
    if num >= length:
        for i in range(length, num+1):          # 원하는 수 까지 계속 계간
            zero.append(zero[i-1] + zero[i-2])  # 0 의 호출 횟수
            one.append(one[i-1] + one[i-2])     # 1 의 호출 횟수
    print('{} {}'.format(zero[num], one[num]))


T = int(input())

for _ in range(T):
    fibonacci(int(input()))

```
