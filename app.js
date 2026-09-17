/* =============================================================================
   CONFIG — 여기를 수정해서 프러포즈 문구·설문을 쉽게 바꿔 주세요
   ============================================================================= */
const CONFIG = {
  /* 카카오톡 링크 미리보기: 사이트를 https로 배포한 뒤, index.html의 PUBLIC_BASE_URL을
     그 주소(예: https://xxxx.netlify.app)로 모두 바꿔 주세요. 로컬 파일 열기는 미리보기 불가. */
  publicBaseUrl: "",

  /* 이름 — partnerName을 프로포즈·축하에 고정 사용 */
  yourName: "다빈",
  partnerName: "유그린",

  /* 프러포즈 화면 (다정한 반말 톤) — 빈 줄로 화면 구분, 같은 단락은 한 화면 */
  proposalTitle: "",
  proposalBody:
    "안녕 그린, 나 다빈이야.\n깜짝 놀랐을지 모르겠지만\n하고 싶은 말이 있어서\n깜짝 준비를 해봤어.\n\n그린이를 처음 만났던 날이\n아직도 생생하고 설레는데\n우리가 함께한지\n벌써 7년차를 맞이했네.\n\n오랜 시간 함께하면서\n평생 간직하고 싶은\n소중한 추억들이 쌓인 것 같아.\n\n그린이를 만나기 전까지는\n하루하루를 지나가는 대로\n흘러가는 대로 계획도 없이\n의미도 없이 살아갔어.\n\n특별할 것 없이\n메말라 있던 내 삶이,\n그린이를 만난 순간부터\n눈부시게 반짝이기 시작했어.\n\n네가 내게 비춰준\n그 따뜻한 햇살로,\n이제는 우리가 함께하는 삶에\n깊게 뿌리를 내리고\n푸르고 싱그러운 새싹을\n틔우며 살고 싶어.\n\n내가 많이 늦은 바람에\n속상하고 돌고 돌았지만\n아직 내게 기회가 있다면\n그린이랑 앞으로의 모든 날을\n평생 함께 살아가고 싶어.\n\n나랑 결혼해줄래?",
  /* 강조할 마지막 한 줄(비우면 proposalBody의 마지막 비어 있지 않은 줄 자동 사용) */
  proposalAskLine: "그린아\n나랑 결혼해줄래?",
  /* 프러포즈 마지막 문구 아래 이미지 (비우면 숨김) */
  proposalAskImage: "ask-couple.png",
  /* 공개 연출 타이밍(ms) — prefers-reduced-motion이면 즉시 최종 상태 */
  proposalRevealMs: {
    card: 80,
    wordmark: 250,
    ornament: 400,
    /* 카드 공개 직후 기준(사진은 바로 시작, 문구는 firstHold 후) */
    title: 200,
    /* 사진이 위에서 내려와 화면에 몇 장 보인 뒤 첫 문구 */
    firstHold: 3200,
    bodyStart: 900,
    bodyLine: 500,
    askBefore: 550,
    askHold: 600,
    actions: 160,
    screenDwell: 4200,
    askDwell: 900,
    /* 문구가 사라질 때 페이드 아웃 시간 */
    exitFade: 900,
    /* 한 줄이 스르륵 올라오는 동안 다음 줄도 겹쳐 등장 */
    enterFade: 1500,
    lineStagger: 220,
    gapBetweenMs: 280,
  },

  /* "네" 클릭 후 축하 문구 */
  celebrationTitle: "사랑해, 그린",
  celebrationSub: "앞으로의 모든 날을 평생 너와 함께할게",

  /* 랜딩 참여 혜택 문구 */
  landingReward: "설문 완료 시 스타벅스 아메리카노 Tall을 증정해드립니다.",
  landingRewardNote: "기프티콘은 2026년 10월 12일에 문자로 보내드립니다.",

  /* 인적사항 (설문 문항 앞 1단계) */
  personalFields: {
    title: "인적사항",
    phoneGifticonNote: "적어주신 연락처로 기프티콘 메시지가 전송됩니다.",
  },

  /* 설문 문항 (type: "choice" | "text" | "rating") */
  questions: [
    {
      id: "role",
      type: "choice",
      question: "설문에 응답해 주시는 분은?",
      options: ["신랑", "신부"],
    },
    {
      id: "howFound",
      type: "choice",
      question: "아크레도를 알게 된 경로는?",
      options: ["지인 추천", "인스타그램/SNS", "검색 (네이버·구글)", "웨딩 박람회/매장 방문", "블로그·후기", "기타"],
    },
    {
      id: "whyChose",
      type: "choice",
      question: "아크레도에서 웨딩밴드를 선택한 가장 큰 이유는?",
      options: ["커스터마이징이 자유로워서", "디자인·퀄리티", "독일 제작/브랜드 신뢰", "상담·서비스", "두 사람 취향을 담을 수 있어서", "기타"],
    },
    {
      id: "priority",
      type: "choice",
      question: "웨딩밴드를 고를 때 가장 중요했던 것은?",
      options: ["디자인", "착용감", "의미/스토리", "두 사람의 취향 맞춤"],
    },
    {
      id: "customStep",
      type: "choice",
      question: "커스터마이징 과정에서 가장 인상적이었던 단계는?",
      options: ["프로파일(형태) 선택", "너비·높이", "소재·컬러", "디테일(그루브·세팅 등)", "각인"],
    },
    {
      id: "mood",
      type: "choice",
      question: "두 사람을 떠올리면 가장 가까운 분위기는?",
      options: ["로맨틱 골드", "시크한 화이트", "따뜻한 로즈", "심플 미니멀"],
    },
    {
      id: "meaning",
      type: "choice",
      question: "반지에 담고 싶은 의미는?",
      options: ["영원", "함께한 시간", "앞으로의 약속", "우리만의 이야기"],
    },
    {
      id: "managerRating",
      type: "rating",
      question: "웨딩밴드에 도움을 준 안선영 매니저를 별점으로 평가해 주세요",
      max: 5,
    },
    {
      id: "managerComment",
      type: "text",
      question: "웨딩밴드에 도움을 준 안선영 매니저의 상담은 어땠나요?",
      placeholder: "예: 친절하고 세심하게 상담해 주셨어요",
    },
    {
      id: "review",
      type: "text",
      question: "아크레도에서 웨딩밴드를 맞춘 후기나 소감을 남겨 주세요",
      placeholder: "예: 상담부터 커스터마이징까지 만족스러웠어요",
    },
  ],

  /* 중간 로딩 문구·시간(ms) */
  interstitialText: "설문 내용을 저장하고\n전송하는 중이에요…",
  interstitialHint: "창을 닫지 마세요",
  interstitialMs: 3200,

  /* 프러포즈 배경 — 폴라로이드 사진이 천천히 떨어지는 연출
     photos/ 폴더의 파일을 실제 사진으로 바꾸거나 images 경로를 수정하세요 */
  polaroids: {
    enabled: true,
    images: [
      "photos/photo-1.jpg",
      "photos/photo-2.jpg",
      "photos/photo-3.jpg",
      "photos/photo-4.jpg",
      "photos/photo-5.jpg",
      "photos/photo-6.jpg",
    ],
    startDelayMs: 0,
    spawnEveryMs: 520,
    fallDurationMinMs: 11000,
    fallDurationMaxMs: 16000,
    maxOnScreen: 12,
  },
};

