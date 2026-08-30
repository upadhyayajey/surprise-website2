/**
 * ====================================================================
 * SURPRISE WEBSITE CONFIGURATION (CUSTOMIZE YOUR DETAILS HERE)
 * ====================================================================
 * Update the fields below to personalize the entire website.
 */
const CONFIG = {
  // Names & Signatures
  partnerName: "Muskii",                     // [HER_NAME]
  myName: "Tumhara Dost",                           // [MY_NAME]
  whatsappNumber: "7651840941",             // Format: country code + number without '+' (e.g. 15551234567)
  email: "yesupadhyay1@gmail.com",          // Your email for the message box
  audioFile: "assets/music/music.mp3",      // Path to your romantic background song

  // Quiz Questions & Playful Responses
  questions: [
    {
      text: "Do you love me? 🥺❤️",
      mascot: "🐼",
      isEvasive: true,                      // Triggers the playful shrinking/moving 'No' button
      celebrationMsg: "I KNEW IT! You're stuck with me forever! 🥹❤️"
    },
    {
      text: "Do you miss me sometimes? 🫶🏻",
      mascot: "🐻",
      isEvasive: false,
      celebrationMsg: "I miss you even more every single second ✨"
    },
    {
      text: "Am I one of your favorite human? 👀",
      mascot: "🐰",
      isEvasive: true,
      celebrationMsg: "And you are my absolute #1! 🌸"
    },
    {
      text: "Kya tum hmesha mera dost rhogi? 🌷",
      mascot: "🐼",
      isEvasive: false,
      celebrationMsg: "It's a promise! ke mai bhi kabhi tumhara haath nhi chodunga 🍓"
    },
    {
      text: "Do I make you smile like a choti bacchi? 🥹",
      mascot: "🐻",
      isEvasive: true,
      celebrationMsg: "Seeing you happy is my favorite hobby 💕"
    },
    {
      text: "Would you choose me all over again? ❤️",
      mascot: "🐰",
      isEvasive: true,
      celebrationMsg: "In every lifetime, every universe. 🌙"
    },
    {
      text: "Do you think we're a little too cute together? 🐼",
      mascot: "🐼",
      isEvasive: false,
      celebrationMsg: "Honestly, the world can't handle our cuteness 😌"
    },
    {
      text: "Will you stay my favorite person forever? 💕",
      mascot: "🐻",
      isEvasive: true,
      celebrationMsg: "Forever and always. Deal sealed! 🫶🏻"
    }
  ],

  // Playful 'No' button evasive tease lines
  noButtonPhrases: [
    "Are you sure? 🥺",
    "Think again... 👉👈",
    "Nice try 😭",
    "That button seems a little shy 😂",
    "Hmm... not that one 😌",
    "Try the other one ❤️",
    "Nope! Incorrect answer 🙅‍♂️",
    "You know you love me! 💕"
  ],

  // Memory Book Pages (Add/Edit any chapters)
  memories: [
    {
      chapter: "Chapter 01",
      date: "The First Talk 🌷",
      title: "How It All Started",
      desc: "   Tumhe yaad hai jb tum pehli baar school me aai thi ,to maine na bhagwan ji se manga tha ki tumhe kisi bhi tarah meri hi class me la de , and unhone kha tathastu and tum meri hi class me aa gyi , and maine buddhuo ki tarah tumhe facebook pe kaise msg krke request accept ko kha ..hehehe...",
      img: "assets/photos/memory1.jpg"
    },
    {
      chapter: "Chapter 02",
      date: "Feeling phase🌙",
      title: "Always wanting to be around my favourite human",
      desc: "To baat n un dino ki hai jb mai tumhe chupke chupke dekta tha , class ke third row me baith ke pehli row me baithi ek ladki ko niharta hua mai , aur tumse baat krne ki bechaini , to ek din ghr pe baithe us ladke ke andr ek kalakar jaaga aur useee tumhari tasveer bnane ke sujhii aur dekhte hi dekhte bna bhi daali , and sone pe suhaga ke liye tumhe tasveer bhej bhi di, jaanta tha ke perfect nhi hai na tasveer na  uska chitrakar , pr kya kre dil to.baccha hai jii.......",
      img: "assets/photos/memory2.jpg"
    },
    {
      chapter: "Chapter 03",
      date: "Our First date 🐼",
      title: "Aur finally ,pta na kyu kaise ,lekin hm mil hi gye ",
      desc: "Kuch saal beete , pr kehete hai n ke sabar ka fal milta hi hai to mila bhi , finally hm mile ,kuch kabhi na todne wale waydo ke sath , aaya wo din jb shayd mai tumhe chu skta tha , dil me bechaini to thi pr wo din aaya , hm mile , aur bhtt himmat krke maine us ladki kaa haath thama , aur uski saase ruk gyi shayd ye sb bht achanak se hua is liye , aur maine uske hotho se chui ice cream bhi khai , kuch to swaad alag tha us ice cream me , aur aise hmara din beeta.....",
      img: "assets/photos/memory3.jpg"
    },
    {
      chapter: "Chapter 04",
      date: "The Long Distance Days 💌",
      title: "Counting Down the Days",
      desc: "Fir kuch din beete shayd mhine bhi,aur shayd kismat mujhpe aur meherbaan , mere aur meri muskii ke kadam ek dusre ki oor bdhe , aur hmara plan bna varansi ghumne ka , us waqt shayd mere andr ek drr bhi tha , ek ladka , ladki ek sheher me jha wo dono ko janne wale the bht hai pr wo shivaye ek dusre ke kisi se milna nhi chahte ....",
      img: "assets/photos/memory4.jpg"
    },
    {
      chapter: "Chapter 05",
      date: "The Future ✨",
      title: "To Many More Adventures",
      desc: "Fir uske baad anginat din , na jane kitni raatey , wo waqt jo hmne saath bitaye , wo pal jo hmne gujare , aur har us waqt me wo ladka us ladki se khudko kabhi door na karne ke minnate krta , pr shayd us patthar dil ladki ko uska bhagwan hi smjhaye aur aakr btaye ke ye ladka usse kitna prem krta ...... ",
      img: "assets/photos/memory5.jpg"
    }
  ],

  // Reasons Why I Love You Cards
  reasons: [
    { icon: "😊", title: "Your Smile", desc: "It instantly fixes my worst days without you even trying." },
    { icon: "💬", title: "Your Random Texts", desc: "Waking up to your thoughts is my favorite part of the day." },
    { icon: "🫶🏻", title: "The Way You Care", desc: "Your kindness and gentle heart inspire me constantly." },
    { icon: "🥹", title: "Your Cute Habits", desc: "The little faces you make and how you get excited over tiny things." },
    { icon: "✨", title: "Making Days Special", desc: "Even a boring day feels magical when I get to talk to you." },
    { icon: "🐰", title: "Your Pure Heart", desc: "You are authentically, unapologetically, beautifully you." }
  ],

  // Poetry Cards
  poems: [
    {
      title: "Tum ,mai aur ek khwab",
      lines: " Tumhare haatho me wo mera haath hona ,\n Tumhare baaho me mera har raat Sona ,\n Tumhare alfazo me bs meriii hi baat hona ,\n Tumhare kitabo me, bas mera itihas hona ,\n \nTumhare raate jo mere paas gujri ho ,\nTumhare aankhe jo mere sath budhi ho ,\n Tumhare baatey jo mere bin adhuri ho ,\nTum wo Banna jo bs meri puri ho ,\n \nTum wo jo bas mera sath chaho ,\nAgr need na aaye kabhi tum bs mere paas aao ,\n Tum wo jo mujhe mujhse milao ,\nTum Maan jao aur hmesha ke liye meri kehlao",
      date: "Written for you 🌙",
      decor: "🌷"
    },
    {
      title: "Yrr tum nhi hogi to mr jaunga mai",
      lines: "Ye aankhe dhudhengi tumhe ,\nYe kaan tumhe sunna chahenge ,\n Mai sochunga tumhe apne khaabo me ,\nYe haath aakhiri saat minute tumhare paas ginna chahenge ,\n \nMai pagal ho jau ga, khudme bhi kisi ko dikhunga nhi ,\nMai jaun ban jau shayd , pr khani apni khi khunga nhi ,\nAur ye aakhe ,julfe muskaan shohrat ,sb dekhenge tumhari ,\nBaad uske ,aana meri kabra pr,tb mai wha bhi milunga nhi ,\n \nJo milu kahi gira pada, to mujhe mujhse mila dena ,\nGhar parivar , dohlat kya hoti hai , batana mujhe , mujhe ek aaina dila Dena ,\nDekhunga mai mera fata hua jism jab ,\nSuno mujhe thodi thand lgegi, tb ek ahsaan Krna mujhe thode kapde dila Dena ",
      date: "Ya shayd aisa kuch aisa ban jaunga ke mujhme aur mre hue me koi frk na ho✨",
      decor: "✨"
    },
    {
      title: " Apne paas bithaunga tumko",
      lines: "Kisi shaam paas apne bithaunga tumko ,\n Kisi raat mere sapne dikhaunga tumko ,\nKabhi btaunga ye saare raaj hmare ,\nMilna jb tum ,khudse milaunga tumko,\n \nMailaunga un phulo se jisme mehek hai tumhari ,\nBithaunga un jhulo pe jisme chehek hai tumhari ,\nDikhaunga ek tasveer jisme chipa rakha hai tumko ,\nTb Bhigaunga un bundo se jisme jhalak hai tumhari ,\n \nSunaunga khaniya meri jisme Rani bnogi tum ,\nDikhaunga ladaiya meriJiski sarthi banogi tum,\nDekhna mere khwabon ko tb smjhna mujhko ,\nMilaunga mere budhape se jiski jwani bnogi tum ......",
      date: "Always & Forever 💕",
      decor: "💌"
    }
  ],

  // Video Clips
  videos: [
    {
      title: "A Little Laugh 🌸",
      desc: "A moment I replay whenever I need a boost of serotonin.",
      src: "assets/videos/moment1.mp4",
      thumb: "assets/videos/moment1-thumb.jpg"
    },
    {
      title: "Pure Happiness ✨",
      desc: "Just a reminder of how cute your smile is.",
      src: "assets/videos/moment2.mp4",
      thumb: "assets/videos/moment2-thumb.jpg"
    }
  ],

  // Secret Easter Egg Message
  secretEasterEggMessage: "You clicked the tiny panda 5 times! That unlocks 1,000 bonus hugs, unlimited forehead kisses, and one VIP dinner date of your choice! 🐼💖"
};

