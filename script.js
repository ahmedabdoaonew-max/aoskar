// ===== STARS GENERATION =====
(function createStars() {
  const container = document.getElementById("starsBg");
  if (!container) return;
  const count = 150;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 2.5 + 0.5;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.setProperty("--opacity", (Math.random() * 0.7 + 0.3).toFixed(2));
    star.style.setProperty("--duration", (Math.random() * 4 + 2).toFixed(1) + "s");
    star.style.animationDelay = (Math.random() * 5).toFixed(1) + "s";
    container.appendChild(star);
  }
})();

// ===== TRANSLATIONS =====
const translations = {
  en: {
    logo: "AOSKAR",
    "nav-home": "01 // HOME",
    "nav-about": "02 // ABOUT ME",
    "nav-skills": "03 // SKILLS",
    "nav-credentials": "04 // CREDENTIALS",
    "nav-projects": "05 // PROJECTS",
    "nav-contact": "06 // CONTACT",
    "hero-subtitle": "AHMED ABDO // Software Engineer & Web Designer",
    "hero-title-1": "I DESIGN & CODE",
    "hero-title-2": "DIGITAL EXPERIENCES",
    "hero-title-3": "THAT MAKE A",
    "hero-title-4": "REAL IMPACT.",
    "hero-desc": "Software engineer and web designer. I build professional websites, web apps, and digital systems with clean code and modern design.",
    "btn-contact": "GET IN TOUCH ↑",
    "btn-projects": "MY WORK",
    channels: "OFFICIAL CHANNELS //",
    "photo-role": "Software Engineer & Web Designer",
    scroll: "SCROLL TO EXPLORE",
    statement: 'From idea to launch, I craft <span class="red">clean, scalable digital products</span> — <span class="highlight">built to move fast</span>, stay simple, and perform in real-world use, driven by clarity, <span class="highlight">structured systems</span>, and intentional design.',
    "about-title": "Functional, aesthetic<br>design that adds<br>real value.",
    "about-lead": "High-performance, responsive, and visually stunning digital products.",
    "about-text": "Software engineer specialized in building modern websites and web applications. I focus on clean code, responsive design, and creating digital experiences that solve real problems. Founder of Ao Company for smart web design.",
    "stat-1": "PROJECTS",
    "stat-2": "YEARS",
    "stat-3": "CLIENTS",
    "stat-4": "DEDICATION",
    "services-tag": "03 // SERVICES",
    "services-title": "All your digital needs",
    "services-desc": "★ Click the badges to interact ★",
    "badge-1": "Web Development",
    "badge-2": "UI/UX Design",
    "badge-3": "Frontend Dev",
    "badge-4": "Management Systems",
    "badge-5": "Responsive Design",
    "badge-6": "Landing Pages",
    "badge-7": "Dashboard Design",
    "badge-8": "Tech Consulting",
    "robot-tag": "// INTERACTIVE EXPERIENCE",
    "robot-title": "Fusing Code & Dimensions",
    "robot-desc": "As a developer and designer, I build robust systems and eye-catching interactive interfaces. Play with this robot to see how I craft experiences that cross standard boundaries.",
    "robot-status": "AHMED'S CORE ACTIVE",
    "robot-hint": "Move your mouse to interact",
    "exp-tag": "04 // EXPERIENCE",
    "exp-title": "My Journey",
    "exp-desc": "A path of coding, design, and building digital products",
    "exp1-title": "Founder of Ao Company",
    "exp1-desc": "Founded a company for smart website design. Delivering professional software and design solutions at competitive prices.",
    "exp2-title": "Full-Stack Web Developer",
    "exp2-desc": "Building websites, web apps, and management systems for clients. Focused on React, Next.js, and modern frontend technologies.",
    "exp3-title": "Frontend Developer",
    "exp3-desc": "Developed responsive websites and interactive UIs. Worked on dashboards, landing pages, and full web applications.",
    "exp4-title": "Web Design & Development",
    "exp4-desc": "Started the journey in web development. Learned HTML, CSS, JavaScript and built the foundation for modern web technologies.",
    "skills-title": "Technical Arsenal",
    "skills-desc": "Technologies I use to bring ideas to life",
    "filter-all": "ALL",
    "filter-frontend": "Frontend",
    "filter-backend": "Backend",
    "filter-design": "Design",
    "filter-tools": "Tools",
    "exp5-title": "Multi-Industry Management",
    "exp5-desc": "Store manager at VAKKO, center manager at RO Academy, restaurant management at Pasta Talya, and nursery manager at Horse Owners Club.",
    "exp6-title": "Mental Health Trainer & Special Needs Educator",
    "exp6-desc": "Certified mental health trainer and CBT practitioner. Business manager for Dr. Mohamed Qotb and assistant to Dr. Omnia Mahmoud. Author of two books.",
    "cred-tag": "04 // CREDENTIALS",
    "cred-title": "Diplomas & Certifications",
    "cred-desc": "29 conference certificates, 8 seminar certificates, and specialized diplomas",
    "cred-stat-1": "CONFERENCE CERTS",
    "cred-stat-2": "SEMINAR CERTS",
    "cred-stat-3": "BOOKS PUBLISHED",
    "cred-stat-4": "TOP DOMAIN IN EGYPT",
    "cred1-title": "TOT Diploma — Mental Health Trainer",
    "cred1-desc": "Train-the-Trainer diploma, Cambridge-accredited",
    "cred2-title": "Mental Health Specialist",
    "cred2-desc": "Full qualification, Cairo University",
    "cred3-title": "Special Needs Diploma",
    "cred3-desc": "Working with special needs cases, Oxford program",
    "cred4-title": "Speech & Confidence Diploma",
    "cred4-desc": "Communication development, Ministry of Solidarity",
    "cred5-title": "CBT Diploma",
    "cred5-desc": "Cognitive Behavioral Therapy, certified",
    "cred6-title": "Regional Conference Speaker",
    "cred6-desc": "Mental health support in Egypt — certificate of appreciation",
    "cred7-title": "Special Needs Educator",
    "cred7-desc": "Specialist & teacher across 4 centers in Egypt",
    "pub-tag": "// PUBLICATIONS & MEDIA",
    "pub-title": "Author & Media",
    "pub1-title": "\"World of Disorders\"",
    "pub1-desc": "Book on psychology and mental disorders.",
    "pub2-title": "\"Joska's Word\"",
    "pub2-desc": "Book on personal development.",
    "pub3-title": "Model — Medzo Agency",
    "pub3-desc": "Media and modeling experience with Medzo Agency.",
    "projects-tag": "05 // PROJECTS",
    "projects-title": "Selected Work",
    "p1-title": "01 Tabtabah",
    "p1-desc": "Wellbeing platform with complete visual identity and professional website focused on modern web experience.",
    "p2-title": "02 International Academy IASC",
    "p2-desc": "Institutional website for the International Academy for Scientific Training and Consultations.",
    "p3-title": "03 Sales & Inventory System",
    "p3-desc": "Complete ERP system for managing sales, inventory, suppliers and customers with a full dashboard.",
    "p4-title": "04 Dar Al-Ithar",
    "p4-desc": "Charity website focused on modern design and clear user experience for a social impact organization.",
    "p5-title": "05 Ao Company",
    "p5-desc": "Company website for smart web design services. Professional presence with modern UI.",
    "p6-title": "06 Interactive CV",
    "p6-desc": "Interactive resume website showcasing skills, projects and achievements in a modern way.",
    "p7-title": "07 Horse Owners Club",
    "p7-desc": "Official website for Horse Owners Club (نادي أصحاب الجياد) — historic Egyptian sports club founded in 1934, specializing in equestrian sports and multi-sport activities.",
    "live-demo": "LIVE DEMO",
    "contact-tag": "06 // CONTACT",
    "contact-title": 'Let\'s build something <span class="red">spectacular</span> together',
    "contact-direct": "// DIRECT ACCESS",
    "contact-text": "Looking for a professional website, management system, or modern web design? I'm available for new projects.",
    "email-label": "EMAIL ADDRESS",
    "whatsapp-label": "WHATSAPP NUMBER",
    "whatsapp-btn": "DIRECT CHAT VIA WHATSAPP",
    "form-subtitle": "Let's build something beautiful together",
    "keep-touch": "Keep in touch",
    "need-help": "Need help?",
    "send-btn": "SEND MESSAGE →",
    "cv-title": "AOSKAR — Ahmed Abdo, Website Designer",
    "cv-desc": "View the full interactive resume and professional profile",
    "cv-btn": "View Full CV →",
    "footer-role": "Software Engineer & Web Designer",
    "footer-copy": "© 2026 AOSKAR — Ahmed Abdo. All Rights Reserved.",
    "email-ph": "Email address",
    "msg-ph": "Your message"
  },
  ar: {
    logo: "AOSKAR",
    "nav-home": "01 // الرئيسية",
    "nav-about": "02 // عني",
    "nav-skills": "03 // المهارات",
    "nav-credentials": "04 // الشهادات",
    "nav-projects": "05 // المشاريع",
    "nav-contact": "06 // تواصل",
    "hero-subtitle": "AHMED ABDO // مهندس برمجيات ومصمم مواقع",
    "hero-title-1": "أصمم وأبرمج",
    "hero-title-2": "تجارب رقمية",
    "hero-title-3": "تصنع فرقاً",
    "hero-title-4": "حقيقياً.",
    "hero-desc": "مهندس برمجيات ومصمم مواقع. أبني مواقع وتطبيقات وأنظمة رقمية احترافية بكود نظيف وتصميم عصري.",
    "btn-contact": "تواصل معي ↑",
    "btn-projects": "أعمالي",
    channels: "القنوات الرسمية //",
    "photo-role": "مهندس برمجيات ومصمم مواقع",
    scroll: "SCROLL TO EXPLORE",
    statement: 'من الفكرة للتنفيذ، أصنع <span class="red">منتجات رقمية نظيفة وقابلة للتوسع</span> — <span class="highlight">مبنية لتتحرك بسرعة</span>، وتبقى بسيطة، وتؤدي في الاستخدام الحقيقي، مدفوعة بالوضوح و<span class="highlight">الأنظمة المنظمة</span> والتصميم المقصود.',
    "about-title": "تصميم وظيفي<br>وجمالي يضيف<br>قيمة حقيقية.",
    "about-lead": "منتجات رقمية عالية الأداء ومتجاوبة ومذهلة بصرياً.",
    "about-text": "مهندس برمجيات متخصص في بناء المواقع والتطبيقات الحديثة. أركز على الكود النظيف والتصميم المتجاوب وصنع تجارب رقمية تحل مشاكل حقيقية. مؤسس شركة Ao لتصميم المواقع الذكية.",
    "stat-1": "مشاريع",
    "stat-2": "سنوات",
    "stat-3": "عملاء",
    "stat-4": "التزام",
    "services-tag": "03 // الخدمات",
    "services-title": "كل ما تحتاجه رقمياً",
    "services-desc": "★ اضغط على البادجات للتفاعل ★",
    "badge-1": "تطوير مواقع",
    "badge-2": "تصميم واجهات",
    "badge-3": "Frontend Dev",
    "badge-4": "أنظمة إدارة",
    "badge-5": "تصميم متجاوب",
    "badge-6": "صفحات هبوط",
    "badge-7": "تصميم لوحات",
    "badge-8": "استشارات تقنية",
    "robot-tag": "// تجربة تفاعلية",
    "robot-title": "دمج الكود والأبعاد",
    "robot-desc": "كمطور ومصمم، أبني أنظمة قوية وواجهات تفاعلية جذابة. تفاعل مع هذا الروبوت لترى كيف أصنع تجارب تتجاوز الحدود التقليدية.",
    "robot-status": "AHMED'S CORE ACTIVE",
    "robot-hint": "حرك الماوس للتفاعل",
    "exp-tag": "04 // الخبرات",
    "exp-title": "رحلتي المهنية",
    "exp-desc": "مسيرة من البرمجة والتصميم وبناء المنتجات الرقمية",
    "exp1-title": "مؤسس شركة Ao",
    "exp1-desc": "تأسيس شركة لتصميم المواقع الذكية. تقديم حلول برمجية وتصميمية احترافية بأسعار تنافسية.",
    "exp2-title": "مطور ويب Full-Stack",
    "exp2-desc": "بناء مواقع وتطبيقات وأنظمة إدارة للعملاء. متخصص في React و Next.js وتقنيات Frontend الحديثة.",
    "exp3-title": "مطور Frontend",
    "exp3-desc": "تطوير مواقع متجاوبة وواجهات تفاعلية. عملت على لوحات تحكم وصفحات هبوط وتطبيقات ويب كاملة.",
    "exp4-title": "تصميم وتطوير ويب",
    "exp4-desc": "بداية رحلة تطوير الويب. تعلمت HTML و CSS و JavaScript وبنيت الأساس للتقنيات الحديثة.",
    "skills-title": "الترسانة التقنية",
    "skills-desc": "التقنيات التي أستخدمها لتحويل الأفكار إلى واقع",
    "filter-all": "الكل",
    "filter-frontend": "Frontend",
    "filter-backend": "Backend",
    "filter-design": "تصميم",
    "filter-tools": "أدوات",
    "exp5-title": "إدارة متعددة القطاعات",
    "exp5-desc": "مدير محل في VAKKO، مدير مركز في RO academy، إدارة مطعم Pasta Talya، ومدير حضانة في نادي أصحاب الجياد.",
    "exp6-title": "مدرب صحة نفسية ومعلم ذوي الاحتياجات",
    "exp6-desc": "مدرب صحة نفسية معتمد وممارس CBT. مدير أعمال د. محمد قطب ومساعد د. أمنية محمود. مؤلف كتابين.",
    "cred-tag": "04 // الشهادات",
    "cred-title": "المؤهلات والدبلومات",
    "cred-desc": "29 شهادة مؤتمرات، 8 شهادات ندوات، ودبلومات متخصصة",
    "cred-stat-1": "شهادة مؤتمرات",
    "cred-stat-2": "شهادات ندوات",
    "cred-stat-3": "كتب منشورة",
    "cred-stat-4": "أكبر دومين في مصر",
    "cred1-title": "دبلومة TOT — تدريب مدربين صحة نفسية",
    "cred1-desc": "دبلومة تدريب المدربين، معتمدة من كامبريدج",
    "cred2-title": "أخصائي صحة نفسية",
    "cred2-desc": "تأهيل شامل، جامعة القاهرة",
    "cred3-title": "دبلومة ذوي الاحتياجات الخاصة",
    "cred3-desc": "التعامل مع حالات الاحتياجات الخاصة، برنامج أكسفورد",
    "cred4-title": "دبلومة تخاطب وثقة",
    "cred4-desc": "تنمية التواصل، وزارة التضامن",
    "cred5-title": "دبلومة CBT",
    "cred5-desc": "العلاج المعرفي السلوكي، معتمدة",
    "cred6-title": "محاضر مؤتمر إقليمي",
    "cred6-desc": "الدعم النفسي في مصر — شهادة تقدير",
    "cred7-title": "معلم ذوي الاحتياجات الخاصة",
    "cred7-desc": "أخصائي ومعلم في 4 مراكز في مصر",
    "pub-tag": "// التأليف والإعلام",
    "pub-title": "التأليف والإعلام",
    "pub1-title": "كتاب \"عالم الاضطرابات\"",
    "pub1-desc": "كتاب في علم النفس والاضطرابات.",
    "pub2-title": "كتاب \"كلمة جوسكا\"",
    "pub2-desc": "كتاب في التنمية البشرية.",
    "pub3-title": "موديل — وكالة ميدزو",
    "pub3-desc": "خبرة إعلامية وتصوير مع وكالة ميدزو.",
    "projects-tag": "05 // المشاريع",
    "projects-title": "أعمالي المختارة",
    "p1-title": "01 طبطبه",
    "p1-desc": "منصة رفاهية بهوية بصرية كاملة وموقع احترافي يركز على تجربة ويب عصرية.",
    "p2-title": "02 الأكاديمية الدولية IASC",
    "p2-desc": "موقع مؤسسي للأكاديمية الدولية للتدريب والاستشارات العلمية.",
    "p3-title": "03 نظام المبيعات والمخزون",
    "p3-desc": "نظام ERP متكامل لإدارة المبيعات والمخزون والموردين والعملاء مع لوحة تحكم كاملة.",
    "p4-title": "04 دار الإيثار",
    "p4-desc": "موقع خيري بتصميم عصري وتجربة مستخدم واضحة لمؤسسة ذات أثر اجتماعي.",
    "p5-title": "05 شركة Ao",
    "p5-desc": "موقع شركة لخدمات تصميم المواقع الذكية. حضور احترافي بواجهة عصرية.",
    "p6-title": "06 السيرة الذاتية التفاعلية",
    "p6-desc": "موقع سيرة ذاتية تفاعلي يعرض المهارات والمشاريع والإنجازات بطريقة عصرية.",
    "p7-title": "07 نادي أصحاب الجياد",
    "p7-desc": "الموقع الرسمي لنادي أصحاب الجياد — نادي رياضي مصري تاريخي تأسس عام 1934، متخصص في رياضات الفروسية والأنشطة الرياضية المتعددة.",
    "live-demo": "معاينة مباشرة",
    "contact-tag": "06 // تواصل",
    "contact-title": 'خلينا نبني حاجة <span class="red">مميزة</span> سوا',
    "contact-direct": "// تواصل مباشر",
    "contact-text": "بتدور على موقع احترافي، نظام إدارة، أو تصميم ويب عصري؟ أنا متاح لمشاريع جديدة.",
    "email-label": "البريد الإلكتروني",
    "whatsapp-label": "رقم الواتساب",
    "whatsapp-btn": "محادثة مباشرة عبر واتساب",
    "form-subtitle": "خلينا نبني حاجة جميلة سوا",
    "keep-touch": "ابقَ على تواصل",
    "need-help": "محتاج مساعدة؟",
    "send-btn": "إرسال الرسالة →",
    "cv-title": "AOSKAR — أحمد عبده، مصمم المواقع",
    "cv-desc": "اعرض السيرة الذاتية التفاعلية الكاملة والملف المهني",
    "cv-btn": "عرض السيرة الذاتية ←",
    "footer-role": "مهندس برمجيات ومصمم مواقع",
    "footer-copy": "© 2026 AOSKAR — أحمد عبده. جميع الحقوق محفوظة.",
    "email-ph": "البريد الإلكتروني",
    "msg-ph": "رسالتك"
  }
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  const html = document.documentElement;

  if (lang === "ar") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    document.body.classList.add("rtl");
    document.getElementById("langBtn").textContent = "EN";
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    document.body.classList.remove("rtl");
    document.getElementById("langBtn").textContent = "عربي";
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

document.getElementById("langBtn").addEventListener("click", () => {
  setLanguage(currentLang === "en" ? "ar" : "en");
});

// ===== ROBOT =====
const robot = document.getElementById("robot");
const robotContainer = document.getElementById("robotContainer");

if (robot && robotContainer) {
  robot.classList.add("idle");

  robotContainer.addEventListener("mousemove", (e) => {
    const rect = robotContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 25;
    const rotateX = ((centerY - y) / centerY) * 15;
    robot.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    robot.classList.remove("idle");
  });

  robotContainer.addEventListener("mouseleave", () => {
    robot.style.transform = "rotateX(0deg) rotateY(0deg)";
    robot.classList.add("idle");
  });

  robot.addEventListener("click", () => {
    robot.style.transition = "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
    robot.style.transform += " translateY(-20px)";
    setTimeout(() => {
      robot.style.transform = robot.style.transform.replace(" translateY(-20px)", "");
      setTimeout(() => { robot.style.transition = "transform 0.15s ease-out"; }, 300);
    }, 200);
  });
}

// ===== BADGES =====
const badges = document.querySelectorAll(".badge");
let draggedBadge = null;

badges.forEach(badge => {
  badge.addEventListener("dragstart", (e) => {
    draggedBadge = badge;
    badge.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
  });
  badge.addEventListener("dragend", () => { badge.classList.remove("dragging"); draggedBadge = null; });
  badge.addEventListener("dragover", (e) => e.preventDefault());
  badge.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedBadge && draggedBadge !== badge) {
      const parent = badge.parentNode;
      const all = [...parent.children];
      const di = all.indexOf(draggedBadge);
      const ti = all.indexOf(badge);
      if (di < ti) parent.insertBefore(draggedBadge, badge.nextSibling);
      else parent.insertBefore(draggedBadge, badge);
    }
  });
  badge.addEventListener("click", () => {
    badges.forEach(b => b.classList.remove("active"));
    badge.classList.add("active");
  });
});

