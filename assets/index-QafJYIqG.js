(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = t(n);
    fetch(n.href, r);
  }
})();
const U = [
    {
      id: 0,
      question: "Какова ваша основная цель посещения массажиста?",
      answers: [
        { id: 1, answer: "Снять боль и напряжение" },
        { id: 2, answer: "Расслабиться, снять стресс" },
        { id: 3, answer: "Восстановиться после тренировки/спорта" },
        { id: 4, answer: "Улучшить тонус, взбодриться" },
        { id: 5, answer: "Борьба с целлюлитом, отеками" },
      ],
    },
    {
      id: 1,
      question: "Локализация боли",
      answers: [
        { id: 1, answer: "Шея, плечи, голова" },
        { id: 2, answer: "Поясница, крестец" },
        { id: 3, answer: "Вся спина, осанка" },
        { id: 4, answer: "Нет конкретной точки, общее напряжение" },
        {},
      ],
    },
    {
      id: 2,
      question: "Интенсивность",
      answers: [
        { id: 1, answer: "Мягкое, расслабляющее (почти медитативное)" },
        { id: 2, answer: "Чувствительное, но глубокое (ощутимая проработка)" },
        {
          id: 3,
          answer:
            "Интенсивное, сильное (готов(а) к терпимым болевым ощущениям)",
        },
        {},
        {},
      ],
    },
  ],
  De = {
    "1-1-1": "result_1",
    "1-1-2": "result_1",
    "1-1-3": "result_1",
    "1-2-1": "result_3",
    "1-2-2": "result_2",
    "1-2-3": "result_2",
    "1-3-1": "result_3",
    "1-3-2": "result_2",
    "1-3-3": "result_2",
    "1-4-1": "result_3",
    "1-4-2": "result_3",
    "1-4-3": "result_3",
    "2-1-1": "result_6",
    "2-1-2": "result_3",
    "2-1-3": "result_3",
    "2-2-1": "result_6",
    "2-2-2": "result_3",
    "2-2-3": "result_3",
    "2-3-1": "result_6",
    "2-3-2": "result_3",
    "2-3-3": "result_3",
    "2-4-1": "result_6",
    "2-4-2": "result_3",
    "2-4-3": "result_3",
    "3-1-1": "result_3",
    "3-1-2": "result_4",
    "3-1-3": "result_4",
    "3-2-1": "result_3",
    "3-2-2": "result_4",
    "3-2-3": "result_4",
    "3-3-1": "result_3",
    "3-3-2": "result_4",
    "3-3-3": "result_4",
    "3-4-1": "result_3",
    "3-4-2": "result_4",
    "3-4-3": "result_4",
    "4-1-1": "result_3",
    "4-1-2": "result_4",
    "4-1-3": "result_4",
    "4-2-1": "result_3",
    "4-2-2": "result_4",
    "4-2-3": "result_4",
    "4-3-1": "result_3",
    "4-3-2": "result_4",
    "4-3-3": "result_4",
    "4-4-1": "result_3",
    "4-4-2": "result_4",
    "4-4-3": "result_4",
    "5-1-1": "result_5",
    "5-1-2": "result_5",
    "5-1-3": "result_5",
    "5-2-1": "result_5",
    "5-2-2": "result_5",
    "5-2-3": "result_5",
    "5-3-1": "result_5",
    "5-3-2": "result_5",
    "5-3-3": "result_5",
    "5-4-1": "result_5",
    "5-4-2": "result_5",
    "5-4-3": "result_5",
  },
  ie = {
    result_1: {
      title: "Точечный массаж шеи и плеч",
      description:
        "Идеально для вас, если вы проводите дни за компьютером, чувствуете 'каменные' плечи, страдаете от головных болей напряжения. Я буду работать с триггерными точками в трапециевидных мышцах, снимая спазмы. Вы почувствуете свободу движения шеи уже после первого сеанса.",
      button: "Снять напряжение с шеи",
    },
    result_2: {
      title: "Глубокий тканевый массаж спины",
      description:
        "Решение для 'застарелых' болей в спине и скованности. Я прорабатываю глубокие слои мышц и фасции, где формируются болезненные спайки. Это не просто расслабление — это перестройка тканей для устранения причины боли.",
      button: "Устранить причину боли в спине",
    },
    result_3: {
      title: "Классический оздоровительный массаж",
      description:
        "Золотой стандарт для тех, кто хочет комплексного воздействия. Гармоничное сочетание всех основных приемов для проработки всего тела. Идеально для снятия усталости, профилактики болезней спины и глубокого расслабления.",
      button: "Записаться на сеанс расслабления",
    },
    result_4: {
      title: "Спортивный восстановительный массаж",
      description:
        "Создан для тех, кто тренируется. Ускорение вывода молочной кислоты, снятие гипертонуса, профилактика травм. Это не просто расслабление — это часть вашего тренировочного процесса.",
      button: "Восстановить мышцы",
    },
    result_5: {
      title: "Лимфодренажный антицеллюлитный массаж",
      description:
        "Решение для уменьшения проявлений целлюлита и отеков. Специальные плавные движения стимулируют отток лишней жидкости и токсинов. Уменьшение объемов и разглаживание 'апельсиновой корки'.",
      button: "Начать курс против целлюлита",
    },
    result_6: {
      title: "Массаж для глубокой релаксации",
      description:
        "Ваш личный антидот от стресса. Плавные, волнообразные, почти медитативные движения. Сеанс — это путешествие в состояние глубокого отдыха для нервной системы. Идеально при бессоннице и эмоциональном выгорании.",
      button: "Забронировать островок спокойствия",
    },
  },
  Z = document.querySelectorAll(".quiz-screen"),
  ue = document.querySelector(".quiz-final-screen"),
  Y = document.querySelector(".next-question-btn"),
  be = [];
