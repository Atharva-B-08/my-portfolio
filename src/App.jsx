import { useEffect, useRef } from "react";

const skills = [
  "Java", "Spring Boot", "React.js", "MySQL", "Python","REST APIs",
  "JWT", "Inngest", "Node.js", "Express.js" ,"Git", "DSA", "750+ LeetCode",
  "OOP", "Spring Security", "ShadCN UI", "Thymeleaf", "OpenCV", "TensorFlow", "Multithreading", "OS Concepts", "HTML", "CSS", "JavaScript", "Postman"
];

const projects = [
  {
    num: "01",
    title: "FinTrack",
    desc: "Full-stack personal finance management platform. JWT auth via HTTP-only cookies prevents XSS, Inngest handles background job processing reliably, and ShadCN UI delivers a polished responsive interface.",
    stack: ["React", "ShadCN UI", "Spring Boot", "MySQL", "Inngest", "JWT"],
    link: "https://github.com/Atharva-B-08/fintrack-app",
  },
  {
    num: "02",
    title: "Smart Contact Manager",
    desc: "Enterprise-grade contact management with Spring Security, role-based access control, and OTP-based account recovery. Server-rendered Thymeleaf UI with full CRUD operations.",
    stack: ["Spring Boot", "Spring Security", "Thymeleaf", "MySQL", "OTP Auth"],
    link: "https://github.com/Atharva-B-08/Smart-Contact-manager",
  },
  {
    num: "03",
    title: "Sign Mate",
    desc: "Real-time sign language gesture recognition using a Convolutional Neural Network. Bridges communication gaps for the hearing impaired with live camera inference.",
    stack: ["Python", "TensorFlow", "CNN", "OpenCV", "NumPy"],
    link: "https://github.com/Atharva-B-08/sign-mate",
  },
];

const stats = [
  { val: "750+", lbl: "LEETCODE SOLVED" },
  { val: "3+",   lbl: "LIVE PROJECTS" },
  { val: "4+",   lbl: "YEARS CODING" },
  { val: "2026", lbl: "AVAILABLE FROM" },
];

const skillGroups = [
  { icon: "⚙", title: "BACKEND",         pills: ["Java","Spring Boot","Spring Security","REST APIs","JWT Auth","Inngest", "Node.js","Express.js" ] },
  { icon: "◈", title: "FRONTEND",         pills: ["React.js","JavaScript","ShadCN UI","Thymeleaf","HTML/CSS"] },
  { icon: "◎", title: "DATABASE & TOOLS", pills: ["MySQL","Git","GitHub","Postman", "Hibernate", "Docker"] },
  { icon: "◉", title: "CS FUNDAMENTALS",  pills: ["DSA","OOP","Multithreading","OS","750+ LeetCode"] },
];