/**
 * ====================================================================
 * APPLICATION CONTROLLER & LOGIC
 * ====================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  initAmbientCanvas();
  initAudioPlayer();
  initWelcomeScreen();
  initQuestionsModule();
  initMemoryBook();
  initReasonsGrid();
  initPoetryModule();
  initVideosModule();
  initEnvelopeModule();
  initContactForm();
  initEasterEgg();
  initReplayButton();
  applyPersonalization();
});

/**
 * Replace placeholders with values from CONFIG
 */
function applyPersonalization() {
  const introHeading = document.getElementById("intro-heading");
  const authorSig = document.getElementById("author-signature");
  const letterSalutation = document.getElementById("letter-salutation");
  const letterSigName = document.getElementById("letter-sig-name");
  const secretMsg = document.getElementById("secret-custom-msg");

  if (introHeading) introHeading.textContent = `To ${CONFIG.partnerName},......`;
  if (authorSig) authorSig.textContent = `${CONFIG.myName} 🫶🏻`;
  if (letterSalutation) letterSalutation.textContent = `My Dearest ${CONFIG.partnerName},`;
  if (letterSigName) letterSigName.textContent = `${CONFIG.myName} 🫶🏻`;
  if (secretMsg) secretMsg.textContent = CONFIG.secretEasterEggMessage;
}

