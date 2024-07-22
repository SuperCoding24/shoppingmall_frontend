# 🛒 Super24

```
물건을 사고 팔 수 있는 마켓 서비스 
```

**기간**

2024.05.20 ~ 2024.05.31

**팀원**
| **김영욱** | **이영호** | **최미영** | **홍유진** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://github.com/SuperCoding24/fe01_naverwebtoon/assets/101804857/8f42d59b-0745-42fb-9b32-59a5bb634856" height=150 width=150> <br/> @kywu9232](https://github.com/kywu9232) | [<img src="https://github.com/SuperCoding24/fe01_naverwebtoon/assets/101804857/917191c8-73ab-4a99-9af9-be16c5d9b08e" height=150 width=150> <br/> @zeroho931](https://github.com/zeroho931) | [<img src="https://github.com/SuperCoding24/fe01_naverwebtoon/assets/101804857/508f7584-3fc8-4a94-b535-9cc7257f6ee7" height=150 width=150> <br/> @meeyoungchoi](https://github.com/meeyoungchoi-front-dev) | [<img src="https://github.com/SuperCoding24/fe01_naverwebtoon/assets/101804857/82e6b30f-d38b-450e-8e5b-2c7f64e111a2" height=150 width=150> <br/> @ujeans](https://github.com/ujeans) |


<br />

## **🌳 개발 환경**