export default function App() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);
  const mouseRef  = useRef({ x: 0, y: 0 });
  const ringPos   = useRef({ x: 0, y: 0 });
  const rafRef    = useRef(null);

  /* ── cursor ── */
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      const { x: mx, y: my } = mouseRef.current;
      ringPos.current.x += (mx - ringPos.current.x) * 0.12;
      ringPos.current.y += (my - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top  = ringPos.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ── scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── cursor scale on hover ── */
  const onEnter = () => {
    if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%,-50%) scale(2.5)";
    if (ringRef.current)   ringRef.current.style.opacity = "0";
  };
  const onLeave = () => {
    if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%,-50%) scale(1)";
    if (ringRef.current)   ringRef.current.style.opacity = "1";
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  /* ── marquee doubled ── */
  const marqueeItems = [...skills, ...skills, ...skills, ...skills];

  return (
    <>
      <style>{css}</style>

      {/* cursor */}
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef}   className="cursor-ring" />

      {/* nav */}
      <nav>
        <span className="logo">[ ATHARVA.DEV ]</span>
        <div className="nav-links">
          <a onClick={() => scrollTo("work")}>Work</a>
          <a onClick={() => scrollTo("skills")}>Skills</a>
          <a onClick={() => scrollTo("about")}>About</a>
          <button className="nav-cta" onClick={() => scrollTo("contact")}>Hire me</button>
        </div>
      </nav>

      {/* hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="grid-bg" />
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="orb orb3" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            OPEN TO SDE · BACKEND · FULL-STACK ROLES
          </div>
          <h1>
            <span className="line">Building</span>
            <span className="line"><span className="accent">Full-Stack</span></span>
            <span className="line"><span className="outline">Experiences</span></span>
          </h1>
          <p className="hero-desc">
            Final-year Computer Engineering student at Atharva College of Engineering, Mumbai.
            I craft production-grade apps with Java, Spring Boot &amp; React — graduating 2026.
          </p>
          <div className="hero-actions">
            <button className="btn-lime" onClick={() => scrollTo("work")} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              View My Work <span>↓</span>
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("contact")} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="scroll-line" />
          scroll
        </div>
      </section>

      {/* marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span className="marquee-item" key={i}>
              <span>◆</span>{item}
            </span>
          ))}
        </div>
      </div>

      {/* projects */}
      <section className="section" id="work">
        <div className="section-header reveal">
          <span className="section-num">01 —</span>
          <h2 className="section-title">Selected Work</h2>
          <div className="section-line" />
        </div>
        <div className="projects-list reveal">
          {projects.map((p) => (
            <a
              key={p.num} href={p.link} target="_blank" rel="noreferrer"
              className="proj" onMouseEnter={onEnter} onMouseLeave={onLeave}
            >
              <span className="proj-num">{p.num}</span>
              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-stack">
                  {p.stack.map((t) => <span className="stack-tag" key={t}>{t}</span>)}
                </div>
              </div>
              <span className="proj-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* skills */}
      <section className="section section-alt" id="skills">
        <div className="section-header reveal">
          <span className="section-num">02 —</span>
          <h2 className="section-title">Skills &amp; Stack</h2>
          <div className="section-line" />
        </div>
        <div className="skills-container reveal">
          {skillGroups.map((g) => (
            <div className="skill-card" key={g.title} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div className="skill-card-icon">{g.icon}</div>
              <p className="skill-card-title">{g.title}</p>
              <div className="skill-pills">
                {g.pills.map((p) => <span className="skill-pill" key={p}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* about */}
      <section className="section" id="about">
        <div className="section-header reveal">
          <span className="section-num">03 —</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>
        <div className="about-wrap">
          <div className="about-text-block reveal">
            <p>I'm a final-year <strong>Computer Engineering student</strong> at Atharva College of Engineering, Mumbai — graduating in 2026 and actively seeking full-time SDE, backend, and full-stack roles.</p>
            <p>I enjoy building <strong>scalable, secure backend systems</strong> and clean full-stack products. My main project, FinTrack, reflects my focus on real-world concerns like auth security, background processing, and UX.</p>
            <p>Outside coding, I'm into <strong>competitive programming</strong> — 750+ LeetCode problems solved in Java — and have participated in hackathons including one at <strong>Somaiya</strong>. </p> 
          </div>
          <div className="about-stats reveal">
            {stats.map((s) => (
              <div className="stat-box" key={s.lbl} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <p className="stat-val">{s.val}</p>
                <p className="stat-lbl">{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="section" id="contact">
        <div className="contact-inner reveal">
          <p className="contact-title">
            Let's build<br /><span className="accent">something great.</span>
          </p>
          <p className="contact-sub">
            Currently open to full-time SDE, backend &amp; full-stack roles in Mumbai and remote.<br />
            Drop me a message and I'll get back within 24 hours.
          </p>
          <div className="contact-links">
            
            <a className="c-link" href="mailto:butteatharva2005@email.com" onMouseEnter={onEnter} onMouseLeave={onLeave}>✉ Email</a>
            <a className="c-link" href="https://www.linkedin.com/in/atharva-butte-b0248a2b5/" target="_blank" rel="noreferrer" onMouseEnter={onEnter} onMouseLeave={onLeave}>in LinkedIn</a>
            <a className="c-link" href="https://github.com/Atharva-B-08" target="_blank" rel="noreferrer" onMouseEnter={onEnter} onMouseLeave={onLeave}>{"{ }"} GitHub</a>
            <a className="c-link" href="https://drive.google.com/file/d/1Uyh3mcFdVHeZrbErc1NK1gvtzyO05q4n/view?usp=drive_link" target="_blank" rel="noreferrer" onMouseEnter={onEnter} onMouseLeave={onLeave}>↓ Resume</a>
            <a className="c-link" href="https://leetcode.com/u/butteatharva2005/" target="_blank" rel="noreferrer" onMouseEnter={onEnter} onMouseLeave={onLeave}>↓ LeetCode</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Atharva Butte — Mumbai, India</span>
        <span>Built with React · Deployed on Vercel</span>
      </footer>
    </>
  );
}

/* ─────────────────────────── styles ─────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  :root {
    --lime:   #b8ff3c;
    --dark:   #060608;
    --dark2:  #0d0d10;
    --dark3:  #13131a;
    --card:   #0f0f14;
    --border: #1e1e28;
    --text:   #e8e4f0;
    --muted:  #6b6880;
    --mono:   'DM Mono', monospace;
  }

  body {
    background: var(--dark);
    color: var(--text);
    font-family: 'Cabinet Grotesk', sans-serif;
    overflow-x: hidden;
    cursor: none;
  }

  ::selection { background: var(--lime); color: #000; }

  /* cursor */
  .cursor {
    position: fixed; width: 10px; height: 10px;
    background: var(--lime); border-radius: 50%;
    pointer-events: none; z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.15s, width 0.2s, height 0.2s;
  }
  .cursor-ring {
    position: fixed; width: 36px; height: 36px;
    border: 1px solid rgba(184,255,60,0.35); border-radius: 50%;
    pointer-events: none; z-index: 9998;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s;
  }

  /* noise */
  body::before {
    content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 1; opacity: 0.35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  /* nav */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 1.2rem 2.5rem; display: flex; justify-content: space-between; align-items: center;
    backdrop-filter: blur(20px); background: rgba(6,6,8,0.7);
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .logo { font-family: var(--mono); font-size: 13px; color: var(--lime); letter-spacing: 0.1em; }
  .nav-links { display: flex; gap: 2.5rem; align-items: center; }
  .nav-links a {
    font-size: 13px; color: var(--muted); text-decoration: none;
    letter-spacing: 0.05em; cursor: none; transition: color 0.2s;
    position: relative;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: -2px; left: 0;
    width: 0; height: 1px; background: var(--lime); transition: width 0.3s;
  }
  .nav-links a:hover { color: var(--text); }
  .nav-links a:hover::after { width: 100%; }
  .nav-cta {
    background: var(--lime); color: #000; padding: 0.5rem 1.2rem; border-radius: 100px;
    font-size: 12px; font-weight: 700; letter-spacing: 0.05em; cursor: none; border: none;
    font-family: 'Cabinet Grotesk', sans-serif; transition: transform 0.2s, box-shadow 0.2s;
  }
  .nav-cta:hover { transform: scale(1.05); box-shadow: 0 0 24px rgba(184,255,60,0.4); }

  /* hero */
  .hero {
    min-height: 100vh; display: flex; flex-direction: column;
    justify-content: center; padding: 8rem 2.5rem 4rem; position: relative; overflow: hidden;
  }
  .hero-bg { position: absolute; inset: 0; overflow: hidden; z-index: 0; }
  .orb {
    position: absolute; border-radius: 50%; filter: blur(80px);
    opacity: 0.12; animation: float 8s ease-in-out infinite;
  }
  .orb1 { width: 500px; height: 500px; background: var(--lime); top: -100px; right: -100px; animation-delay: 0s; }
  .orb2 { width: 400px; height: 400px; background: #7b3fe4; bottom: -50px; left: -80px; animation-delay: 3s; }
  .orb3 { width: 300px; height: 300px; background: #3f8fe4; top: 40%; left: 40%; animation-delay: 5s; }
  @keyframes float {
    0%,100% { transform: translate(0,0) scale(1); }
    33%      { transform: translate(20px,-20px) scale(1.05); }
    66%      { transform: translate(-15px,15px) scale(0.95); }
  }
  .grid-bg {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 60px 60px; z-index: 0;
  }
  .hero-content { position: relative; z-index: 2; max-width: 900px; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(184,255,60,0.1); border: 1px solid rgba(184,255,60,0.2);
    border-radius: 100px; padding: 6px 16px; font-size: 12px; color: var(--lime);
    letter-spacing: 0.08em; margin-bottom: 2rem; font-family: var(--mono);
    animation: fadeUp 0.8s ease both;
  }
  .badge-dot {
    width: 6px; height: 6px; background: var(--lime); border-radius: 50%;
    animation: blink 2s infinite;
  }
  @keyframes blink {
    0%,100% { opacity: 1; box-shadow: 0 0 6px var(--lime); }
    50%      { opacity: 0.3; box-shadow: none; }
  }
  .hero h1 {
    font-size: clamp(3rem, 8vw, 7rem); font-weight: 900;
    line-height: 0.95; letter-spacing: -0.04em; margin-bottom: 2rem;
    animation: fadeUp 0.8s 0.1s ease both;
  }
  .hero h1 .line { display: block; }
  .accent { color: var(--lime); }
  .outline { -webkit-text-stroke: 1px rgba(232,228,240,0.3); color: transparent; }
  .hero-desc {
    font-size: 1.05rem; color: var(--muted); max-width: 480px;
    line-height: 1.75; margin-bottom: 3rem;
    animation: fadeUp 0.8s 0.2s ease both;
  }
  .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; animation: fadeUp 0.8s 0.3s ease both; }
  .btn-lime {
    background: var(--lime); color: #000; padding: 0.85rem 2rem; border: none;
    font-family: 'Cabinet Grotesk', sans-serif; font-size: 14px; font-weight: 800;
    cursor: none; letter-spacing: 0.03em; border-radius: 100px; transition: all 0.25s;
    display: flex; align-items: center; gap: 8px;
  }
  .btn-lime:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(184,255,60,0.35); }
  .btn-ghost {
    background: transparent; color: var(--text); padding: 0.85rem 2rem;
    border: 1px solid var(--border); font-family: 'Cabinet Grotesk', sans-serif;
    font-size: 14px; font-weight: 600; cursor: none; letter-spacing: 0.03em;
    border-radius: 100px; transition: all 0.25s;
  }
  .btn-ghost:hover { border-color: var(--muted); transform: translateY(-2px); }
  .hero-scroll {
    position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    color: var(--muted); font-size: 11px; letter-spacing: 0.1em;
    font-family: var(--mono); animation: fadeUp 1s 0.6s ease both; z-index: 2;
  }
  .scroll-line {
    width: 1px; height: 40px;
    background: linear-gradient(to bottom, var(--muted), transparent);
    animation: scrollDrop 2s ease-in-out infinite;
  }
  @keyframes scrollDrop {
    0%   { transform: scaleY(0); transform-origin: top; }
    50%  { transform: scaleY(1); transform-origin: top; }
    51%  { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }

  /* marquee */
  .marquee-wrap {
    padding: 1.5rem 0; border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: var(--dark2); overflow: hidden; position: relative; z-index: 2;
  }
  .marquee-track {
    display: flex; gap: 0; animation: marquee 25s linear infinite; width: max-content;
  }
  .marquee-item {
    display: flex; align-items: center; gap: 1rem; padding: 0 1.5rem;
    white-space: nowrap; font-size: 13px; color: var(--muted);
    font-family: var(--mono); letter-spacing: 0.08em;
  }
  .marquee-item span { color: var(--lime); font-size: 9px; }
  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

  /* sections */
  .section { padding: 6rem 2.5rem; position: relative; }
  .section-alt { background: var(--dark2); }
  .section-header { display: flex; align-items: baseline; gap: 1.5rem; margin-bottom: 4rem; }
  .section-num { font-family: var(--mono); font-size: 11px; color: var(--lime); letter-spacing: 0.15em; }
  .section-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; letter-spacing: -0.03em; }
  .section-line { flex: 1; height: 1px; background: var(--border); margin-left: 1rem; }

  /* projects */
  .projects-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); }
  .proj {
    background: var(--dark); padding: 2.5rem; display: grid;
    grid-template-columns: auto 1fr auto; gap: 2rem; align-items: start;
    cursor: none; transition: background 0.3s; position: relative;
    overflow: hidden; text-decoration: none; color: inherit;
  }
  .proj::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0;
    width: 3px; background: var(--lime); transform: scaleY(0);
    transition: transform 0.3s; transform-origin: bottom;
  }
  .proj:hover { background: var(--dark3); }
  .proj:hover::before { transform: scaleY(1); }
  .proj-num { font-family: var(--mono); font-size: 11px; color: var(--muted); padding-top: 4px; min-width: 32px; }
  .proj-title { font-size: 1.4rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.6rem; transition: color 0.2s; }
  .proj:hover .proj-title { color: var(--lime); }
  .proj-desc { font-size: 14px; color: var(--muted); line-height: 1.7; max-width: 600px; margin-bottom: 1.2rem; }
  .proj-stack { display: flex; flex-wrap: wrap; gap: 6px; }
  .stack-tag {
    font-family: var(--mono); font-size: 11px; color: var(--muted);
    border: 1px solid var(--border); padding: 3px 10px; border-radius: 100px;
    letter-spacing: 0.04em; transition: all 0.2s;
  }
  .proj:hover .stack-tag { border-color: #2e2e3a; color: #8880a0; }
  .proj-arrow { font-size: 1.5rem; color: var(--border); transition: all 0.3s; padding-top: 4px; }
  .proj:hover .proj-arrow { color: var(--lime); transform: translate(4px,-4px); }

  /* skills */
  .skills-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 1px; background: var(--border); }
  .skill-card {
    background: var(--card); padding: 2rem; position: relative;
    overflow: hidden; transition: background 0.3s;
  }
  .skill-card::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px; background: linear-gradient(90deg, var(--lime), transparent);
    transform: scaleX(0); transition: transform 0.4s; transform-origin: left;
  }
  .skill-card:hover { background: var(--dark3); }
  .skill-card:hover::after { transform: scaleX(1); }
  .skill-card-icon { font-size: 1.4rem; margin-bottom: 1rem; }
  .skill-card-title { font-size: 11px; font-family: var(--mono); color: var(--lime); letter-spacing: 0.1em; margin-bottom: 1rem; }
  .skill-pills { display: flex; flex-wrap: wrap; gap: 6px; }
  .skill-pill {
    font-size: 13px; color: var(--text); background: rgba(255,255,255,0.04);
    padding: 5px 12px; border-radius: 100px; border: 1px solid var(--border);
  }

  /* about */
  .about-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .about-text-block p { font-size: 1rem; color: var(--muted); line-height: 1.85; margin-bottom: 1.2rem; }
  .about-text-block p strong { color: var(--text); font-weight: 700; }
  .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .stat-box {
    background: var(--card); border: 1px solid var(--border); padding: 1.8rem;
    border-radius: 12px; position: relative; overflow: hidden; transition: transform 0.3s, border-color 0.3s;
  }
  .stat-box:hover { transform: translateY(-4px); border-color: rgba(184,255,60,0.3); }
  .stat-box::before {
    content: ''; position: absolute; top: 0; right: 0; width: 60px; height: 60px;
    background: radial-gradient(circle at top right, rgba(184,255,60,0.1), transparent 70%);
  }
  .stat-val { font-size: 2.4rem; font-weight: 900; letter-spacing: -0.04em; color: var(--lime); line-height: 1; }
  .stat-lbl { font-size: 11px; color: var(--muted); font-family: var(--mono); letter-spacing: 0.1em; margin-top: 6px; }

  /* contact */
  .contact-inner {
    background: var(--card); border: 1px solid var(--border); border-radius: 20px;
    padding: 4rem; text-align: center; position: relative; overflow: hidden;
  }
  .contact-inner::before {
    content: ''; position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(184,255,60,0.07), transparent 70%);
    pointer-events: none;
  }
  .contact-title { font-size: clamp(2rem, 5vw, 4rem); font-weight: 900; letter-spacing: -0.04em; margin-bottom: 1rem; }
  .contact-sub { color: var(--muted); font-size: 15px; margin-bottom: 3rem; line-height: 1.7; }
  .contact-links { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
  .c-link {
    display: flex; align-items: center; gap: 8px; padding: 0.8rem 1.6rem;
    border: 1px solid var(--border); border-radius: 100px; font-size: 13px;
    color: var(--muted); text-decoration: none; transition: all 0.25s;
    font-family: var(--mono); cursor: none;
  }
  .c-link:hover { color: var(--lime); border-color: rgba(184,255,60,0.4); background: rgba(184,255,60,0.05); transform: translateY(-2px); }

  /* footer */
  footer {
    padding: 2rem 2.5rem; border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
    font-family: var(--mono); font-size: 11px; color: var(--muted);
  }

  /* scroll reveal */
  @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* responsive */
  @media (max-width: 700px) {
    nav { padding: 1rem 1.5rem; }
    .hero { padding: 7rem 1.5rem 3rem; }
    .section { padding: 4rem 1.5rem; }
    .about-wrap { grid-template-columns: 1fr; }
    .proj { grid-template-columns: 1fr; gap: 1rem; }
    .proj-arrow { display: none; }
    footer { flex-direction: column; gap: 0.5rem; text-align: center; }
    .contact-inner { padding: 2.5rem 1.5rem; }
  }
`;