/**
 * ====================================================================
 * 1. AMBIENT BACKGROUND CANVAS (Floating Hearts, Stars & Petals)
 * ====================================================================
 */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const symbols = ["❤️", "🌸", "✨", "🌷", "💖", "☁️"];
  const particles = Array.from({ length: 22 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    size: Math.random() * 14 + 12,
    speedY: Math.random() * 0.4 + 0.2,
    speedX: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.45 + 0.25,
    oscillation: Math.random() * Math.PI * 2
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.y -= p.speedY;
      p.oscillation += 0.02;
      p.x += Math.sin(p.oscillation) * 0.35 + p.speedX;

      if (p.y < -30) {
        p.y = height + 30;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.symbol, p.x, p.y);
      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * ====================================================================
 * 2. BACKGROUND MUSIC AUDIO CONTROLLER
 * ====================================================================
 */
function initAudioPlayer() {
  const audio = document.getElementById("bg-audio");
  const toggleBtn = document.getElementById("audio-toggle-btn");
  if (!audio || !toggleBtn) return;

  let isPlaying = false;

  toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      toggleBtn.classList.remove("playing");
      toggleBtn.setAttribute("aria-label", "Play background music");
      isPlaying = false;
    } else {
      audio.play().then(() => {
        toggleBtn.classList.add("playing");
        toggleBtn.setAttribute("aria-label", "Pause background music");
        isPlaying = true;
      }).catch(err => {
        console.warn("Audio autoplay blocked by browser policy:", err);
      });
    }
  });
}

