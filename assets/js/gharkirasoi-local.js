(function () {
  const PHONE = "9720451562";
  const ADDRESS = "Himmatpur Baijnath, Anand Pur, Haldwani, Nainital";
  const OWNER = "Bhashkar Belwal";
  const EMAIL = "bhashkarbelwas8787@gmail.com";
  const WA = "https://wa.me/919720451562?text=Namaste%20GharKiRasoi%2C%20mujhe%20Haldwani%20mein%20ghar%20jaisa%20khana%20chahiye.";
  const TEL = "tel:+919720451562";
  const LOGO = "assets/img/logos/gharkirasoi-logo.svg";

  const icon = {
    mountain: '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 2-4 7 14H3L8 3z"></path></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
    utensils: '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>',
    map: '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    leaf: '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 13-9 0 9-4 13-9 13"></path><path d="M4 21c0-5 4-9 9-9"></path></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path></svg>'
  };

  function injectStyles() {
    if (document.getElementById("gkr-local-styles")) return;
    const style = document.createElement("style");
    style.id = "gkr-local-styles";
    style.textContent = `
      .gkr-feature-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        max-width: 1088px;
        margin: 0 auto;
      }
      .gkr-header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }
      .gkr-header-cta {
        height: 38px;
        min-width: 38px;
        padding: 0 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        border-radius: 12px;
        font-size: 13px;
        line-height: 1;
        font-weight: 800;
        transition: transform .15s ease, opacity .15s ease;
      }
      .gkr-header-cta:hover {
        opacity: .9;
      }
      .gkr-header-cta:active {
        transform: scale(.96);
      }
      .gkr-header-cta svg {
        width: 17px;
        height: 17px;
        flex: 0 0 17px;
      }
      .gkr-header-cta.is-whatsapp {
        color: #fff;
        background: #24d366;
        border: 1px solid rgba(255,255,255,.18);
      }
      .gkr-header-cta.is-call {
        color: var(--primary);
        background: var(--secondary);
        border: 1px solid rgba(255,255,255,.2);
      }
      @media (max-width: 420px) {
        .gkr-header-cta {
          width: 38px;
          padding: 0;
        }
        .gkr-header-cta span {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      }
      .gkr-feature-card {
        display: flex;
        align-items: center;
        gap: 18px;
        min-height: 112px;
        padding: 22px 24px;
        border-radius: 18px;
        background: var(--surface);
        border: 1px solid var(--surface-border);
        transition: transform .2s ease, border-color .2s ease, background .2s ease;
      }
      .gkr-feature-card:hover {
        transform: translateY(-2px);
        border-color: var(--accent-border);
        background: var(--surface-hover);
      }
      .gkr-feature-icon {
        width: 58px;
        height: 58px;
        flex: 0 0 58px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        color: var(--accent);
        background: var(--accent-tint-sm);
        border: 1px solid var(--accent-border);
        box-shadow: 0 0 0 1px rgba(255, 226, 40, .1), 0 12px 28px rgba(0,0,0,.18);
      }
      .gkr-feature-icon svg {
        width: 29px;
        height: 29px;
      }
      .gkr-feature-title {
        font-size: 18px;
        line-height: 1.15;
        font-weight: 800;
        color: var(--content);
        margin: 0 0 6px;
      }
      .gkr-feature-body {
        font-size: 15px;
        line-height: 1.55;
        color: var(--muted);
        margin: 0;
      }
      @media (max-width: 767px) {
        .gkr-feature-grid {
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .gkr-feature-card {
          min-height: 96px;
          padding: 16px;
          gap: 14px;
          border-radius: 16px;
        }
        .gkr-feature-icon {
          width: 50px;
          height: 50px;
          flex-basis: 50px;
          border-radius: 15px;
        }
        .gkr-feature-icon svg {
          width: 25px;
          height: 25px;
        }
        .gkr-feature-title {
          font-size: 16px;
        }
        .gkr-feature-body {
          font-size: 13px;
          line-height: 1.45;
        }
      }
      .gkr-faq-shell {
        max-width: 1024px;
        margin: 0 auto;
        border: 1px solid var(--surface-border);
        border-radius: 20px;
        overflow: hidden;
        background: var(--surface);
      }
      .gkr-faq-item + .gkr-faq-item {
        border-top: 1px solid var(--surface-border);
      }
      .gkr-faq-button {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px 24px;
        text-align: left;
        cursor: pointer;
        color: var(--content);
        background: transparent;
        border: 0;
        transition: background .2s ease;
      }
      .gkr-faq-button:hover {
        background: var(--surface-hover);
      }
      .gkr-faq-icon {
        width: 44px;
        height: 44px;
        flex: 0 0 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 14px;
        color: var(--accent);
        background: var(--accent-tint-sm);
        border: 1px solid var(--accent-border);
      }
      .gkr-faq-title {
        flex: 1;
        min-width: 0;
        font-size: 17px;
        line-height: 1.3;
        font-weight: 800;
      }
      .gkr-faq-chevron {
        width: 22px;
        height: 22px;
        flex: 0 0 22px;
        color: var(--muted);
        transition: transform .28s ease, color .2s ease;
      }
      .gkr-faq-item.is-open .gkr-faq-chevron {
        transform: rotate(180deg);
        color: var(--accent);
      }
      .gkr-faq-panel {
        max-height: 0;
        overflow: hidden;
        transition: max-height .34s ease;
      }
      .gkr-faq-answer {
        padding: 0 24px 22px 84px;
        color: var(--muted);
        font-size: 15px;
        line-height: 1.7;
      }
      .gkr-faq-answer strong {
        color: var(--content);
      }
      .gkr-faq-link {
        color: var(--link);
        font-weight: 800;
        text-decoration: underline;
        text-underline-offset: 3px;
      }
      @media (max-width: 767px) {
        .gkr-faq-button {
          padding: 16px;
          gap: 12px;
          align-items: flex-start;
        }
        .gkr-faq-icon {
          width: 38px;
          height: 38px;
          flex-basis: 38px;
          border-radius: 12px;
        }
        .gkr-faq-title {
          font-size: 15px;
        }
        .gkr-faq-answer {
          padding: 0 16px 18px 66px;
          font-size: 13.5px;
          line-height: 1.6;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  function setLogos() {
    document.querySelectorAll('img[src*="app_logo"]').forEach((img) => {
      img.src = LOGO;
      img.alt = "GharKiRasoi";
      img.style.maxHeight = img.closest("header") ? "54px" : "120px";
      img.style.objectFit = "contain";
    });
    document.querySelectorAll('a[aria-label*="Tiffinshala"], a[aria-label*="homepage"]').forEach((a) => {
      a.setAttribute("aria-label", "GharKiRasoi home");
      a.href = "#hero";
    });
  }

  function updateHeaderActions() {
    const header = document.querySelector("header");
    if (!header) return;
    const right = header.querySelector('button[aria-label="Open menu"]')?.parentElement || header.lastElementChild;
    if (right) {
      right.className = "gkr-header-actions";
      right.innerHTML = `
        <a class="gkr-header-cta is-whatsapp" href="${WA}" aria-label="WhatsApp GharKiRasoi on ${PHONE}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"></path><path d="M9.5 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.6 1.4c.1.3 0 .5-.1.7l-.4.5c.7 1.2 1.6 2 2.8 2.6l.6-.6c.2-.2.4-.2.7-.1l1.3.6c.3.1.4.3.4.6v.5c0 .4-.3.8-.7.9-.8.2-2.5.1-4.4-1.2-1.9-1.2-3.3-3.2-3.6-4.6-.1-.6.2-1 .6-1.3Z"></path></svg>
          <span>WP</span>
        </a>
        <a class="gkr-header-cta is-call" href="${TEL}" aria-label="Call GharKiRasoi on ${PHONE}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"></path></svg>
          <span>Call</span>
        </a>`;
    }
    document.querySelectorAll('[role="dialog"][aria-modal="true"], .fixed.inset-0.z-\\[60\\]').forEach((el) => el.remove());
  }

  function cta(label, href, extra) {
    return `<a href="${href}" class="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-5 sm:py-2.5 md:px-7 md:py-3.5 rounded-lg font-semibold text-base md:text-base transition-all duration-150 hover:opacity-90 active:scale-95 cursor-pointer ${extra || "bg-primary text-on-primary"}">${label}<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right transition-transform duration-150 group-hover:translate-x-0.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>`;
  }

  function updateHero() {
    const h1 = document.querySelector("#hero h1");
    if (h1) {
      h1.innerHTML = '<span class="block">घर जैसा</span><span class="block md:inline text-secondary">पहाड़ी स्वाद</span>';
    }
    setText("#hero p", "हल्द्वानी में रोज़ ताज़ा, सादा और घर का बना खाना। ऑर्डर के लिए सीधे कॉल या WhatsApp करें।");
    const btn = document.querySelector("#hero button");
    if (btn) {
      btn.outerHTML = `<div class="flex flex-col sm:flex-row gap-3 self-center md:self-start">${cta("WhatsApp करें", WA)}${cta("Call करें", TEL, "bg-secondary text-primary")}</div>`;
    }
    const stats = document.querySelectorAll("#hero .flex-col.gap-0\\.5 span");
    const statBar = stats[0]?.closest(".border-t");
    if (statBar) {
      statBar.className = "grid grid-cols-3 gap-3 w-full max-w-md pt-3 mt-1 border-t border-on-primary-border";
      statBar.innerHTML = [
        ["Haldwani", "सेवा क्षेत्र"],
        ["घर का खाना", "मुख्य स्वाद"],
        ["Call", PHONE]
      ].map(([value, label]) => `
        <div class="min-w-0 text-center md:text-left">
          <span class="block font-extrabold leading-none text-on-primary" style="font-size:clamp(1rem,4.9vw,1.75rem);white-space:nowrap">${value}</span>
          <span class="block mt-1 text-[10px] md:text-xs leading-tight text-on-primary-subtle break-words">${label}</span>
        </div>
      `).join("");
    }
  }

  function updateCities() {
    const section = document.querySelector("#cities");
    if (!section) return;
    const items = [
      ["Owner: " + OWNER, "हल्द्वानी की लोकल रसोई, सीधे मालिक से call या WhatsApp पर बात करें।", icon.mountain],
      ["रसोई का पता", ADDRESS, icon.map],
      ["घर की रसोई", "रोज़ का खाना, कम मसाला, ताज़ा रोटी-सब्जी और दाल।", icon.home],
      ["सीधा संपर्क", "बीच में ऐप नहीं, सीधे कॉल या WhatsApp पर बात करें।", icon.phone]
    ];
    section.innerHTML = `
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-10">
          <span class="inline-block text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-3 bg-badge-bg text-badge-text border border-badge-border">Haldwani Only</span>
          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-content">हल्द्वानी के लिए <span class="text-accent">घर का खाना</span></h2>
          <p class="mt-2 text-sm sm:text-base mx-auto leading-relaxed max-w-2xl text-center text-muted">Owner: <strong class="text-content">${OWNER}</strong>। GharKiRasoi कोई राष्ट्रीय प्लेटफॉर्म नहीं है। यह हल्द्वानी में शेयर करने लायक सरल लोकल सर्विस पेज है।</p>
        </div>
        <div class="gkr-feature-grid">
          ${items.map(([title, body, svg]) => `
            <div class="gkr-feature-card">
              <div class="gkr-feature-icon">${svg}</div>
              <div>
                <h3 class="gkr-feature-title">${title}</h3>
                <p class="gkr-feature-body">${body}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>`;
  }

  function updateStatsAndCards() {
    setText("#served-stats h3", "हल्द्वानी की अपनी घर वाली रसोई");
    setText("#served-stats span:nth-of-type(1)", "100%");
    setText("#served-stats span:nth-of-type(2)", "घर जैसा स्वाद");
    setText("#served-stats span:nth-of-type(3)", "कॉल / WhatsApp: " + PHONE);

    const ps = document.querySelector("#problem-solution");
    if (ps) {
      const buttons = ps.querySelectorAll("button");
      if (buttons[0]) buttons[0].textContent = "रोज़ का घरेलू खाना";
      if (buttons[1]) buttons[1].textContent = "हल्द्वानी लोकल सर्विस";
      const intro = ps.querySelector("p");
      if (intro) intro.textContent = "GharKiRasoi में पहाड़ की सादगी और घर की रसोई का स्वाद मिलता है। ऑर्डर, मेन्यू और समय के लिए सीधे बात करें।";
      const titles = ["स्टूडेंट और PG वालों के लिए", "ऑफिस जाने वालों के लिए", "परिवार के लिए", "बुजुर्गों के लिए"];
      const bodies = [
        "हल्का, साफ और बजट में रोज़ का खाना।",
        "काम के दिन में भरोसेमंद घर जैसा भोजन।",
        "कम मसाले वाला ताज़ा खाना, जैसा घर में बनता है।",
        "सादा, संतुलित और प्यार से बना खाना।"
      ];
      ps.querySelectorAll(".grid .text-content").forEach((el, i) => { if (titles[i]) el.textContent = titles[i]; });
      ps.querySelectorAll(".grid p.text-muted").forEach((el, i) => { if (bodies[i]) el.textContent = bodies[i]; });
    }
  }

  function updateReviews() {
    setText("#customer-reviews .text-center span", "हल्द्वानी ग्राहक");
    const title = document.querySelector("#customer-reviews h2");
    if (title) title.innerHTML = 'लोग कहते हैं <span class="relative inline-block text-accent">घर जैसा स्वाद</span>';
    const reviews = [
      "खाना बिल्कुल घर जैसा लगा। मसाला भी ठीक और रोटी-सब्जी ताज़ा मिली।",
      "हल्द्वानी में ऐसा सरल घरेलू खाना मिलना अच्छी बात है। WhatsApp पर बात करके ऑर्डर करना आसान है।",
      "ऑफिस के लिए रोज़ बाहर का खाना ठीक नहीं लगता था। GharKiRasoi का खाना सादा और भरोसेमंद है।"
    ];
    const names = ["नेहा जोशी", "मोहित बिष्ट", "कविता पांडे"];
    document.querySelectorAll("#customer-reviews p.text-sm.leading-relaxed, #customer-reviews p.text-base.leading-relaxed").forEach((el, i) => {
      if (reviews[i % 3]) el.innerHTML = `<span class="text-3xl font-serif leading-none mr-1 -mt-1 inline-block align-top text-accent opacity-50">“</span>${reviews[i % 3]}<span class="text-3xl font-serif leading-none ml-1 inline-block align-bottom text-accent opacity-50">”</span>`;
    });
    document.querySelectorAll("#customer-reviews p.text-sm.font-bold").forEach((el, i) => { if (names[i % 3]) el.textContent = names[i % 3]; });
    document.querySelectorAll("#customer-reviews p.italic").forEach((el) => { el.textContent = "हल्द्वानी ग्राहक"; });
  }

  function updateFaqAndSeo() {
    const faq = document.querySelector("#faq");
    if (faq) {
      const faqs = [
        [
          "GharKiRasoi किस जगह सेवा देती है?",
          `हमारी सेवा <strong>सिर्फ हल्द्वानी</strong> के लिए है। Owner: <strong>${OWNER}</strong>। रसोई का पता: <strong>${ADDRESS}</strong>। यह कोई national या multi-city platform नहीं है, इसलिए बातचीत सीधी और लोकल रहती है।`
        ],
        [
          "ऑर्डर कैसे करें?",
          `सीधे <a class="gkr-faq-link" href="${TEL}">${PHONE}</a> पर call करें या <a class="gkr-faq-link" href="${WA}">WhatsApp मेसेज</a> भेजें। आप अपना नाम, area, लोगों की संख्या और meal timing लिख दें।`
        ],
        [
          "खाना किस तरह का मिलता है?",
          "फोकस रोज़ खाने लायक <strong>सादा, ताज़ा और घर जैसा खाना</strong> है। कम मसाला, साफ स्वाद, रोटी-सब्जी-दाल जैसे regular meals के लिए WhatsApp पर आज का menu confirm करें।"
        ],
        [
          "क्या monthly tiffin plan मिल सकता है?",
          "हाँ, जरूरत और availability के हिसाब से monthly या regular meal की बात हो सकती है। Area, timing और quantity बताने पर सही option बताया जाएगा।"
        ],
        [
          "Delivery timing और charges कैसे confirm होंगे?",
          "क्योंकि service local है, timing और delivery/nearby arrangement आपके location के हिसाब से confirm होगा। सबसे अच्छा तरीका है WhatsApp पर अपना area भेजना।"
        ],
        [
          "Payment कैसे होगा?",
          "Payment detail order confirm करते समय बताया जाएगा। Regular plan शुरू करने से पहले quantity, timing और charges साफ-साफ confirm कर लें।"
        ]
      ];
      faq.innerHTML = `
        <div class="relative max-w-4xl lg:max-w-5xl mx-auto">
          <div class="text-center mb-5 sm:mb-8">
            <span class="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-4 bg-badge-bg text-badge-text border border-badge-border">FAQs</span>
            <h2 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-content">ऑर्डर से पहले <span class="text-accent">जरूरी बातें</span></h2>
            <p class="mt-4 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-medium text-muted">हल्द्वानी में घर जैसा खाना शुरू करने से पहले साफ जानकारी।</p>
          </div>
          <div class="gkr-faq-shell" data-gkr-faq>
            ${faqs.map(([q, a], i) => `
              <div class="gkr-faq-item ${i === 0 ? "is-open" : ""}">
                <div class="gkr-faq-button" role="button" tabindex="0" aria-expanded="${i === 0 ? "true" : "false"}">
                  <span class="gkr-faq-icon">${i % 2 ? icon.phone : icon.utensils}</span>
                  <span class="gkr-faq-title">${q}</span>
                  <svg class="gkr-faq-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </div>
                <div class="gkr-faq-panel">
                  <div class="gkr-faq-answer">${a}</div>
                </div>
              </div>`).join("")}
          </div>
          <p class="mt-5 text-center text-sm sm:text-base font-medium text-muted">सीधे बात करें: <a href="${TEL}" class="font-bold underline underline-offset-2 transition-colors text-link hover:text-link-hover">${PHONE}</a> | Mail: <a href="mailto:${EMAIL}" class="font-bold underline underline-offset-2 transition-colors text-link hover:text-link-hover">${EMAIL}</a></p>
        </div>`;
      bindFaq(faq);
    }

    const seo = document.querySelector("#seo-text");
    if (seo) {
      seo.innerHTML = `
        <div class="max-w-5xl mx-auto rounded-2xl border border-surface-border px-5 py-6 sm:px-8 sm:py-8 bg-surface">
          <div class="mb-4">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-1 text-content">हल्द्वानी में घर जैसा खाना</h2>
            <h3 class="text-base sm:text-lg font-semibold text-accent">Owner: ${OWNER} | GharKiRasoi local homemade food service</h3>
          </div>
          <p class="text-sm sm:text-base leading-relaxed text-muted">अगर आप हल्द्वानी में रोज़ का सादा, ताज़ा और घर जैसा खाना चाहते हैं, तो GharKiRasoi से सीधे संपर्क करें। Owner ${OWNER} से call या WhatsApp पर बात करके मेन्यू, timing और availability confirm कर सकते हैं। यहाँ फोकस सिर्फ हल्द्वानी पर है, इसलिए बात आसान, सेवा लोकल और खाना अपनेपन वाला रहता है।</p>
          <div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            ${[
              ["पहाड़ी सादगी", "उत्तराखंड के घरों जैसी साफ-सुथरी रसोई की भावना।", icon.mountain],
              ["ताज़ा खाना", "रोज़ खाने लायक सादा भोजन, भारी restaurant-style नहीं।", icon.leaf],
              ["सीधा ऑर्डर", "कॉल या WhatsApp करके मेन्यू और availability पूछें।", icon.phone]
            ].map(([t, b, svg]) => `
              <div class="rounded-xl border border-surface-border p-4 bg-page-bg">
                <div class="flex items-start gap-2 mb-2 text-accent">${svg}<h4 class="text-sm font-semibold text-content leading-snug">${t}</h4></div>
                <p class="text-sm leading-relaxed text-muted">${b}</p>
              </div>`).join("")}
          </div>
          <div class="mt-6 pt-5 border-t border-surface-border flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p class="text-lg sm:text-xl font-semibold leading-snug text-content">आज ही खाना पूछें</p>
            <div class="flex gap-3">${cta("WhatsApp", WA)}${cta("Call", TEL, "bg-secondary text-primary")}</div>
          </div>
        </div>`;
    }
  }

  function bindFaq(root) {
    const items = [...root.querySelectorAll(".gkr-faq-item")];
    const setPanel = (item, open) => {
      const button = item.querySelector(".gkr-faq-button");
      const panel = item.querySelector(".gkr-faq-panel");
      if (!button || !panel) return;
      item.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
    };
    items.forEach((item, index) => {
      setPanel(item, item.classList.contains("is-open"));
      const button = item.querySelector(".gkr-faq-button");
      if (!button) return;
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        const shouldOpen = !item.classList.contains("is-open");
        items.forEach((other) => setPanel(other, false));
        setPanel(item, shouldOpen);
      });
      button.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          button.click();
          return;
        }
        if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : event.key === "ArrowDown" ? (index + 1) % items.length : (index - 1 + items.length) % items.length;
        items[nextIndex]?.querySelector(".gkr-faq-button")?.focus();
      });
    });
    window.addEventListener("resize", () => {
      items.forEach((item) => {
        if (item.classList.contains("is-open")) setPanel(item, true);
      });
    });
  }

  function updateFooter() {
    const footer = document.querySelector("footer");
    if (!footer) return;
    footer.innerHTML = `
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center border-b border-on-primary-border pb-8">
          <div>
            <img src="${LOGO}" alt="GharKiRasoi" class="h-24 w-auto object-contain mb-4">
            <p class="text-2xl sm:text-3xl font-extrabold text-on-primary leading-tight">हल्द्वानी में घर जैसा खाना चाहिए?</p>
            <p class="mt-2 text-base sm:text-lg font-bold text-secondary">Owner: ${OWNER}</p>
            <p class="mt-2 text-sm sm:text-base text-on-primary-muted">सीधे call या WhatsApp करें। कोई social media, app या extra form नहीं।</p>
            <p class="mt-3 text-sm sm:text-base font-semibold text-on-primary">रसोई का पता: ${ADDRESS}</p>
            <p class="mt-1 text-sm sm:text-base font-semibold text-on-primary">Mail: <a href="mailto:${EMAIL}" class="underline underline-offset-2">${EMAIL}</a></p>
          </div>
          <div class="flex flex-col sm:flex-row md:flex-col gap-3">
            <a href="${TEL}" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold bg-secondary text-primary">Call: ${PHONE}</a>
            <a href="${WA}" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold bg-on-primary-surface text-on-primary border border-on-primary-border">WhatsApp: ${PHONE}</a>
            <a href="mailto:${EMAIL}" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold bg-on-primary-surface text-on-primary border border-on-primary-border">Mail</a>
          </div>
        </div>
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-xs text-on-primary-subtle">© 2026 GharKiRasoi. Haldwani only.</p>
          <p class="text-xs text-on-primary-subtle">${ADDRESS}</p>
        </div>
      </div>`;
  }

  function updateMisc() {
    document.documentElement.lang = "hi";
    document.title = "GharKiRasoi | हल्द्वानी में घर जैसा खाना";
    document.querySelectorAll("button, a").forEach((el) => {
      const text = (el.textContent || "").trim();
      if (/View Kitchens|Find Your Tiffin|Register Your Kitchen|Write to us/i.test(text)) {
        if (el.tagName === "A") el.href = WA;
        el.textContent = "WhatsApp करें";
      }
    });
    document.querySelectorAll("span, button").forEach((el) => {
      if ((el.textContent || "").trim().toLowerCase() === "tiffinshala") el.textContent = "GharKiRasoi";
    });
  }

  function init() {
    injectStyles();
    setLogos();
    updateHeaderActions();
    updateHero();
    updateCities();
    updateStatsAndCards();
    updateReviews();
    updateFaqAndSeo();
    updateFooter();
    updateMisc();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