/* =============================================================================
   App logic — 아래는 보통 수정할 필요 없습니다
   ============================================================================= */

(function () {
  "use strict";

  const answers = {};
  /* step 0 = 인적사항, step 1..N = questions[step-1] */
  let step = 0;
  let nudgeIndex = 0;

  const questionCount = CONFIG.questions.length;
  const total = questionCount + 1; /* 인적사항 + 문항 */

  const els = {
    landing: document.getElementById("view-landing"),
    survey: document.getElementById("view-survey"),
    interstitial: document.getElementById("view-interstitial"),
    proposal: document.getElementById("view-proposal"),
    celebration: document.getElementById("celebration"),
    confetti: document.getElementById("confetti"),
    btnStart: document.getElementById("btn-start"),
    btnBack: document.getElementById("btn-back"),
    btnNext: document.getElementById("btn-next"),
    btnYes: document.getElementById("btn-yes"),
    question: document.getElementById("survey-question"),
    personal: document.getElementById("survey-personal"),
    options: document.getElementById("survey-options"),
    textWrap: document.getElementById("survey-text"),
    textInput: document.getElementById("text-input"),
    charCount: document.getElementById("char-count"),
    rating: document.getElementById("survey-rating"),
    stepCurrent: document.getElementById("step-current"),
    stepTotal: document.getElementById("step-total"),
    progressFill: document.getElementById("progress-fill"),
    progress: document.querySelector(".progress"),
    interstitialText: document.getElementById("interstitial-text"),
    proposalStage: document.getElementById("proposal-stage"),
    proposalCard: document.getElementById("proposal-card"),
    proposalTitle: document.getElementById("proposal-title"),
    proposalBody: document.getElementById("proposal-body"),
    proposalFocus: document.getElementById("proposal-focus"),
    proposalActions: document.getElementById("proposal-actions"),
    proposalShimmer: document.getElementById("proposal-shimmer"),
    polaroidRain: document.getElementById("polaroid-rain"),
    celebrationSub: document.getElementById("celebration-sub"),
    celebrationMessage: document.getElementById("celebration-message"),
    fieldName: document.getElementById("field-name"),
    fieldPhone: document.getElementById("field-phone"),
    fieldEmail: document.getElementById("field-email"),
    fieldPurposeText: document.getElementById("field-purpose-text"),
    fieldPrivacy: document.getElementById("field-privacy"),
  };

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  /* 숫자 10~11자리 (하이픈 포함 표기) */
  const PHONE_RE = /^01[016789]-\d{3,4}-\d{4}$/;

  function formatKoreanPhone(value) {
    const digits = String(value || "").replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) {
      return digits.slice(0, 3) + "-" + digits.slice(3);
    }
    /* 11자리: 010-1234-5678 / 10자리: 010-123-4567 */
    if (digits.length === 10) {
      return digits.slice(0, 3) + "-" + digits.slice(3, 6) + "-" + digits.slice(6);
    }
    return digits.slice(0, 3) + "-" + digits.slice(3, 7) + "-" + digits.slice(7);
  }

  function onPhoneInput() {
    const el = els.fieldPhone;
    const prev = el.value;
    const sel = el.selectionStart;
    const digitsBefore = prev.slice(0, sel).replace(/\D/g, "").length;
    const formatted = formatKoreanPhone(prev);
    el.value = formatted;
    /* 커서: 같은 숫자 개수 뒤로 유지 */
    let pos = formatted.length;
    let count = 0;
    for (let i = 0; i < formatted.length; i++) {
      if (/\d/.test(formatted[i])) count += 1;
      if (count >= digitsBefore) {
        pos = i + 1;
        break;
      }
    }
    try {
      el.setSelectionRange(pos, pos);
    } catch (_) {}
    refreshPersonalValidity();
  }

  function showView(target) {
    [els.landing, els.survey, els.interstitial, els.proposal].forEach((v) => {
      if (!v) return;
      const active = v === target;
      v.hidden = !active;
      v.classList.toggle("view--active", active);
    });
    if (target !== els.proposal) {
      stopPolaroidRain(true);
    }
  }

  function updateProgress() {
    if (!els.progress) return;

    /* 인적사항(step 0): 프로그레스 숨김 — 설문 10문항만 표시 */
    if (isPersonalStep()) {
      els.progress.hidden = true;
      return;
    }

    els.progress.hidden = false;
    const n = step; /* step 1..questionCount → 1/10 .. 10/10 */
    const max = questionCount;
    els.stepCurrent.textContent = String(n);
    els.stepTotal.textContent = String(max);
    if (els.progressFill) {
      els.progressFill.style.width = `${(n / max) * 100}%`;
    }
    els.progress.setAttribute("aria-valuenow", String(n));
    els.progress.setAttribute("aria-valuemin", "1");
    els.progress.setAttribute("aria-valuemax", String(max));
  }

  function setNextEnabled(on) {
    els.btnNext.disabled = !on;
  }

  function isPersonalStep() {
    return step === 0;
  }

  function currentQuestion() {
    return CONFIG.questions[step - 1];
  }

  /* ── 인적사항 validation ── */

  function getPersonalDraft() {
    return {
      name: (els.fieldName.value || "").trim(),
      phone: (els.fieldPhone.value || "").trim(),
      email: (els.fieldEmail.value || "").trim(),
      purpose: (els.fieldPurposeText.value || "").trim(),
      privacy: Boolean(els.fieldPrivacy && els.fieldPrivacy.checked),
    };
  }

  function isPersonalValid() {
    const d = getPersonalDraft();
    if (!d.name) return false;
    if (!d.phone || !PHONE_RE.test(d.phone)) return false;
    if (d.email && !EMAIL_RE.test(d.email)) return false;
    if (!d.privacy) return false;
    return true;
  }

  function refreshPersonalValidity() {
    const email = (els.fieldEmail.value || "").trim();
    els.fieldEmail.classList.toggle(
      "field__input--invalid",
      Boolean(email) && !EMAIL_RE.test(email)
    );
    const phone = (els.fieldPhone.value || "").trim();
    els.fieldPhone.classList.toggle(
      "field__input--invalid",
      Boolean(phone) && !PHONE_RE.test(phone)
    );
    setNextEnabled(isPersonalValid());
  }

  function savePersonalAnswers() {
    const d = getPersonalDraft();
    answers.name = d.name;
    answers.phone = d.phone;
    answers.email = d.email;
    answers.privacy = d.privacy;
    if (d.purpose) answers.purpose = d.purpose;
    else delete answers.purpose;
  }



  const OTHER_OPTION = "기타";

  function otherKey(qid) {
    return qid + "_other";
  }

  function isOtherSelected(qid) {
    return answers[qid] === OTHER_OPTION;
  }

  function syncOtherTextField(q) {
    if (!q || q.type !== "choice") return;
    const show = isOtherSelected(q.id) && (q.options || []).includes(OTHER_OPTION);
    els.textWrap.hidden = !show;
    els.textWrap.classList.toggle("text-answer--other", show);
    if (!show) return;
    els.textInput.value = answers[otherKey(q.id)] || "";
    els.textInput.placeholder = "기타 내용을 적어 주세요";
    els.charCount.textContent = String(els.textInput.value.length);
    setNextEnabled(els.textInput.value.trim().length > 0);
    requestAnimationFrame(() => els.textInput.focus());
  }

  function renderPersonalStep() {
    updateProgress();
    const title =
      (CONFIG.personalFields && CONFIG.personalFields.title) ||
      "인적사항";
    els.question.textContent = title;

    els.personal.hidden = false;
    els.options.hidden = true;
    els.options.innerHTML = "";
    els.textWrap.hidden = true;
    if (els.rating) {
      els.rating.hidden = true;
      els.rating.innerHTML = "";
    }

    els.btnBack.style.visibility = "visible";
    els.btnBack.textContent = "이전";
    els.btnNext.textContent = "다음";

    if (answers.name) els.fieldName.value = answers.name;
    if (answers.phone) els.fieldPhone.value = answers.phone;
    if (answers.email) els.fieldEmail.value = answers.email;
    if (answers.purpose) els.fieldPurposeText.value = answers.purpose;
    if (els.fieldPrivacy) els.fieldPrivacy.checked = Boolean(answers.privacy);

    refreshPersonalValidity();
    requestAnimationFrame(() => els.fieldName.focus());
  }

  function renderQuestionStep() {
    const q = currentQuestion();
    if (!q) return;

    updateProgress();
    els.question.textContent = q.question;
    els.personal.hidden = true;
    els.btnBack.style.visibility = "visible";
    els.btnBack.textContent = "이전";
    els.btnNext.textContent = step === total - 1 ? "제출하기" : "다음";

    els.options.innerHTML = "";
    els.options.hidden = q.type !== "choice";
    els.textWrap.hidden = q.type !== "text";
    els.textWrap.classList.remove("text-answer--other");
    if (els.rating) {
      els.rating.innerHTML = "";
      els.rating.hidden = q.type !== "rating";
    }

    if (q.type === "choice") {
      const saved = answers[q.id];
      q.options.forEach((label, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option" + (saved === label ? " option--selected" : "");
        btn.setAttribute("role", "radio");
        btn.setAttribute("aria-checked", saved === label ? "true" : "false");
        btn.dataset.value = label;

        btn.innerHTML =
          '<span class="option__radio" aria-hidden="true"></span>' +
          '<span class="option__label"></span>';
        btn.querySelector(".option__label").textContent = label;

        btn.addEventListener("click", () => selectOption(label));
        btn.addEventListener("keydown", (e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            const next = els.options.children[(i + 1) % q.options.length];
            next && next.focus();
          } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            const prev =
              els.options.children[(i - 1 + q.options.length) % q.options.length];
            prev && prev.focus();
          }
        });

        els.options.appendChild(btn);
      });
      if (isOtherSelected(q.id)) {
        syncOtherTextField(q);
      } else {
        setNextEnabled(Boolean(saved));
      }
    } else if (q.type === "rating") {
      renderRating(q);
    } else {
      els.textInput.value = answers[q.id] || "";
      els.textInput.placeholder = q.placeholder || "한 줄로 적어 주세요";
      els.charCount.textContent = String(els.textInput.value.length);
      setNextEnabled(els.textInput.value.trim().length > 0);
      requestAnimationFrame(() => els.textInput.focus());
    }
  }

  function renderRating(q) {
    const max = q.max || 5;
    const saved = Number(answers[q.id]) || 0;
    const wrap = els.rating;
    wrap.setAttribute("role", "radiogroup");
    wrap.setAttribute("aria-labelledby", "survey-question");

    const row = document.createElement("div");
    row.className = "rating";

    for (let i = 1; i <= max; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "rating__star" + (i <= saved ? " rating__star--on" : "");
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", i === saved ? "true" : "false");
      btn.setAttribute("aria-label", i + "점");
      btn.dataset.value = String(i);
      btn.innerHTML = '<span class="rating__icon" aria-hidden="true">★</span>';

      btn.addEventListener("click", () => selectRating(i, max));
      btn.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowUp") {
          e.preventDefault();
          const next = Math.min(max, (Number(answers[q.id]) || i) + 1);
          selectRating(next, max);
          const el = wrap.querySelector('[data-value="' + next + '"]');
          el && el.focus();
        } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
          e.preventDefault();
          const prev = Math.max(1, (Number(answers[q.id]) || i) - 1);
          selectRating(prev, max);
          const el = wrap.querySelector('[data-value="' + prev + '"]');
          el && el.focus();
        }
      });

      row.appendChild(btn);
    }

    const hint = document.createElement("p");
    hint.className = "rating__hint";
    hint.id = "rating-hint";
    hint.textContent = saved >= 1 ? saved + " / " + max : "별을 눌러 평가해 주세요";

    wrap.appendChild(row);
    wrap.appendChild(hint);
    setNextEnabled(saved >= 1);
    requestAnimationFrame(() => {
      const focusEl =
        wrap.querySelector('.rating__star[aria-checked="true"]') ||
        wrap.querySelector(".rating__star");
      focusEl && focusEl.focus();
    });
  }

  function selectRating(value, max) {
    const q = currentQuestion();
    const n = Number(value);
    answers[q.id] = n;
    const wrap = els.rating;
    [...wrap.querySelectorAll(".rating__star")].forEach((btn) => {
      const v = Number(btn.dataset.value);
      btn.classList.toggle("rating__star--on", v <= n);
      btn.setAttribute("aria-checked", v === n ? "true" : "false");
    });
    const hint = wrap.querySelector(".rating__hint");
    if (hint) hint.textContent = n + " / " + (max || 5);
    setNextEnabled(n >= 1);
  }

  function renderStep() {
    if (isPersonalStep()) {
      renderPersonalStep();
    } else {
      renderQuestionStep();
    }
  }

  function selectOption(value) {
    const q = currentQuestion();
    answers[q.id] = value;
    if (value !== OTHER_OPTION) {
      delete answers[otherKey(q.id)];
    }
    [...els.options.children].forEach((btn) => {
      const on = btn.dataset.value === value;
      btn.classList.toggle("option--selected", on);
      btn.setAttribute("aria-checked", on ? "true" : "false");
    });
    if (value === OTHER_OPTION) {
      syncOtherTextField(q);
    } else {
      els.textWrap.hidden = true;
      els.textWrap.classList.remove("text-answer--other");
      setNextEnabled(true);
    }
  }

  function goNext() {
    if (isPersonalStep()) {
      if (!isPersonalValid()) return;
      savePersonalAnswers();
      step = 1;
      renderStep();
      return;
    }

    const q = currentQuestion();
    if (q.type === "text") {
      const val = els.textInput.value.trim();
      if (!val) return;
      answers[q.id] = val;
    } else if (q.type === "rating") {
      if (!(Number(answers[q.id]) >= 1)) return;
    } else if (q.type === "choice") {
      if (!answers[q.id]) return;
      if (answers[q.id] === OTHER_OPTION) {
        const other = els.textInput.value.trim();
        if (!other) return;
        answers[otherKey(q.id)] = other;
      }
    } else if (!answers[q.id]) {
      return;
    }

    if (step < total - 1) {
      step += 1;
      renderStep();
    } else {
      runInterstitial();
    }
  }

  function goBack() {
    if (isPersonalStep()) {
      savePersonalAnswers();
      showView(els.landing);
      return;
    }

    const backQ = currentQuestion();
    if (backQ.type === "text") {
      answers[backQ.id] = els.textInput.value.trim();
    } else if (backQ.type === "choice" && answers[backQ.id] === OTHER_OPTION) {
      answers[otherKey(backQ.id)] = els.textInput.value.trim();
    }
    step -= 1;
    renderStep();
  }

  function runInterstitial() {
    preloadAskImage();
    showView(els.interstitial);
    if (CONFIG.interstitialText && els.interstitialText) {
      els.interstitialText.innerHTML = CONFIG.interstitialText.replace(
        /\n/g,
        "<br />"
      );
    }
    const hintEl = document.getElementById("interstitial-hint");
    if (hintEl) {
      hintEl.textContent =
        (CONFIG.interstitialHint || "").trim() || "창을 닫지 마세요";
      hintEl.hidden = false;
    }
    window.setTimeout(() => {
      showProposal();
    }, CONFIG.interstitialMs || 3200);
  }

  let revealTimers = [];

  function preloadAskImage() {
    const src = (CONFIG.proposalAskImage || "").trim();
    if (!src) return Promise.resolve();
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    if (img.decode) {
      return img.decode().catch(function () {});
    }
    return new Promise(function (resolve) {
      if (img.complete) resolve();
      else {
        img.onload = function () { resolve(); };
        img.onerror = function () { resolve(); };
      }
    });
  }

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function clearRevealTimers() {
    revealTimers.forEach((id) => window.clearTimeout(id));
    revealTimers = [];
  }

  function after(ms, fn) {
    const id = window.setTimeout(fn, ms);
    revealTimers.push(id);
    return id;
  }

  function revealTiming() {
    const t = CONFIG.proposalRevealMs || {};
    return {
      card: t.card != null ? t.card : 120,
      wordmark: t.wordmark != null ? t.wordmark : 380,
      ornament: t.ornament != null ? t.ornament : 620,
      title: t.title != null ? t.title : 200,
      firstHold: t.firstHold != null ? t.firstHold : 3200,
      bodyStart: t.bodyStart != null ? t.bodyStart : 900,
      bodyLine: t.bodyLine != null ? t.bodyLine : 500,
      askBefore: t.askBefore != null ? t.askBefore : 550,
      askHold: t.askHold != null ? t.askHold : 600,
      actions: t.actions != null ? t.actions : 160,
      screenDwell: t.screenDwell != null ? t.screenDwell : 4200,
      askDwell: t.askDwell != null ? t.askDwell : 900,
      exitFade: t.exitFade != null ? t.exitFade : 900,
      enterFade: t.enterFade != null ? t.enterFade : 1200,
      lineStagger: t.lineStagger != null ? t.lineStagger : 220,
      gapBetweenMs: t.gapBetweenMs != null ? t.gapBetweenMs : 280,
    };
  }

  function splitProposalBody(raw) {
    const text = (raw || "").replace(/\r\n/g, "\n");
    return text.split("\n");
  }

  function resolveAskLine(lines) {
    const override = (CONFIG.proposalAskLine || "").trim();
    if (override) return override;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim()) return lines[i].trim();
    }
    return "";
  }

  /* Build screens: title → paragraphs (blank-line separated; \n = same screen) → ask */
  function buildProposalScreens() {
    const title = (CONFIG.proposalTitle || "").trim();
    const raw = (CONFIG.proposalBody || "").replace(/\r\n/g, "\n");
    const rawLines = splitProposalBody(raw);
    const ask = resolveAskLine(rawLines);
    const screens = [];

    if (title) {
      screens.push({ type: "title", text: title, lines: [title] });
    }

    /* paragraphs separated by blank lines; lines inside a paragraph share one screen */
    const paragraphs = raw
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);

    paragraphs.forEach((para) => {
      const lines = para
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      if (!lines.length) return;

      const askLines = ask
        ? ask.split("\n").map((l) => l.trim()).filter(Boolean)
        : [];
      /* skip paragraph that is only ask content */
      if (
        askLines.length &&
        lines.length === askLines.length &&
        lines.every((l, i) => l === askLines[i])
      ) {
        return;
      }
      if (askLines.length === 1 && lines.length === 1 && lines[0] === askLines[0]) {
        return;
      }
      const filtered = askLines.length
        ? lines.filter((l) => !askLines.includes(l))
        : lines;
      if (!filtered.length) return;

      screens.push({
        type: "line",
        text: filtered.join("\n"),
        lines: filtered,
      });
    });

    if (ask) {
      const askLines = ask
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      screens.push({
        type: "ask",
        text: askLines[askLines.length - 1] || ask,
        lines: askLines.length ? askLines : [ask],
      });
    }

    return screens;
  }

  function spawnProposalShimmer() {
    if (!els.proposalShimmer) return;
    els.proposalShimmer.innerHTML = "";
    if (prefersReducedMotion()) return;

    const count = 10;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      dot.className = "shimmer-dot";
      dot.style.left = 8 + Math.random() * 84 + "%";
      dot.style.top = 12 + Math.random() * 70 + "%";
      dot.style.animationDelay = Math.random() * 3.2 + "s";
      dot.style.animationDuration = 3.8 + Math.random() * 2.4 + "s";
      const size = 2 + Math.random() * 2.5;
      dot.style.width = size + "px";
      dot.style.height = size + "px";
      els.proposalShimmer.appendChild(dot);
    }
  }


  /* ── Polaroid rain (proposal background) ── */

  let polaroidTimers = [];
  let polaroidSpawnTimer = null;
  let polaroidActive = false;
  let polaroidImgCursor = 0;

  function polaroidConfig() {
    const p = CONFIG.polaroids || {};
    return {
      enabled: p.enabled !== false,
      images: Array.isArray(p.images) ? p.images.filter(Boolean) : [],
      startDelayMs: p.startDelayMs != null ? p.startDelayMs : 400,
      spawnEveryMs: p.spawnEveryMs != null ? p.spawnEveryMs : 520,
      fallDurationMinMs:
        p.fallDurationMinMs != null ? p.fallDurationMinMs : 11000,
      fallDurationMaxMs:
        p.fallDurationMaxMs != null ? p.fallDurationMaxMs : 16000,
      maxOnScreen: p.maxOnScreen != null ? p.maxOnScreen : 12,
    };
  }

  function clearPolaroidTimers() {
    polaroidTimers.forEach((id) => window.clearTimeout(id));
    polaroidTimers = [];
    if (polaroidSpawnTimer != null) {
      window.clearInterval(polaroidSpawnTimer);
      polaroidSpawnTimer = null;
    }
  }

  function stopPolaroidRain(clearDom) {
    polaroidActive = false;
    clearPolaroidTimers();
    if (clearDom && els.polaroidRain) {
      els.polaroidRain.innerHTML = "";
      els.polaroidRain.classList.remove("is-active", "is-static");
    }
  }

  function nextPolaroidSrc(images) {
    if (!images.length) return null;
    const src = images[polaroidImgCursor % images.length];
    polaroidImgCursor += 1;
    return src;
  }

  function randBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  /* 6 vertical lanes; empty-lane only; ≥28–32% horizontal gap; avoid top-third bunching */
  const POLAROID_LANES = [4, 12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92];

  function getActivePolaroidsMeta() {
    if (!els.polaroidRain) return [];
    return Array.from(els.polaroidRain.querySelectorAll(".polaroid")).map(
      (node) => {
        const rawLeft = node.dataset.left;
        const parsedLeft = rawLeft != null ? parseFloat(rawLeft) : NaN;
        const left = !Number.isNaN(parsedLeft)
          ? parsedLeft
          : parseFloat(node.style.left) || 0;
        const rawLane = node.dataset.lane;
        const parsedLane = rawLane != null ? parseFloat(rawLane) : NaN;
        return {
          left: left,
          lane: !Number.isNaN(parsedLane) ? parsedLane : null,
        };
      }
    );
  }

  function countPolaroidsInTopThird() {
    if (!els.polaroidRain) return 0;
    const rainRect = els.polaroidRain.getBoundingClientRect();
    if (!rainRect.height) return 0;
    const topThirdBottom = rainRect.top + rainRect.height / 3;
    let count = 0;
    Array.from(els.polaroidRain.querySelectorAll(".polaroid")).forEach(
      (node) => {
        const r = node.getBoundingClientRect();
        const midY = r.top + r.height * 0.5;
        if (midY >= rainRect.top - r.height * 0.25 && midY < topThirdBottom) {
          count += 1;
        }
      }
    );
    return count;
  }

  /* Prefer empty lanes; if full, still place with min separation for denser screen */
  function pickPolaroidLane(activeMeta) {
    const minSep = randBetween(8, 12);
    const occupied = new Set();
    const activeLefts = [];
    activeMeta.forEach((m) => {
      activeLefts.push(m.left);
      if (m.lane != null) occupied.add(m.lane);
    });

    const emptyLanes = POLAROID_LANES.filter((lane) => !occupied.has(lane));
    const pool = (emptyLanes.length ? emptyLanes : POLAROID_LANES.slice())
      .slice()
      .sort(() => Math.random() - 0.5);

    for (let i = 0; i < pool.length; i++) {
      const lane = pool[i];
      const jittered = lane + randBetween(-2.5, 2.5);
      const left = Math.max(2, Math.min(90, jittered));
      if (activeLefts.every((a) => Math.abs(a - left) >= minSep)) {
        return { left: left, lane: lane };
      }
    }
    /* last resort: farthest from neighbors for denser feel */
    let best = null;
    let bestScore = -1;
    for (let i = 0; i < POLAROID_LANES.length; i++) {
      const lane = POLAROID_LANES[i];
      const left = Math.max(2, Math.min(90, lane + randBetween(-2, 2)));
      const score = activeLefts.length
        ? Math.min.apply(null, activeLefts.map((a) => Math.abs(a - left)))
        : 99;
      if (score > bestScore) {
        bestScore = score;
        best = { left: left, lane: lane };
      }
    }
    return best;
  }

  function spawnOnePolaroid(cfg, opts) {
    if (!els.polaroidRain || !cfg.images.length) return;
    const onScreen = els.polaroidRain.querySelectorAll(".polaroid").length;
    if (onScreen >= cfg.maxOnScreen) return;

    const isStatic = !!(opts && opts.static);
    if (!isStatic && countPolaroidsInTopThird() >= 6) return;

    const pick = pickPolaroidLane(getActivePolaroidsMeta());
    if (!pick) return;

    const src = nextPolaroidSrc(cfg.images);
    if (!src) return;

    const el = document.createElement("div");
    el.className = "polaroid";
    el.setAttribute("aria-hidden", "true");

    const left = pick.left;
    const rot = randBetween(-10, 10);
    const rx = randBetween(4, 8);
    const ry = randBetween(-7, 7);
    const wide =
      window.matchMedia && window.matchMedia("(min-width: 600px)").matches;
    /* ~15–20% smaller than prior 72–100 / 95–125 — aim ~60–85 mobile, ~80–105 tablet */
    const size = wide ? randBetween(80, 105) : randBetween(60, 85);
    const opacity = randBetween(0.28, 0.42);
    const sway = randBetween(-16, 16);
    const duration = randBetween(cfg.fallDurationMinMs, cfg.fallDurationMaxMs);

    el.dataset.left = left.toFixed(2);
    el.dataset.lane = String(pick.lane);
    el.style.left = left + "%";
    el.style.width = size + "px";
    el.style.setProperty("--polaroid-rot", rot.toFixed(2) + "deg");
    el.style.setProperty("--polaroid-rx", rx.toFixed(2) + "deg");
    el.style.setProperty("--polaroid-ry", ry.toFixed(2) + "deg");
    el.style.setProperty("--polaroid-sway", sway.toFixed(2) + "px");
    el.style.setProperty("--polaroid-opacity", opacity.toFixed(2));
    el.style.setProperty("--polaroid-duration", duration + "ms");

    if (opts && opts.static) {
      el.classList.add("polaroid--static");
      el.style.top = randBetween(12, 55) + "%";
      el.style.opacity = String(Math.min(0.38, opacity));
    } else {
      el.style.animationDuration = duration + "ms";
    }

    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.decoding = "async";
    img.draggable = false;
    el.appendChild(img);

    els.polaroidRain.appendChild(el);

    if (!(opts && opts.static)) {
      const onEnd = () => {
        el.removeEventListener("animationend", onEnd);
        if (el.parentNode) el.parentNode.removeChild(el);
      };
      el.addEventListener("animationend", onEnd);
      /* fallback cleanup if animationend missed */
      const tid = window.setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, duration + 800);
      polaroidTimers.push(tid);
    }
  }

  function startPolaroidRain() {
    stopPolaroidRain(true);
    const cfg = polaroidConfig();
    if (!cfg.enabled || !cfg.images.length || !els.polaroidRain) return;

    polaroidActive = true;
    els.polaroidRain.classList.add("is-active");

    if (prefersReducedMotion()) {
      els.polaroidRain.classList.add("is-static");
      const n = Math.min(2, cfg.images.length);
      for (let i = 0; i < n; i++) {
        spawnOnePolaroid(cfg, { static: true });
      }
      return;
    }

    const kickOff = () => {
      if (!polaroidActive) return;
      /* 첫 몇 장은 고정 간격으로 위에서 내려와 보이게 */
      spawnOnePolaroid(cfg);
      const early = [400, 800, 1300];
      early.forEach((ms) => {
        const tid = window.setTimeout(() => {
          if (!polaroidActive) return;
          spawnOnePolaroid(cfg);
        }, ms);
        polaroidTimers.push(tid);
      });
      polaroidSpawnTimer = window.setInterval(() => {
        if (!polaroidActive) return;
        spawnOnePolaroid(cfg);
      }, cfg.spawnEveryMs);
    };
    if (!cfg.startDelayMs) {
      kickOff();
    } else {
      const kick = window.setTimeout(kickOff, cfg.startDelayMs);
      polaroidTimers.push(kick);
    }
  }

  function softenPolaroidRainForCelebration() {
    /* keep falling gently under celebration overlay; slightly fewer */
    if (!polaroidActive || !els.polaroidRain) return;
    if (prefersReducedMotion()) return;
    const cfg = polaroidConfig();
    if (polaroidSpawnTimer != null) {
      window.clearInterval(polaroidSpawnTimer);
      polaroidSpawnTimer = null;
    }
    polaroidSpawnTimer = window.setInterval(() => {
      if (!polaroidActive) return;
      spawnOnePolaroid(
        Object.assign({}, cfg, {
          maxOnScreen: Math.min(8, cfg.maxOnScreen),
        })
      );
    }, Math.max(cfg.spawnEveryMs * 1.7, 3200));
  }

  function clearProposalFocus() {
    if (!els.proposalFocus) return;
    els.proposalFocus.innerHTML = "";
    els.proposalFocus.classList.remove("is-ask", "is-exiting");
  }

  /* 훅 끊기지 않게: is-shown 제거 → 페이드 후 비우기 */
  function fadeOutFocus(done) {
    const t = revealTiming();
    const fadeMs = t.exitFade != null ? t.exitFade : 900;
    if (!els.proposalFocus || !els.proposalFocus.firstChild) {
      clearProposalFocus();
      if (done) done();
      return;
    }
    els.proposalFocus.classList.add("is-exiting");
    const lines = els.proposalFocus.querySelectorAll(".proposal__line");
    lines.forEach((el) => el.classList.remove("is-shown"));
    els.proposalFocus
      .querySelectorAll(".proposal__ask-art-wrap")
      .forEach((el) => el.classList.remove("is-shown"));
    after(fadeMs, () => {
      clearProposalFocus();
      if (done) done();
    });
  }

  function showFocusLine(text, isAsk, lines) {
    if (!els.proposalFocus) return null;
    clearProposalFocus();
    const parts =
      Array.isArray(lines) && lines.length
        ? lines
        : String(text || "")
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);
    const wrap = document.createElement("div");
    wrap.className =
      "proposal__focus-stack" + (isAsk ? " proposal__focus-stack--ask" : "");
    const t = revealTiming();
    const enterMs = t.enterFade != null ? t.enterFade : 1500;
    const stagger = t.lineStagger != null ? t.lineStagger : 220;
    const reduced = prefersReducedMotion();
    parts.forEach((part, idx) => {
      const p = document.createElement("p");
      p.className =
        "proposal__line" +
        (isAsk ? " proposal__line--ask" : " proposal__line--focus");
      p.textContent = part;
      /* stagger via CSS --line-delay; reduced-motion: all at once */
      p.style.setProperty(
        "--line-delay",
        reduced ? "0ms" : idx * stagger + "ms"
      );
      wrap.appendChild(p);
    });
    let askArtWrap = null;
    if (isAsk) {
      const askImg = (CONFIG.proposalAskImage || "").trim();
      if (askImg) {
        askArtWrap = document.createElement("div");
        askArtWrap.className = "proposal__ask-art-wrap";
        askArtWrap.setAttribute("aria-hidden", "true");
        const img = document.createElement("img");
        img.className = "proposal__ask-art";
        img.src = askImg;
        img.alt = "";
        img.decoding = "async";
        img.draggable = false;
        const imgDelay = reduced
          ? "0ms"
          : parts.length * stagger + Math.min(180, stagger) + "ms";
        askArtWrap.style.setProperty("--line-delay", imgDelay);
        askArtWrap.appendChild(img);
        wrap.appendChild(askArtWrap);
      }
    }
    els.proposalFocus.appendChild(wrap);
    els.proposalFocus.classList.toggle("is-ask", Boolean(isAsk));
    if (els.proposalFocus) {
      els.proposalFocus.style.setProperty("--enter-fade", enterMs + "ms");
      els.proposalFocus.style.setProperty(
        "--exit-fade",
        (t.exitFade != null ? t.exitFade : 900) + "ms"
      );
    }
    void wrap.offsetWidth;

    function showLines() {
      [...wrap.querySelectorAll(".proposal__line")].forEach((el) =>
        el.classList.add("is-shown")
      );
    }

    function showAskArt() {
      if (!askArtWrap) return;
      void askArtWrap.offsetWidth;
      askArtWrap.classList.add("is-shown");
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        showLines();
        if (!askArtWrap) return;
        const img = askArtWrap.querySelector("img");
        const ready = img && img.decode ? img.decode() : Promise.resolve();
        Promise.resolve(ready)
          .catch(function () {})
          .then(function () {
            requestAnimationFrame(showAskArt);
          });
      });
    });
    return wrap;
  }

  /* firstLineStart(0) + (n-1)*stagger + enterFade + readPad(screenDwell) */
  function screenEnterDwell(lineCount) {
    const t = revealTiming();
    const n = Math.max(1, lineCount || 1);
    if (prefersReducedMotion()) {
      return t.screenDwell != null ? t.screenDwell : 4200;
    }
    const stagger = t.lineStagger != null ? t.lineStagger : 220;
    const enterMs = t.enterFade != null ? t.enterFade : 1500;
    const readPad = t.screenDwell != null ? t.screenDwell : 4200;
    return (n - 1) * stagger + enterMs + readPad;
  }

  function finishProposalReveal(immediate) {
    if (els.proposalStage) {
      els.proposalStage.classList.add("is-ready");
      els.proposalStage.classList.add("is-revealing");
      els.proposalStage.classList.add("is-ask-final");
    }
    if (els.proposalCard) {
      els.proposalCard.classList.add("proposal--ask-final");
    }

    const screens = buildProposalScreens();
    const ask = screens.find((s) => s.type === "ask");
    const askLines =
      (ask && ask.lines && ask.lines.length && ask.lines) ||
      String((CONFIG.proposalAskLine || "").trim())
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
    if (askLines.length) {
      showFocusLine(askLines.join("\n"), true, askLines);
      const line = els.proposalFocus && els.proposalFocus.querySelector(".proposal__line");
      if (line) line.classList.add("is-shown");
    }

    if (els.proposalActions) els.proposalActions.classList.add("is-shown");
    if (!immediate && els.btnYes) {
      after(200, () => els.btnYes.classList.add("is-pulse"));
    } else if (els.btnYes) {
      els.btnYes.classList.add("is-pulse");
    }
  }

  function runStagedReveal() {
    clearRevealTimers();
    if (!els.proposalStage) {
      showView(els.proposal);
      return;
    }

    els.proposalStage.classList.remove(
      "is-revealing",
      "is-ready",
      "is-ask-final"
    );
    if (els.proposalCard) {
      els.proposalCard.classList.remove("proposal--ask-final");
    }
    if (els.proposalActions) els.proposalActions.classList.remove("is-shown");
    if (els.btnYes) els.btnYes.classList.remove("is-pulse");
    clearProposalFocus();

    /* 로딩 끝나자마자 사진 낙하가 보이도록: 화면 전환 직후 즉시 시작 */
    showView(els.proposal);
    spawnProposalShimmer();
    startPolaroidRain();

    if (prefersReducedMotion()) {
      requestAnimationFrame(() => finishProposalReveal(true));
      return;
    }

    const t = revealTiming();
    const screens = buildProposalScreens();
    const pauseMs = Math.max(280, Math.round(t.bodyLine * 0.55));

    after(t.card, () => {
      els.proposalStage.classList.add("is-revealing");
    });

    let cursor =
      Math.max(t.card + 80, t.title) +
      (t.firstHold != null ? t.firstHold : 3200);
    let i = 0;

    function advance() {
      if (i >= screens.length) {
        after(t.actions, () => {
          if (els.proposalActions) els.proposalActions.classList.add("is-shown");
          after(320, () => {
            if (els.btnYes) els.btnYes.classList.add("is-pulse");
            if (els.proposalStage) els.proposalStage.classList.add("is-ready");
          });
        });
        return;
      }

      const screen = screens[i];
      i += 1;

      if (screen.type === "pause") {
        fadeOutFocus(() => after(pauseMs, advance));
        return;
      }

      const isAsk = screen.type === "ask";

      if (isAsk) {
        /* short beat with empty stage before the ask line */
        fadeOutFocus(() => {
          after(t.askBefore, () => {
            if (els.proposalStage) els.proposalStage.classList.add("is-ask-final");
            if (els.proposalCard) {
              els.proposalCard.classList.add("proposal--ask-final");
            }
            showFocusLine(screen.text, true, screen.lines);
            const enterMs = t.enterFade != null ? t.enterFade : 1500;
            const askPad = t.askDwell != null ? t.askDwell : t.askHold;
            const stagger = t.lineStagger != null ? t.lineStagger : 220;
            const n = (screen.lines && screen.lines.length) || 1;
            const artExtra =
              (CONFIG.proposalAskImage || "").trim()
                ? n * stagger + 180
                : Math.max(0, (n - 1) * stagger);
            const dwell = prefersReducedMotion()
              ? askPad
              : artExtra + enterMs + askPad;
            after(dwell, advance);
          });
        });
        return;
      }

      const lineCount =
        Array.isArray(screen.lines) && screen.lines.length
          ? screen.lines.length
          : 1;
      showFocusLine(screen.text, false, screen.lines);
      after(screenEnterDwell(lineCount), () => {
        fadeOutFocus(() => {
          /* soft beat between screens */
          after(t.gapBetweenMs != null ? t.gapBetweenMs : 280, advance);
        });
      });
    }

    after(cursor, advance);
  }

  function showProposal() {
    clearRevealTimers();

    if (els.proposalTitle) {
      els.proposalTitle.textContent = CONFIG.proposalTitle || "";
    }

    if (els.proposalBody) {
      els.proposalBody.innerHTML = "";
    }
    clearProposalFocus();

    if (els.proposalActions) els.proposalActions.classList.remove("is-shown");
    if (els.btnYes) els.btnYes.classList.remove("is-pulse");
    if (els.proposalCard) {
      els.proposalCard.classList.remove("proposal--ask-final");
    }

    runStagedReveal();
  }

  function displayName() {
    return (
      (CONFIG.partnerName && CONFIG.partnerName.trim()) ||
      (answers.name && answers.name.trim()) ||
      (CONFIG.yourName && CONFIG.yourName.trim()) ||
      ""
    );
  }

  function onYes() {
    const titleEl = document.getElementById("celebration-title");
    if (titleEl) {
      titleEl.textContent =
        (CONFIG.celebrationTitle || "").trim() || "사랑해, 그린";
    }
    if (els.celebrationSub) {
      els.celebrationSub.textContent =
        (CONFIG.celebrationSub || "").trim() ||
        "앞으로의 모든 날을 평생 너와 함께할게";
    }

    if (els.celebrationMessage) {
      els.celebrationMessage.style.animation = "none";
      void els.celebrationMessage.offsetWidth;
      els.celebrationMessage.style.animation = "";
    }

    els.celebration.hidden = false;
    softenPolaroidRainForCelebration();
    spawnConfetti();
  }


  function spawnConfetti() {
    els.confetti.innerHTML = "";
    if (prefersReducedMotion()) return;

    const colors = [
      "#C4A574",
      "#E8DCC8",
      "#B8955F",
      "#D4B896",
      "#2C2A26",
      "#F3EFE8",
      "#C9A882",
    ];
    const count = 72;

    for (let i = 0; i < count; i++) {
      const piece = document.createElement("span");
      const roll = i % 7;
      if (roll === 0 || roll === 3) {
        piece.className = "confetti-piece confetti-piece--heart";
        piece.textContent = "♥";
        piece.style.fontSize = 11 + Math.random() * 8 + "px";
      } else if (roll === 1) {
        piece.className = "confetti-piece confetti-piece--dot";
        piece.style.background = colors[i % colors.length];
      } else {
        piece.className = "confetti-piece confetti-piece--rect";
        piece.style.background = colors[i % colors.length];
      }
      piece.style.left = Math.random() * 100 + "%";
      piece.style.animationDuration = 2.0 + Math.random() * 3.2 + "s";
      piece.style.animationDelay = Math.random() * 1.4 + "s";
      els.confetti.appendChild(piece);
    }
  }

  /* Events */
  els.btnStart.addEventListener("click", () => {
    step = 0;
    showView(els.survey);
    renderStep();
  });

  els.btnNext.addEventListener("click", goNext);
  els.btnBack.addEventListener("click", goBack);
  els.btnYes.addEventListener("click", onYes);

  ["input", "change", "blur"].forEach((evt) => {
    els.fieldName.addEventListener(evt, refreshPersonalValidity);
    els.fieldEmail.addEventListener(evt, refreshPersonalValidity);
    els.fieldPurposeText.addEventListener(evt, refreshPersonalValidity);
  });
  if (els.fieldPrivacy) {
    els.fieldPrivacy.addEventListener("change", refreshPersonalValidity);
  }
  els.fieldPhone.addEventListener("input", onPhoneInput);
  els.fieldPhone.addEventListener("blur", () => {
    els.fieldPhone.value = formatKoreanPhone(els.fieldPhone.value);
    refreshPersonalValidity();
  });

  els.fieldPhone.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!els.btnNext.disabled) goNext();
    }
  });
  els.fieldName.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      els.fieldPhone.focus();
    }
  });
  els.fieldEmail.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!els.btnNext.disabled) goNext();
    }
  });

  els.textInput.addEventListener("input", () => {
    const val = els.textInput.value;
    els.charCount.textContent = String(val.length);
    const q = currentQuestion();
    if (q && q.type === "choice" && answers[q.id] === OTHER_OPTION) {
      answers[otherKey(q.id)] = val;
      setNextEnabled(val.trim().length > 0);
      return;
    }
    if (q && q.type === "text") {
      setNextEnabled(val.trim().length > 0);
    }
  });

  els.textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!els.btnNext.disabled) goNext();
    }
  });

  /* Init */
  els.stepTotal.textContent = String(questionCount);
  const phoneNoteEl = document.getElementById("phone-gifticon-note");
  if (
    phoneNoteEl &&
    CONFIG.personalFields &&
    CONFIG.personalFields.phoneGifticonNote
  ) {
    phoneNoteEl.textContent = CONFIG.personalFields.phoneGifticonNote;
  }

  const rewardEl = document.getElementById("landing-reward");
  if (rewardEl && CONFIG.landingReward) {
    const badge = rewardEl.querySelector(".reward__badge");
    rewardEl.innerHTML = "";
    if (badge) rewardEl.appendChild(badge);
    else {
      const b = document.createElement("span");
      b.className = "reward__badge";
      b.textContent = "참여 혜택";
      rewardEl.appendChild(b);
    }
    const line = document.createElement("span");
    line.className = "reward__text";
    const rewardText = CONFIG.landingReward;
    if (rewardText.includes("스타벅스 아메리카노 Tall")) {
      line.innerHTML = rewardText.replace(
        "스타벅스 아메리카노 Tall",
        "<strong>스타벅스 아메리카노 Tall</strong>"
      );
    } else {
      line.textContent = rewardText;
    }
    rewardEl.appendChild(line);
    const noteText = (CONFIG.landingRewardNote || "").trim();
    if (noteText) {
      const note = document.createElement("span");
      note.className = "reward__note";
      note.id = "landing-reward-note";
      note.textContent = noteText;
      rewardEl.appendChild(note);
    }
  }
  showView(els.landing);
})();