/**
 * ====================================================================
 * 3. WELCOME SCREEN TRANSITION
 * ====================================================================
 */
function initWelcomeScreen() {
  const openBtn = document.getElementById("open-surprise-btn");
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainContent = document.getElementById("main-content");
  const spinner = document.getElementById("loading-spinner");
  const bgAudio = document.getElementById("bg-audio");
  const audioBtn = document.getElementById("audio-toggle-btn");

  if (!openBtn || !welcomeScreen || !mainContent) return;

  openBtn.addEventListener("click", () => {
    openBtn.classList.add("hidden");
    if (spinner) spinner.classList.remove("hidden");

    // Optional subtle auto-start audio on affirmative user gesture
    if (bgAudio && bgAudio.paused) {
      bgAudio.play().then(() => {
        if (audioBtn) audioBtn.classList.add("playing");
      }).catch(() => {/* Ignore autoplay restrictions */});
    }

    setTimeout(() => {
      welcomeScreen.classList.add("fade-out");
      mainContent.classList.remove("is-hidden");
      mainContent.setAttribute("aria-hidden", "false");

      setTimeout(() => {
        welcomeScreen.style.display = "none";
      }, 800);
    }, 600);
  });
}

/**
 * ====================================================================
 * 4. INTERACTIVE QUESTIONS MODULE (With playful evasive No button)
 * ====================================================================
 */
