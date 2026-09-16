/* =============================================================================
   CONFIG — 여기를 수정해서 프러포즈 문구·설문을 쉽게 바꿔 주세요
   ============================================================================= */
const CONFIG = {
  /* 이름 — partnerName을 프로포즈·축하에 고정 사용 */
  yourName: "",
  partnerName: "유그린",

  /* 프러포즈 화면 (다정한 반말 톤) */
  proposalTitle: "그린아.",
  proposalBody:
    "사실 설문은 핑계였어.\n\n우리가 같이 맞춘 그 반지처럼,\n나는 너랑 끝까지 가고 싶어.\n\n나랑 결혼해줄래?",
  /* 강조할 마지막 한 줄(비우면 proposalBody의 마지막 비어 있지 않은 줄 자동 사용) */
  proposalAskLine: "나랑 결혼해줄래?",
  /* 공개 연출 타이밍(ms) — prefers-reduced-motion이면 즉시 최종 상태 */
  proposalRevealMs: {
    card: 100,
    wordmark: 300,
    ornament: 480,
    title: 750,
    bodyStart: 900,
    bodyLine: 400,
    askBefore: 650,
    askHold: 1200,
    actions: 300,
    screenDwell: 2100,
    askDwell: 2500,
    /* 문구가 사라질 때 페이드 아웃 시간 */
    exitFade: 560,
  },

  /* "네" 클릭 후 축하 문구 */
  celebrationTitle: "사랑해, 그린",
  celebrationSub: "앞으로의 모든 날을 너랑 함께할게",

  /* "한 번 더 생각해볼게요" 눌렀을 때 부드러운 넛지 (순환) */
  nudges: [
    "괜찮아, 천천히 해도 돼… 근데 내 마음은 벌써 네야.",
    "반지까지 맞췄는데, 우리 답도 맞춰보자. 응?",
    "그린아, 한 번만 더… 나랑 결혼해줄래?",
  ],

  /* 랜딩 참여 혜택 문구 */
  landingReward: "설문 완료 시 스타벅스 아메리카노 Tall을 증정해드립니다.",

  /* 인적사항 (설문 문항 앞 1단계) */
  personalFields: {
    title: "인적사항을 알려 주세요",
  },

  /* 설문 문항 (type: "choice" | "text") */
  questions: [
    {
      id: "role",
      type: "choice",
      question: "설문에 응답해 주시는 분은?",
      options: ["신랑", "신부", "함께 작성"],
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
      id: "review",
      type: "text",
      question: "아크레도에서 웨딩밴드를 맞춘 후기나 소감을 남겨 주세요",
      placeholder: "예: 상담부터 커스터마이징까지 만족스러웠어요",
    },
  ],

  /* 중간 로딩 문구·시간(ms) */
  interstitialText: "설문 내용을 저장하고\n전송하는 중이에요…",
  interstitialMs: 2500,
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
    btnMaybe: document.getElementById("btn-maybe"),
    question: document.getElementById("survey-question"),
    personal: document.getElementById("survey-personal"),
    options: document.getElementById("survey-options"),
    textWrap: document.getElementById("survey-text"),
    textInput: document.getElementById("text-input"),
    charCount: document.getElementById("char-count"),
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
    proposalNudge: document.getElementById("proposal-nudge"),
    celebrationSub: document.getElementById("celebration-sub"),
    celebrationMessage: document.getElementById("celebration-message"),
    fieldName: document.getElementById("field-name"),
    fieldPhone: document.getElementById("field-phone"),
    fieldEmail: document.getElementById("field-email"),
    fieldPurposeText: document.getElementById("field-purpose-text"),
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
  }

  function updateProgress() {
    const n = step + 1;
    els.stepCurrent.textContent = String(n);
    els.stepTotal.textContent = String(total);
    els.progressFill.style.width = `${(n / total) * 100}%`;
    if (els.progress) {
      els.progress.setAttribute("aria-valuenow", String(n));
      els.progress.setAttribute("aria-valuemax", String(total));
    }
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
    };
  }

  function isPersonalValid() {
    const d = getPersonalDraft();
    if (!d.name) return false;
    if (!d.phone || !PHONE_RE.test(d.phone)) return false;
    if (d.email && !EMAIL_RE.test(d.email)) return false;
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
    answers.purpose = d.purpose;
  }


  function renderPersonalStep() {
    updateProgress();
    const title =
      (CONFIG.personalFields && CONFIG.personalFields.title) ||
      "인적사항을 알려 주세요";
    els.question.textContent = title;

    els.personal.hidden = false;
    els.options.hidden = true;
    els.options.innerHTML = "";
    els.textWrap.hidden = true;

    els.btnBack.style.visibility = "visible";
    els.btnBack.textContent = "이전";
    els.btnNext.textContent = "다음";

    if (answers.name) els.fieldName.value = answers.name;
    if (answers.phone) els.fieldPhone.value = answers.phone;
    if (answers.email) els.fieldEmail.value = answers.email;
    if (answers.purpose) els.fieldPurposeText.value = answers.purpose;

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
      setNextEnabled(Boolean(saved));
    } else {
      els.textInput.value = answers[q.id] || "";
      els.textInput.placeholder = q.placeholder || "한 줄로 적어 주세요";
      els.charCount.textContent = String(els.textInput.value.length);
      setNextEnabled(els.textInput.value.trim().length > 0);
      requestAnimationFrame(() => els.textInput.focus());
    }
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
    [...els.options.children].forEach((btn) => {
      const on = btn.dataset.value === value;
      btn.classList.toggle("option--selected", on);
      btn.setAttribute("aria-checked", on ? "true" : "false");
    });
    setNextEnabled(true);
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

    if (currentQuestion().type === "text") {
      answers[currentQuestion().id] = els.textInput.value.trim();
    }
    step -= 1;
    renderStep();
  }

  function runInterstitial() {
    showView(els.interstitial);
    if (CONFIG.interstitialText) {
      els.interstitialText.innerHTML = CONFIG.interstitialText.replace(
        /\n/g,
        "<br />"
      );
    }
    window.setTimeout(() => {
      showProposal();
    }, CONFIG.interstitialMs || 2500);
  }

  let revealTimers = [];

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
      title: t.title != null ? t.title : 750,
      bodyStart: t.bodyStart != null ? t.bodyStart : 900,
      bodyLine: t.bodyLine != null ? t.bodyLine : 400,
      askBefore: t.askBefore != null ? t.askBefore : 650,
      askHold: t.askHold != null ? t.askHold : 1200,
      actions: t.actions != null ? t.actions : 300,
      screenDwell: t.screenDwell != null ? t.screenDwell : 2100,
      askDwell: t.askDwell != null ? t.askDwell : 2500,
      exitFade: t.exitFade != null ? t.exitFade : 560,
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

      /* skip paragraph that is only the ask line */
      if (ask && lines.length === 1 && lines[0] === ask) return;
      const filtered = ask ? lines.filter((l) => l !== ask) : lines;
      if (!filtered.length) return;

      screens.push({
        type: "line",
        text: filtered.join("\n"),
        lines: filtered,
      });
    });

    if (ask) {
      screens.push({ type: "ask", text: ask, lines: [ask] });
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

  function clearProposalFocus() {
    if (!els.proposalFocus) return;
    els.proposalFocus.innerHTML = "";
    els.proposalFocus.classList.remove("is-ask", "is-exiting");
  }

  /* 훅 끊기지 않게: is-shown 제거 → 페이드 후 비우기 */
  function fadeOutFocus(done) {
    const t = revealTiming();
    const fadeMs = t.exitFade != null ? t.exitFade : 560;
    if (!els.proposalFocus || !els.proposalFocus.firstChild) {
      clearProposalFocus();
      if (done) done();
      return;
    }
    els.proposalFocus.classList.add("is-exiting");
    const lines = els.proposalFocus.querySelectorAll(".proposal__line");
    lines.forEach((el) => el.classList.remove("is-shown"));
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
    parts.forEach((part) => {
      const p = document.createElement("p");
      p.className =
        "proposal__line" +
        (isAsk ? " proposal__line--ask" : " proposal__line--focus");
      p.textContent = part;
      wrap.appendChild(p);
    });
    els.proposalFocus.appendChild(wrap);
    els.proposalFocus.classList.toggle("is-ask", Boolean(isAsk));
    void wrap.offsetWidth;
    requestAnimationFrame(() => {
      [...wrap.querySelectorAll(".proposal__line")].forEach((el) =>
        el.classList.add("is-shown")
      );
    });
    return wrap;
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
    const finalText =
      (ask && ask.text) ||
      (CONFIG.proposalAskLine || "").trim() ||
      (CONFIG.proposalTitle || "").trim() ||
      "";
    if (finalText) {
      showFocusLine(finalText, true);
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

    spawnProposalShimmer();
    showView(els.proposal);

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

    let cursor = Math.max(t.card + 80, t.title);
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
            const dwell = t.askDwell != null ? t.askDwell : t.askHold;
            after(dwell, advance);
          });
        });
        return;
      }

      showFocusLine(screen.text, false, screen.lines);
      after(t.screenDwell, () => {
        fadeOutFocus(() => {
          /* brief blank between screens so the next line feels fresh */
          after(Math.min(140, Math.round(t.bodyLine * 0.3)), advance);
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

    els.proposalNudge.hidden = true;
    els.proposalNudge.textContent = "";

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
        "앞으로의 모든 날을 너랑 함께할게";
    }

    if (els.celebrationMessage) {
      els.celebrationMessage.style.animation = "none";
      void els.celebrationMessage.offsetWidth;
      els.celebrationMessage.style.animation = "";
    }

    els.celebration.hidden = false;
    spawnConfetti();
  }

  function onMaybe() {
    const list = CONFIG.nudges || [];
    if (!list.length) return;
    const msg = list[nudgeIndex % list.length];
    nudgeIndex += 1;
    els.proposalNudge.textContent = msg;
    els.proposalNudge.hidden = false;
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
  els.btnMaybe.addEventListener("click", onMaybe);

  ["input", "change", "blur"].forEach((evt) => {
    els.fieldName.addEventListener(evt, refreshPersonalValidity);
    els.fieldEmail.addEventListener(evt, refreshPersonalValidity);
    els.fieldPurposeText.addEventListener(evt, refreshPersonalValidity);
  });
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
    setNextEnabled(val.trim().length > 0);
  });

  els.textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!els.btnNext.disabled) goNext();
    }
  });

  /* Init */
  els.stepTotal.textContent = String(total);
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
    // keep Tall emphasized if present
    const t = CONFIG.landingReward;
    if (t.includes("스타벅스 아메리카노 Tall")) {
      line.innerHTML = t.replace(
        "스타벅스 아메리카노 Tall",
        "<strong>스타벅스 아메리카노 Tall</strong>"
      );
    } else {
      line.textContent = t;
    }
    rewardEl.appendChild(line);
  }
  showView(els.landing);
})();