// ===== SKILLS FILTER =====
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".skill-card").forEach(card => {
      if (filter === "all" || card.dataset.category === filter) card.classList.remove("hidden");
      else card.classList.add("hidden");
    });
  });
});

// ===== SKILL BARS =====
const animateSkillBars = () => {
  document.querySelectorAll(".progress .bar").forEach(bar => {
    const width = bar.dataset.width;
    if (bar.getBoundingClientRect().top < window.innerHeight - 50 && !bar.classList.contains("animated")) {
      bar.style.width = width + "%";
      bar.classList.add("animated");
    }
  });
};

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    const t = document.querySelector(this.getAttribute("href"));
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===== NAVBAR =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5, 5, 16, 0.85)";
  } else {
    navbar.style.background = "";
  }
  animateSkillBars();
});

// ===== FORM =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector(".btn-send");
    const orig = btn.textContent;
    btn.textContent = currentLang === "ar" ? "جاري الإرسال..." : "SENDING...";
    btn.style.background = "#22c55e";
    setTimeout(() => {
      btn.textContent = currentLang === "ar" ? "تم الإرسال ✓" : "MESSAGE SENT ✓";
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = "#ef4444";
        contactForm.reset();
      }, 2000);
    }, 1000);
  });
}

// ===== FADE IN =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".about, .services, .interactive, .experience, .skills, .credentials, .publications, .projects, .contact, .statement, .cv-section").forEach(s => {
  s.style.opacity = "0";
  s.style.transform = "translateY(30px)";
  s.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(s);
});

window.addEventListener("load", animateSkillBars);
console.log("%c🚀 AOSKAR — Portfolio by Ahmed Abdo", "color: #ef4444; font-size: 16px; font-weight: bold;");