function initQuestionsModule() {
  let currentIndex = 0;
  let evasiveAttempts = 0;

  const qText = document.getElementById("question-text");
  const qHint = document.getElementById("question-hint");
  const qCounter = document.getElementById("question-counter");
  const qProgressFill = document.getElementById("question-progress-fill");
  const qMascot = document.getElementById("question-mascot");
  const btnYes = document.getElementById("btn-yes");
  const btnNo = document.getElementById("btn-no");
  const successBanner = document.getElementById("quiz-success-banner");
  const successTitle = document.getElementById("quiz-success-title");
  const successMsg = document.getElementById("quiz-success-msg");

  if (!qText || !btnYes || !btnNo) return;

  function renderQuestion() {
    const current = CONFIG.questions[currentIndex];
    qText.textContent = current.text;
    qMascot.textContent = current.mascot;
    qCounter.textContent = `Question ${currentIndex + 1} of ${CONFIG.questions.length}`;
    qProgressFill.style.width = `${((currentIndex + 1) / CONFIG.questions.length) * 100}%`;
    qHint.textContent = "";
    
    // Reset buttons
    evasiveAttempts = 0;
    btnYes.style.transform = "scale(1)";
    btnNo.style.transform = "scale(1) translate(0, 0)";
    btnNo.style.opacity = "1";
    btnNo.textContent = "No 😤";
  }

  // Playful 'No' evasion mechanism
  function dodgeNoButton() {
    const current = CONFIG.questions[currentIndex];
    if (!current.isEvasive) return;

    evasiveAttempts++;
    const phrase = CONFIG.noButtonPhrases[evasiveAttempts % CONFIG.noButtonPhrases.length];
    qHint.textContent = phrase;

    // Shift coordinates playfully within a bounded touchable box
    const maxOffset = Math.min(80, evasiveAttempts * 18);
    const randomX = (Math.random() - 0.5) * maxOffset * 2;
    const randomY = (Math.random() - 0.5) * maxOffset * 1.5;

    const noScale = Math.max(0.45, 1 - evasiveAttempts * 0.1);
    const yesScale = Math.min(1.45, 1 + evasiveAttempts * 0.08);

    btnNo.style.transform = `translate(${randomX}px, ${randomY}px) scale(${noScale})`;
    btnYes.style.transform = `scale(${yesScale})`;

    if (evasiveAttempts >= 5) {
      btnNo.textContent = "Okay fine 🥺";
    }
  }

  // Handle No clicks/touches
  btnNo.addEventListener("click", (e) => {
    e.preventDefault();
    dodgeNoButton();
  });
  btnNo.addEventListener("mouseenter", () => {
    if (CONFIG.questions[currentIndex].isEvasive && evasiveAttempts > 0) {
      dodgeNoButton();
    }
  });

  // Handle Yes clicks
  btnYes.addEventListener("click", () => {
    const current = CONFIG.questions[currentIndex];
    successTitle.textContent = "YAY! 🥹❤️";
    successMsg.textContent = current.celebrationMsg;
    successBanner.classList.remove("hidden");

    btnYes.disabled = true;
    btnNo.disabled = true;

    setTimeout(() => {
      successBanner.classList.add("hidden");
      btnYes.disabled = false;
      btnNo.disabled = false;

      currentIndex++;
      if (currentIndex >= CONFIG.questions.length) {
        currentIndex = 0; // Loop or stay at finish
      }
      renderQuestion();
    }, 2400);
  });

  renderQuestion();
}

/**
 * ====================================================================
 * 5. MEMORY BOOK CAROUSEL / SCRAPBOOK
 * ====================================================================
 */
