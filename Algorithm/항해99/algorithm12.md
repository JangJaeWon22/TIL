# Algorithm TIL

## 순위 검색 - 프로그래머스

### [본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

### [문제 설명]

카카오는 하반기 경력 개발자 공개채용을 진행 중에 있으며 현재 지원서 접수와 코딩테스트가 종료되었습니다.

이번 채용에서 지원자는 지원서 작성 시 아래와 같이 4가지 항목을 반드시 선택하도록 하였습니다.

코딩테스트 참여 개발언어 항목에 cpp, java, python 중 하나를 선택해야 합니다.

지원 직군 항목에 backend와 frontend 중 하나를 선택해야 합니다.

지원 경력구분 항목에 junior와 senior 중 하나를 선택해야 합니다.

선호하는 소울푸드로 chicken과 pizza 중 하나를 선택해야 합니다.

인재영입팀에 근무하고 있는 니니즈는 코딩테스트 결과를 분석하여 채용에 참여한 개발팀들에 제공하기 위해 지원자들의 지원 조건을 선택하면 해당 조건에 맞는 지원자가 몇 명인 지 쉽게 알 수 있는 도구를 만들고 있습니다.

예를 들어, 개발팀에서 궁금해하는 문의사항은 다음과 같은 형태가 될 수 있습니다.

코딩테스트에 java로 참여했으며, backend 직군을 선택했고, junior 경력이면서, 소울푸드로 pizza를 선택한 사람 중 코딩테스트 점수를 50점 이상 받은 지원자는 몇 명인가?

물론 이 외에도 각 개발팀의 상황에 따라 아래와 같이 다양한 형태의 문의가 있을 수 있습니다.

코딩테스트에 python으로 참여했으며, frontend 직군을 선택했고, senior 경력이면서, 소울푸드로 chicken을 선택한 사람 중 코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?

코딩테스트에 cpp로 참여했으며, senior 경력이면서, 소울푸드로 pizza를 선택한 사람 중 코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?

backend 직군을 선택했고, senior 경력이면서 코딩테스트 점수를 200점 이상 받은 사람은 모두 몇 명인가?

소울푸드로 chicken을 선택한 사람 중 코딩테스트 점수를 250점 이상 받은 사람은 모두 몇 명인가?

코딩테스트 점수를 150점 이상 받은 사람은 모두 몇 명인가?

즉, 개발팀에서 궁금해하는 내용은 다음과 같은 형태를 갖습니다.

- [조건]을 만족하는 사람 중 코딩테스트 점수를 X점 이상 받은 사람은 모두 몇 명인가?

### [문제]

지원자가 지원서에 입력한 4가지의 정보와 획득한 코딩테스트 점수를 하나의 문자열로 구성한 값의 배열 info, 개발팀이 궁금해하는 문의조건이 문자열 형태로 담긴 배열 query가 매개변수로 주어질 때,
각 문의조건에 해당하는 사람들의 숫자를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

### [제한사항]

info 배열의 크기는 1 이상 50,000 이하입니다.

info 배열 각 원소의 값은 지원자가 지원서에 입력한 4가지 값과 코딩테스트 점수를 합친 "개발언어 직군 경력 소울푸드 점수" 형식입니다.

개발언어는 cpp, java, python 중 하나입니다.

직군은 backend, frontend 중 하나입니다.

경력은 junior, senior 중 하나입니다.

소울푸드는 chicken, pizza 중 하나입니다.

점수는 코딩테스트 점수를 의미하며, 1 이상 100,000 이하인 자연수입니다.

각 단어는 공백문자(스페이스 바) 하나로 구분되어 있습니다.

query 배열의 크기는 1 이상 100,000 이하입니다.

query의 각 문자열은 "[조건] X" 형식입니다.

[조건]은 "개발언어 and 직군 and 경력 and 소울푸드" 형식의 문자열입니다.

언어는 cpp, java, python, - 중 하나입니다.

직군은 backend, frontend, - 중 하나입니다.

경력은 junior, senior, - 중 하나입니다.

소울푸드는 chicken, pizza, - 중 하나입니다.

'-' 표시는 해당 조건을 고려하지 않겠다는 의미입니다.

X는 코딩테스트 점수를 의미하며 조건을 만족하는 사람 중 X점 이상 받은 사람은 모두 몇 명인 지를 의미합니다.

각 단어는 공백문자(스페이스 바) 하나로 구분되어 있습니다.

예를 들면, "cpp and - and senior and pizza 500"은 "cpp로 코딩테스트를 봤으며, 경력은 senior 이면서 소울푸드로 pizza를 선택한 지원자 중 코딩테스트 점수를 500점 이상 받은 사람은 모두 몇 명인가?"를 의미합니다.

