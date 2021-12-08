# Algorithm TIL

## 1. 큐2 - 백준 18256

#### 문제

정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

> push X: 정수 X를 큐에 넣는 연산이다.
>
> pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
>
> size: 큐에 들어있는 정수의 개수를 출력한다.
>
> empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
>
> front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
>
> back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

#### 입력

첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 2,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

#### 출력

출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

큐와 덱을 이용 하여 문제를 풀면 된다.

- 작성한 코드

```python

import sys
n = int(input())


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self, value):
        new_node = Node(value)        # 예제 [3] 을 만들고
        self.length += 1
        if self.empty() == 1:         # 만약 비어있어서 empty() 함수에서 1을 리턴 받았으면,
            self.head = new_node      # head 에 new_node를   -> 비어 있는 상태에서 입력을 받았기 때문에 들어와도 head와 tail이 같은 곳을 보게 됨.
            self.tail = new_node      # tail 에 new_node를 넣어준다. -> 비어 있는 상태에서 입력을 받았기 때문에 들어와도 head와 tail이 같은 곳을 보게 됨.
            return
        self.tail.next = new_node     #  그게 아니고 이미 3을 입력 받고 다음 값으로 2를 집어넣으면!! 현재 tail 인 [2]의 다음을 [3] 으로 지정합니다.
        self.tail = new_node		  # 그리고 tail을 [3] 으로 지정합니다. [3] =>  [2] -> [3]
        return

    def pop(self):
        if self.empty() == 1:
            return "-1"
        delete_head = self.head
        self.head = self.head.next
        self.length -= 1
        return delete_head.data

    def size(self):
        return self.length

    def empty(self):
        if self.head is None:
            return 1
        return 0

    def front(self):
        if self.empty() == 1:
            return -1
        return self.head.data

    def back(self):
        if self.empty() == 1:
            return -1
        return self.tail.data


queue = Queue()
for _ in range(n):
    # sys 안쓰면 시간 초과 뜸.... 한 줄에 여러 입력값을 받을 수 있음 rstrip => 오른쪽 공백을 지움
    cmd = sys.stdin.readline().rstrip()
    value = cmd.split(" ")
    # value = input().split(" ")
    if 'push' in value:
        queue.push(int(value[1]))
    elif 'front' in value:
        print(queue.front())
    elif 'back' in value:
        print(queue.back())
    elif 'size' in value:
        print(queue.size())
    elif 'empty' in value:
        print(queue.empty())
    else:
        print(queue.pop())
```

시간 초과가 떴었다.. 위 코드 말고 전의 코드로는

```python
value = input().split(" ") # 이렇게 하니깐 시간 초과....

# 왜 이렇게 하면 시간 초과가 안뜨는지는 의문
import sys
cmd = sys.stdin.readline().rstrip()
value = cmd.split(" ")

```

> sys.stdin.readline()을 쓰면 시간 초과가 안나는 이유에 대해서는 공부가 더 필요하다고 느꼈다.

---

## 2. 신규 아이디 추천 - 프로그래머스

[문제 설명 링크 참조](https://programmers.co.kr/learn/courses/30/lessons/72410)

> 1단계 new\*id의 모든 대문자를 대응되는 소문자로 치환합니다.
>
> 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(\*), 마침표(.)를 제외한 모든 문자를 제거합니다.
>
> 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
>
> 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
>
> 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
>
> 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다. 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표> (.) 문자를 제거합니다.
>
> 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
>
> 예를 들어, new_id 값이 "...!@BaT#\*..y.abcdefghijklm" 라면, 위 7단계를 거치고 나면 new_id는 아래와 같이 변경됩니다.

```python
def solution(new_id):
    answer = ''

    # step 1 대문자 => 소문자로 치환
    new_id = new_id.lower()

    # step 2 이상한 문자들 제거( 소문자, 숫자, -, _, . 제외)
    for step_2 in new_id:
        if step_2.isalnum() or step_2 in ['-', '_', '.']:
            answer = answer + step_2

    # step 3 마침표가 2번이상일 경우 1개로 변환
    while ".." in answer:
        answer = answer.replace("..", ".")

    # step 4 마침표가 처음 또는 끝에 있을 경우 제거
    if answer[0] == ".":
        if len(answer) >= 2:
            answer = answer[1:]
        else:
            answer = "."
    if answer[-1] == ".":
        answer = answer[:-1]

    # step 5 빈 문자열 일 경우 a로
    if answer == "":
        answer = "a"

    # step 6 new_id의 길이가 16자 이상이면 첫 15개의 문자를 제외한 나머지 문자 제거
    if len(answer) > 15:
        answer = answer[:15]
        if answer[-1] == ".":   # 짤랐는데,,,, 마지막에 또 .이 있다면;;;
            answer = answer[:-1]

    # step 7 new_id의 길이가 2자 이하이면 new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복
    while len(answer) < 3:
        answer = answer + answer[-1]
    return answer
```

- step 1 모든 알파벳 소문자로 치환

```python
   #lower() 아주 좋은거 배웠다~ 끼얏호
   new_id = new_id.lower()
```

- step 2에서 문자열 정리 -> step 1에서 소문자로 치환 햇으나 대문자는 신경 쓸 필요 없다!

```python
   #isalnum() -> 알파벳과 숫자만 허용 시카고 in ['-', '_', '.'] 으로 허용 되는 문자만 허용
   for step_2 in new_id:
   if step_2.isalnum() or step_2 in ['-', '_', '.']:
       answer = answer + step_2
```

- step 4에서 마침표가 처음 또는 끝에 있을 경우 제거를 수행하는 중 index의 길이가 1이거나 0일 경우에는 문법 에러가 떳다.
  - index out of range Error
- step 6에서 마지막에 15이하 글씨로 짤랏는데 마지막에 .이 있을 경우를 생각 해줘야됬다..
- 설명이 너무 잘 되어있어서. 그냥 따라 사용하면 되는 문제. -> 이보다 설명을 구체적으로 해주는 문제가 있을 정도로 뇌를 안쓴거 같다.

- 다른 사람이 정규식으로 작성한 것을 봤는데... 대단하다. 정규식을 외우신건지 부러웠고, 코드도 엄청 짧았다.. 신기하네.. ㅎㅎ 그런 레벨이 되고 싶다
