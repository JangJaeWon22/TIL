# TIL

## 프로메테우스와 그라파나

### 프로메테우스

#### Node.js 모니터링

"서비스 모니터링"이라는 용어는 시스템에 대한 실시간 정량 데이터를 수집, 처리, 수집 및 표시하는 작업을 의미합니다.

운영 시스템 자체에서 메트릭을 제공 할 때 화이트 박스 모니터링 이라는 용어를 사용합니다 . 이것이 우리가 잠수 할 Node.js 모니터링의 일종입니다.

모든 서비스가 다르기 때문에 다양한 서비스를 모니터링 할 수 있습니다.

- 오류율 : 오류는 사용자가 직면하고 고객에게 즉시 영향을 주기 때문에 발생.
- 응답 시간: 대기 시간은 고객 및 비즈니스에 직접적인 영향을 주기 때문에 발생.
- 처리량 : 트래픽은 증가 괸 오류율 및 대기 시간의 상황을 이해하는 데 도움이 됨.
- 채도 :
  - 서비스가 "얼마나 충만한 지" 에 대해 알려줌
  - CPU 사용량이 90% 인 경우 시스템에서 더 많은 트래픽을 처리 할 수 있을지 확인 가능

#### 모니터링의 도구

팀에서 모니터링 도구를 선택하면 다음 측면을 고려해야 됩니다.

- 전문 지식
  당신은 전문 기술이 있습니까?
  모니터링 툴을 구축하고 고품질 계측을 작성하고 올바른 메트릭을 추출하는 것은 쉽지 않습니다.
  당신은 당신이하고있는 것을 알아야합니다.
- 구축 또는 구매
  모니터링 솔루션을 호스팅 하시겠습니까?
  SaaS 솔루션을 사용할 수 있습니까? 데이터 준수 및 보호 정책은 무엇입니까?
  SaaS 솔루션을 사용하면 툴링 대신 제품에 집중할 때 유용합니다.
  오픈 소스 솔루션과 상용 솔루션은 일반적으로 호스팅 또는 사내 구축 형으로 사용할 수 있습니다
- SaaS 또는 온 프레미스
  모니터링 솔루션을 호스팅 하시겠습니까?
  SaaS 솔루션을 사용할 수 있습니까? 데이터 준수 및 보호 정책은 무엇입니까?
  SaaS 솔루션을 사용하면 툴링 대신 제품에 집중할 때 유용합니다.
  오픈 소스 솔루션과 상용 솔루션은 일반적으로 호스팅 또는 사내 구축 형으로 사용할 수 있습니다.
- 라이센스
  모니터링 툴 세트를 제품과 함께 배송 하시겠습니까?
  상용 솔루션을 사용할 수 있습니까?
  항상 라이센스를 확인해야합니다.
- 통합
  데이터베이스, 오케스트레이션 시스템 및 npm 라이브러리와 같은 외부 종속성을 지원합니까?
- 계측
  자동 계측을 제공합니까?
  내 코드를 수동으로 계측해야합니까?
  혼자서 할 시간이 얼마나 걸릴까요?
- 마이크로 서비스
  단일체 또는 분산 시스템을 구축합니까?
  마이크로 서비스는 이를 효과적으로 디버깅하고 모니터링하기위한 특정 도구와 철학이 필요합니다.
  추적 또는 보안 검사를 배포해야합니까?

#### 프로메테우스로 노드 모리터링

