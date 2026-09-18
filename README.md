# acredo 설문 위장 프러포즈 미니앱

아크레도(acredo) 고객 경험 설문처럼 보이는 **오프라인 전용** 정적 웹 페이지입니다.  
설문을 마치면 프러포즈 문구가 드러납니다. 실제 Acredo API·서버 전송은 **전혀 없습니다**.

## 여는 방법

1. 폴더 `acredo-proposal-survey`에서 `index.html`을 더블클릭하거나  
2. 브라우저로 파일을 드래그해 열거나  
3. 터미널에서:

```bash
# macOS
open index.html

# 또는 간단한 로컬 서버 (선택)
python3 -m http.server 8080
# → http://localhost:8080
```

### 전체 화면으로 보여주기 (추천)

- **휴대폰이 가장 잘 맞습니다** (약 375–430px). 세로로 건네면 네이티브 앱처럼 보입니다
- **홈 화면 추가 / 전체 화면(선택)**: iOS Safari 공유 → 「홈 화면에 추가」, Android Chrome 메뉴 → 「홈 화면에 추가」 또는 브라우저 전체 화면(F11 / macOS `Ctrl + Cmd + F`)
- 주소창·북마크 바를 숨기면 “진짜 설문” 느낌이 더 납니다
- 가로·세로 모두 반응형입니다. 폰·태블릿 모두 자연스럽습니다

## 프러포즈 문구 수정하기

`app.js` **맨 위**의 `CONFIG` 객체만 고치면 됩니다.

| 키 | 설명 |
|---|---|
| `proposalTitle` | 공개 화면 제목 |
| `proposalBody` | 본문 (`\n`으로 줄바꿈). **비어 있지 않은 줄마다 전체 화면 1장**으로 자동 전환 (빈 줄은 짧은 쉼) |
| `proposalAskLine` | 강조할 마지막 한 줄(예: 나와 결혼해 줄래요?). **비우면** `proposalBody`의 마지막 비어 있지 않은 줄을 자동 사용 |
| `proposalRevealMs` | 공개 연출 타이밍(ms). `screenDwell`(한 줄 화면 유지) / `askBefore` / `askDwell`(질문 화면) / `actions` 등 |
| `celebrationSub` | 「네」 클릭 후 축하 본문 |
| `celebrationPersonal` | 축하 화면 두 번째 줄(선택). 비우고 이름이 있으면 자동으로 `○○님, …` 문구 표시 |
| `nudges` | 「한 번 더 생각해볼게요」 눌렀을 때 순환 메시지 |
| `personalFields` | 인적사항 제목 |
| `questions` | 설문 문항·선택지 |
| `yourName` / `partnerName` | 선택 사항 (비워둬도 됨; 인적사항 이름 우선) |
| `interstitialMs` | 중간 로딩 시간(밀리초, 기본 2500) |
| `polaroids` | 프러포즈 배경 폴라로이드 낙하. `enabled`, `images`(경로 배열), `startDelayMs` / `spawnEveryMs` / `fallDurationMinMs`–`MaxMs` / `maxOnScreen` |

예시:

```js
proposalTitle: "사실… 이건 설문이 아니었어요.",
proposalBody:
  "당신과 맞춘 그 웨딩밴드처럼,\n우리만의 이야기를 평생 함께하고 싶어요.\n\n나와 결혼해 줄래요?",
```

마지막 줄(`나와 결혼해 줄래요?`)이 가장 크게 강조됩니다. `proposalAskLine`을 비워 두면 자동으로 그 줄이 선택됩니다.

프러포즈는 **한 화면에 한 문장**입니다. 제목 → 본문 각 줄 → (짧은 쉼) → 질문 단독 → 버튼 순으로 자동 넘어갑니다. `prefers-reduced-motion`이면 질문+버튼으로 바로 갑니다.

저장한 뒤 브라우저를 **새로고침**하면 반영됩니다.

## 흐름 요약

