# 다형성(Feat. overriding)

### 정의

하나의 코드가 여러 자료형으로 구현되어 실행되는 것을 말합니다. 
쉽게 말해 같은 코드에서 여러 실행 결과가 나오는 것!

- 참고!!!
    
    다형성은 추상 클래스, 인터페이스에서 구현.
    
    안드로이드, 스프링 등 자바 기반의 Framework 에서 응용 할 수 있는 객체 지향 프로그램의 중요한 개념입니다.
    

---

### 다형성 코드

부모 : Animal 클래스 
자식 : Human 클래스, Tiger 클래스, Eagle 클래스

- 코드 예시
    
    ```java
    package polymorphism;
    
    class Animal {
    	public void move() {
    		System.out.println("동물이 움직입니다.");
    	}
    }
    
    class Human extends Animal {
    	public void move() {
    		System.out.println("사람이 두 발로 걷습니다.");
    	}
    }
    
     class Tiger extends Animal {
    	 public void move() {
    		 System.out.println("호랑이가 네 발로 뜁니다.");
    	 }
     }
     
    class Eagle extends Animal {
    	public void move() {
    		System.out.println("독수리가 하늘을 납니다.");
    	}
    }
    
    public class AnimalTest1{
    	public static void main(String[ ] args) {
    		AnimalTest1 aTest = new AnimalTest1();
    		aTest.moveAnimal(new Human());
    		aTest.moveAnimal(new Tiger());
    		aTest.moveAnimal(new Eagle());
    		
    	}
    	
    	public void moveAnimal(Animal animal) {
    		animal.move();
    	}
    }
    ```
    
- 코드 설명
    
    AnimalTest1 클래스에 moveAnimal() 메서드를 생성
    
    moveAnimal() 메서드는 어떤 인스턴스가 매개변수로 넘어와도 모두 Animal형으로 변환
    

---

### 다형성의 장점

다른 동물이 추가 되는 경우, 새로운 동물도 Animal 클래스를 상속받아서 구현하면 모든 클래스를 Animal 자료형 하나로 쉽게 관리 가능!

<aside>
💡 다형성을 통해 프로그램의 확장성에 용이함!

</aside>

상위 클래스에서 공통 부분의 메서드를 제공하고, 하위 클래스에서는 그에 기반한 추가 요소를 덧붙여 구현하면 코드 양도 줄어들고, 유지보수도 용이!!!

---

### 한걸음 더... (다형성을 활용해 VIP 고객 클래스 완성하기 + overriding)

일반 고객과 VIP 고객의 혜택을 다형성으로 구현해보기

- Customer.java (일반 고객 클래스)
    
    ```java
    package polymorphism;
    
    public class Customer {
    	
    	protected int customerID;
    	protected String customerName;
    	protected String customerGrade;
    	int bonusPoint;
    	double bonusRatio;
    	
    	public Customer(){
    		// 고객 등급과 보너스 포인트 적립률 지정 함수 호출
    		initCustomer();
    	}
    
    	public Customer(int customerID, String customerName) {
    		this.customerID = customerID;
    		this.customerName = customerName;
    		
    		// 고객 등급과 보너스 포인트 적립률 지정 함수 호출
    		initCustomer();
    	}
    	
    	// 멤버 변수의 초기화 부분 
    	private void initCustomer() { // 생성자에서만 호출하는 메서드이므로 private 선언
    		customerGrade = "SILVER";
    		bonusRatio = 0.01;	
    	}
    	
    	public int calcPrice(int price) {
    		bonusPoint += price * bonusRatio;
    		return price;
    	}
    	
    	public String showCustomerInfo() {
    		return customerName + " 님의 등급은 " + customerGrade + "이며, 보너스 포인트는 " + bonusPoint + "점입니다.";  
    	}
    	
    	public int getCustomerID() {
    		return customerID;
    	}
    
    	public void setCustomerID(int customerID) {
    		this.customerID = customerID;
    	}
    
    	public String getCustomerName() {
    		return customerName;
    	}
    
    	public void setCustomerName(String customerName) {
    		this.customerName = customerName;
    	}
    
    	public String getCustomerGrade() {
    		return customerGrade;
    	}
    
    	public void setCustomerGrade(String customerGrade) {
    		this.customerGrade = customerGrade;
    	}
    }
    ```
    
    - initCustomer()메서드를 통해 멤버 변수를 초기화
    - Customer 클래스를 생성하는 두 생성자에서 공통으로 사용하는 코드이므로 메서드로 분리하여 호출
