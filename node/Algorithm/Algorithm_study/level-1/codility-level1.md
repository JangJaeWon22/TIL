# Algorithm TIL

## BinaryGap - 코딜리티

### [문제]

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary
gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

def solution(N)

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

### [풀이]

10진수를 주었을 때, 2진수의 1 사이의 binary gap중 가장 큰 값을 return.

예를 들어, 9인 경우 이진수는 1001일 때, binary gap은 2입니다.

529인 경우는 1000010001일 때, 4와 3의 값을 가집니다.

20은 10100으로 1개, 15는 1111로 0개, 32는 100000으로 0개 입니다.

즉, N = 1041일 때, 이진수는 10000010001이므로 5를 return합니다. binary gap이 없는 경우는 0을 return합니다.

```python
def solution(N):
    binary = format(N, 'b')

    max_count = 0
    count = 0

    for i in binary:
        # 2진수에서 1을 만날 경우 그때까지 센 카운터가 기존 max_count보다 클 경우 다시 담아주고 count 는 0 으로 만들어 다음 계산 진행
        if i == "1":
            if max_count < count:
                max_count = count
            count = 0
        else:
            count = count + 1
    return max_count
```

- 처음에는 for 문을 len(binary)로 돌려서 이상하게 헷갈렸다.
- 하지만 쉽게 해결 되었다...
