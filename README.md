# 🔋 KIST 류승호 책임연구원님 연구실 홈페이지 (Energy Materials Design Lab)

구글 사이트(Google Sites)에서 이전 및 기능 고도화를 완료한 한국과학기술연구원(KIST) 에너지소재설계 연구실(Seungho Yu's Research Group)의 새로운 공식 반응형 웹사이트 패키지입니다.

이 홈페이지는 **데이터 기반 아키텍처(Data-driven Architecture)**로 개발되어, 사용자가 직접 복잡한 HTML/CSS 코드를 수정할 필요 없이 **오직 단 하나의 텍스트 파일(`data.js`)만 수정하여 홈페이지 전체를 업데이트할 수 있습니다.**

---

## ⚙️ 홈페이지 내용 업데이트 방법 (How to Update)

홈페이지의 구성원, 연구 성과(논문), 뉴스, 홈 소개글 등을 변경하려면 아래 파일을 수정하세요.

### 수정할 파일: `Homepage/data.js`
`data.js` 파일을 텍스트 에디터(메모장, VS Code 등)로 열면 직관적인 JavaScript 객체 데이터가 나타납니다. 각 속성의 따옴표 안에 있는 텍스트만 고치고 파일을 저장하면 홈페이지에 즉각 반영됩니다.

*   **홈페이지 소개글 수정**: `home` 객체 아래의 `title`, `description`, `overview` 값 수정.
*   **연구실 멤버 추가/수정**: `members` 리스트에 새로운 연구원 정보 `{ name: "이름", role: "postdoc 또는 student", ... }`를 형식에 맞춰 복사하여 추가.
*   **졸업생/인턴 수정**: `alumni` 및 `interns` 리스트 내의 객체들 수정 및 추가.
*   **연구 분야 내용 수정**: `research` 리스트의 문장들 수정.
*   **논문 실적(Publications) 추가**: `publications` 리스트의 연도(`2026` 등) 내에 새 논문 구조 `{ title: "제목", authors: "저자", journal: "저널명", isCorresponding: true/false, ... }`를 추가.
*   **뉴스 및 행사 사진 목록 추가**: `news` 및 `photos` 리스트 수정 및 추가.

---

## 🎨 주요 특징 (Key Features)

*   **쉬운 유지보수**: HTML 태그를 몰라도 `data.js` 텍스트 수정만으로 사이트 유지보수 완료.
*   **로컬 CORS 에러 우려 없음**: `data.json` 파일을 비동기 fetch하는 대신 JavaScript 모듈로 로드하여, **로컬 폴더에서 `index.html`을 더블 클릭해 브라우저로 바로 실행해도 CORS 보안 에러 없이 모든 기능이 정상 작동**합니다.
*   **다중 페이지 아키텍처 (Multi-page Architecture)**: 학술 사이트 공유에 매우 중요한 서브 링크 직접 연동을 지원하기 위해 `index.html` 외에 총 7개 핵심 메뉴 페이지를 각각의 파일로 나누어 구축하였습니다.
*   **실시간 논문 검색 엔진**: 수십 편의 논문 데이터베이스에서 원하는 논문을 타이핑 즉시 찾아낼 수 있는 자바스크립트 검색 및 연도별 필터링 기능이 `publications.html`에 연동되어 있습니다. 저자명, 저널명, 제목의 텍스트가 실시간 인덱싱됩니다.
*   **자동 테마 전환 및 저장**: 사용자의 기기 설정 및 수동 지정을 연동하여 다크/라이트 테마를 변경하고 로컬스토리지에 저장합니다.

---

## 📂 파일 구조 (File Structure)

```text
Homepage/
├── data.js            # ★ 홈페이지의 모든 텍스트/논문/인원 데이터가 저장된 텍스트 파일
├── index.html         # 메인 Welcome 홈 페이지 (구조 뼈대)
├── people.html        # PI, 소속 포닥/대학원생 프로필 및 졸업생/인턴 이력 (구조 뼈대)
├── research.html      # 4대 핵심 연구 분야 상세 설명 (구조 뼈대)
├── publications.html  # 2012년 ~ 2026년 최신 연구 실적 논문 (검색/필터 구조 뼈대)
├── news.html          # 연구실 주요 수상 및 게재 소식 목록 (구조 뼈대)
├── photos.html        # 연구실 역대 학회 및 워크숍 행사 내역 갤러리 (구조 뼈대)
├── opening.html       # 인원 상시 모집 요강, 협약 대학(학연/UST) 안내 및 지원 폼 (구조 뼈대)
├── style.css          # 디자인 토큰, 레이아웃, 애니메이션 CSS
├── script.js          # data.js 데이터를 읽어 HTML을 동적 렌더링하고 검색/테마 동작을 수행하는 JS
└── README.md          # 본 프로젝트 가이드 및 설명서
```

---

## 💻 로컬에서 확인하기 (Local Development)

본 웹사이트는 로컬 폴더 환경에서 바로 더블클릭하여 실행해도 온전히 작동합니다.

### 방법 1: 파일 직접 실행
*   `Homepage/index.html` 파일을 마우스 더블클릭하여 웹 브라우저로 열어서 확인합니다. (CORS 에러 없이 바로 전체 작동)

### 방법 2: VS Code의 Live Server 사용 (권장)
*   VS Code에서 `Homepage` 폴더를 열고 `index.html`에서 마우스 우클릭 -> `Open with Live Server`를 클릭하면 로컬 서버로 구동됩니다.

---

## 🌐 깃허브 페이지에 최종 배포하기 (Deployment)

깃허브 페이지를 이용하면 무료 도메인으로 전 세계에 이 사이트를 게시할 수 있습니다.

### 1단계: 깃허브 저장소(Repository) 생성
1. GitHub 로그인 후 우측 상단 **[New]** 버튼을 통해 새 저장소를 생성합니다.
2. 저장소 이름(Repository name)을 지정합니다. (예: `syulab.github.io` 혹은 `kist-emdl`)
   * *참고: 저장소명을 `계정명.github.io`로 통일하면 서브 경로가 없는 깔끔한 메인 주소(`https://계정명.github.io`)가 자동 부여됩니다.*
3. **Public** 속성으로 생성합니다.

### 2단계: 코드 업로드 (Git Push)
작성된 코드가 위치한 터미널 경로에서 순서대로 업로드 명령어를 수행합니다:
```bash
# 초기화 및 커밋
git init
git add .
git commit -m "Deploy KIST Energy Materials Design Lab website with dynamic data architecture"

# 기본 브랜치 지정 및 원격 연결
git branch -M main
git remote add origin https://github.com/본인계정/저장소이름.git

# 업로드
git push -u origin main
```

### 3단계: Pages 설정 활성화
1. 업로드된 깃허브 저장소 상단의 **[Settings]** 탭으로 이동합니다.
2. 왼쪽 메뉴에서 **[Pages]** 메뉴를 선택합니다.
3. Build and deployment의 **Branch** 설정을 `None`에서 `main` 브랜치로 교체하고 저장(**[Save]**)을 클릭합니다.
4. 약 1~2분 뒤 상단에 표시되는 무료 사이트 링크(예: `https://계정명.github.io/`)를 통해 홈페이지가 정상 구동되는 것을 보실 수 있습니다!