### [입출력 예]

| info                                                                                                                                                                                                           | query                                                                                                                                                                                                                              | result        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"] | ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"] | [1,1,1,1,2,4] |

입출력 예에 대한 설명

지원자 정보를 표로 나타내면 다음과 같습니다.

| 언어   | 직군     | 경력   | 소울 푸드 | 점수 |
| ------ | -------- | ------ | --------- | ---- |
| java   | backend  | junior | pizza     | 150  |
| python | frontend | senior | chicken   | 210  |
| python | frontend | senior | chicken   | 150  |
| cpp    | backend  | senior | pizza     | 260  |
| java   | backend  | junior | chicken   | 80   |
| python | backend  | senior | chicken   | 50   |

"java and backend and junior and pizza 100" : java로 코딩테스트를 봤으며, backend 직군을 선택했고 junior 경력이면서 소울푸드로 pizza를 선택한 지원자 중 코딩테스트 점수를 100점 이상 받은 지원자는 1명 입니다.

"python and frontend and senior and chicken 200" : python으로 코딩테스트를 봤으며, frontend 직군을 선택했고, senior 경력이면서 소울 푸드로 chicken을 선택한 지원자 중 코딩테스트 점수를 200점 이상 받은 지원자는 1명 입니다.

"cpp and - and senior and pizza 250" : cpp로 코딩테스트를 봤으며, senior 경력이면서 소울푸드로 pizza를 선택한 지원자 중 코딩테스트 점수를 250점 이상 받은 지원자는 1명 입니다.

"- and backend and senior and - 150" : backend 직군을 선택했고, senior 경력인 지원자 중 코딩테스트 점수를 150점 이상 받은 지원자는 1명 입니다.

"- and - and - and chicken 100" : 소울푸드로 chicken을 선택한 지원자 중 코딩테스트 점수를 100점 이상을 받은 지원자는 2명 입니다.

"- and - and - and - 150" : 코딩테스트 점수를 150점 이상 받은 지원자는 4명 입니다.

### [풀이]

[풀이 설명](https://teamsparta.notion.site/5-af58b20b15ce484dbfad310f152b13f2)

```python
from itertools import combinations

# 모든 query 의 경우의 수를 다 구해서 미리 등록
def make_all_cases(user_info_array):
    all_cases_from_user = []
    for i in range(5):
        for combination in combinations([0, 1, 2, 3], i):
            case = ""
            for j in range(4):
                if j in combination:
                    case += user_info_array[j]
                else:
                    case += "-"
            all_cases_from_user.append(case)
    return all_cases_from_user

# Hash Table 에서 찾은 결괏값에서 더욱 효율적으로 검색하기 위해 정렬과 lower_bound를 이용
def get_lower_bound(target, array):
    current_min = 0
    current_max = len(array) # [50, 80, 150, 150, 210, 260]

    while current_min < current_max:
        current_guess = (current_min + current_max) // 2
        if array[current_guess] >= target:
            current_max = current_guess
        else:
            current_min = current_guess + 1

    return current_max

def solution(info, query):
    answer = []
    all_cases_from_users = {}
    for user_info in info:
        user_info_array = user_info.split()
        all_cases_from_user = make_all_cases(user_info_array)
        # print(all_cases_from_user)


        # 쿼리별로 어떤 유저들의 코딩 테스트 점수가 검색
        # ex) {'----': [150, 210, 150, 260, 80, 50], 'java---': [150, 80], ...}
        for case in all_cases_from_user:
            # 이미 all_cases_from_users 에 해당 case 가 없다면 그 유저의 코딩 점수를 담은 배열을 만들어서 대입
            if case not in all_cases_from_users.keys():
                all_cases_from_users[case] = [int(user_info_array[4])]

            # 그렇지 않다면 append 를 이용해서 해당 유저의 코딩 점수를 붙여줌
            else:
                all_cases_from_users[case].append(int(user_info_array[4]))

    # 이분 탐색을 위해 정렬
    for key in all_cases_from_users.keys():
        all_cases_from_users[key].sort()


    # 쿼리를 가지고 검색하는 과정
    for query_info in query:
        query_info_array = query_info.split()

        # query에 and 값 제거
        case = query_info_array[0] + query_info_array[2] + query_info_array[4] + query_info_array[6]

        if case in all_cases_from_users.keys():
            # print(case)
            target_users = all_cases_from_users[case]      # [150, 210, 150, 260, 80, 50]
            # print(query_info_array[7], target_users)
            # print(get_lower_bound(int(query_info_array[7]), target_users))
            answer.append(
                len(target_users) - get_lower_bound(int(query_info_array[7]), target_users)
            )
        else:
            answer.append(0)


    return answer
```

- ... 공부 더해됨 참고!!!
