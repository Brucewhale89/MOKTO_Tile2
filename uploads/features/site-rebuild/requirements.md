# 기능 요구사항 (구현 입력) — 모바일 GNB + 필터 시트

## 0. 메타데이터
- 기능 키: `mobile-gnb-filter-sheet`
- 대상: Home.dc.html (전 페이지 확산 예정)
- 상태: Implemented (v1)

## 1. 요약
- 한 줄 요약: 768px 이하에서 GNB를 햄버거+드로어로, 필터를 하단 시트로 전환
- 비목표: 데스크톱 레이아웃 변경 없음

## 2. 데이터 모델
- `mobileMenuOpen: boolean`, `filterSheetOpen: boolean` (컴포넌트 로컬 state)

## 3. 기능 요구사항

### FR-1 모바일 드로어
- 트리거: 헤더 우측 햄버거 아이콘 클릭
- 동작: `.mobile-drawer`에 `open` 클래스 토글, 우측에서 슬라이드인
- 내용: 전체 제품·회사소개·게시판·관리자(조건)·로그인/로그아웃·마이페이지
- 배경 클릭 시 닫힘 (backdrop)

### FR-2 필터 하단 시트
- 트리거: "필터" 칩버튼 클릭 (모바일 전용, 데스크톱엔 숨김)
- 동작: `.filter-sheet`에 `open` 클래스, 하단에서 슬라이드업, max-height 70vh 스크롤
- 배경 클릭 시 닫힘

## 4. 비기능 요구사항
- 브레이크포인트: 768px 이하만 적용, 그 이상은 기존 레이아웃 유지
- 트랜지션: 0.25s ease

## 5. 컴포넌트 명세
- 위치: `Home.dc.html` (Design Component, 단일 파일)
- `toggleMobileMenu()`, `toggleFilterSheet()` — 로직 클래스 메서드
- 템플릿: `mobile-drawer-backdrop`, `mobile-drawer`, `filter-toggle-btn`, `filter-sheet-backdrop`, `filter-sheet`

## 6. 수락 기준
- [x] 768px 이하에서 nav 숨김, 햄버거 노출
- [x] 드로어 열기/닫기 정상 동작
- [x] 필터 시트 열기/닫기 정상 동작
- [x] 데스크톱(769px+)에서 기존 UI 유지
- [ ] 다른 페이지(상세페이지 등)로 동일 패턴 확산 — 미착수

## 7. 다음 작업 (Task 후보)
- T01: 상세페이지에 동일 햄버거 드로어 적용
- T02: 모델명 시리즈 체계 데이터 마이그레이션 (BT-xxxx → ST-시리즈-색상)
- T03: BEST 커버플로우 UI 구현
- T04: 재단 옵션(600x600→600x300, +20%) 상세페이지 반영
