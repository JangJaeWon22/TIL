# Algorithm TIL

## 카펫 - 프로그래머스

### [문제]

Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### [제한사항]

갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.

노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.

카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

### [입출력]

| brown | yellow | return |
| ----- | ------ | ------ |
| 10    | 2      | [4, 3] |
| 8     | 1      | [3, 3] |
| 24    | 24     | [8, 6] |

### [풀이]

```python
def solution(brown, yellow):
    answer = []
    total = brown + yellow                  # 가로 * 세로 = total
    for b in range(1, total+1):
        if (total / b) % 1 == 0:            # total / 세로 = 가로
            # print(b)
            a = total / b
            # print(a)
            if a >= b:                      # 가로 >= 세로 (가운데 노란카펫 생각 해야됨)
                # print(a)
                if 2*a + 2*b - 4 == brown:  # 2*a + 2*b = brown + 4
                    return [a, b]

    return answer
```

예제

[14, 6]

00000
01110
01110
00000

- 노란색 카펫의 갯수는 (가로-2) \* (세로 -2) 가 됨
- 갈색의 카펫 갯수는 (가로+가로) + (세로+세로) - 4
- -4의 이유는 중복되는 모서리 갯수 제거
- 가로 \* 세로는 총 칸수임

- 14 + 6 = 20개의 총칸을 가짐
- 20 / 세로 = 가로 임으로 세로, 가로 값을 구할 수 있음
- [1,20] [2,10] [4,5]
- 위의 숫자 중 가로가 1이면 중간에 노란색 카펫이 못들어감
- 최소 노란 카펫이 1개 일 경우는 갈색 카펫은 8개가 필요함
- 예제
  000
  010
  000
- 즉, a>=b
- 위 조건 만족 시 (가로+가로) + (세로+세로) - 4 = brown 으로 해당 되는 값을 구해서 가로, 세로 구할 수 있음

---