function initMemoryBook() {
  let activePage = 0;
  const pageImg = document.getElementById("page-img");
  const pageChapter = document.getElementById("page-chapter");
  const pageDate = document.getElementById("page-date");
  const pageTitle = document.getElementById("page-title");
  const pageDesc = document.getElementById("page-desc");
  const pageIndicator = document.getElementById("page-indicator");
  const dotsContainer = document.getElementById("page-dots");
  const btnPrev = document.getElementById("btn-prev-page");
  const btnNext = document.getElementById("btn-next-page");
  const bookPage = document.getElementById("book-page");

  if (!pageImg || !dotsContainer) return;

  // Build dots
  dotsContainer.innerHTML = "";
  CONFIG.memories.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.className = `page-dot ${idx === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `Go to chapter ${idx + 1}`);
    dot.addEventListener("click", () => loadPage(idx));
    dotsContainer.appendChild(dot);
  });

  function loadPage(index) {
    activePage = index;
    const mem = CONFIG.memories[activePage];

    // Trigger re-render animation
    bookPage.style.animation = "none";
    void bookPage.offsetHeight; // trigger reflow
    bookPage.style.animation = "pageTurn 0.4s ease";

    pageImg.src = mem.img;
    pageChapter.textContent = mem.chapter;
    pageDate.textContent = mem.date;
    pageTitle.textContent = mem.title;
    pageDesc.textContent = mem.desc;
    pageIndicator.textContent = `${activePage + 1} / ${CONFIG.memories.length}`;

    // Update active dot
    const dots = dotsContainer.querySelectorAll(".page-dot");
    dots.forEach((d, i) => d.classList.toggle("active", i === activePage));
  }

  btnPrev.addEventListener("click", () => {
    const newIdx = activePage === 0 ? CONFIG.memories.length - 1 : activePage - 1;
    loadPage(newIdx);
  });

  btnNext.addEventListener("click", () => {
    const newIdx = activePage === CONFIG.memories.length - 1 ? 0 : activePage + 1;
    loadPage(newIdx);
  });

  // Touch Swipe support for mobile
  let startX = 0;
  bookPage.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  bookPage.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) btnNext.click();
      else btnPrev.click();
    }
  }, { passive: true });

  loadPage(0);
}

/**
 * ====================================================================
 * 6. "THINGS I LOVE ABOUT YOU" GRID
 * ====================================================================
 */
function initReasonsGrid() {
  const grid = document.getElementById("reasons-grid");
  if (!grid) return;

  grid.innerHTML = "";
  CONFIG.reasons.forEach(reason => {
    const card = document.createElement("div");
    card.className = "reason-card glass-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="reason-icon" aria-hidden="true">${reason.icon}</div>
      <h3 class="reason-title">${reason.title}</h3>
      <p class="reason-desc">${reason.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/**
 * ====================================================================
 * 7. POETRY SECTION CAROUSEL
 * ====================================================================
 */
function initPoetryModule() {
  let activePoem = 0;
  const container = document.getElementById("poetry-container");
  const btnPrev = document.getElementById("poem-prev");
  const btnNext = document.getElementById("poem-next");

  if (!container || !btnPrev || !btnNext) return;

  function renderPoem(idx) {
    activePoem = idx;
    const p = CONFIG.poems[activePoem];
    container.innerHTML = `
      <article class="poem-card glass-card">
        <div class="poem-decor" aria-hidden="true">${p.decor}</div>
        <h3 class="poem-title handwritten">${p.title}</h3>
        <p class="poem-lines">${p.lines}</p>
        <span class="poem-date">${p.date}</span>
      </article>
    `;
  }

  btnPrev.addEventListener("click", () => {
    const newIdx = activePoem === 0 ? CONFIG.poems.length - 1 : activePoem - 1;
    renderPoem(newIdx);
  });

  btnNext.addEventListener("click", () => {
    const newIdx = activePoem === CONFIG.poems.length - 1 ? 0 : activePoem + 1;
    renderPoem(newIdx);
  });

  renderPoem(0);
}

/**
 * ====================================================================
 * 8. VIDEO MOMENTS LIGHTBOX / MODAL
 * ====================================================================
 */
function initVideosModule() {
  const grid = document.getElementById("videos-grid");
  const modal = document.getElementById("video-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const player = document.getElementById("modal-player");
  const modalTitle = document.getElementById("modal-video-title");

  if (!grid || !modal || !player) return;

  grid.innerHTML = "";
  CONFIG.videos.forEach(v => {
    const card = document.createElement("div");
    card.className = "video-card glass-card";
    card.setAttribute("role", "button");
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="video-thumb-container">
        <img src="${v.thumb}" alt="${v.title}" class="video-thumb" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80'" />
        <div class="play-badge" aria-hidden="true">▶</div>
      </div>
      <div class="video-info">
        <h3 class="video-title">${v.title}</h3>
        <p class="video-desc">${v.desc}</p>
      </div>
    `;

    const openVideo = () => {
      modalTitle.textContent = v.title;
      player.src = v.src;
      modal.classList.remove("hidden");
      player.play().catch(() => {});
    };

    card.addEventListener("click", openVideo);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openVideo();
      }
    });

    grid.appendChild(card);
  });

  const closeModal = () => {
    player.pause();
    player.src = "";
    modal.classList.add("hidden");
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
}

