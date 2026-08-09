# MOKTO 타일 B2B 사이트 — 프로젝트 메모

## 다음 작업 (예정)

### 1. 메신저 연동
- 텔레그램 봇 연동
- 카카오톡 알림톡 연동

### 2. 견적서 자동 발행
- 견적서 PDF 자동 생성
- 생성된 PDF → 구글 드라이브 업로드
- 소비자 + 관리자 양쪽에 발송

### 3. 주문내역 자동 발송
- 주문 발생 시 PDF 작성 → 구글 드라이브 이동
- 날짜별 폴더 정리
- PDF를 카톡 또는 텔레그램으로 관리자에게 전송

### 4. 주문요청서(발주용) 발행
- 주문 건마다 PDF 발행 → 관리자 전송
- 추가로 하루 2회 일괄 정리본 발행
  - 오전 9시 / 오후 4시 (전날 주문 건 기준)
- 발행 조건: 입금 확인 및 결제 확인된 건에 한해, 관리자가 "주문 확인" 버튼을 누르면 발행

## 현재 구성
- Home.dc.html — 메인 (제품 목록, BEST 섹션, 사이즈별 구분)
- Product Detail.dc.html — 상세 (타일 계산기, 주문 정보, 시공 이미지)
- Cart.dc.html — 장바구니
- MyPage.dc.html / Profile.dc.html / OrderHistory.dc.html — 마이페이지
- Board.dc.html — 문의 게시판 (비밀글, 관리자 답변)
- Login.dc.html / Signup.dc.html — 로그인·회원가입
- Admin.dc.html — 관리자 (제품 관리, 재고·가격, 메인 필터 관리)
- Orders.dc.html — 주문 관리

관리자 계정: admin@ssoltile.com / admin1234 (강수민)
