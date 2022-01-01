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

## CyclicRotation - 코딜리티

### [문제]

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

A[0] = 9 A[1] = 3 A[2] = 9
A[3] = 3 A[4] = 9 A[5] = 7
A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

def solution(A)

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

A[0] = 9 A[1] = 3 A[2] = 9
A[3] = 3 A[4] = 9 A[5] = 7
A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.

### [풀이]

- 정렬 후 앞에서 2개씩 짝지어서 뽑아주면 된다고 생각함.
- 계속 뽑아서 다른거 나오면 처음꺼 return 해주면 끝
- 시간 복잡도가 O(N\*\*2) 이렇게 나와서 그런듯.. 퍼포먼스만 100퍼...
- 고민하다 정답 확인 했따.

```python
from collections import deque

def solution(A):
    a = sorted(A)
    deq = deque(a)

    while a:
        x = deq.popleft()
        if len(list(deq)) >= 2:
            y = deq.popleft()
            if x != y:
                return x
        # 남아 있는 deq의 갯수가 1개 일 경우는 마지막에 짝이 안맞은 수임으로 그냥 뽑아서 return 해줌
        else:
            return x
```

### 답...

- 몰라서 찾아봄... 66퍼에서 시간 오바를 해결 못하겟더라..
- 보니깐 그냥 같은수 갯수 새서 홀수이면 짝이 안맞은거더라..
- 생각의 전환 아주 나이스..

```python

def solution(A):
    N = len(A)
    if N < 2:
        return A[0]

    A_sort = sorted(A)
    count = 1
    a = A_sort[0]

    for i in range(1, N):
        if A_sort[i] == a:
            count += 1
        else: #A_sort[i] != a
            if count%2 == 0:
                count = 1
                a = A_sort[i]
            else:
                return a

    return a

```

### 개쩌는 답..

- 천상계는 다름.. 한줄이네;

```python
from functools import reduce

def solution(A):
    return reduce(lambda x,y: x^y, A)

```
