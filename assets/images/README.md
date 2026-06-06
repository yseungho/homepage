# Homepage Image Directory

이 폴더는 홈페이지에 사용되는 각종 사진과 이미지 파일들을 저장하는 폴더입니다.
홈페이지와 원활하게 연결될 수 있도록 아래의 폴더 구조를 만들어 이미지를 저장해 주세요.

## 📂 폴더 구성 (Folder Structure)

이미지를 각각 알맞은 위치에 넣어주시면 홈페이지에 자동으로 연동됩니다.

1.  `assets/images/pi.jpg`
    *   **용도**: PI(류승호 박사님) 프로필 사진
    *   **파일명**: `pi.jpg` (또는 `pi.png`)
    *   **설정 파일**: `data.js` 내 `pi.photo` 경로에 맞춰 파일명을 설정할 수 있습니다.

2.  `assets/images/members/`
    *   **용도**: 연구실 구성원(Postdoc, Students) 사진
    *   **예시**: `assets/images/members/yongheum_lee.jpg`
    *   **설정 파일**: `data.js` 내 각 멤버의 `photo` 경로와 일치시켜 주세요.

3.  `assets/images/research/`
    *   **용도**: 연구 분야(Research Areas) 설명용 그래픽/일러스트
    *   **예시**: `assets/images/research/materials_design.jpg`
    *   **설정 파일**: `data.js` 내 각 연구 분야의 `image` 경로와 일치시켜 주세요.

4.  `assets/images/photos/`
    *   **용도**: Lab Photos(활동 사진) 갤러리에 들어갈 행사 사진 (각 이벤트별 최대 2장 지원)
    *   **예시**: `assets/images/photos/tms_2026_1.jpg`
    *   **설정 파일**: `data.js` 내 `photos` 배열의 각 이벤트 속 `photo1`, `photo2` 경로와 일치시켜 주세요.

5.  `assets/images/papers/`
    *   **용도**: Publications(논문 목록) 페이지의 각 논문별 요약 그림 (TOC Graphic / Graphical Abstract)
    *   **예시**: `assets/images/papers/2026_zinc_transport.jpg`
    *   **설정 파일**: `publications_data.js` 내 각 논문의 `image` 경로와 일치시켜 주세요.

---

### 💡 이미지 최적화 팁
*   **프로필 사진**: 가능하면 1:1 정밀 비율(가로세로 비율이 같은 정사각형)의 이미지가 가장 예쁘게 표시됩니다 (동그란 테두리로 잘림 방지).
*   **논문 TOC / 연구 사진**: 가로 세로 비율 `16:9` 혹은 `4:3` 비율이 가장 깔끔하게 표시됩니다.
*   **대체 기능(Fallback)**: 지정한 경로에 사진이 존재하지 않거나 이름을 다르게 올린 경우, 브라우저가 깨진 엑스박스를 띄우는 대신 깔끔한 **기본 아이콘(사람/카메라 모양)**을 알아서 띄우므로 홈페이지가 절대 깨지지 않습니다. 안심하고 이미지를 업로드하세요!