/**
 * ====================================================================
 * 9. SEALED ENVELOPE / LOVE LETTER
 * ====================================================================
 */
function initEnvelopeModule() {
  const envelope = document.getElementById("envelope");
  const letterPaper = document.getElementById("letter-paper");

  if (!envelope || !letterPaper) return;

  const toggleLetter = () => {
    envelope.classList.toggle("open");
    if (envelope.classList.contains("open")) {
      letterPaper.classList.remove("hidden");
      setTimeout(() => {
        letterPaper.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 300);
    } else {
      letterPaper.classList.add("hidden");
    }
  };

  envelope.addEventListener("click", toggleLetter);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleLetter();
    }
  });
}

/**
 * ====================================================================
 * 10. MESSAGE / COMPLAINT BOX (WhatsApp & Mailto Integration)
 * ====================================================================
 */
function initContactForm() {
  const btnWhatsapp = document.getElementById("btn-send-whatsapp");
  const btnEmail = document.getElementById("btn-send-email");
  const nameInput = document.getElementById("user-name");
  const moodSelect = document.getElementById("message-mood");
  const messageInput = document.getElementById("user-message");

  if (!btnWhatsapp || !btnEmail) return;

  function buildPayload() {
    const name = (nameInput.value || "Your Favorite Person").trim();
    const mood = moodSelect.value;
    const msg = (messageInput.value || "I just wanted to say hi!").trim();
    return { name, mood, msg };
  }

  btnWhatsapp.addEventListener("click", () => {
    const { name, mood, msg } = buildPayload();
    const fullText = `*Hey ${CONFIG.myName}!* 💌%0A%0A*From:* ${encodeURIComponent(name)}%0A*Mood:* ${encodeURIComponent(mood)}%0A*Message:* ${encodeURIComponent(msg)}`;
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${fullText}`;
    window.open(url, "_blank");
  });

  btnEmail.addEventListener("click", () => {
    const { name, mood, msg } = buildPayload();
    const subject = encodeURIComponent(`Message from ${name} [${mood}]`);
    const body = encodeURIComponent(`Hey ${CONFIG.myName},\n\nMood: ${mood}\n\nMessage:\n${msg}\n\n- ${name}`);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  });
}


/**
 * ====================================================================
 * 11. SECRET EASTER EGG (Click 5 times for bonus message)
 * ====================================================================
 */
function initEasterEgg() {
  let clickCount = 0;
  const pandaBtn = document.getElementById("secret-panda-btn");
  const modal = document.getElementById("secret-modal");
  const closeBtn = document.getElementById("secret-close-btn");

  if (!pandaBtn || !modal || !closeBtn) return;

  pandaBtn.addEventListener("click", () => {
    clickCount++;
    if (clickCount >= 5) {
      modal.classList.remove("hidden");
      clickCount = 0;
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}

/**
 * ====================================================================
 * 12. REPLAY BUTTON
 * ====================================================================
 */
function initReplayButton() {
  const replayBtn = document.getElementById("replay-btn");
  const welcomeScreen = document.getElementById("welcome-screen");
  const openBtn = document.getElementById("open-surprise-btn");
  const spinner = document.getElementById("loading-spinner");
  const mainContent = document.getElementById("main-content");

  if (!replayBtn || !welcomeScreen || !mainContent) return;

  replayBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      welcomeScreen.style.display = "flex";
      welcomeScreen.classList.remove("fade-out");
      mainContent.classList.add("is-hidden");
      if (openBtn) openBtn.classList.remove("hidden");
      if (spinner) spinner.classList.add("hidden");
    }, 400);
  });
}