[Prometheus](https://prometheus.io/) 는 Node.js **모니터링** 및 **경고를** 위한 **오픈 소스** 솔루션입니다 . 강력한 데이터 압축 기능과 시계열 데이터에 대한 빠른 데이터 쿼리 기능을 제공합니다.

> 시계열은 동일한 메트릭 및 동일한 레이블에 속하는 불변의 타임 스탬프 값의 스트림입니다.
> 레이블을 통해 메트릭이 다차원이됩니다.

#### 데이터 수집 및 특정 항목 유형

Prometheus 는 모든 응용 프로그램 `GET /metrics`이 Prometheus 인스턴스에서 주기적으로 가져올 수 있는 끝점 을 노출해야 합니다.

프로 메테우스에는 네 가지 메트릭 유형이 있습니다.

- **카운터**
  한 번만 올라간 단일 숫자 값을 나타내는 누적 측정 항목
- **게이지**
  임의로 위아래로 이동할 수있는 단일 숫자 값을 나타냅니다.
- **히스토그램**
  관측치를 샘플링하고 구성 가능한 버킷에서 카운트합니다.
- **요약**
  히스토그램과 유사하게, 샘플 관측치, 슬라이딩 시간 창에 걸쳐 구성 가능한 분 수를 계산합니다.

#### Node.js 응용 프로그램 모니터링

우리는 Node.js 애플리케이션을 Prometheus로 모니터랑하고 싶다면 다음과 같은 문제를 해결해야합니다.

- **계측**
  성능 오버 헤드를 최소화하면서 코드를 안전하게 계측
- **메트릭 설명**
  HTTP 끝점을 사용하여 Prometheus에 대한 메트릭 노출
- **Prometheus 호스팅**
  잘 구성된 Prometheus 실행
- **추출 값**
  통계적으로 정확한 쿼리 작성
- **시각화**
  대시 보드 작성 및 쿼리 시각화
- **알림**
  효율적인 알림 설정
- **페이징**
  **페이징에** 대한 에스컬레이션 정책 적용으로 알림 받기

#### Node.js 측정 항목 내보내기

Node.js 애플리케이션에서 메트릭을 수집하고이를 Prometheus에 공개하려면 [prom-client](https://github.com/siimon/prom-client) npm 라이브러리를 사용할 수 있습니다 .

예제

- 경로 당 API의 응답 시간을 수집하기 위해 메트릭의 히스토그램 유형을 작성
- 사전 정의 된 버킷 크기와 경로 레이블

```jsx
// Init
const Prometheus = require("prom-client");
const httpRequestDurationMicroseconds = new Prometheus.Histogram({
  name: "http_request_duration_ms",
  help: "Duration of HTTP requests in ms",
  labelNames: ["route"],
  // buckets for response time from 0.1ms to 500ms
  buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500],
});
```

- 각 요청 후 응답 시간을 수집하여 경로 레이블과 함께 보고

```jsx
// After each response
httpRequestDurationMicroseconds
  .labels(req.route.path)
  .observe(responseTimeInMs);
```

- GET /metrics
  Prometheus에 적합한 형식으로 메트릭을 표시 할 엔드 포인트 경로를 등록 할 수 있습니다 .

```jsx
// Metrics endpoint
app.get("/metrics", (req, res) => {
  res.set("Content-Type", Prometheus.register.contentType);
  res.end(Prometheus.register.metrics());
});
```

#### 검색

우리가 우리의 통계를 수집 한 후에, 우리는 시각적으로 그들로부터 어떤 가치를 추출하고자합니다.

> Prometheus는 사용자가 실시간으로 시계열 데이터를 선택하고 집계 할 수 있는 기능적 표현 언어를 제공

Prometheus 대시 보드에는 쿼리 및 시각화 도구가 내장되어 있습니다.

_프로 메테우스 대시 보드_

응답 시간 및 메모리 사용에 대한 몇 가지 예제 쿼리를 살펴 보겠습니다.

**쿼리 : 95 번째 응답 시간**

히스토그램 메트릭에서 응답 시간의 95 백분위 수를 결정할 수 있습니다. 95 백분위 수의 응답 시간으로 피크를 필터링 할 수 있으며 일반적으로 평균 사용자 경험을 더 잘 이해할 수 있습니다.

```jsx
histogram_quantile(0.95, sum(rate(http_request_duration_ms_bucket[1m])) by (le, service, route, method))
```

**쿼리 : 평균 응답 시간**

프로 메테우스의 히스토그램 유형은 관찰 된 메트릭에 대한 카운트 및 합계 값을 수집하기 때문에 우리는이를 애플리케이션으로 나누어 평균 응답 시간을 얻을 수 있습니다.

```jsx
avg(rate(http_request_duration_ms_sum[1m]) / rate(http_request_duration_ms_count[1m])) by (service, route, method, code)
```

#### 경고 알림

Prometheus에는 쿼리를 사용하여 기대치를 정의 할 수있는 내장 된 경고 기능이 함께 제공되지만 Prometheus 경고에는 알림 시스템이 제공되지 않습니다. 하나를 설정하려면 [경고 관리자](https://prometheus.io/docs/alerting/alertmanager/) 또는 다른 외부 프로세스 를 사용해야합니다 .

### 그라파나

Prometheus의 내장 시각화 방법은 쿼리 출력을 검사하는 데 적합하지만 대시 보드 용으로 사용할 수는 없습니다.

Prometheus에는 쿼리를 실행하고 데이터를 가져 오는 API가 있으므로 많은 외부 솔루션을 사용하여 대시 보드를 만들 수 있습니다. 외부 솔루션으로 [그라 파나 (Grafana)](https://grafana.com/) 가 있다.

Grafana는 오픈 소스, 플러그 형 **시각화 플랫폼** 입니다. 다양한 유형의 시스템에서 메트릭을 처리 할 수 있으며 Prometheus 데이터 소스가 내장되어 있습니다.

Grafana에서는 [기존 대시 보드를](https://github.com/RisingStack/example-prometheus-nodejs/blob/master/grafana-dashboard.json) 가져 오거나 자신을 만들 수 있습니다.

### 결론

Prometheus는 응용 프로그램을 모니터링하는 강력한 오픈 소스 도구이지만 볼 수 있듯이 도구는 기본적으로 작동하지 않습니다.

Prometheus를 사용하면 응용 프로그램을 계측하고 데이터를 관찰 한 다음 메트릭을 쿼리하고 시각화 할 수있는 **전문 지식** 이 **필요** 합니다.

Node.js 애플리케이션을 디버깅하고 모니터링 하기위한 간단하면서도 강력한 툴을 찾고있는 경우 [Trace](https://blog.risingstack.com/node-js-performance-monitoring-with-prometheus/trace.risingstack.com) 라는 솔루션을 확인

> 출처 : [https://code-daniel.tistory.com/68](https://code-daniel.tistory.com/68) [● Smart Programmer ● - "다니엘의 IT 도서관"]