- VIPCustomer.java (VIP 고객 클래스)
    
    ```java
    package polymorphism;
    
    public class VIPCustomer extends Customer{
    	private int agentID;
    	double saleRatio;
    	
    	public VIPCustomer(int customerID, String customerName, int agentID) {
    		super(customerID, customerName);
    		customerGrade = "VIP";
    		bonusRatio = 0.05;
    		saleRatio = 0.1;
    		this.agentID = agentID;
    	}
    	
    	// 지불가격 메서드 정의
    	public int calcPrice(int price) {
    		bonusPoint += price * bonusRatio;
    		return price - (int)(price * saleRatio);
    	}
    	
    	// 고객 정보 출력 메서드 재정의 - overriding
    	public String showCustomerInfo() {
    		return super.showCustomerInfo() + " 담당 상담원 번호는 " + agentID + " 입니다.";
    	}
    	
    	public int getAgentID() {
    		return agentID;
    	}
    }
    ```
    
    - VIP 고객 클래스에서 calcPrice() 메서드와 showCustomerInfo() 메서드를 재정의 - overriding
    - 일반 고객 클래스에서 calcPrice() 메서드는 정가를 그대로 반환, VIP 고객 클래스에서는 할인율을 적용.
    - 일반 고객 클래스에서 showCustomerInfo() 메서드는 고객 등급과 이름만 출력, VIP 고객 클래스에서는 담당 상담원 번호까지 출력.
- CustomerTest.java (실행!)
    
    ```java
    package polymorphism;
    
    public class CustomerTest {
    	public static void main(String[] args) {
    		Customer customerHong = new Customer();
    		customerHong.setCustomerID(10010);
    		customerHong.setCustomerName("홍길동");
    		customerHong.bonusPoint = 1000;
    		
    		System.out.println(customerHong.showCustomerInfo());
    		
    		// VIPCustomer를 Customer형으로 선언
    		Customer customerLee = new VIPCustomer(10020, "이순신", 12345);
    		customerLee.bonusPoint = 1000;
    		
    		System.out.println(customerLee.showCustomerInfo());
    		System.out.println("===== 할인율과 보너스 포인트 계산 =====");
    		
    		int price = 10000;
    		int hongPrice = customerHong.calcPrice(price);
    		int leePrice = customerLee.calcPrice(price);
    		
    		System.out.println(customerHong.getCustomerName() + " 님이" + hongPrice + " 원 지불하셨습니다.");
    		System.out.println(customerHong.showCustomerInfo());
    		System.out.println(customerLee.getCustomerName() + " 님이 " + leePrice + " 원 지불하셨습니다.");
    		System.out.println(customerLee.showCustomerInfo());
    	}
    }
    ```
    
- 실행결과
    
    <aside>
    👉🏼 홍길동 님의 등급은 SILVER이며, 보너스 포인트는 1000점입니다.
    
    이순신 님의 등급은 VIP이며, 보너스 포인트는 1000점입니다. 담당 상담원 번호는 12345 입니다.
    
    ===== 할인율과 보너스 포인트 계산 =====
    
    홍길동 님이 10000 원 지불하셨습니다.
    
    홍길동 님의 등급은 SILVER이며, 보너스 포인트는 1100점입니다.
    
    이순신 님이 9000 원 지불하셨습니다.
    
    이순신 님의 등급은 VIP이며, 보너스 포인트는 1500점입니다. 담당 상담원 번호는 12345 입니다.
    
    </aside>
