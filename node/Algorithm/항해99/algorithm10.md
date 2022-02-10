# Algorithm TIL

## 추석트래픽 - 프로그래머스

### [문제 설명]

이번 추석에도 시스템 장애가 없는 명절을 보내고 싶은 어피치는 서버를 증설해야 할지 고민이다.

장애 대비용 서버 증설 여부를 결정하기 위해 작년 추석 기간인 9월 15일 로그 데이터를 분석한 후 초당 최대 처리량을 계산해보기로 했다.

초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미한다.

### [입력 형식]

solution 함수에 전달되는 lines 배열은 N(1 ≦ N ≦ 2,000)개의 로그 문자열로 되어 있으며, 각 로그 문자열마다 요청에 대한 응답완료시간 S와 처리시간 T가 공백으로 구분되어 있다.

응답완료시간 S는 작년 추석인 2016년 9월 15일만 포함하여 고정 길이 2016-09-15 hh:mm:ss.sss 형식으로 되어 있다.

처리시간 T는 0.1s, 0.312s, 2s 와 같이 최대 소수점 셋째 자리까지 기록하며 뒤에는 초 단위를 의미하는 s로 끝난다.

예를 들어, 로그 문자열 2016-09-15 03:10:33.020 0.011s은 "2016년 9월 15일 오전 3시 10분 33.010초"부터 "2016년 9월 15일 오전 3시 10분 33.020초"까지 "0.011초" 동안 처리된 요청을 의미한다. (처리시간은 시작시간과 끝시간을 포함)

서버에는 타임아웃이 3초로 적용되어 있기 때문에 처리시간은 0.001 ≦ T ≦ 3.000이다.

lines 배열은 응답완료시간 S를 기준으로 오름차순 정렬되어 있다.

### [출력 형식]

solution 함수에서는 로그 데이터 lines 배열에 대해 초당 최대 처리량을 리턴한다.

### [입출력 예제]

#### 예제1

입력: ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]

출력: 1

#### 예제2

입력: ["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"]

출력: 2

#### [설명]

처리시간은 시작시간과 끝시간을 포함하므로

첫 번째 로그는 01:00:02.003 ~ 01:00:04.002에서 2초 동안 처리되었으며,

두 번째 로그는 01:00:05.001 ~ 01:00:07.000에서 2초 동안 처리된다.

따라서, 첫 번째 로그가 끝나는 시점과 두 번째 로그가 시작하는 시점의 구간인 01:00:04.002 ~ 01:00:05.001 1초 동안 최대 2개가 된다.

예제3
입력: [
"2016-09-15 20:59:57.421 0.351s",
"2016-09-15 20:59:58.233 1.181s",
"2016-09-15 20:59:58.299 0.8s",
"2016-09-15 20:59:58.688 1.041s",
"2016-09-15 20:59:59.591 1.412s",
"2016-09-15 21:00:00.464 1.466s",
"2016-09-15 21:00:00.741 1.581s",
"2016-09-15 21:00:00.748 2.31s",
"2016-09-15 21:00:00.966 0.381s",
"2016-09-15 21:00:02.066 2.62s"
]

출력: 7

설명: 아래 타임라인 그림에서 빨간색으로 표시된 1초 각 구간의 처리량을 구해보면 (1)은 4개, (2)는 7개, (3)는 2개임을 알 수 있다. 따라서 초당 최대 처리량은 7이 되며, 동일한 최대 처리량을 갖는 1초 구간은 여러 개 존재할 수 있으므로 이 문제에서는 구간이 아닌 개수만 출력한다.

### [풀이]

- 초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미

- 각 로그들의 시작되는 시점과 끝나는 시점을 기준으로 1초동안 얼마나 많은 로그가 포함되는가를 파악

- 각 로그들의 시작되는 시점과 끝나는 시점 구하기

```python
    for line in lines:
        _, time, duration = line.split()
        time_array = time.split(":")
        duration = float(duration.replace('s', "")) * 1000
        # print(time_array, duration)

        end = (int(time_array[0]) * 3600 + int(time_array[1]) * 60 + float(time_array[2])) * 1000
        start = end - duration + 1
        total_times.append([start, end])
        # print(start_and_end_times)
```

- 시작과 끝 지점을 기준으로 1초 동안 얼마나 많은 로그가 포함 되어 있는지 확인
- 그 중 최댓값 출력
- 전체 코드

```python
def solution(lines):
    answer = 0
    total_times = []
    for line in lines:
        _, time, duration = line.split()
        time_array = time.split(":")
        duration = float(duration.replace('s', "")) * 1000
        # print(time_array, duration)

        end = (int(time_array[0]) * 3600 + int(time_array[1]) * 60 + float(time_array[2])) * 1000
        start = end - duration + 1
        total_times.append([start, end])
        # print(start_and_end_times)

        # 각 로그들의 시작되는 시점과 끝나는 시점을 기준으로 1초동안 얼마나 많은 로그가 포함되는가?
    for total_time in total_times:
        answer = max(answer, count(total_time[0], total_times),
                     count(total_time[1], total_times))
    return answer

def count(time, total_times):
    request_count = 0
    # 시작 기준으로 얼마나 많은 로직 수행 했는지 카운트
    start = time
    end = time + 1000
    for total_time in total_times:
        if total_time[1] >= start and total_time[0] < end:
            request_count += 1
    # print("start_time", start, end, request_count)
    return request_count
```

---

## 숫자 문자열과 영단어 - 프로그래머스

### [문제 설명]

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"

234567 → "23four5six7"

10203 → "1zerotwozero3"

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

| 숫자 | 영단어 |
| ---- | ------ |
| 0    | zero   |
| 1    | one    |
| 2    | two    |
| 3    | three  |
| 4    | four   |
| 5    | five   |
| 6    | six    |
| 7    | seven  |
| 8    | eight  |
| 9    | nine   |

### [제한사항]

1 ≤ s의 길이 ≤ 50

s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.

return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

#### [입출력 예]

| s                  | result |
| ------------------ | ------ |
| "one4seveneight"   | 1478   |
| "23four5six7"      | 234567 |
| "2three45sixseven" | 234567 |
| "123"              | 123    |

#### 입출력 예 설명

#### 입출력 예 #3

"three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.

입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.

### [제한시간 안내]

정확성 테스트 : 10초

### [풀이]

```python
def solution(s):
    answer = 0
    a = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for i in range(len(a)):
        # print(a[i])
        # replace() argument 2 must be str, not int
        s = s.replace(a[i], str(i))
    answer = int(s)
    return answer
```

- a 라는 리스트에 바꿔야될 문자열을 집어 넣음
- i = 0 ; i < 9 ; i++ 으로 인덱스의 번호와 i의 수를 맞춘 뒤
- for 문을 통해 a[i]의 문자열이 있으면 그걸 i로 바꿈
- error 발생

  - replace() argument 2 must be str, not int

- str(i)로 바꿔주니 해결

- answer는 int(s)로 정수로 바꿔준 뒤 return 해주면 끝