Y.disabled = !0;
function Ge(e) {
  if (e !== void 0) return `<div class="answer">${e}</div>`;
}
function Be(e = 0) {
  (e === 0 && localStorage.clear(),
    Y.addEventListener("click", () => {
      if (((Z[e].style.display = "none"), e++, Z[e] === void 0)) {
        ((Y.style.display = "none"), (ue.style.display = "block"));
        return;
      }
      ((Z[e].style.display = "block"), (Y.disabled = !0));
    }));
}
Be();
Z.forEach((e, s) => {
  if (!U[s]) return;
  s === 0 && (e.style.display = "block");
  const t = e.querySelector(".quiz-question");
  t && (t.textContent = U[s].question);
  const i = e.querySelector(".quiz-answers");
  i &&
    ((i.innerHTML = ""),
    U[s].answers.forEach((l) => {
      const o = Ge(l.answer);
      o && i.insertAdjacentHTML("beforeend", o);
    }));
  const n = e.querySelectorAll(".answer");
  n.forEach((r, l) => {
    r.addEventListener("click", () => {
      (n.forEach((f) => {
        f.classList.remove("selected");
      }),
        r.classList.add("selected"),
        (Y.disabled = !1));
      const o = U[s].answers[l].id;
      be[s] = o;
      let a = be.join("-");
      localStorage.setItem("userAnswers", a);
      const d = localStorage.getItem("userAnswers");
      if (d.length < 5) return;
      const h = De[d];
      (console.log(h),
        h
          ? (ue.innerHTML = `
        <div class="quiz-result">
          <h2>${ie[h].title}</h2>
          <p>${ie[h].description}</p>
          <a href="tel:+799999" class="button" >📞 ${ie[h].button}</a>
        </div>
      `)
          : (ue.innerHTML = `
        <div class="quiz-result">
          <h2>Спасибо за ответы!</h2>
          <p>На основе ваших ответов рекомендуем классический оздоровительный массаж.</p>
           <a href="tel:+799999" class="cbutton" >📞 Записаться на массаж</a>
        </div>`));
    });
  });
});
function Se(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function he(e = {}, s = {}) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(s)
    .filter((i) => t.indexOf(i) < 0)
    .forEach((i) => {
      typeof e[i] > "u"
        ? (e[i] = s[i])
        : Se(s[i]) &&
          Se(e[i]) &&
          Object.keys(s[i]).length > 0 &&
          he(e[i], s[i]);
    });
}
const Me = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function N() {
  const e = typeof document < "u" ? document : {};
  return (he(e, Me), e);
}
const $e = {
  document: Me,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function G() {
  const e = typeof window < "u" ? window : {};
  return (he(e, $e), e);
}
function R(e = "") {
  return e
    .trim()
    .split(" ")
    .filter((s) => !!s.trim());
}
function Ve(e) {
  const s = e;
  Object.keys(s).forEach((t) => {
    try {
      s[t] = null;
    } catch {}
    try {
      delete s[t];
    } catch {}
  });
}
function ge(e, s = 0) {
  return setTimeout(e, s);
}
function ee() {
  return Date.now();
}
function He(e) {
  const s = G();
  let t;
  return (
    s.getComputedStyle && (t = s.getComputedStyle(e, null)),
    !t && e.currentStyle && (t = e.currentStyle),
    t || (t = e.style),
    t
  );
}
function Fe(e, s = "x") {
  const t = G();
  let i, n, r;
  const l = He(e);
  return (
    t.WebKitCSSMatrix
      ? ((n = l.transform || l.webkitTransform),
        n.split(",").length > 6 &&
          (n = n
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (r = new t.WebKitCSSMatrix(n === "none" ? "" : n)))
      : ((r =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = r.toString().split(","))),
    s === "x" &&
      (t.WebKitCSSMatrix
        ? (n = r.m41)
        : i.length === 16
          ? (n = parseFloat(i[12]))
          : (n = parseFloat(i[4]))),
    s === "y" &&
      (t.WebKitCSSMatrix
        ? (n = r.m42)
        : i.length === 16
          ? (n = parseFloat(i[13]))
          : (n = parseFloat(i[5]))),
    n || 0
  );
}
function K(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Ne(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function V(...e) {
  const s = Object(e[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < e.length; i += 1) {
    const n = e[i];
    if (n != null && !Ne(n)) {
      const r = Object.keys(Object(n)).filter((l) => t.indexOf(l) < 0);
      for (let l = 0, o = r.length; l < o; l += 1) {
        const a = r[l],
          d = Object.getOwnPropertyDescriptor(n, a);
        d !== void 0 &&
          d.enumerable &&
          (K(s[a]) && K(n[a])
            ? n[a].__swiper__
              ? (s[a] = n[a])
              : V(s[a], n[a])
            : !K(s[a]) && K(n[a])
              ? ((s[a] = {}), n[a].__swiper__ ? (s[a] = n[a]) : V(s[a], n[a]))
              : (s[a] = n[a]));
      }
    }
  }
  return s;
}
function Q(e, s, t) {
  e.style.setProperty(s, t);
}
function Le({ swiper: e, targetPosition: s, side: t }) {
  const i = G(),
    n = -e.translate;
  let r = null,
    l;
  const o = e.params.speed;
  ((e.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(e.cssModeFrameID));
  const a = s > n ? "next" : "prev",
    d = (f, S) => (a === "next" && f >= S) || (a === "prev" && f <= S),
    h = () => {
      ((l = new Date().getTime()), r === null && (r = l));
      const f = Math.max(Math.min((l - r) / o, 1), 0),
        S = 0.5 - Math.cos(f * Math.PI) / 2;
      let u = n + S * (s - n);
      if ((d(u, s) && (u = s), e.wrapperEl.scrollTo({ [t]: u }), d(u, s))) {
        ((e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ((e.wrapperEl.style.overflow = ""),
              e.wrapperEl.scrollTo({ [t]: u }));
          }),
          i.cancelAnimationFrame(e.cssModeFrameID));
        return;
      }
      e.cssModeFrameID = i.requestAnimationFrame(h);
    };
  h();
}
function F(e, s = "") {
  const t = G(),
    i = [...e.children];
  return (
    t.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      i.push(...e.assignedElements()),
    s ? i.filter((n) => n.matches(s)) : i
  );
}
function qe(e, s) {
  const t = [s];
  for (; t.length > 0; ) {
    const i = t.shift();
    if (e === i) return !0;
    t.push(
      ...i.children,
      ...(i.shadowRoot ? i.shadowRoot.children : []),
      ...(i.assignedElements ? i.assignedElements() : []),
    );
  }
}
function Re(e, s) {
  const t = G();
  let i = s.contains(e);
  return (
    !i &&
      t.HTMLSlotElement &&
      s instanceof HTMLSlotElement &&
      ((i = [...s.assignedElements()].includes(e)), i || (i = qe(e, s))),
    i
  );
}
function te(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function X(e, s = []) {
  const t = document.createElement(e);
  return (t.classList.add(...(Array.isArray(s) ? s : R(s))), t);
}
function We(e) {
  const s = G(),
    t = N(),
    i = e.getBoundingClientRect(),
    n = t.body,
    r = e.clientTop || n.clientTop || 0,
    l = e.clientLeft || n.clientLeft || 0,
    o = e === s ? s.scrollY : e.scrollTop,
    a = e === s ? s.scrollX : e.scrollLeft;
  return { top: i.top + o - r, left: i.left + a - l };
}
function je(e, s) {
  const t = [];
  for (; e.previousElementSibling; ) {
    const i = e.previousElementSibling;
    (s ? i.matches(s) && t.push(i) : t.push(i), (e = i));
  }
  return t;
}
function Ye(e, s) {
  const t = [];
  for (; e.nextElementSibling; ) {
    const i = e.nextElementSibling;
    (s ? i.matches(s) && t.push(i) : t.push(i), (e = i));
  }
  return t;
}
function W(e, s) {
  return G().getComputedStyle(e, null).getPropertyValue(s);
}
function se(e) {
  let s = e,
    t;
  if (s) {
    for (t = 0; (s = s.previousSibling) !== null; )
      s.nodeType === 1 && (t += 1);
    return t;
  }
}
function Pe(e, s) {
  const t = [];
  let i = e.parentElement;
  for (; i; )
    (s ? i.matches(s) && t.push(i) : t.push(i), (i = i.parentElement));
  return t;
}
function fe(e, s, t) {
  const i = G();
  return (
    e[s === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      i
        .getComputedStyle(e, null)
        .getPropertyValue(s === "width" ? "margin-right" : "margin-top"),
    ) +
    parseFloat(
      i
        .getComputedStyle(e, null)
        .getPropertyValue(s === "width" ? "margin-left" : "margin-bottom"),
    )
  );
}
function A(e) {
  return (Array.isArray(e) ? e : [e]).filter((s) => !!s);
}
function pe(e, s = "") {
  typeof trustedTypes < "u"
    ? (e.innerHTML = trustedTypes
        .createPolicy("html", { createHTML: (t) => t })
        .createHTML(s))
    : (e.innerHTML = s);
}
let ne;
function Xe() {
  const e = G(),
    s = N();
  return {
    smoothScroll:
      s.documentElement &&
      s.documentElement.style &&
      "scrollBehavior" in s.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && s instanceof e.DocumentTouch)
    ),
  };
}
function Ie() {
  return (ne || (ne = Xe()), ne);
}
let re;
function Ue({ userAgent: e } = {}) {
  const s = Ie(),
    t = G(),
    i = t.navigator.platform,
    n = e || t.navigator.userAgent,
    r = { ios: !1, android: !1 },
    l = t.screen.width,
    o = t.screen.height,
    a = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    S = i === "Win32";
  let u = i === "MacIntel";
  const m = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !d &&
      u &&
      s.touch &&
      m.indexOf(`${l}x${o}`) >= 0 &&
      ((d = n.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (u = !1)),
    a && !S && ((r.os = "android"), (r.android = !0)),
    (d || f || h) && ((r.os = "ios"), (r.ios = !0)),
    r
  );
}
function ze(e = {}) {
  return (re || (re = Ue(e)), re);
}
let ae;
function Ke() {
  const e = G(),
    s = ze();
  let t = !1;
  function i() {
    const o = e.navigator.userAgent.toLowerCase();
    return (
      o.indexOf("safari") >= 0 &&
      o.indexOf("chrome") < 0 &&
      o.indexOf("android") < 0
    );
  }
  if (i()) {
    const o = String(e.navigator.userAgent);
    if (o.includes("Version/")) {
      const [a, d] = o
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((h) => Number(h));
      t = a < 16 || (a === 16 && d < 2);
    }
  }
  const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    r = i(),
    l = r || (n && s.ios);
  return {
    isSafari: t || r,
    needPerspectiveFix: t,
    need3dFix: l,
    isWebView: n,
  };
}
function Oe() {
  return (ae || (ae = Ke()), ae);
}
function Qe({ swiper: e, on: s, emit: t }) {
  const i = G();
  let n = null,
    r = null;
  const l = () => {
      !e || e.destroyed || !e.initialized || (t("beforeResize"), t("resize"));
    },
    o = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((n = new ResizeObserver((h) => {
          r = i.requestAnimationFrame(() => {
            const { width: f, height: S } = e;
            let u = f,
              m = S;
            (h.forEach(({ contentBoxSize: b, contentRect: M, target: c }) => {
              (c && c !== e.el) ||
                ((u = M ? M.width : (b[0] || b).inlineSize),
                (m = M ? M.height : (b[0] || b).blockSize));
            }),
              (u !== f || m !== S) && l());
          });
        })),
        n.observe(e.el));
    },
    a = () => {
      (r && i.cancelAnimationFrame(r),
        n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)));
    },
    d = () => {
      !e || e.destroyed || !e.initialized || t("orientationchange");
    };
  (s("init", () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    (i.addEventListener("resize", l),
      i.addEventListener("orientationchange", d));
  }),
    s("destroy", () => {
      (a(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", d));
    }));
}
function Ze({ swiper: e, extendParams: s, on: t, emit: i }) {
  const n = [],
    r = G(),
    l = (d, h = {}) => {
      const f = r.MutationObserver || r.WebkitMutationObserver,
        S = new f((u) => {
          if (e.__preventObserver__) return;
          if (u.length === 1) {
            i("observerUpdate", u[0]);
            return;
          }
          const m = function () {
            i("observerUpdate", u[0]);
          };
          r.requestAnimationFrame
            ? r.requestAnimationFrame(m)
            : r.setTimeout(m, 0);
        });
      (S.observe(d, {
        attributes: typeof h.attributes > "u" ? !0 : h.attributes,
        childList: e.isElement || (typeof h.childList > "u" ? !0 : h).childList,
        characterData: typeof h.characterData > "u" ? !0 : h.characterData,
      }),
        n.push(S));
    },
    o = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const d = Pe(e.hostEl);
          for (let h = 0; h < d.length; h += 1) l(d[h]);
        }
        (l(e.hostEl, { childList: e.params.observeSlideChildren }),
          l(e.wrapperEl, { attributes: !1 }));
      }
    },
    a = () => {
      (n.forEach((d) => {
        d.disconnect();
      }),
        n.splice(0, n.length));
    };
  (s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    t("init", o),
    t("destroy", a));
}
var Je = {
  on(e, s, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof s != "function") return i;
    const n = t ? "unshift" : "push";
    return (
      e.split(" ").forEach((r) => {
        (i.eventsListeners[r] || (i.eventsListeners[r] = []),
          i.eventsListeners[r][n](s));
      }),
      i
    );
  },
  once(e, s, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof s != "function") return i;
    function n(...r) {
      (i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, s.apply(i, r));
    }
    return ((n.__emitterProxy = s), i.on(e, n, t));
  },
  onAny(e, s) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof e != "function") return t;
    const i = s ? "unshift" : "push";
    return (
      t.eventsAnyListeners.indexOf(e) < 0 && t.eventsAnyListeners[i](e),
      t
    );
  },
  offAny(e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsAnyListeners) return s;
    const t = s.eventsAnyListeners.indexOf(e);
    return (t >= 0 && s.eventsAnyListeners.splice(t, 1), s);
  },
  off(e, s) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        e.split(" ").forEach((i) => {
          typeof s > "u"
            ? (t.eventsListeners[i] = [])
            : t.eventsListeners[i] &&
              t.eventsListeners[i].forEach((n, r) => {
                (n === s || (n.__emitterProxy && n.__emitterProxy === s)) &&
                  t.eventsListeners[i].splice(r, 1);
              });
        }),
      t
    );
  },
  emit(...e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
    let t, i, n;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((t = e[0]), (i = e.slice(1, e.length)), (n = s))
        : ((t = e[0].events), (i = e[0].data), (n = e[0].context || s)),
      i.unshift(n),
      (Array.isArray(t) ? t : t.split(" ")).forEach((l) => {
        (s.eventsAnyListeners &&
          s.eventsAnyListeners.length &&
          s.eventsAnyListeners.forEach((o) => {
            o.apply(n, [l, ...i]);
          }),
          s.eventsListeners &&
            s.eventsListeners[l] &&
            s.eventsListeners[l].forEach((o) => {
              o.apply(n, i);
            }));
      }),
      s
    );
  },
};
function et() {
  const e = this;
  let s, t;
  const i = e.el;
  (typeof e.params.width < "u" && e.params.width !== null
    ? (s = e.params.width)
    : (s = i.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (t = e.params.height)
      : (t = i.clientHeight),
    !((s === 0 && e.isHorizontal()) || (t === 0 && e.isVertical())) &&
      ((s =
        s -
        parseInt(W(i, "padding-left") || 0, 10) -
        parseInt(W(i, "padding-right") || 0, 10)),
      (t =
        t -
        parseInt(W(i, "padding-top") || 0, 10) -
        parseInt(W(i, "padding-bottom") || 0, 10)),
      Number.isNaN(s) && (s = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(e, {
        width: s,
        height: t,
        size: e.isHorizontal() ? s : t,
      })));
}
function tt() {
  const e = this;
  function s(C, v) {
    return parseFloat(C.getPropertyValue(e.getDirectionLabel(v)) || 0);
  }
  const t = e.params,
    { wrapperEl: i, slidesEl: n, rtlTranslate: r, wrongRTL: l } = e,
    o = e.virtual && t.virtual.enabled,
    a = o ? e.virtual.slides.length : e.slides.length,
    d = F(n, `.${e.params.slideClass}, swiper-slide`),
    h = o ? e.virtual.slides.length : d.length;
  let f = [];
  const S = [],
    u = [];
  let m = t.slidesOffsetBefore;
  typeof m == "function" && (m = t.slidesOffsetBefore.call(e));
  let b = t.slidesOffsetAfter;
  typeof b == "function" && (b = t.slidesOffsetAfter.call(e));
  const M = e.snapGrid.length,
    c = e.slidesGrid.length,
    p = e.size - m - b;
  let g = t.spaceBetween,
    T = -m,
    E = 0,
    O = 0;
  if (typeof p > "u") return;
  (typeof g == "string" && g.indexOf("%") >= 0
    ? (g = (parseFloat(g.replace("%", "")) / 100) * p)
    : typeof g == "string" && (g = parseFloat(g)),
    (e.virtualSize = -g - m - b),
    d.forEach((C) => {
      (r ? (C.style.marginLeft = "") : (C.style.marginRight = ""),
        (C.style.marginBottom = ""),
        (C.style.marginTop = ""));
    }),
    t.centeredSlides &&
      t.cssMode &&
      (Q(i, "--swiper-centered-offset-before", ""),
      Q(i, "--swiper-centered-offset-after", "")));
  const z = t.grid && t.grid.rows > 1 && e.grid;
  z ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
  let x;
  const k =
    t.slidesPerView === "auto" &&
    t.breakpoints &&
    Object.keys(t.breakpoints).filter(
      (C) => typeof t.breakpoints[C].slidesPerView < "u",
    ).length > 0;
  for (let C = 0; C < h; C += 1) {
    x = 0;
    const v = d[C];
    if (
      !(v && (z && e.grid.updateSlide(C, v, d), W(v, "display") === "none"))
    ) {
      if (o && t.slidesPerView === "auto")
        (t.virtual.slidesPerViewAutoSlideSize &&
          (x = t.virtual.slidesPerViewAutoSlideSize),
          x &&
            v &&
            (t.roundLengths && (x = Math.floor(x)),
            (v.style[e.getDirectionLabel("width")] = `${x}px`)));
      else if (t.slidesPerView === "auto") {
        k && (v.style[e.getDirectionLabel("width")] = "");
        const y = getComputedStyle(v),
          w = v.style.transform,
          L = v.style.webkitTransform;
        if (
          (w && (v.style.transform = "none"),
          L && (v.style.webkitTransform = "none"),
          t.roundLengths)
        )
          x = e.isHorizontal() ? fe(v, "width") : fe(v, "height");
        else {
          const I = s(y, "width"),
            $ = s(y, "padding-left"),
            D = s(y, "padding-right"),
            P = s(y, "margin-left"),
            _ = s(y, "margin-right"),
            B = y.getPropertyValue("box-sizing");
          if (B && B === "border-box") x = I + P + _;
          else {
            const { clientWidth: q, offsetWidth: _e } = v;
            x = I + $ + D + P + _ + (_e - q);
          }
        }
        (w && (v.style.transform = w),
          L && (v.style.webkitTransform = L),
          t.roundLengths && (x = Math.floor(x)));
      } else
        ((x = (p - (t.slidesPerView - 1) * g) / t.slidesPerView),
          t.roundLengths && (x = Math.floor(x)),
          v && (v.style[e.getDirectionLabel("width")] = `${x}px`));
      (v && (v.swiperSlideSize = x),
        u.push(x),
        t.centeredSlides
          ? ((T = T + x / 2 + E / 2 + g),
            E === 0 && C !== 0 && (T = T - p / 2 - g),
            C === 0 && (T = T - p / 2 - g),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            t.roundLengths && (T = Math.floor(T)),
            O % t.slidesPerGroup === 0 && f.push(T),
            S.push(T))
          : (t.roundLengths && (T = Math.floor(T)),
            (O - Math.min(e.params.slidesPerGroupSkip, O)) %
              e.params.slidesPerGroup ===
              0 && f.push(T),
            S.push(T),
            (T = T + x + g)),
        (e.virtualSize += x + g),
        (E = x),
        (O += 1));
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, p) + b),
    r &&
      l &&
      (t.effect === "slide" || t.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + g}px`),
    t.setWrapperSize &&
      (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + g}px`),
    z && e.grid.updateWrapperSize(x, f),
    !t.centeredSlides)
  ) {
    const C = [];
    for (let v = 0; v < f.length; v += 1) {
      let y = f[v];
      (t.roundLengths && (y = Math.floor(y)),
        f[v] <= e.virtualSize - p && C.push(y));
    }
    ((f = C),
      Math.floor(e.virtualSize - p) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - p));
  }
  if (o && t.loop) {
    const C = u[0] + g;
    if (t.slidesPerGroup > 1) {
      const v = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / t.slidesPerGroup,
        ),
        y = C * t.slidesPerGroup;
      for (let w = 0; w < v; w += 1) f.push(f[f.length - 1] + y);
    }
    for (let v = 0; v < e.virtual.slidesBefore + e.virtual.slidesAfter; v += 1)
      (t.slidesPerGroup === 1 && f.push(f[f.length - 1] + C),
        S.push(S[S.length - 1] + C),
        (e.virtualSize += C));
  }
  if ((f.length === 0 && (f = [0]), g !== 0)) {
    const C =
      e.isHorizontal() && r ? "marginLeft" : e.getDirectionLabel("marginRight");
    d.filter((v, y) =>
      !t.cssMode || t.loop ? !0 : y !== d.length - 1,
    ).forEach((v) => {
      v.style[C] = `${g}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let C = 0;
    (u.forEach((y) => {
      C += y + (g || 0);
    }),
      (C -= g));
    const v = C > p ? C - p : 0;
    f = f.map((y) => (y <= 0 ? -m : y > v ? v + b : y));
  }
  if (t.centerInsufficientSlides) {
    let C = 0;
    (u.forEach((y) => {
      C += y + (g || 0);
    }),
      (C -= g));
    const v = (m || 0) + (b || 0);
    if (C + v < p) {
      const y = (p - C - v) / 2;
      (f.forEach((w, L) => {
        f[L] = w - y;
      }),
        S.forEach((w, L) => {
          S[L] = w + y;
        }));
    }
  }
  if (
    (Object.assign(e, {
      slides: d,
      snapGrid: f,
      slidesGrid: S,
      slidesSizesGrid: u,
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
  ) {
    (Q(i, "--swiper-centered-offset-before", `${-f[0]}px`),
      Q(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - u[u.length - 1] / 2}px`,
      ));
    const C = -e.snapGrid[0],
      v = -e.slidesGrid[0];
    ((e.snapGrid = e.snapGrid.map((y) => y + C)),
      (e.slidesGrid = e.slidesGrid.map((y) => y + v)));
  }
  if (
    (h !== a && e.emit("slidesLengthChange"),
    f.length !== M &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    S.length !== c && e.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
  ) {
    const C = `${t.containerModifierClass}backface-hidden`,
      v = e.el.classList.contains(C);
    h <= t.maxBackfaceHiddenSlides
      ? v || e.el.classList.add(C)
      : v && e.el.classList.remove(C);
  }
}
function st(e) {
  const s = this,
    t = [],
    i = s.virtual && s.params.virtual.enabled;
  let n = 0,
    r;
  typeof e == "number"
    ? s.setTransition(e)
    : e === !0 && s.setTransition(s.params.speed);
  const l = (o) => (i ? s.slides[s.getSlideIndexByData(o)] : s.slides[o]);
  if (s.params.slidesPerView !== "auto" && s.params.slidesPerView > 1)
    if (s.params.centeredSlides)
      (s.visibleSlides || []).forEach((o) => {
        t.push(o);
      });
    else
      for (r = 0; r < Math.ceil(s.params.slidesPerView); r += 1) {
        const o = s.activeIndex + r;
        if (o > s.slides.length && !i) break;
        t.push(l(o));
      }
  else t.push(l(s.activeIndex));
  for (r = 0; r < t.length; r += 1)
    if (typeof t[r] < "u") {
      const o = t[r].offsetHeight;
      n = o > n ? o : n;
    }
  (n || n === 0) && (s.wrapperEl.style.height = `${n}px`);
}
function it() {
  const e = this,
    s = e.slides,
    t = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let i = 0; i < s.length; i += 1)
    s[i].swiperSlideOffset =
      (e.isHorizontal() ? s[i].offsetLeft : s[i].offsetTop) -
      t -
      e.cssOverflowAdjustment();
}
const ye = (e, s, t) => {
  s && !e.classList.contains(t)
    ? e.classList.add(t)
    : !s && e.classList.contains(t) && e.classList.remove(t);
};
function nt(e = (this && this.translate) || 0) {
  const s = this,
    t = s.params,
    { slides: i, rtlTranslate: n, snapGrid: r } = s;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && s.updateSlidesOffset();
  let l = -e;
  (n && (l = e), (s.visibleSlidesIndexes = []), (s.visibleSlides = []));
  let o = t.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * s.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let a = 0; a < i.length; a += 1) {
    const d = i[a];
    let h = d.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (h -= i[0].swiperSlideOffset);
    const f =
        (l + (t.centeredSlides ? s.minTranslate() : 0) - h) /
        (d.swiperSlideSize + o),
      S =
        (l - r[0] + (t.centeredSlides ? s.minTranslate() : 0) - h) /
        (d.swiperSlideSize + o),
      u = -(l - h),
      m = u + s.slidesSizesGrid[a],
      b = u >= 0 && u <= s.size - s.slidesSizesGrid[a],
      M =
        (u >= 0 && u < s.size - 1) ||
        (m > 1 && m <= s.size) ||
        (u <= 0 && m >= s.size);
    (M && (s.visibleSlides.push(d), s.visibleSlidesIndexes.push(a)),
      ye(d, M, t.slideVisibleClass),
      ye(d, b, t.slideFullyVisibleClass),
      (d.progress = n ? -f : f),
      (d.originalProgress = n ? -S : S));
  }
}
function rt(e) {
  const s = this;
  if (typeof e > "u") {
    const h = s.rtlTranslate ? -1 : 1;
    e = (s && s.translate && s.translate * h) || 0;
  }
  const t = s.params,
    i = s.maxTranslate() - s.minTranslate();
  let { progress: n, isBeginning: r, isEnd: l, progressLoop: o } = s;
  const a = r,
    d = l;
  if (i === 0) ((n = 0), (r = !0), (l = !0));
  else {
    n = (e - s.minTranslate()) / i;
    const h = Math.abs(e - s.minTranslate()) < 1,
      f = Math.abs(e - s.maxTranslate()) < 1;
    ((r = h || n <= 0), (l = f || n >= 1), h && (n = 0), f && (n = 1));
  }
  if (t.loop) {
    const h = s.getSlideIndexByData(0),
      f = s.getSlideIndexByData(s.slides.length - 1),
      S = s.slidesGrid[h],
      u = s.slidesGrid[f],
      m = s.slidesGrid[s.slidesGrid.length - 1],
      b = Math.abs(e);
    (b >= S ? (o = (b - S) / m) : (o = (b + m - u) / m), o > 1 && (o -= 1));
  }
  (Object.assign(s, { progress: n, progressLoop: o, isBeginning: r, isEnd: l }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      s.updateSlidesProgress(e),
    r && !a && s.emit("reachBeginning toEdge"),
    l && !d && s.emit("reachEnd toEdge"),
    ((a && !r) || (d && !l)) && s.emit("fromEdge"),
    s.emit("progress", n));
}
const le = (e, s, t) => {
  s && !e.classList.contains(t)
    ? e.classList.add(t)
    : !s && e.classList.contains(t) && e.classList.remove(t);
};
function at() {
  const e = this,
    { slides: s, params: t, slidesEl: i, activeIndex: n } = e,
    r = e.virtual && t.virtual.enabled,
    l = e.grid && t.grid && t.grid.rows > 1,
    o = (f) => F(i, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
  let a, d, h;
  if (r)
    if (t.loop) {
      let f = n - e.virtual.slidesBefore;
      (f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        (a = o(`[data-swiper-slide-index="${f}"]`)));
    } else a = o(`[data-swiper-slide-index="${n}"]`);
  else
    l
      ? ((a = s.find((f) => f.column === n)),
        (h = s.find((f) => f.column === n + 1)),
        (d = s.find((f) => f.column === n - 1)))
      : (a = s[n]);
  (a &&
    (l ||
      ((h = Ye(a, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !h && (h = s[0]),
      (d = je(a, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !d === 0 && (d = s[s.length - 1]))),
    s.forEach((f) => {
      (le(f, f === a, t.slideActiveClass),
        le(f, f === h, t.slideNextClass),
        le(f, f === d, t.slidePrevClass));
    }),
    e.emitSlidesClasses());
}
const J = (e, s) => {
    if (!e || e.destroyed || !e.params) return;
    const t = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      i = s.closest(t());
    if (i) {
      let n = i.querySelector(`.${e.params.lazyPreloaderClass}`);
      (!n &&
        e.isElement &&
        (i.shadowRoot
          ? (n = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              i.shadowRoot &&
                ((n = i.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                n && n.remove());
            })),
        n && n.remove());
    }
  },
  oe = (e, s) => {
    if (!e.slides[s]) return;
    const t = e.slides[s].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  },
  me = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let s = e.params.lazyPreloadPrevNext;
    const t = e.slides.length;
    if (!t || !s || s < 0) return;
    s = Math.min(s, t);
    const i =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      n = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = n,
        o = [l - s];
      (o.push(...Array.from({ length: s }).map((a, d) => l + i + d)),
        e.slides.forEach((a, d) => {
          o.includes(a.column) && oe(e, d);
        }));
      return;
    }
    const r = n + i - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = n - s; l <= r + s; l += 1) {
        const o = ((l % t) + t) % t;
        (o < n || o > r) && oe(e, o);
      }
    else
      for (let l = Math.max(n - s, 0); l <= Math.min(r + s, t - 1); l += 1)
        l !== n && (l > r || l < n) && oe(e, l);
  };
function lt(e) {
  const { slidesGrid: s, params: t } = e,
    i = e.rtlTranslate ? e.translate : -e.translate;
  let n;
  for (let r = 0; r < s.length; r += 1)
    typeof s[r + 1] < "u"
      ? i >= s[r] && i < s[r + 1] - (s[r + 1] - s[r]) / 2
        ? (n = r)
        : i >= s[r] && i < s[r + 1] && (n = r + 1)
      : i >= s[r] && (n = r);
  return (t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n);
}
function ot(e) {
  const s = this,
    t = s.rtlTranslate ? s.translate : -s.translate,
    { snapGrid: i, params: n, activeIndex: r, realIndex: l, snapIndex: o } = s;
  let a = e,
    d;
  const h = (u) => {
    let m = u - s.virtual.slidesBefore;
    return (
      m < 0 && (m = s.virtual.slides.length + m),
      m >= s.virtual.slides.length && (m -= s.virtual.slides.length),
      m
    );
  };
  if ((typeof a > "u" && (a = lt(s)), i.indexOf(t) >= 0)) d = i.indexOf(t);
  else {
    const u = Math.min(n.slidesPerGroupSkip, a);
    d = u + Math.floor((a - u) / n.slidesPerGroup);
  }
  if ((d >= i.length && (d = i.length - 1), a === r && !s.params.loop)) {
    d !== o && ((s.snapIndex = d), s.emit("snapIndexChange"));
    return;
  }
  if (a === r && s.params.loop && s.virtual && s.params.virtual.enabled) {
    s.realIndex = h(a);
    return;
  }
  const f = s.grid && n.grid && n.grid.rows > 1;
  let S;
  if (s.virtual && n.virtual.enabled && n.loop) S = h(a);
  else if (f) {
    const u = s.slides.find((b) => b.column === a);
    let m = parseInt(u.getAttribute("data-swiper-slide-index"), 10);
    (Number.isNaN(m) && (m = Math.max(s.slides.indexOf(u), 0)),
      (S = Math.floor(m / n.grid.rows)));
  } else if (s.slides[a]) {
    const u = s.slides[a].getAttribute("data-swiper-slide-index");
    u ? (S = parseInt(u, 10)) : (S = a);
  } else S = a;
  (Object.assign(s, {
    previousSnapIndex: o,
    snapIndex: d,
    previousRealIndex: l,
    realIndex: S,
    previousIndex: r,
    activeIndex: a,
  }),
    s.initialized && me(s),
    s.emit("activeIndexChange"),
    s.emit("snapIndexChange"),
    (s.initialized || s.params.runCallbacksOnInit) &&
      (l !== S && s.emit("realIndexChange"), s.emit("slideChange")));
}
function dt(e, s) {
  const t = this,
    i = t.params;
  let n = e.closest(`.${i.slideClass}, swiper-slide`);
  !n &&
    t.isElement &&
    s &&
    s.length > 1 &&
    s.includes(e) &&
    [...s.slice(s.indexOf(e) + 1, s.length)].forEach((o) => {
      !n && o.matches && o.matches(`.${i.slideClass}, swiper-slide`) && (n = o);
    });
  let r = !1,
    l;
  if (n) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === n) {
        ((r = !0), (l = o));
        break;
      }
  }
  if (n && r)
    ((t.clickedSlide = n),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            n.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (t.clickedIndex = l));
  else {
    ((t.clickedSlide = void 0), (t.clickedIndex = void 0));
    return;
  }
  i.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
var ct = {
  updateSize: et,
  updateSlides: tt,
  updateAutoHeight: st,
  updateSlidesOffset: it,
  updateSlidesProgress: nt,
  updateProgress: rt,
  updateSlidesClasses: at,
  updateActiveIndex: ot,
  updateClickedSlide: dt,
};
function ut(e = this.isHorizontal() ? "x" : "y") {
  const s = this,
    { params: t, rtlTranslate: i, translate: n, wrapperEl: r } = s;
  if (t.virtualTranslate) return i ? -n : n;
  if (t.cssMode) return n;
  let l = Fe(r, e);
  return ((l += s.cssOverflowAdjustment()), i && (l = -l), l || 0);
}
function ft(e, s) {
  const t = this,
    { rtlTranslate: i, params: n, wrapperEl: r, progress: l } = t;
  let o = 0,
    a = 0;
  const d = 0;
  (t.isHorizontal() ? (o = i ? -e : e) : (a = e),
    n.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? o : a),
    n.cssMode
      ? (r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -o
          : -a)
      : n.virtualTranslate ||
        (t.isHorizontal()
          ? (o -= t.cssOverflowAdjustment())
          : (a -= t.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${o}px, ${a}px, ${d}px)`)));
  let h;
  const f = t.maxTranslate() - t.minTranslate();
  (f === 0 ? (h = 0) : (h = (e - t.minTranslate()) / f),
    h !== l && t.updateProgress(e),
    t.emit("setTranslate", t.translate, s));
}
function pt() {
  return -this.snapGrid[0];
}
function mt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function ht(e = 0, s = this.params.speed, t = !0, i = !0, n) {
  const r = this,
    { params: l, wrapperEl: o } = r;
  if (r.animating && l.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    d = r.maxTranslate();
  let h;
  if (
    (i && e > a ? (h = a) : i && e < d ? (h = d) : (h = e),
    r.updateProgress(h),
    l.cssMode)
  ) {
    const f = r.isHorizontal();
    if (s === 0) o[f ? "scrollLeft" : "scrollTop"] = -h;
    else {
      if (!r.support.smoothScroll)
        return (
          Le({ swiper: r, targetPosition: -h, side: f ? "left" : "top" }),
          !0
        );
      o.scrollTo({ [f ? "left" : "top"]: -h, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s === 0
      ? (r.setTransition(0),
        r.setTranslate(h),
        t && (r.emit("beforeTransitionStart", s, n), r.emit("transitionEnd")))
      : (r.setTransition(s),
        r.setTranslate(h),
        t && (r.emit("beforeTransitionStart", s, n), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (S) {
              !r ||
                r.destroyed ||
                (S.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  (r.animating = !1),
                  t && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var gt = {
  getTranslate: ut,
  setTranslate: ft,
  minTranslate: pt,
  maxTranslate: mt,
  translateTo: ht,
};
function vt(e, s) {
  const t = this;
  (t.params.cssMode ||
    ((t.wrapperEl.style.transitionDuration = `${e}ms`),
    (t.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    t.emit("setTransition", e, s));
}
function ke({ swiper: e, runCallbacks: s, direction: t, step: i }) {
  const { activeIndex: n, previousIndex: r } = e;
  let l = t;
  (l || (n > r ? (l = "next") : n < r ? (l = "prev") : (l = "reset")),
    e.emit(`transition${i}`),
    s && l === "reset"
      ? e.emit(`slideResetTransition${i}`)
      : s &&
        n !== r &&
        (e.emit(`slideChangeTransition${i}`),
        l === "next"
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`)));
}
function bt(e = !0, s) {
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    ke({ swiper: t, runCallbacks: e, direction: s, step: "Start" }));
}
function St(e = !0, s) {
  const t = this,
    { params: i } = t;
  ((t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      ke({ swiper: t, runCallbacks: e, direction: s, step: "End" })));
}
var yt = { setTransition: vt, transitionStart: bt, transitionEnd: St };
function Tt(e = 0, s, t = !0, i, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const r = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: o,
    snapGrid: a,
    slidesGrid: d,
    previousIndex: h,
    activeIndex: f,
    rtlTranslate: S,
    wrapperEl: u,
    enabled: m,
  } = r;
  if (
    (!m && !i && !n) ||
    r.destroyed ||
    (r.animating && o.preventInteractionOnTransition)
  )
    return !1;
  typeof s > "u" && (s = r.params.speed);
  const b = Math.min(r.params.slidesPerGroupSkip, l);
  let M = b + Math.floor((l - b) / r.params.slidesPerGroup);
  M >= a.length && (M = a.length - 1);
  const c = -a[M];
  if (o.normalizeSlideIndex)
    for (let z = 0; z < d.length; z += 1) {
      const x = -Math.floor(c * 100),
        k = Math.floor(d[z] * 100),
        C = Math.floor(d[z + 1] * 100);
      typeof d[z + 1] < "u"
        ? x >= k && x < C - (C - k) / 2
          ? (l = z)
          : x >= k && x < C && (l = z + 1)
        : x >= k && (l = z);
    }
  if (
    r.initialized &&
    l !== f &&
    ((!r.allowSlideNext &&
      (S
        ? c > r.translate && c > r.minTranslate()
        : c < r.translate && c < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        c > r.translate &&
        c > r.maxTranslate() &&
        (f || 0) !== l))
  )
    return !1;
  (l !== (h || 0) && t && r.emit("beforeSlideChangeStart"),
    r.updateProgress(c));
  let p;
  l > f ? (p = "next") : l < f ? (p = "prev") : (p = "reset");
  const g = r.virtual && r.params.virtual.enabled;
  if (!(g && n) && ((S && -c === r.translate) || (!S && c === r.translate)))
    return (
      r.updateActiveIndex(l),
      o.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      o.effect !== "slide" && r.setTranslate(c),
      p !== "reset" && (r.transitionStart(t, p), r.transitionEnd(t, p)),
      !1
    );
  if (o.cssMode) {
    const z = r.isHorizontal(),
      x = S ? c : -c;
    if (s === 0)
      (g &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        g && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              u[z ? "scrollLeft" : "scrollTop"] = x;
            }))
          : (u[z ? "scrollLeft" : "scrollTop"] = x),
        g &&
          requestAnimationFrame(() => {
            ((r.wrapperEl.style.scrollSnapType = ""),
              (r._immediateVirtual = !1));
          }));
    else {
      if (!r.support.smoothScroll)
        return (
          Le({ swiper: r, targetPosition: x, side: z ? "left" : "top" }),
          !0
        );
      u.scrollTo({ [z ? "left" : "top"]: x, behavior: "smooth" });
    }
    return !0;
  }
  const O = Oe().isSafari;
  return (
    g && !n && O && r.isElement && r.virtual.update(!1, !1, l),
    r.setTransition(s),
    r.setTranslate(c),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", s, i),
    r.transitionStart(t, p),
    s === 0
      ? r.transitionEnd(t, p)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (x) {
            !r ||
              r.destroyed ||
              (x.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd,
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(t, p)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function xt(e = 0, s, t = !0, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const n = this;
  if (n.destroyed) return;
  typeof s > "u" && (s = n.params.speed);
  const r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let l = e;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled) l = l + n.virtual.slidesBefore;
    else {
      let o;
      if (r) {
        const b = l * n.params.grid.rows;
        o = n.slides.find(
          (M) => M.getAttribute("data-swiper-slide-index") * 1 === b,
        ).column;
      } else o = n.getSlideIndexByData(l);
      const a = r
          ? Math.ceil(n.slides.length / n.params.grid.rows)
          : n.slides.length,
        {
          centeredSlides: d,
          slidesOffsetBefore: h,
          slidesOffsetAfter: f,
        } = n.params,
        S = d || !!h || !!f;
      let u = n.params.slidesPerView;
      u === "auto"
        ? (u = n.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
          S && u % 2 === 0 && (u = u + 1));
      let m = a - o < u;
      if (
        (S && (m = m || o < Math.ceil(u / 2)),
        i && S && n.params.slidesPerView !== "auto" && !r && (m = !1),
        m)
      ) {
        const b = S
          ? o < n.activeIndex
            ? "prev"
            : "next"
          : o - n.activeIndex - 1 < n.params.slidesPerView
            ? "next"
            : "prev";
        n.loopFix({
          direction: b,
          slideTo: !0,
          activeSlideIndex: b === "next" ? o + 1 : o - a + 1,
          slideRealIndex: b === "next" ? n.realIndex : void 0,
        });
      }
      if (r) {
        const b = l * n.params.grid.rows;
        l = n.slides.find(
          (M) => M.getAttribute("data-swiper-slide-index") * 1 === b,
        ).column;
      } else l = n.getSlideIndexByData(l);
    }
  return (
    requestAnimationFrame(() => {
      n.slideTo(l, s, t, i);
    }),
    n
  );
}
function wt(e, s = !0, t) {
  const i = this,
    { enabled: n, params: r, animating: l } = i;
  if (!n || i.destroyed) return i;
  typeof e > "u" && (e = i.params.speed);
  let o = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const a = i.activeIndex < r.slidesPerGroupSkip ? 1 : o,
    d = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !d && r.loopPreventsSliding) return !1;
    if (
      (i.loopFix({ direction: "next" }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + a, e, s, t);
        }),
        !0
      );
  }
  return r.rewind && i.isEnd
    ? i.slideTo(0, e, s, t)
    : i.slideTo(i.activeIndex + a, e, s, t);
}
function Et(e, s = !0, t) {
  const i = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: o,
      enabled: a,
      animating: d,
    } = i;
  if (!a || i.destroyed) return i;
  typeof e > "u" && (e = i.params.speed);
  const h = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (d && !h && n.loopPreventsSliding) return !1;
    (i.loopFix({ direction: "prev" }),
      (i._clientLeft = i.wrapperEl.clientLeft));
  }
  const f = o ? i.translate : -i.translate;
  function S(p) {
    return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
  }
  const u = S(f),
    m = r.map((p) => S(p)),
    b = n.freeMode && n.freeMode.enabled;
  let M = r[m.indexOf(u) - 1];
  if (typeof M > "u" && (n.cssMode || b)) {
    let p;
    (r.forEach((g, T) => {
      u >= g && (p = T);
    }),
      typeof p < "u" && (M = b ? r[p] : r[p > 0 ? p - 1 : p]));
  }
  let c = 0;
  if (
    (typeof M < "u" &&
      ((c = l.indexOf(M)),
      c < 0 && (c = i.activeIndex - 1),
      n.slidesPerView === "auto" &&
        n.slidesPerGroup === 1 &&
        n.slidesPerGroupAuto &&
        ((c = c - i.slidesPerViewDynamic("previous", !0) + 1),
        (c = Math.max(c, 0)))),
    n.rewind && i.isBeginning)
  ) {
    const p =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(p, e, s, t);
  } else if (n.loop && i.activeIndex === 0 && n.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(c, e, s, t);
      }),
      !0
    );
  return i.slideTo(c, e, s, t);
}
function Ct(e, s = !0, t) {
  const i = this;
  if (!i.destroyed)
    return (
      typeof e > "u" && (e = i.params.speed),
      i.slideTo(i.activeIndex, e, s, t)
    );
}
function Mt(e, s = !0, t, i = 0.5) {
  const n = this;
  if (n.destroyed) return;
  typeof e > "u" && (e = n.params.speed);
  let r = n.activeIndex;
  const l = Math.min(n.params.slidesPerGroupSkip, r),
    o = l + Math.floor((r - l) / n.params.slidesPerGroup),
    a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[o]) {
    const d = n.snapGrid[o],
      h = n.snapGrid[o + 1];
    a - d > (h - d) * i && (r += n.params.slidesPerGroup);
  } else {
    const d = n.snapGrid[o - 1],
      h = n.snapGrid[o];
    a - d <= (h - d) * i && (r -= n.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, n.slidesGrid.length - 1)),
    n.slideTo(r, e, s, t)
  );
}
function Lt() {
  const e = this;
  if (e.destroyed) return;
  const { params: s, slidesEl: t } = e,
    i = s.slidesPerView === "auto" ? e.slidesPerViewDynamic() : s.slidesPerView;
  let n = e.getSlideIndexWhenGrid(e.clickedIndex),
    r;
  const l = e.isElement ? "swiper-slide" : `.${s.slideClass}`,
    o = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (s.loop) {
    if (e.animating) return;
    ((r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      s.centeredSlides
        ? e.slideToLoop(r)
        : n >
            (o
              ? (e.slides.length - i) / 2 - (e.params.grid.rows - 1)
              : e.slides.length - i)
          ? (e.loopFix(),
            (n = e.getSlideIndex(
              F(t, `${l}[data-swiper-slide-index="${r}"]`)[0],
            )),
            ge(() => {
              e.slideTo(n);
            }))
          : e.slideTo(n));
  } else e.slideTo(n);
}
var Pt = {
  slideTo: Tt,
  slideToLoop: xt,
  slideNext: wt,
  slidePrev: Et,
  slideReset: Ct,
  slideToClosest: Mt,
  slideToClickedSlide: Lt,
};
function It(e, s) {
  const t = this,
    { params: i, slidesEl: n } = t;
  if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
  const r = () => {
      F(n, `.${i.slideClass}, swiper-slide`).forEach((m, b) => {
        m.setAttribute("data-swiper-slide-index", b);
      });
    },
    l = () => {
      const u = F(n, `.${i.slideBlankClass}`);
      (u.forEach((m) => {
        m.remove();
      }),
        u.length > 0 && (t.recalcSlides(), t.updateSlides()));
    },
    o = t.grid && i.grid && i.grid.rows > 1;
  i.loopAddBlankSlides && (i.slidesPerGroup > 1 || o) && l();
  const a = i.slidesPerGroup * (o ? i.grid.rows : 1),
    d = t.slides.length % a !== 0,
    h = o && t.slides.length % i.grid.rows !== 0,
    f = (u) => {
      for (let m = 0; m < u; m += 1) {
        const b = t.isElement
          ? X("swiper-slide", [i.slideBlankClass])
          : X("div", [i.slideClass, i.slideBlankClass]);
        t.slidesEl.append(b);
      }
    };
  if (d) {
    if (i.loopAddBlankSlides) {
      const u = a - (t.slides.length % a);
      (f(u), t.recalcSlides(), t.updateSlides());
    } else
      te(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    r();
  } else if (h) {
    if (i.loopAddBlankSlides) {
      const u = i.grid.rows - (t.slides.length % i.grid.rows);
      (f(u), t.recalcSlides(), t.updateSlides());
    } else
      te(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    r();
  } else r();
  const S = i.centeredSlides || !!i.slidesOffsetBefore || !!i.slidesOffsetAfter;
  t.loopFix({ slideRealIndex: e, direction: S ? void 0 : "next", initial: s });
}
function zt({
  slideRealIndex: e,
  slideTo: s = !0,
  direction: t,
  setTranslate: i,
  activeSlideIndex: n,
  initial: r,
  byController: l,
  byMousewheel: o,
} = {}) {
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: d,
      allowSlidePrev: h,
      allowSlideNext: f,
      slidesEl: S,
      params: u,
    } = a,
    {
      centeredSlides: m,
      slidesOffsetBefore: b,
      slidesOffsetAfter: M,
      initialSlide: c,
    } = u,
    p = m || !!b || !!M;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && u.virtual.enabled)
  ) {
    (s &&
      (!p && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : p && a.snapIndex < u.slidesPerView
          ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
          : a.snapIndex === a.snapGrid.length - 1 &&
            a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = h),
      (a.allowSlideNext = f),
      a.emit("loopFix"));
    return;
  }
  let g = u.slidesPerView;
  g === "auto"
    ? (g = a.slidesPerViewDynamic())
    : ((g = Math.ceil(parseFloat(u.slidesPerView, 10))),
      p && g % 2 === 0 && (g = g + 1));
  const T = u.slidesPerGroupAuto ? g : u.slidesPerGroup;
  let E = p ? Math.max(T, Math.ceil(g / 2)) : T;
  (E % T !== 0 && (E += T - (E % T)),
    (E += u.loopAdditionalSlides),
    (a.loopedSlides = E));
  const O = a.grid && u.grid && u.grid.rows > 1;
  d.length < g + E || (a.params.effect === "cards" && d.length < g + E * 2)
    ? te(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : O &&
      u.grid.fill === "row" &&
      te(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      );
  const z = [],
    x = [],
    k = O ? Math.ceil(d.length / u.grid.rows) : d.length,
    C = r && k - c < g && !p;
  let v = C ? c : a.activeIndex;
  typeof n > "u"
    ? (n = a.getSlideIndex(
        d.find((P) => P.classList.contains(u.slideActiveClass)),
      ))
    : (v = n);
  const y = t === "next" || !t,
    w = t === "prev" || !t;
  let L = 0,
    I = 0;
  const D = (O ? d[n].column : n) + (p && typeof i > "u" ? -g / 2 + 0.5 : 0);
  if (D < E) {
    L = Math.max(E - D, T);
    for (let P = 0; P < E - D; P += 1) {
      const _ = P - Math.floor(P / k) * k;
      if (O) {
        const B = k - _ - 1;
        for (let q = d.length - 1; q >= 0; q -= 1)
          d[q].column === B && z.push(q);
      } else z.push(k - _ - 1);
    }
  } else if (D + g > k - E) {
    ((I = Math.max(D - (k - E * 2), T)), C && (I = Math.max(I, g - k + c + 1)));
    for (let P = 0; P < I; P += 1) {
      const _ = P - Math.floor(P / k) * k;
      O
        ? d.forEach((B, q) => {
            B.column === _ && x.push(q);
          })
        : x.push(_);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    a.params.effect === "cards" &&
      d.length < g + E * 2 &&
      (x.includes(n) && x.splice(x.indexOf(n), 1),
      z.includes(n) && z.splice(z.indexOf(n), 1)),
    w &&
      z.forEach((P) => {
        ((d[P].swiperLoopMoveDOM = !0),
          S.prepend(d[P]),
          (d[P].swiperLoopMoveDOM = !1));
      }),
    y &&
      x.forEach((P) => {
        ((d[P].swiperLoopMoveDOM = !0),
          S.append(d[P]),
          (d[P].swiperLoopMoveDOM = !1));
      }),
    a.recalcSlides(),
    u.slidesPerView === "auto"
      ? a.updateSlides()
      : O &&
        ((z.length > 0 && w) || (x.length > 0 && y)) &&
        a.slides.forEach((P, _) => {
          a.grid.updateSlide(_, P, a.slides);
        }),
    u.watchSlidesProgress && a.updateSlidesOffset(),
    s)
  ) {
    if (z.length > 0 && w) {
      if (typeof e > "u") {
        const P = a.slidesGrid[v],
          B = a.slidesGrid[v + L] - P;
        o
          ? a.setTranslate(a.translate - B)
          : (a.slideTo(v + Math.ceil(L), 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - B),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - B)));
      } else if (i) {
        const P = O ? z.length / u.grid.rows : z.length;
        (a.slideTo(a.activeIndex + P, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate));
      }
    } else if (x.length > 0 && y)
      if (typeof e > "u") {
        const P = a.slidesGrid[v],
          B = a.slidesGrid[v - I] - P;
        o
          ? a.setTranslate(a.translate - B)
          : (a.slideTo(v - I, 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - B),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - B)));
      } else {
        const P = O ? x.length / u.grid.rows : x.length;
        a.slideTo(a.activeIndex - P, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = h),
    (a.allowSlideNext = f),
    a.controller && a.controller.control && !l)
  ) {
    const P = {
      slideRealIndex: e,
      direction: t,
      setTranslate: i,
      activeSlideIndex: n,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((_) => {
          !_.destroyed &&
            _.params.loop &&
            _.loopFix({
              ...P,
              slideTo: _.params.slidesPerView === u.slidesPerView ? s : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...P,
          slideTo:
            a.controller.control.params.slidesPerView === u.slidesPerView
              ? s
              : !1,
        });
  }
  a.emit("loopFix");
}
function Ot() {
  const e = this,
    { params: s, slidesEl: t } = e;
  if (!s.loop || !t || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const i = [];
  (e.slides.forEach((n) => {
    const r =
      typeof n.swiperSlideIndex > "u"
        ? n.getAttribute("data-swiper-slide-index") * 1
        : n.swiperSlideIndex;
    i[r] = n;
  }),
    e.slides.forEach((n) => {
      n.removeAttribute("data-swiper-slide-index");
    }),
    i.forEach((n) => {
      t.append(n);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0));
}
var kt = { loopCreate: It, loopFix: zt, loopDestroy: Ot };
function At(e) {
  const s = this;
  if (
    !s.params.simulateTouch ||
    (s.params.watchOverflow && s.isLocked) ||
    s.params.cssMode
  )
    return;
  const t = s.params.touchEventsTarget === "container" ? s.el : s.wrapperEl;
  (s.isElement && (s.__preventObserver__ = !0),
    (t.style.cursor = "move"),
    (t.style.cursor = e ? "grabbing" : "grab"),
    s.isElement &&
      requestAnimationFrame(() => {
        s.__preventObserver__ = !1;
      }));
}
function _t() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Dt = { setGrabCursor: At, unsetGrabCursor: _t };
function Gt(e, s = this) {
  function t(i) {
    if (!i || i === N() || i === G()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const n = i.closest(e);
    return !n && !i.getRootNode ? null : n || t(i.getRootNode().host);
  }
  return t(s);
}
function Te(e, s, t) {
  const i = G(),
    { params: n } = e,
    r = n.edgeSwipeDetection,
    l = n.edgeSwipeThreshold;
  return r && (t <= l || t >= i.innerWidth - l)
    ? r === "prevent"
      ? (s.preventDefault(), !0)
      : !1
    : !0;
}
function Bt(e) {
  const s = this,
    t = N();
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  const n = s.touchEventsData;
  if (i.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== i.pointerId) return;
    n.pointerId = i.pointerId;
  } else
    i.type === "touchstart" &&
      i.targetTouches.length === 1 &&
      (n.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    Te(s, i, i.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: l, enabled: o } = s;
  if (
    !o ||
    (!r.simulateTouch && i.pointerType === "mouse") ||
    (s.animating && r.preventInteractionOnTransition)
  )
    return;
  !s.animating && r.cssMode && r.loop && s.loopFix();
  let a = i.target;
  if (
    (r.touchEventsTarget === "wrapper" && !Re(a, s.wrapperEl)) ||
    ("which" in i && i.which === 3) ||
    ("button" in i && i.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const d = !!r.noSwipingClass && r.noSwipingClass !== "",
    h = i.composedPath ? i.composedPath() : i.path;
  d && i.target && i.target.shadowRoot && h && (a = h[0]);
  const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    S = !!(i.target && i.target.shadowRoot);
  if (r.noSwiping && (S ? Gt(f, a) : a.closest(f))) {
    s.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
  ((l.currentX = i.pageX), (l.currentY = i.pageY));
  const u = l.currentX,
    m = l.currentY;
  if (!Te(s, i, u)) return;
  (Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = u),
    (l.startY = m),
    (n.touchStartTime = ee()),
    (s.allowClick = !0),
    s.updateSize(),
    (s.swipeDirection = void 0),
    r.threshold > 0 && (n.allowThresholdMove = !1));
  let b = !0;
  (a.matches(n.focusableElements) &&
    ((b = !1), a.nodeName === "SELECT" && (n.isTouched = !1)),
    t.activeElement &&
      t.activeElement.matches(n.focusableElements) &&
      t.activeElement !== a &&
      (i.pointerType === "mouse" ||
        (i.pointerType !== "mouse" && !a.matches(n.focusableElements))) &&
      t.activeElement.blur());
  const M = b && s.allowTouchMove && r.touchStartPreventDefault;
  ((r.touchStartForcePreventDefault || M) &&
    !a.isContentEditable &&
    i.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      s.freeMode &&
      s.animating &&
      !r.cssMode &&
      s.freeMode.onTouchStart(),
    s.emit("touchStart", i));
}
function $t(e) {
  const s = N(),
    t = this,
    i = t.touchEventsData,
    { params: n, touches: r, rtlTranslate: l, enabled: o } = t;
  if (!o || (!n.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (i.touchId !== null || a.pointerId !== i.pointerId))
  )
    return;
  let d;
  if (a.type === "touchmove") {
    if (
      ((d = [...a.changedTouches].find((E) => E.identifier === i.touchId)),
      !d || d.identifier !== i.touchId)
    )
      return;
  } else d = a;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", a);
    return;
  }
  const h = d.pageX,
    f = d.pageY;
  if (a.preventedByNestedSwiper) {
    ((r.startX = h), (r.startY = f));
    return;
  }
  if (!t.allowTouchMove) {
    (a.target.matches(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(r, { startX: h, startY: f, currentX: h, currentY: f }),
        (i.touchStartTime = ee())));
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop)
    if (t.isVertical()) {
      if (
        (f < r.startY && t.translate <= t.maxTranslate()) ||
        (f > r.startY && t.translate >= t.minTranslate())
      ) {
        ((i.isTouched = !1), (i.isMoved = !1));
        return;
      }
    } else {
      if (
        l &&
        ((h > r.startX && -t.translate <= t.maxTranslate()) ||
          (h < r.startX && -t.translate >= t.minTranslate()))
      )
        return;
      if (
        !l &&
        ((h < r.startX && t.translate <= t.maxTranslate()) ||
          (h > r.startX && t.translate >= t.minTranslate()))
      )
        return;
    }
  if (
    (s.activeElement &&
      s.activeElement.matches(i.focusableElements) &&
      s.activeElement !== a.target &&
      a.pointerType !== "mouse" &&
      s.activeElement.blur(),
    s.activeElement &&
      a.target === s.activeElement &&
      a.target.matches(i.focusableElements))
  ) {
    ((i.isMoved = !0), (t.allowClick = !1));
    return;
  }
  (i.allowTouchCallbacks && t.emit("touchMove", a),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = h),
    (r.currentY = f));
  const S = r.currentX - r.startX,
    u = r.currentY - r.startY;
  if (t.params.threshold && Math.sqrt(S ** 2 + u ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let E;
    (t.isHorizontal() && r.currentY === r.startY) ||
    (t.isVertical() && r.currentX === r.startX)
      ? (i.isScrolling = !1)
      : S * S + u * u >= 25 &&
        ((E = (Math.atan2(Math.abs(u), Math.abs(S)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? E > n.touchAngle
          : 90 - E > n.touchAngle));
  }
  if (
    (i.isScrolling && t.emit("touchMoveOpposite", a),
    typeof i.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (i.startMoving = !0),
    i.isScrolling ||
      (a.type === "touchmove" && i.preventTouchMoveFromPointerMove))
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  ((t.allowClick = !1),
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation());
  let m = t.isHorizontal() ? S : u,
    b = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  (n.oneWayMovement &&
    ((m = Math.abs(m) * (l ? 1 : -1)), (b = Math.abs(b) * (l ? 1 : -1))),
    (r.diff = m),
    (m *= n.touchRatio),
    l && ((m = -m), (b = -b)));
  const M = t.touchesDirection;
  ((t.swipeDirection = m > 0 ? "prev" : "next"),
    (t.touchesDirection = b > 0 ? "prev" : "next"));
  const c = t.params.loop && !n.cssMode,
    p =
      (t.touchesDirection === "next" && t.allowSlideNext) ||
      (t.touchesDirection === "prev" && t.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (c && p && t.loopFix({ direction: t.swipeDirection }),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      t.wrapperEl.dispatchEvent(E);
    }
    ((i.allowMomentumBounce = !1),
      n.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", a));
  }
  if (
    (new Date().getTime(),
    n._loopSwapReset !== !1 &&
      i.isMoved &&
      i.allowThresholdMove &&
      M !== t.touchesDirection &&
      c &&
      p &&
      Math.abs(m) >= 1)
  ) {
    (Object.assign(r, {
      startX: h,
      startY: f,
      currentX: h,
      currentY: f,
      startTranslate: i.currentTranslate,
    }),
      (i.loopSwapReset = !0),
      (i.startTranslate = i.currentTranslate));
    return;
  }
  (t.emit("sliderMove", a),
    (i.isMoved = !0),
    (i.currentTranslate = m + i.startTranslate));
  let g = !0,
    T = n.resistanceRatio;
  if (
    (n.touchReleaseOnEdges && (T = 0),
    m > 0
      ? (c &&
          p &&
          i.allowThresholdMove &&
          i.currentTranslate >
            (n.centeredSlides
              ? t.minTranslate() -
                t.slidesSizesGrid[t.activeIndex + 1] -
                (n.slidesPerView !== "auto" &&
                t.slides.length - n.slidesPerView >= 2
                  ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween
                  : 0) -
                t.params.spaceBetween
              : t.minTranslate()) &&
          t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > t.minTranslate() &&
          ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              t.minTranslate() -
              1 +
              (-t.minTranslate() + i.startTranslate + m) ** T)))
      : m < 0 &&
        (c &&
          p &&
          i.allowThresholdMove &&
          i.currentTranslate <
            (n.centeredSlides
              ? t.maxTranslate() +
                t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                t.params.spaceBetween +
                (n.slidesPerView !== "auto" &&
                t.slides.length - n.slidesPerView >= 2
                  ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                    t.params.spaceBetween
                  : 0)
              : t.maxTranslate()) &&
          t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              t.slides.length -
              (n.slidesPerView === "auto"
                ? t.slidesPerViewDynamic()
                : Math.ceil(parseFloat(n.slidesPerView, 10))),
          }),
        i.currentTranslate < t.maxTranslate() &&
          ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              t.maxTranslate() +
              1 -
              (t.maxTranslate() - i.startTranslate - m) ** T))),
    g && (a.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    n.threshold > 0)
  )
    if (Math.abs(m) > n.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        ((i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          (r.diff = t.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY));
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !n.followFinger ||
    n.cssMode ||
    (((n.freeMode && n.freeMode.enabled && t.freeMode) ||
      n.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate));
}
function Vt(e) {
  const s = this,
    t = s.touchEventsData;
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  let n;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (
      ((n = [...i.changedTouches].find((E) => E.identifier === t.touchId)),
      !n || n.identifier !== t.touchId)
    )
      return;
  } else {
    if (t.touchId !== null || i.pointerId !== t.pointerId) return;
    n = i;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      i.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(i.type) &&
      (s.browser.isSafari || s.browser.isWebView)
    )
  )
    return;
  ((t.pointerId = null), (t.touchId = null));
  const {
    params: l,
    touches: o,
    rtlTranslate: a,
    slidesGrid: d,
    enabled: h,
  } = s;
  if (!h || (!l.simulateTouch && i.pointerType === "mouse")) return;
  if (
    (t.allowTouchCallbacks && s.emit("touchEnd", i),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    (t.isMoved && l.grabCursor && s.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1));
    return;
  }
  l.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (s.allowSlideNext === !0 || s.allowSlidePrev === !0) &&
    s.setGrabCursor(!1);
  const f = ee(),
    S = f - t.touchStartTime;
  if (s.allowClick) {
    const E = i.path || (i.composedPath && i.composedPath());
    (s.updateClickedSlide((E && E[0]) || i.target, E),
      s.emit("tap click", i),
      S < 300 &&
        f - t.lastClickTime < 300 &&
        s.emit("doubleTap doubleClick", i));
  }
  if (
    ((t.lastClickTime = ee()),
    ge(() => {
      s.destroyed || (s.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !s.swipeDirection ||
      (o.diff === 0 && !t.loopSwapReset) ||
      (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
  ) {
    ((t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1));
    return;
  }
  ((t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1));
  let u;
  if (
    (l.followFinger
      ? (u = a ? s.translate : -s.translate)
      : (u = -t.currentTranslate),
    l.cssMode)
  )
    return;
  if (l.freeMode && l.freeMode.enabled) {
    s.freeMode.onTouchEnd({ currentPos: u });
    return;
  }
  const m = u >= -s.maxTranslate() && !s.params.loop;
  let b = 0,
    M = s.slidesSizesGrid[0];
  for (
    let E = 0;
    E < d.length;
    E += E < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
  ) {
    const O = E < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof d[E + O] < "u"
      ? (m || (u >= d[E] && u < d[E + O])) && ((b = E), (M = d[E + O] - d[E]))
      : (m || u >= d[E]) && ((b = E), (M = d[d.length - 1] - d[d.length - 2]));
  }
  let c = null,
    p = null;
  l.rewind &&
    (s.isBeginning
      ? (p =
          l.virtual && l.virtual.enabled && s.virtual
            ? s.virtual.slides.length - 1
            : s.slides.length - 1)
      : s.isEnd && (c = 0));
  const g = (u - d[b]) / M,
    T = b < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (S > l.longSwipesMs) {
    if (!l.longSwipes) {
      s.slideTo(s.activeIndex);
      return;
    }
    (s.swipeDirection === "next" &&
      (g >= l.longSwipesRatio
        ? s.slideTo(l.rewind && s.isEnd ? c : b + T)
        : s.slideTo(b)),
      s.swipeDirection === "prev" &&
        (g > 1 - l.longSwipesRatio
          ? s.slideTo(b + T)
          : p !== null && g < 0 && Math.abs(g) > l.longSwipesRatio
            ? s.slideTo(p)
            : s.slideTo(b)));
  } else {
    if (!l.shortSwipes) {
      s.slideTo(s.activeIndex);
      return;
    }
    s.navigation &&
    (i.target === s.navigation.nextEl || i.target === s.navigation.prevEl)
      ? i.target === s.navigation.nextEl
        ? s.slideTo(b + T)
        : s.slideTo(b)
      : (s.swipeDirection === "next" && s.slideTo(c !== null ? c : b + T),
        s.swipeDirection === "prev" && s.slideTo(p !== null ? p : b));
  }
}
function xe() {
  const e = this,
    { params: s, el: t } = e;
  if (t && t.offsetWidth === 0) return;
  s.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e,
    l = e.virtual && e.params.virtual.enabled;
  ((e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses());
  const o = l && s.loop;
  ((s.slidesPerView === "auto" || s.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !o
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = n),
    (e.allowSlideNext = i),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow());
}
function Ht(e) {
  const s = this;
  s.enabled &&
    (s.allowClick ||
      (s.params.preventClicks && e.preventDefault(),
      s.params.preventClicksPropagation &&
        s.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Ft() {
  const e = this,
    { wrapperEl: s, rtlTranslate: t, enabled: i } = e;
  if (!i) return;
  ((e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -s.scrollLeft)
      : (e.translate = -s.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses());
  let n;
  const r = e.maxTranslate() - e.minTranslate();
  (r === 0 ? (n = 0) : (n = (e.translate - e.minTranslate()) / r),
    n !== e.progress && e.updateProgress(t ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1));
}
function Nt(e) {
  const s = this;
  (J(s, e.target),
    !(
      s.params.cssMode ||
      (s.params.slidesPerView !== "auto" && !s.params.autoHeight)
    ) && s.update());
}
function qt() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Ae = (e, s) => {
  const t = N(),
    { params: i, el: n, wrapperEl: r, device: l } = e,
    o = !!i.nested,
    a = s === "on" ? "addEventListener" : "removeEventListener",
    d = s;
  !n ||
    typeof n == "string" ||
    (t[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
    n[a]("touchstart", e.onTouchStart, { passive: !1 }),
    n[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    t[a]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
    t[a]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
    t[a]("touchend", e.onTouchEnd, { passive: !0 }),
    t[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    t[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    t[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    t[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    t[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    t[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      n[a]("click", e.onClick, !0),
    i.cssMode && r[a]("scroll", e.onScroll),
    i.updateOnWindowResize
      ? e[d](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          xe,
          !0,
        )
      : e[d]("observerUpdate", xe, !0),
    n[a]("load", e.onLoad, { capture: !0 }));
};
function Rt() {
  const e = this,
    { params: s } = e;
  ((e.onTouchStart = Bt.bind(e)),
    (e.onTouchMove = $t.bind(e)),
    (e.onTouchEnd = Vt.bind(e)),
    (e.onDocumentTouchStart = qt.bind(e)),
    s.cssMode && (e.onScroll = Ft.bind(e)),
    (e.onClick = Ht.bind(e)),
    (e.onLoad = Nt.bind(e)),
    Ae(e, "on"));
}
function Wt() {
  Ae(this, "off");
}
var jt = { attachEvents: Rt, detachEvents: Wt };
const we = (e, s) => e.grid && s.grid && s.grid.rows > 1;
function Yt() {
  const e = this,
    { realIndex: s, initialized: t, params: i, el: n } = e,
    r = i.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const l = N(),
    o =
      i.breakpointsBase === "window" || !i.breakpointsBase
        ? i.breakpointsBase
        : "container",
    a =
      ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase
        ? e.el
        : l.querySelector(i.breakpointsBase),
    d = e.getBreakpoint(r, o, a);
  if (!d || e.currentBreakpoint === d) return;
  const f = (d in r ? r[d] : void 0) || e.originalParams,
    S = we(e, i),
    u = we(e, f),
    m = e.params.grabCursor,
    b = f.grabCursor,
    M = i.enabled;
  (S && !u
    ? (n.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !S &&
      u &&
      (n.classList.add(`${i.containerModifierClass}grid`),
      ((f.grid.fill && f.grid.fill === "column") ||
        (!f.grid.fill && i.grid.fill === "column")) &&
        n.classList.add(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    m && !b ? e.unsetGrabCursor() : !m && b && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((O) => {
      if (typeof f[O] > "u") return;
      const z = i[O] && i[O].enabled,
        x = f[O] && f[O].enabled;
      (z && !x && e[O].disable(), !z && x && e[O].enable());
    }));
  const c = f.direction && f.direction !== i.direction,
    p = i.loop && (f.slidesPerView !== i.slidesPerView || c),
    g = i.loop;
  (c && t && e.changeDirection(), V(e.params, f));
  const T = e.params.enabled,
    E = e.params.loop;
  (Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    M && !T ? e.disable() : !M && T && e.enable(),
    (e.currentBreakpoint = d),
    e.emit("_beforeBreakpoint", f),
    t &&
      (p
        ? (e.loopDestroy(), e.loopCreate(s), e.updateSlides())
        : !g && E
          ? (e.loopCreate(s), e.updateSlides())
          : g && !E && e.loopDestroy()),
    e.emit("breakpoint", f));
}
function Xt(e, s = "window", t) {
  if (!e || (s === "container" && !t)) return;
  let i = !1;
  const n = G(),
    r = s === "window" ? n.innerHeight : t.clientHeight,
    l = Object.keys(e).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const a = parseFloat(o.substr(1));
        return { value: r * a, point: o };
      }
      return { value: o, point: o };
    });
  l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
  for (let o = 0; o < l.length; o += 1) {
    const { point: a, value: d } = l[o];
    s === "window"
      ? n.matchMedia(`(min-width: ${d}px)`).matches && (i = a)
      : d <= t.clientWidth && (i = a);
  }
  return i || "max";
}
var Ut = { setBreakpoint: Yt, getBreakpoint: Xt };
function Kt(e, s) {
  const t = [];
  return (
    e.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((n) => {
            i[n] && t.push(s + n);
          })
        : typeof i == "string" && t.push(s + i);
    }),
    t
  );
}
function Qt() {
  const e = this,
    { classNames: s, params: t, rtl: i, el: n, device: r } = e,
    l = Kt(
      [
        "initialized",
        t.direction,
        { "free-mode": e.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: i },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
        { "watch-progress": t.watchSlidesProgress },
      ],
      t.containerModifierClass,
    );
  (s.push(...l), n.classList.add(...s), e.emitContainerClasses());
}
function Zt() {
  const e = this,
    { el: s, classNames: t } = e;
  !s ||
    typeof s == "string" ||
    (s.classList.remove(...t), e.emitContainerClasses());
}
var Jt = { addClasses: Qt, removeClasses: Zt };
function es() {
  const e = this,
    { isLocked: s, params: t } = e,
    { slidesOffsetBefore: i } = t;
  if (i) {
    const n = e.slides.length - 1,
      r = e.slidesGrid[n] + e.slidesSizesGrid[n] + i * 2;
    e.isLocked = e.size > r;
  } else e.isLocked = e.snapGrid.length === 1;
  (t.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    t.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    s && s !== e.isLocked && (e.isEnd = !1),
    s !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"));
}
var ts = { checkOverflow: es },
  Ee = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function ss(e, s) {
  return function (i = {}) {
    const n = Object.keys(i)[0],
      r = i[n];
    if (typeof r != "object" || r === null) {
      V(s, i);
      return;
    }
    if (
      (e[n] === !0 && (e[n] = { enabled: !0 }),
      n === "navigation" &&
        e[n] &&
        e[n].enabled &&
        !e[n].prevEl &&
        !e[n].nextEl &&
        (e[n].auto = !0),
      ["pagination", "scrollbar"].indexOf(n) >= 0 &&
        e[n] &&
        e[n].enabled &&
        !e[n].el &&
        (e[n].auto = !0),
      !(n in e && "enabled" in r))
    ) {
      V(s, i);
      return;
    }
    (typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0),
      e[n] || (e[n] = { enabled: !1 }),
      V(s, i));
  };
}
const de = {
    eventsEmitter: Je,
    update: ct,
    translate: gt,
    transition: yt,
    slide: Pt,
    loop: kt,
    grabCursor: Dt,
    events: jt,
    breakpoints: Ut,
    checkOverflow: ts,
    classes: Jt,
  },
  ce = {};
class H {
  constructor(...s) {
    let t, i;
    (s.length === 1 &&
    s[0].constructor &&
    Object.prototype.toString.call(s[0]).slice(8, -1) === "Object"
      ? (i = s[0])
      : ([t, i] = s),
      i || (i = {}),
      (i = V({}, i)),
      t && !i.el && (i.el = t));
    const n = N();
    if (
      i.el &&
      typeof i.el == "string" &&
      n.querySelectorAll(i.el).length > 1
    ) {
      const a = [];
      return (
        n.querySelectorAll(i.el).forEach((d) => {
          const h = V({}, i, { el: d });
          a.push(new H(h));
        }),
        a
      );
    }
    const r = this;
    ((r.__swiper__ = !0),
      (r.support = Ie()),
      (r.device = ze({ userAgent: i.userAgent })),
      (r.browser = Oe()),
      (r.eventsListeners = {}),
      (r.eventsAnyListeners = []),
      (r.modules = [...r.__modules__]),
      i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules));
    const l = {};
    r.modules.forEach((a) => {
      a({
        params: i,
        swiper: r,
        extendParams: ss(i, l),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r),
      });
    });
    const o = V({}, Ee, l);
    return (
      (r.params = V({}, o, ce, i)),
      (r.originalParams = V({}, r.params)),
      (r.passedParams = V({}, i)),
      r.params &&
        r.params.on &&
        Object.keys(r.params.on).forEach((a) => {
          r.on(a, r.params.on[a]);
        }),
      r.params && r.params.onAny && r.onAny(r.params.onAny),
      Object.assign(r, {
        enabled: r.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return r.params.direction === "horizontal";
        },
        isVertical() {
          return r.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      r.emit("_swiper"),
      r.params.init && r.init(),
      r
    );
  }
  getDirectionLabel(s) {
    return this.isHorizontal()
      ? s
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[s];
  }
  getSlideIndex(s) {
    const { slidesEl: t, params: i } = this,
      n = F(t, `.${i.slideClass}, swiper-slide`),
      r = se(n[0]);
    return se(s) - r;
  }
  getSlideIndexByData(s) {
    return this.getSlideIndex(
      this.slides.find(
        (t) => t.getAttribute("data-swiper-slide-index") * 1 === s,
      ),
    );
  }
  getSlideIndexWhenGrid(s) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === "column"
          ? (s = Math.floor(s / this.params.grid.rows))
          : this.params.grid.fill === "row" &&
            (s = s % Math.ceil(this.slides.length / this.params.grid.rows))),
      s
    );
  }
  recalcSlides() {
    const s = this,
      { slidesEl: t, params: i } = s;
    s.slides = F(t, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const s = this;
    s.enabled ||
      ((s.enabled = !0),
      s.params.grabCursor && s.setGrabCursor(),
      s.emit("enable"));
  }
  disable() {
    const s = this;
    s.enabled &&
      ((s.enabled = !1),
      s.params.grabCursor && s.unsetGrabCursor(),
      s.emit("disable"));
  }
  setProgress(s, t) {
    const i = this;
    s = Math.min(Math.max(s, 0), 1);
    const n = i.minTranslate(),
      l = (i.maxTranslate() - n) * s + n;
    (i.translateTo(l, typeof t > "u" ? 0 : t),
      i.updateActiveIndex(),
      i.updateSlidesClasses());
  }
  emitContainerClasses() {
    const s = this;
    if (!s.params._emitClasses || !s.el) return;
    const t = s.el.className
      .split(" ")
      .filter(
        (i) =>
          i.indexOf("swiper") === 0 ||
          i.indexOf(s.params.containerModifierClass) === 0,
      );
    s.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(s) {
    const t = this;
    return t.destroyed
      ? ""
      : s.className
          .split(" ")
          .filter(
            (i) =>
              i.indexOf("swiper-slide") === 0 ||
              i.indexOf(t.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const s = this;
    if (!s.params._emitClasses || !s.el) return;
    const t = [];
    (s.slides.forEach((i) => {
      const n = s.getSlideClasses(i);
      (t.push({ slideEl: i, classNames: n }), s.emit("_slideClass", i, n));
    }),
      s.emit("_slideClasses", t));
  }
  slidesPerViewDynamic(s = "current", t = !1) {
    const i = this,
      {
        params: n,
        slides: r,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: a,
        activeIndex: d,
      } = i;
    let h = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let f = r[d] ? Math.ceil(r[d].swiperSlideSize) : 0,
        S;
      for (let u = d + 1; u < r.length; u += 1)
        r[u] &&
          !S &&
          ((f += Math.ceil(r[u].swiperSlideSize)), (h += 1), f > a && (S = !0));
      for (let u = d - 1; u >= 0; u -= 1)
        r[u] &&
          !S &&
          ((f += r[u].swiperSlideSize), (h += 1), f > a && (S = !0));
    } else if (s === "current")
      for (let f = d + 1; f < r.length; f += 1)
        (t ? l[f] + o[f] - l[d] < a : l[f] - l[d] < a) && (h += 1);
    else for (let f = d - 1; f >= 0; f -= 1) l[d] - l[f] < a && (h += 1);
    return h;
  }
  update() {
    const s = this;
    if (!s || s.destroyed) return;
    const { snapGrid: t, params: i } = s;
    (i.breakpoints && s.setBreakpoint(),
      [...s.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && J(s, l);
      }),
      s.updateSize(),
      s.updateSlides(),
      s.updateProgress(),
      s.updateSlidesClasses());
    function n() {
      const l = s.rtlTranslate ? s.translate * -1 : s.translate,
        o = Math.min(Math.max(l, s.maxTranslate()), s.minTranslate());
      (s.setTranslate(o), s.updateActiveIndex(), s.updateSlidesClasses());
    }
    let r;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      (n(), i.autoHeight && s.updateAutoHeight());
    else {
      if (
        (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
        s.isEnd &&
        !i.centeredSlides
      ) {
        const l = s.virtual && i.virtual.enabled ? s.virtual.slides : s.slides;
        r = s.slideTo(l.length - 1, 0, !1, !0);
      } else r = s.slideTo(s.activeIndex, 0, !1, !0);
      r || n();
    }
    (i.watchOverflow && t !== s.snapGrid && s.checkOverflow(),
      s.emit("update"));
  }
  changeDirection(s, t = !0) {
    const i = this,
      n = i.params.direction;
    return (
      s || (s = n === "horizontal" ? "vertical" : "horizontal"),
      s === n ||
        (s !== "horizontal" && s !== "vertical") ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${n}`),
        i.el.classList.add(`${i.params.containerModifierClass}${s}`),
        i.emitContainerClasses(),
        (i.params.direction = s),
        i.slides.forEach((r) => {
          s === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        i.emit("changeDirection"),
        t && i.update()),
      i
    );
  }
  changeLanguageDirection(s) {
    const t = this;
    (t.rtl && s === "rtl") ||
      (!t.rtl && s === "ltr") ||
      ((t.rtl = s === "rtl"),
      (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
      t.rtl
        ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "rtl"))
        : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "ltr")),
      t.update());
  }
  mount(s) {
    const t = this;
    if (t.mounted) return !0;
    let i = s || t.params.el;
    if ((typeof i == "string" && (i = document.querySelector(i)), !i))
      return !1;
    ((i.swiper = t),
      i.parentNode &&
        i.parentNode.host &&
        i.parentNode.host.nodeName ===
          t.params.swiperElementNodeName.toUpperCase() &&
        (t.isElement = !0));
    const n = () =>
      `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l =
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(n())
        : F(i, n())[0];
    return (
      !l &&
        t.params.createElements &&
        ((l = X("div", t.params.wrapperClass)),
        i.append(l),
        F(i, `.${t.params.slideClass}`).forEach((o) => {
          l.append(o);
        })),
      Object.assign(t, {
        el: i,
        wrapperEl: l,
        slidesEl:
          t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : l,
        hostEl: t.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || W(i, "direction") === "rtl",
        rtlTranslate:
          t.params.direction === "horizontal" &&
          (i.dir.toLowerCase() === "rtl" || W(i, "direction") === "rtl"),
        wrongRTL: W(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(s) {
    const t = this;
    if (t.initialized || t.mount(s) === !1) return t;
    (t.emit("beforeInit"),
      t.params.breakpoints && t.setBreakpoint(),
      t.addClasses(),
      t.updateSize(),
      t.updateSlides(),
      t.params.watchOverflow && t.checkOverflow(),
      t.params.grabCursor && t.enabled && t.setGrabCursor(),
      t.params.loop && t.virtual && t.params.virtual.enabled
        ? t.slideTo(
            t.params.initialSlide + t.virtual.slidesBefore,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : t.slideTo(
            t.params.initialSlide,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      t.params.loop && t.loopCreate(void 0, !0),
      t.attachEvents());
    const n = [...t.el.querySelectorAll('[loading="lazy"]')];
    return (
      t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
      n.forEach((r) => {
        r.complete
          ? J(t, r)
          : r.addEventListener("load", (l) => {
              J(t, l.target);
            });
      }),
      me(t),
      (t.initialized = !0),
      me(t),
      t.emit("init"),
      t.emit("afterInit"),
      t
    );
  }
  destroy(s = !0, t = !0) {
    const i = this,
      { params: n, el: r, wrapperEl: l, slides: o } = i;
    return (
      typeof i.params > "u" ||
        i.destroyed ||
        (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        n.loop && i.loopDestroy(),
        t &&
          (i.removeClasses(),
          r && typeof r != "string" && r.removeAttribute("style"),
          l && l.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((a) => {
              (a.classList.remove(
                n.slideVisibleClass,
                n.slideFullyVisibleClass,
                n.slideActiveClass,
                n.slideNextClass,
                n.slidePrevClass,
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index"));
            })),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach((a) => {
          i.off(a);
        }),
        s !== !1 &&
          (i.el && typeof i.el != "string" && (i.el.swiper = null), Ve(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(s) {
    V(ce, s);
  }
  static get extendedDefaults() {
    return ce;
  }
  static get defaults() {
    return Ee;
  }
  static installModule(s) {
    H.prototype.__modules__ || (H.prototype.__modules__ = []);
    const t = H.prototype.__modules__;
    typeof s == "function" && t.indexOf(s) < 0 && t.push(s);
  }
  static use(s) {
    return Array.isArray(s)
      ? (s.forEach((t) => H.installModule(t)), H)
      : (H.installModule(s), H);
  }
}
Object.keys(de).forEach((e) => {
  Object.keys(de[e]).forEach((s) => {
    H.prototype[s] = de[e][s];
  });
});
H.use([Qe, Ze]);
function ve(e, s, t, i) {
  return (
    e.params.createElements &&
      Object.keys(i).forEach((n) => {
        if (!t[n] && t.auto === !0) {
          let r = F(e.el, `.${i[n]}`)[0];
          (r || ((r = X("div", i[n])), (r.className = i[n]), e.el.append(r)),
            (t[n] = r),
            (s[n] = r));
        }
      }),
    t
  );
}
const Ce =
  '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';
function is({ swiper: e, extendParams: s, on: t, emit: i }) {
  (s({
    navigation: {
      nextEl: null,
      prevEl: null,
      addIcons: !0,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null, arrowSvg: Ce }));
  function n(u) {
    let m;
    return u &&
      typeof u == "string" &&
      e.isElement &&
      ((m = e.el.querySelector(u) || e.hostEl.querySelector(u)), m)
      ? m
      : (u &&
          (typeof u == "string" && (m = [...document.querySelectorAll(u)]),
          e.params.uniqueNavElements &&
          typeof u == "string" &&
          m &&
          m.length > 1 &&
          e.el.querySelectorAll(u).length === 1
            ? (m = e.el.querySelector(u))
            : m && m.length === 1 && (m = m[0])),
        u && !m ? u : m);
  }
  function r(u, m) {
    const b = e.params.navigation;
    ((u = A(u)),
      u.forEach((M) => {
        M &&
          (M.classList[m ? "add" : "remove"](...b.disabledClass.split(" ")),
          M.tagName === "BUTTON" && (M.disabled = m),
          e.params.watchOverflow &&
            e.enabled &&
            M.classList[e.isLocked ? "add" : "remove"](b.lockClass));
      }));
  }
  function l() {
    const { nextEl: u, prevEl: m } = e.navigation;
    if (e.params.loop) {
      (r(m, !1), r(u, !1));
      return;
    }
    (r(m, e.isBeginning && !e.params.rewind),
      r(u, e.isEnd && !e.params.rewind));
  }
  function o(u) {
    (u.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), i("navigationPrev")));
  }
  function a(u) {
    (u.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), i("navigationNext")));
  }
  function d() {
    const u = e.params.navigation;
    if (
      ((e.params.navigation = ve(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(u.nextEl || u.prevEl))
    )
      return;
    let m = n(u.nextEl),
      b = n(u.prevEl);
    (Object.assign(e.navigation, { nextEl: m, prevEl: b }),
      (m = A(m)),
      (b = A(b)));
    const M = (c, p) => {
      if (c) {
        if (
          u.addIcons &&
          c.matches(".swiper-button-next,.swiper-button-prev") &&
          !c.querySelector("svg")
        ) {
          const g = document.createElement("div");
          (pe(g, Ce), c.appendChild(g.querySelector("svg")), g.remove());
        }
        c.addEventListener("click", p === "next" ? a : o);
      }
      !e.enabled && c && c.classList.add(...u.lockClass.split(" "));
    };
    (m.forEach((c) => M(c, "next")), b.forEach((c) => M(c, "prev")));
  }
  function h() {
    let { nextEl: u, prevEl: m } = e.navigation;
    ((u = A(u)), (m = A(m)));
    const b = (M, c) => {
      (M.removeEventListener("click", c === "next" ? a : o),
        M.classList.remove(...e.params.navigation.disabledClass.split(" ")));
    };
    (u.forEach((M) => b(M, "next")), m.forEach((M) => b(M, "prev")));
  }
  (t("init", () => {
    e.params.navigation.enabled === !1 ? S() : (d(), l());
  }),
    t("toEdge fromEdge lock unlock", () => {
      l();
    }),
    t("destroy", () => {
      h();
    }),
    t("enable disable", () => {
      let { nextEl: u, prevEl: m } = e.navigation;
      if (((u = A(u)), (m = A(m)), e.enabled)) {
        l();
        return;
      }
      [...u, ...m]
        .filter((b) => !!b)
        .forEach((b) => b.classList.add(e.params.navigation.lockClass));
    }),
    t("click", (u, m) => {
      let { nextEl: b, prevEl: M } = e.navigation;
      ((b = A(b)), (M = A(M)));
      const c = m.target;
      let p = M.includes(c) || b.includes(c);
      if (e.isElement && !p) {
        const g = m.path || (m.composedPath && m.composedPath());
        g && (p = g.find((T) => b.includes(T) || M.includes(T)));
      }
      if (e.params.navigation.hideOnClick && !p) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === c || e.pagination.el.contains(c))
        )
          return;
        let g;
        (b.length
          ? (g = b[0].classList.contains(e.params.navigation.hiddenClass))
          : M.length &&
            (g = M[0].classList.contains(e.params.navigation.hiddenClass)),
          i(g === !0 ? "navigationShow" : "navigationHide"),
          [...b, ...M]
            .filter((T) => !!T)
            .forEach((T) =>
              T.classList.toggle(e.params.navigation.hiddenClass),
            ));
      }
    }));
  const f = () => {
      (e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" "),
      ),
        d(),
        l());
    },
    S = () => {
      (e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" "),
      ),
        h());
    };
  Object.assign(e.navigation, {
    enable: f,
    disable: S,
    update: l,
    init: d,
    destroy: h,
  });
}
function j(e = "") {
  return `.${e
    .trim()
    .replace(/([\.:!+\/()[\]])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function ns({ swiper: e, extendParams: s, on: t, emit: i }) {
  const n = "swiper-pagination";
  (s({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (c) => c,
      formatFractionTotal: (c) => c,
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] }));
  let r,
    l = 0;
  function o() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function a(c, p) {
    const { bulletActiveClass: g } = e.params.pagination;
    c &&
      ((c = c[`${p === "prev" ? "previous" : "next"}ElementSibling`]),
      c &&
        (c.classList.add(`${g}-${p}`),
        (c = c[`${p === "prev" ? "previous" : "next"}ElementSibling`]),
        c && c.classList.add(`${g}-${p}-${p}`)));
  }
  function d(c, p, g) {
    if (((c = c % g), (p = p % g), p === c + 1)) return "next";
    if (p === c - 1) return "previous";
  }
  function h(c) {
    const p = c.target.closest(j(e.params.pagination.bulletClass));
    if (!p) return;
    c.preventDefault();
    const g = se(p) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === g) return;
      const T = d(e.realIndex, g, e.slides.length);
      T === "next"
        ? e.slideNext()
        : T === "previous"
          ? e.slidePrev()
          : e.slideToLoop(g);
    } else e.slideTo(g);
  }
  function f() {
    const c = e.rtl,
      p = e.params.pagination;
    if (o()) return;
    let g = e.pagination.el;
    g = A(g);
    let T, E;
    const O =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      z = e.params.loop
        ? Math.ceil(O / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((E = e.previousRealIndex || 0),
          (T =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
          ? ((T = e.snapIndex), (E = e.previousSnapIndex))
          : ((E = e.previousIndex || 0), (T = e.activeIndex || 0)),
      p.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const x = e.pagination.bullets;
      let k, C, v;
      if (
        (p.dynamicBullets &&
          ((r = fe(x[0], e.isHorizontal() ? "width" : "height")),
          g.forEach((y) => {
            y.style[e.isHorizontal() ? "width" : "height"] =
              `${r * (p.dynamicMainBullets + 4)}px`;
          }),
          p.dynamicMainBullets > 1 &&
            E !== void 0 &&
            ((l += T - (E || 0)),
            l > p.dynamicMainBullets - 1
              ? (l = p.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          (k = Math.max(T - l, 0)),
          (C = k + (Math.min(x.length, p.dynamicMainBullets) - 1)),
          (v = (C + k) / 2)),
        x.forEach((y) => {
          const w = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (L) => `${p.bulletActiveClass}${L}`,
            ),
          ]
            .map((L) =>
              typeof L == "string" && L.includes(" ") ? L.split(" ") : L,
            )
            .flat();
          y.classList.remove(...w);
        }),
        g.length > 1)
      )
        x.forEach((y) => {
          const w = se(y);
          (w === T
            ? y.classList.add(...p.bulletActiveClass.split(" "))
            : e.isElement && y.setAttribute("part", "bullet"),
            p.dynamicBullets &&
              (w >= k &&
                w <= C &&
                y.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),
              w === k && a(y, "prev"),
              w === C && a(y, "next")));
        });
      else {
        const y = x[T];
        if (
          (y && y.classList.add(...p.bulletActiveClass.split(" ")),
          e.isElement &&
            x.forEach((w, L) => {
              w.setAttribute("part", L === T ? "bullet-active" : "bullet");
            }),
          p.dynamicBullets)
        ) {
          const w = x[k],
            L = x[C];
          for (let I = k; I <= C; I += 1)
            x[I] &&
              x[I].classList.add(...`${p.bulletActiveClass}-main`.split(" "));
          (a(w, "prev"), a(L, "next"));
        }
      }
      if (p.dynamicBullets) {
        const y = Math.min(x.length, p.dynamicMainBullets + 4),
          w = (r * y - r) / 2 - v * r,
          L = c ? "right" : "left";
        x.forEach((I) => {
          I.style[e.isHorizontal() ? L : "top"] = `${w}px`;
        });
      }
    }
    g.forEach((x, k) => {
      if (
        (p.type === "fraction" &&
          (x.querySelectorAll(j(p.currentClass)).forEach((C) => {
            C.textContent = p.formatFractionCurrent(T + 1);
          }),
          x.querySelectorAll(j(p.totalClass)).forEach((C) => {
            C.textContent = p.formatFractionTotal(z);
          })),
        p.type === "progressbar")
      ) {
        let C;
        p.progressbarOpposite
          ? (C = e.isHorizontal() ? "vertical" : "horizontal")
          : (C = e.isHorizontal() ? "horizontal" : "vertical");
        const v = (T + 1) / z;
        let y = 1,
          w = 1;
        (C === "horizontal" ? (y = v) : (w = v),
          x.querySelectorAll(j(p.progressbarFillClass)).forEach((L) => {
            ((L.style.transform = `translate3d(0,0,0) scaleX(${y}) scaleY(${w})`),
              (L.style.transitionDuration = `${e.params.speed}ms`));
          }));
      }
      (p.type === "custom" && p.renderCustom
        ? (pe(x, p.renderCustom(e, T + 1, z)),
          k === 0 && i("paginationRender", x))
        : (k === 0 && i("paginationRender", x), i("paginationUpdate", x)),
        e.params.watchOverflow &&
          e.enabled &&
          x.classList[e.isLocked ? "add" : "remove"](p.lockClass));
    });
  }
  function S() {
    const c = e.params.pagination;
    if (o()) return;
    const p =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
    let g = e.pagination.el;
    g = A(g);
    let T = "";
    if (c.type === "bullets") {
      let E = e.params.loop
        ? Math.ceil(p / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && E > p && (E = p);
      for (let O = 0; O < E; O += 1)
        c.renderBullet
          ? (T += c.renderBullet.call(e, O, c.bulletClass))
          : (T += `<${c.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${c.bulletClass}"></${c.bulletElement}>`);
    }
    (c.type === "fraction" &&
      (c.renderFraction
        ? (T = c.renderFraction.call(e, c.currentClass, c.totalClass))
        : (T = `<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`)),
      c.type === "progressbar" &&
        (c.renderProgressbar
          ? (T = c.renderProgressbar.call(e, c.progressbarFillClass))
          : (T = `<span class="${c.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      g.forEach((E) => {
        (c.type !== "custom" && pe(E, T || ""),
          c.type === "bullets" &&
            e.pagination.bullets.push(...E.querySelectorAll(j(c.bulletClass))));
      }),
      c.type !== "custom" && i("paginationRender", g[0]));
  }
  function u() {
    e.params.pagination = ve(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" },
    );
    const c = e.params.pagination;
    if (!c.el) return;
    let p;
    (typeof c.el == "string" && e.isElement && (p = e.el.querySelector(c.el)),
      !p &&
        typeof c.el == "string" &&
        (p = [...document.querySelectorAll(c.el)]),
      p || (p = c.el),
      !(!p || p.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof c.el == "string" &&
          Array.isArray(p) &&
          p.length > 1 &&
          ((p = [...e.el.querySelectorAll(c.el)]),
          p.length > 1 && (p = p.find((g) => Pe(g, ".swiper")[0] === e.el))),
        Array.isArray(p) && p.length === 1 && (p = p[0]),
        Object.assign(e.pagination, { el: p }),
        (p = A(p)),
        p.forEach((g) => {
          (c.type === "bullets" &&
            c.clickable &&
            g.classList.add(...(c.clickableClass || "").split(" ")),
            g.classList.add(c.modifierClass + c.type),
            g.classList.add(
              e.isHorizontal() ? c.horizontalClass : c.verticalClass,
            ),
            c.type === "bullets" &&
              c.dynamicBullets &&
              (g.classList.add(`${c.modifierClass}${c.type}-dynamic`),
              (l = 0),
              c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)),
            c.type === "progressbar" &&
              c.progressbarOpposite &&
              g.classList.add(c.progressbarOppositeClass),
            c.clickable && g.addEventListener("click", h),
            e.enabled || g.classList.add(c.lockClass));
        })));
  }
  function m() {
    const c = e.params.pagination;
    if (o()) return;
    let p = e.pagination.el;
    (p &&
      ((p = A(p)),
      p.forEach((g) => {
        (g.classList.remove(c.hiddenClass),
          g.classList.remove(c.modifierClass + c.type),
          g.classList.remove(
            e.isHorizontal() ? c.horizontalClass : c.verticalClass,
          ),
          c.clickable &&
            (g.classList.remove(...(c.clickableClass || "").split(" ")),
            g.removeEventListener("click", h)));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((g) =>
          g.classList.remove(...c.bulletActiveClass.split(" ")),
        ));
  }
  (t("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const c = e.params.pagination;
    let { el: p } = e.pagination;
    ((p = A(p)),
      p.forEach((g) => {
        (g.classList.remove(c.horizontalClass, c.verticalClass),
          g.classList.add(
            e.isHorizontal() ? c.horizontalClass : c.verticalClass,
          ));
      }));
  }),
    t("init", () => {
      e.params.pagination.enabled === !1 ? M() : (u(), S(), f());
    }),
    t("activeIndexChange", () => {
      typeof e.snapIndex > "u" && f();
    }),
    t("snapIndexChange", () => {
      f();
    }),
    t("snapGridLengthChange", () => {
      (S(), f());
    }),
    t("destroy", () => {
      m();
    }),
    t("enable disable", () => {
      let { el: c } = e.pagination;
      c &&
        ((c = A(c)),
        c.forEach((p) =>
          p.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass,
          ),
        ));
    }),
    t("lock unlock", () => {
      f();
    }),
    t("click", (c, p) => {
      const g = p.target,
        T = A(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        T &&
        T.length > 0 &&
        !g.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && g === e.navigation.nextEl) ||
            (e.navigation.prevEl && g === e.navigation.prevEl))
        )
          return;
        const E = T[0].classList.contains(e.params.pagination.hiddenClass);
        (i(E === !0 ? "paginationShow" : "paginationHide"),
          T.forEach((O) =>
            O.classList.toggle(e.params.pagination.hiddenClass),
          ));
      }
    }));
  const b = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: c } = e.pagination;
      (c &&
        ((c = A(c)),
        c.forEach((p) =>
          p.classList.remove(e.params.pagination.paginationDisabledClass),
        )),
        u(),
        S(),
        f());
    },
    M = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: c } = e.pagination;
      (c &&
        ((c = A(c)),
        c.forEach((p) =>
          p.classList.add(e.params.pagination.paginationDisabledClass),
        )),
        m());
    };
  Object.assign(e.pagination, {
    enable: b,
    disable: M,
    render: S,
    update: f,
    init: u,
    destroy: m,
  });
}
function rs({ swiper: e, extendParams: s, on: t, emit: i }) {
  const n = N();
  let r = !1,
    l = null,
    o = null,
    a,
    d,
    h,
    f;
  (s({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (e.scrollbar = { el: null, dragEl: null }));
  function S() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: v, rtlTranslate: y } = e,
      { dragEl: w, el: L } = v,
      I = e.params.scrollbar,
      $ = e.params.loop ? e.progressLoop : e.progress;
    let D = d,
      P = (h - d) * $;
    (y
      ? ((P = -P), P > 0 ? ((D = d - P), (P = 0)) : -P + d > h && (D = h + P))
      : P < 0
        ? ((D = d + P), (P = 0))
        : P + d > h && (D = h - P),
      e.isHorizontal()
        ? ((w.style.transform = `translate3d(${P}px, 0, 0)`),
          (w.style.width = `${D}px`))
        : ((w.style.transform = `translate3d(0px, ${P}px, 0)`),
          (w.style.height = `${D}px`)),
      I.hide &&
        (clearTimeout(l),
        (L.style.opacity = 1),
        (l = setTimeout(() => {
          ((L.style.opacity = 0), (L.style.transitionDuration = "400ms"));
        }, 1e3))));
  }
  function u(v) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${v}ms`);
  }
  function m() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: v } = e,
      { dragEl: y, el: w } = v;
    ((y.style.width = ""),
      (y.style.height = ""),
      (h = e.isHorizontal() ? w.offsetWidth : w.offsetHeight),
      (f =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (d = h * f)
        : (d = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (y.style.width = `${d}px`)
        : (y.style.height = `${d}px`),
      f >= 1 ? (w.style.display = "none") : (w.style.display = ""),
      e.params.scrollbar.hide && (w.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        v.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass,
        ));
  }
  function b(v) {
    return e.isHorizontal() ? v.clientX : v.clientY;
  }
  function M(v) {
    const { scrollbar: y, rtlTranslate: w } = e,
      { el: L } = y;
    let I;
    ((I =
      (b(v) -
        We(L)[e.isHorizontal() ? "left" : "top"] -
        (a !== null ? a : d / 2)) /
      (h - d)),
      (I = Math.max(Math.min(I, 1), 0)),
      w && (I = 1 - I));
    const $ = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * I;
    (e.updateProgress($),
      e.setTranslate($),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
  }
  function c(v) {
    const y = e.params.scrollbar,
      { scrollbar: w, wrapperEl: L } = e,
      { el: I, dragEl: $ } = w;
    ((r = !0),
      (a =
        v.target === $
          ? b(v) -
            v.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      v.preventDefault(),
      v.stopPropagation(),
      (L.style.transitionDuration = "100ms"),
      ($.style.transitionDuration = "100ms"),
      M(v),
      clearTimeout(o),
      (I.style.transitionDuration = "0ms"),
      y.hide && (I.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      i("scrollbarDragStart", v));
  }
  function p(v) {
    const { scrollbar: y, wrapperEl: w } = e,
      { el: L, dragEl: I } = y;
    r &&
      (v.preventDefault && v.cancelable
        ? v.preventDefault()
        : (v.returnValue = !1),
      M(v),
      (w.style.transitionDuration = "0ms"),
      (L.style.transitionDuration = "0ms"),
      (I.style.transitionDuration = "0ms"),
      i("scrollbarDragMove", v));
  }
  function g(v) {
    const y = e.params.scrollbar,
      { scrollbar: w, wrapperEl: L } = e,
      { el: I } = w;
    r &&
      ((r = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (L.style.transitionDuration = "")),
      y.hide &&
        (clearTimeout(o),
        (o = ge(() => {
          ((I.style.opacity = 0), (I.style.transitionDuration = "400ms"));
        }, 1e3))),
      i("scrollbarDragEnd", v),
      y.snapOnRelease && e.slideToClosest());
  }
  function T(v) {
    const { scrollbar: y, params: w } = e,
      L = y.el;
    if (!L) return;
    const I = L,
      $ = w.passiveListeners ? { passive: !1, capture: !1 } : !1,
      D = w.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!I) return;
    const P = v === "on" ? "addEventListener" : "removeEventListener";
    (I[P]("pointerdown", c, $),
      n[P]("pointermove", p, $),
      n[P]("pointerup", g, D));
  }
  function E() {
    !e.params.scrollbar.el || !e.scrollbar.el || T("on");
  }
  function O() {
    !e.params.scrollbar.el || !e.scrollbar.el || T("off");
  }
  function z() {
    const { scrollbar: v, el: y } = e;
    e.params.scrollbar = ve(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const w = e.params.scrollbar;
    if (!w.el) return;
    let L;
    if (
      (typeof w.el == "string" && e.isElement && (L = e.el.querySelector(w.el)),
      !L && typeof w.el == "string")
    ) {
      if (((L = n.querySelectorAll(w.el)), !L.length)) return;
    } else L || (L = w.el);
    (e.params.uniqueNavElements &&
      typeof w.el == "string" &&
      L.length > 1 &&
      y.querySelectorAll(w.el).length === 1 &&
      (L = y.querySelector(w.el)),
      L.length > 0 && (L = L[0]),
      L.classList.add(e.isHorizontal() ? w.horizontalClass : w.verticalClass));
    let I;
    (L &&
      ((I = L.querySelector(j(e.params.scrollbar.dragClass))),
      I || ((I = X("div", e.params.scrollbar.dragClass)), L.append(I))),
      Object.assign(v, { el: L, dragEl: I }),
      w.draggable && E(),
      L &&
        L.classList[e.enabled ? "remove" : "add"](
          ...R(e.params.scrollbar.lockClass),
        ));
  }
  function x() {
    const v = e.params.scrollbar,
      y = e.scrollbar.el;
    (y &&
      y.classList.remove(
        ...R(e.isHorizontal() ? v.horizontalClass : v.verticalClass),
      ),
      O());
  }
  (t("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el) return;
    const v = e.params.scrollbar;
    let { el: y } = e.scrollbar;
    ((y = A(y)),
      y.forEach((w) => {
        (w.classList.remove(v.horizontalClass, v.verticalClass),
          w.classList.add(
            e.isHorizontal() ? v.horizontalClass : v.verticalClass,
          ));
      }));
  }),
    t("init", () => {
      e.params.scrollbar.enabled === !1 ? C() : (z(), m(), S());
    }),
    t("update resize observerUpdate lock unlock changeDirection", () => {
      m();
    }),
    t("setTranslate", () => {
      S();
    }),
    t("setTransition", (v, y) => {
      u(y);
    }),
    t("enable disable", () => {
      const { el: v } = e.scrollbar;
      v &&
        v.classList[e.enabled ? "remove" : "add"](
          ...R(e.params.scrollbar.lockClass),
        );
    }),
    t("destroy", () => {
      x();
    }));
  const k = () => {
      (e.el.classList.remove(...R(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...R(e.params.scrollbar.scrollbarDisabledClass),
          ),
        z(),
        m(),
        S());
    },
    C = () => {
      (e.el.classList.add(...R(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...R(e.params.scrollbar.scrollbarDisabledClass),
          ),
        x());
    };
  Object.assign(e.scrollbar, {
    enable: k,
    disable: C,
    updateSize: m,
    setTranslate: S,
    init: z,
    destroy: x,
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const e = new H(".swiper", {
    modules: [is, ns, rs],
    direction: "horizontal",
    loop: !1,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { dynamicBullets: !0, el: ".swiper-pagination", clickable: !0 },
    navigation: { nextEl: ".s-button-next", prevEl: ".s-button-prev" },
    scrollbar: { el: ".swiper-scrollbar", draggable: !0 },
    autoplay: { delay: 3e3, disableOnInteraction: !1 },
    breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
  });
  window.mySwiper = e;
});