1. **랜딩** — acredo 워드마크 + 설문 초대 → 「설문 시작하기」
2. **인적사항** (1/11) — 이름·연락처(필수), 이메일(선택), 방문/상담 목적(선택 텍스트)
3. **10문항 설문** (2/11–11/11) — 진행 표시, 이전/다음, 선택·별점·텍스트 입력
4. **중간 화면** — “두 분만의 이야기를 정리하고 있어요…” (~2.5초)
5. **프러포즈** — 한 문구씩 전체 화면으로 자동 전환(배경에 폴라로이드 사진 낙하) → 마지막에 질문만 강조 → 「좋아」 (로고 없음)
6. **축하** — 「네」 선택 시 풀스크린 하트·골드 컨페티 (이름이 있으면 두 번째 줄로 부드럽게 호명)

인적사항·답변은 브라우저 메모리에만 두고, 외부로 보내지 않습니다.

## 기술 참고

- HTML / CSS / JS만 사용 (빌드·npm·프레임워크 없음)
- Google Fonts: Noto Serif KR, Cormorant Garamond, Pretendard
- `prefers-reduced-motion` 지원 (프러포즈 연출은 즉시 최종 상태 또는 소프트 페이드만)
- 데이터는 브라우저 메모리에만 잠시 두고, 외부로 보내지 않습니다


## 폴라로이드 사진 바꾸기

프러포즈 공개 중 배경에 폴라로이드 프레임 사진이 천천히 떨어집니다 (문구 뒤, `pointer-events: none`, 반투명).

1. **파일 교체** — `photos/photo-1.jpg` … `photo-6.jpg`를 실제 커플 사진으로 덮어쓰세요 (세로 ~4:5 권장).
2. **경로·개수 변경** — `app.js`의 `CONFIG.polaroids.images` 배열을 수정하세요.
3. **끄기** — `CONFIG.polaroids.enabled = false`.
4. **연출 속도** — `startDelayMs`, `spawnEveryMs`, `fallDurationMinMs` / `fallDurationMaxMs`, `maxOnScreen`을 조정하세요.

설문 화면에는 나오지 않고, 프러포즈(및 「좋아」 후 축하)에서만 재생됩니다. `prefers-reduced-motion`이면 낙하 대신 흐린 정적 폴라로이드 1–2장이 표시됩니다.

## 팁

- 미리 한 번 처음부터 끝까지 눌러 보고, `CONFIG` 문구를 본인 이야기에 맞게 다듬으세요
- 와이파이 없이도 `index.html`만 있으면 동작합니다 (폰트는 오프라인 시 시스템 폰트로 대체될 수 있음)
- 랜딩·설문에는 `logo.png`를 쓰고, **프러포즈 화면에서는 로고를 숨깁니다**

행운을 빕니다. ♥


## 카카오톡 링크 미리보기 (이미지)

카카오톡은 **공개된 https 주소**의 페이지를 읽어 `og:image`를 보여 줍니다. `index.html`을 폰에서 직접 열면 미리보기가 나오지 않습니다.

1. 이 폴더 전체를 Netlify / Vercel / GitHub Pages 등에 배포하세요.
2. `index.html`에서 `PUBLIC_BASE_URL`을 실제 도메인으로 바꿉니다.  
   예: `https://PUBLIC_BASE_URL/og-image-wide.jpg` → `https://my-survey.netlify.app/og-image-wide.jpg`
3. 공유용 이미지는 `og-image-wide.jpg` (1200×630), 원본 느낌은 `og-image.jpg`입니다.
4. 배포 직후엔 카카오 캐시 때문에 예전 미리보기가 남을 수 있습니다. [카카오 디버거](https://developers.kakao.com/tool/debugger/sharing)에서 URL 스크랩을 다시 요청하세요.


## 폴라로이드 사진 많이 넣기

1. `photos/photo-1.jpg`, `photo-2.jpg`, … 처럼 번호 순으로 넣기 (비율 **4:5**, 가로 600–800px 권장)
2. `app.js`의 `CONFIG.polaroids.photoCount`를 장 수에 맞게 올리기 (예: 50)
3. 파일명이 다르면 `images: ["photos/a.jpg", ...]`에 직접 나열

많이 넣어도 화면에는 동시에 적게 뜨고, 가로·세로 간격이 부족하면 스킵해서 최대한 안 겹치게 떨어집니다. 한 바퀴 돌 때까지 같은 사진이 반복되지 않게 섞어서 씁니다.
