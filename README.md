# JANG HANI Portfolio

4개의 프로젝트 웹사이트를 하나로 모아 보여주는 GitHub Pages용 개인 포트폴리오입니다.

## 파일 구조

```text
jhanihany-portfolio/
├─ index.html
├─ style.css
├─ script.js
└─ README.md
```

외부 이미지 없이도 바로 동작하도록 제작되어 있습니다.

## 연결된 프로젝트

1. 교보문고 고객 대상 신용대출 서비스
   - https://jhanihany.github.io/kyobo-loan.github.io/

2. ARDS Prediction Model
   - https://jhanihany.github.io/ARDS-prediction-model/

3. 화성시 어린이 안전지도
   - https://jhanihany.github.io/Hwaseong-City-Urban-Data-Research/

4. Bond & Macro Dashboard
   - https://bond-macro-dashboard-j12.streamlit.app/

## 먼저 수정해야 할 부분

`index.html`에서 `TODO`를 검색하면 수정할 위치를 빠르게 찾을 수 있습니다.

- Education: 학교 / 전공 / 재학기간
- Award: 수상 경력
- Email: `your-email@example.com` 두 곳
- 필요 시 About 문구와 기술 스택

## GitHub Pages 배포

### 방법 A. `jhanihany.github.io` 저장소 사용
GitHub에서 `jhanihany.github.io` 이름의 저장소를 만든 뒤,
이 폴더의 `index.html`, `style.css`, `script.js`를 저장소 루트에 업로드합니다.

그 다음:

1. GitHub 저장소 → **Settings**
2. **Pages**
3. Build and deployment → **Deploy from a branch**
4. Branch → `main` / `(root)`
5. Save

배포 후 주소는 다음 형태가 됩니다.

```text
https://jhanihany.github.io/
```

### 방법 B. 별도 portfolio 저장소 사용

저장소 이름을 예를 들어 `portfolio`로 만들면:

```text
https://jhanihany.github.io/portfolio/
```

형태로 사용할 수 있습니다.

## 로컬 확인

`index.html`을 브라우저로 직접 열어도 대부분의 기능이 동작합니다.

VS Code를 사용한다면 Live Server로 열어 확인하는 방법을 권장합니다.