- Front : `React`  `styled-components`
- Back-end :  `Spring Boot 3.2.5`  `MariaDB`
    - [API 명세서](https://github.com/SuperCoding24/shoppingmall_backend) / [스웨거](http://3.37.22.98:8080/swagger-ui/index.html)
- 버전 및 이슈관리 : `Github`  `Github Project`
- 협업 툴 : `Discord`  `Notion`
- 서비스 배포 환경 : `Vercel`
- 커밋 컨벤션
  
<br />

## **🔎 채택한 개발 기술**

- `React`
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다. 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- `Styled-Component`
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
- `eslint`, `prettier`
    - 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
    - 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
 
<br /> 

## **🪴 Git 전략**

### 브랜치 전략

- Git-flow 전략을 기반으로 main, feature 보조 브랜치를 운용했습니다.
- 기능 이슈, 버그 이슈 템플릿을 만들어 이슈 단위로 개발을 진행하였고 이슈에는 기능 설명, 작업 상세 내용을 작성하였습니다.
  
  <details>
    <summary>예시</summary>
    <div markdown="1">
      <img width="800" alt="스크린샷 2024-06-24 오후 4 46 31" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/81bf6905-4aa0-4612-aa90-891fc06c6544">
      <img width="800" alt="스크린샷 2024-06-24 오후 4 48 24" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/54978634-a691-4003-a82a-92bccb23c558">
    </div>
  </details>

        
- PR을 보낼 때는 작업 내용에 대해 자세히 작성하도록 하였습니다.
  <details>
    <summary>예시</summary>
    <div markdown="2">
      <img width="800" alt="스크린샷 2024-06-24 오후 4 53 34" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/99fcb0e1-c678-424b-96c3-e15bcebf5474">
    </div>
  </details>
  

### 커밋 컨벤션

| Type 키워드 | 사용 시점 |
| --- | --- |
| bug | 버그 발생 보고 및 해결 기록 |
| chore | .gitignore처럼 외부 사용자가 관심없는 파일, 빌드 혹은 패키지 매니저 수정사항 |
| design | css등 사용자 UI, 디자인 변경 |
| docs | 문서 생성 및 수정 |
| feat | 새 기능 추가 |
| fix | 기능 수정 |
| hotFix | 급하게 치명적인 버그를 고쳐야 하는 경우 |
| invaild | 잘못된 부분이 있어보임 |
| refactor | 기존 코드의 입출력 값은 일치, 코드 내부 성능 개선 및 클린업 |
| remove | 파일 삭제 |
| style | 코드 포맷 변경, 세미콜론 누락 등 스타일과 관련된 코드 수정, 그러나 코드 수정은 없는 경우 |
| rename | 파일 혹은 폴더명을 수정만 한 경우 |
| setting | 환경 설정 & 라이브러리 설치 |
| test | 테스트 관련 수정, 빌드 업무 및 패키지 매니지 수정 |

<br />

## 📃 페이지 별 로직

### 로그인/회원가입 페이지
<img width="200" alt="ㅇ" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/273913b9-9322-4b7a-986c-8384e6beb464">
<img width="200" alt="ㄷ" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/9cf9a5b1-0386-4c69-8237-0cb71e571c01">

**로그인**

1. 이메일, 비밀번호 기반의 로그인 기능
2. 이메일, 비밀번호에 유효성 검사 로직 적용한다.

**회원가입**

1. 이메일, 비밀번호, 전화번호, 주소, 프로필 사진을 입력
2. 각각의 Input에 규격에 맞는 값이 들어가도록 유효성 검사 로직을 추가한다.
    1. 이메일 중복확인 기능 및 @유무 확인
    2. 휴대전화 -유무 확인
    3. 비밀번호 생성 시 영문자, 숫자의 조합으로 8자 이상 20자 이하

### 유저 프로필 페이지
<img width="400" alt="Untitled" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/8bc6fbd2-e47b-4ccc-afb4-d0fb554e2f77">

1. 유저 정보를 보여준다.
2. 유저가 장바구니에 담은 물품 리스트, 판매한 물품 리스트, 주문한 물품 리스트를 볼 수 있게 한다.

### 쇼핑몰 물품 리스트 페이지
<img width="400" alt="Untitled1" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/2d759e38-f147-436a-9dad-b4fec39ff768">

1. 이미지와 상품명, 옵션, 가격 등의 정보를 그리드 형태로 리스트로 나타낸다.
2. 옵션에 따른 필터 및 페이지네이션 기능을 구현한다.
3. 로그인 여부에 따라 다른 UI를 보여준다.
4. 로그인을 하지 않은 경우 상품 등록 페이지 이동을 못하게 한다.

### 쇼핑몰 물품 상세 페이지

1. 이미지와 상품명, 옵션, 가격 등의 정보를 나타낸다.
2. 장바구니에 수량, 옵션을 설정해서 담을 수 있는 버튼을 구현한다.

### 물품 등록 및 판매 페이지

**물품 등록**

1. 판매할 물품을 등록할 수 있게 한다.
    1. 이미지는 최대 10개까지 등록할 수 있게 한다.
  
**물품 판매**

1. 판매중인 물품의 재고를 수정할 수 있다.

### 물품 주문 페이지
<img width="400" alt="Untitled3" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/69c77ead-2639-4d64-9fcb-bfd4208d5290">
<img width="400" alt="Untitled2" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/703af600-0b98-4be6-b906-0f14432f74a1">

1. 장바구니에 물품이 담겨있을 때와 없을 때를 보여준다.
2. 장바구니에 담긴 물품 내역을 수정할 수 있으며 그에 따라 가격이 달라진다.
    1. 체크박스를 이용해 구매하고 싶은 상품만 주문할 수 있게 한다.
    2. 수량을 늘리고 줄일 수 있다.
3. 장바구니에 담긴 물품을 선택/전체 삭제할 수 있게 한다.
4. 결제에 필요한 정보를 입력해서 주문 기능을 구현한다.

### 주문 내역 페이지
<img width="400" alt="Untitled5" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/7cd40f64-cd3f-4ed1-b39c-6027afb7d327">
<img width="400" alt="Untitled4" src="https://github.com/SuperCoding24/shoppingmall_frontend/assets/101804857/5267f73b-298d-4bf3-a9c7-4859e69efc22">

1. 주문한 물품이 있을 때와 없을 때를 구분해서 보여준다.
2. 주문한 물품이 있을 때 주문 정보를 보여준다.
