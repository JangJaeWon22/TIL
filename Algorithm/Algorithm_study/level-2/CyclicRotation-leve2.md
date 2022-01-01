# Algorithm TIL

## CyclicRotation - 코딜리티

### [문제]

An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

def solution(A, K)

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3

the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

For another example, given

    A = [0, 0, 0]
    K = 1

the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4

the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

### [풀이]

- K의 숫자만큼 배열의 맨 뒤에 숫자를 뽑아 앞으로 이동 시키기
- python의 내장모듈을 deque를 이용해 쉽게 뽑고 해보자

- 처음 코드를 짯는데 문제 1개가 통과 안댐..

- 빈 배열을 입력 받을 경우에 대한 예외처리를 안해줬다.

- 그래서 빈 배열을 입력 받을때의 예외처리 진행해줌

```python

from collections import deque

def solution(A, K):
    # 빈 배열을 입력 받을 경우에 대해 예외처리 진행
    if len(A) == 0:
        return A
    else:
        deq = deque(A)
        for i in range(K):
            a = deq.pop()
            deq.appendleft(a)
        answer = list(deq)

        return answer

```
