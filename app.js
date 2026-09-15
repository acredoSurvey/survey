/* =============================================================================
   CONFIG — 여기를 수정해서 프러포즈 문구·설문을 쉽게 바꿔 주세요
   ============================================================================= */
const CONFIG = {
  /* 선택: 이름 (축하 화면 등에 활용, 비워두면 미사용)
     인적사항에서 입력한 이름이 있으면 그쪽을 우선합니다. */
  yourName: "",
  partnerName: "",

  /* 프러포즈 화면 */
  proposalTitle: "사실… 이건 설문이 아니었어요.",
  proposalBody:
    "당신과 맞춘 그 웨딩밴드처럼,\n우리만의 이야기를 평생 함께하고 싶어요.\n\n나와 결혼해 줄래요?",

  /* "네" 클릭 후 축하 문구 */
  celebrationSub: "당신과 함께하는 평생을 약속할게요.",

  /* "한 번 더 생각해볼게요" 눌렀을 때 부드러운 넛지 (순환) */
  nudges: [
    "괜찮아요. 천천히요… 그런데 제 마음은 이미 ‘네’예요. 💕",
    "웨딩밴드도 맞춤이었잖아요. 우리 답도 맞춰볼까요?",
    "다시 한번만요 — 당신과라면, 저는 언제든 ‘네’예요.",
  ],

  /* 인적사항 (설문 문항 앞 1단계) */
  personalFields: {
    title: "인적사항을 알려 주세요",
  },

  /* 설문 문항 (type: "choice" | "text") */
  questions: [
    {
      id: "priority",
      type: "choice",
      question: "웨딩밴드를 고를 때 가장 중요했던 것은?",
      options: ["디자인", "착용감", "의미/스토리", "두 사람의 취향 맞춤"],
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
      id: "wish",
      type: "text",
      question: "앞으로의 우리에게 바라는 한마디는?",
      placeholder: "예: 언제나 지금처럼",
    },
  ],

  /* 중간 로딩 문구·시간(ms) */
  interstitialText: "답변을 바탕으로\n두 분만의 이야기를 정리하고 있어요…",
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
    proposalTitle: document.getElementById("proposal-title"),
    proposalBody: document.getElementById("proposal-body"),
    proposalNudge: document.getElementById("proposal-nudge"),
    celebrationSub: document.getElementById("celebration-sub"),
    fieldName: document.getElementById("field-name"),
    fieldPhone: document.getElementById("field-phone"),
    fieldEmail: document.getElementById("field-email"),
    fieldPurposeText: document.getElementById("field-purpose-text"),
  };

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_RE = /^[0-9+\-\s()]{8,20}$/;

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

  function showProposal() {
    els.proposalTitle.textContent = CONFIG.proposalTitle;
    els.proposalBody.textContent = CONFIG.proposalBody;
    els.proposalNudge.hidden = true;
    els.proposalNudge.textContent = "";
    showView(els.proposal);
  }

  function displayName() {
    return (
      (answers.name && answers.name.trim()) ||
      (CONFIG.partnerName && CONFIG.partnerName.trim()) ||
      (CONFIG.yourName && CONFIG.yourName.trim()) ||
      ""
    );
  }

  function onYes() {
    const name = displayName();
    let sub = CONFIG.celebrationSub || "당신과 함께하는 평생을 약속할게요.";
    if (name) {
      sub = name + "님, " + sub;
    }
    els.celebrationSub.textContent = sub;
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
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    els.confetti.innerHTML = "";
    if (reduce) return;

    const colors = ["#C4A574", "#E8DCC8", "#B8955F", "#D4B896", "#2C2A26", "#F3EFE8"];
    const count = 48;

    for (let i = 0; i < count; i++) {
      const piece = document.createElement("span");
      const isHeart = i % 5 === 0;
      piece.className =
        "confetti-piece" +
        (isHeart ? " confetti-piece--heart" : " confetti-piece--rect");
      if (isHeart) {
        piece.textContent = "♥";
      } else {
        piece.style.background = colors[i % colors.length];
      }
      piece.style.left = Math.random() * 100 + "%";
      piece.style.animationDuration = 2.2 + Math.random() * 2.8 + "s";
      piece.style.animationDelay = Math.random() * 1.2 + "s";
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
    els.fieldPhone.addEventListener(evt, refreshPersonalValidity);
    els.fieldEmail.addEventListener(evt, refreshPersonalValidity);
    els.fieldPurposeText.addEventListener(evt, refreshPersonalValidity);
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
  showView(els.landing);
})();
