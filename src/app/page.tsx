"use client";

import Image from "next/image";
import { startTransition, useEffect, useState } from "react";
import {
  ArrowRight,
  Brain,
  Briefcase,
  ChevronDown,
  Code,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Send,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

const sections = ["hero", "services", "work", "case-studies", "stack", "about", "contact"];
const bookingLink = "https://calendar.app.google/jAeQng95X2TXdAcn8";

const services = [
  {
    title: "Workflow Discovery & Impact Modeling",
    description:
      "Pinpoint the exact workflows where AI can remove manual effort and unlock compounding leverage.",
    icon: <Brain size={32} />,
  },
  {
    title: "RAG & LLM Applications",
    description:
      "Design AI copilots that answer questions from your private data with speed, accuracy, and auditability.",
    icon: <Database size={32} />,
  },
  {
    title: "AI Agents & Automation",
    description:
      "Deploy agents that coordinate tasks across tools so work keeps moving without constant human intervention.",
    icon: <Code size={32} />,
  },
  {
    title: "Document Extraction Systems",
    description:
      "Convert PDFs and unstructured files into clean, structured data that flows into your core systems.",
    icon: <Terminal size={32} />,
  },
  {
    title: "Cloud-Native Deployment & Monitoring",
    description:
      "Ship reliable, scalable AI systems with observability, safety, and long-term maintainability.",
    icon: <Zap size={32} />,
  },
];

const experiences = [
  {
    role: "Founder & Principal AI Consultant",
    company: "goBIGai",
    timeframe: "Jan 2025 — Present",
    bullets: [
      "Deliver production-grade RAG pipelines and AI agents tailored to domain-specific enterprise workflows.",
      "Built a document parser platform that cut review time by ~90% for an education client handling massive repositories.",
      "Implemented an n8n + LinkedIn sales automation agent that drives intelligent follow-ups and pipeline visibility.",
      "Led discovery, architecture, and deployments across AWS, GCP, Vercel, and Supabase for multi-stakeholder teams.",
    ],
    highlight: "ACTIVE",
  },
  {
    role: "Software Engineer",
    company: "Amazon.com (Seattle)",
    timeframe: "Jun 2022 — Jan 2023",
    bullets: [
      "Orchestrated 20+ ETL pipelines across 30 marketplaces using AWS Step Functions to optimize supply chain flows.",
      "Delivered Java REST APIs and CI/CD automation that improved recovery time and boosted pipeline reliability.",
      "Built a Python Step Functions proof-of-concept that reduced runtime by 60% and saved ~$5K per pipeline monthly.",
    ],
  },
  {
    role: "Senior Data Analyst",
    company: "Games24x7 Pvt Ltd",
    timeframe: "Sep 2020 — Aug 2021",
    bullets: [
      "Led analytics that shaped product roadmaps for India’s largest gaming company, improving ARPU by 12%.",
      "Built SQL-heavy insight layers in MySQL and Presto to improve operational decision-making.",
      "Optimized AWS Glue, Athena, and Redshift pipelines to accelerate reporting and Tableau delivery.",
    ],
  },
  {
    role: "Data Analyst – Research Fellow",
    company: "IIT Bombay",
    timeframe: "Oct 2019 — Apr 2020",
    bullets: [
      "Built an 85%-accurate plant disease prediction model using weather and soil sensor data.",
      "Shipped a Python + PyQt monitoring dashboard for near-real-time field visibility.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Amazon.com (Hyderabad)",
    timeframe: "Dec 2018 — Sep 2019",
    bullets: [
      "Led delivery preference experiments that improved customer satisfaction by 4% in Japan.",
      "Automated KPI dashboards in Tableau for daily, weekly, and monthly decision cycles.",
    ],
  },
];

const caseStudies = [
  {
    title: "Document Intelligence Platform",
    metric: "90% faster reviews",
    description:
      "Document extraction system that classifies, retrieves, and summarizes large repositories into audit-ready outputs.",
  },
  {
    title: "Sales Automation Agent",
    metric: "Always-on outreach",
    description:
      "n8n + LinkedIn automation that captures signals, triggers follow-ups, and keeps pipeline momentum visible.",
  },
  {
    title: "Enterprise RAG Delivery",
    metric: "Production-ready from day one",
    description:
      "RAG applications and copilots integrated into existing stacks with observability, guardrails, and handoff docs.",
  },
];

const stack = [
  "Python",
  "RAG",
  "LLMs",
  "AI Agents",
  "Workflow Automation",
  "Document Extraction",
  "LangChain",
  "LangGraph",
  "Langfuse",
  "FastAPI",
  "Docker",
  "Celery",
  "Redis",
  "PostgreSQL",
  "Alembic",
  "MCP",
  "n8n",
  "Cloud Computing",
  "AI Infrastructure",
];

const credentials = [
  {
    program: "Research Fellow (Data & AI)",
    school: "Indian Institute of Technology Bombay",
    year: "2019 — 2020",
  },
  {
    program: "Ex-Amazon Engineer & Analyst",
    school: "Seattle & Hyderabad",
    year: "2018 — 2023",
  },
];

const stats = [
  { label: "Review time reduced", value: "90%" },
  { label: "Marketplaces served", value: "30" },
  { label: "AI systems shipped", value: "25+" },
];

const panel =
  "rounded-2xl border border-[#14f1d9]/12 bg-[#0f172b]/70 shadow-[0_15px_60px_rgba(5,11,24,0.6)] backdrop-blur";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    startTransition(() => setIsLoaded(true));

    const onScroll = () => {
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 240 && rect.bottom >= 240;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBookCall = () => {
    window.open(bookingLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-b from-[#0f172b] via-[#0b1222] to-[#050b18] text-slate-100 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <div className="noise-overlay" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(20,241,217,0.18)_0,transparent_35%),radial-gradient(circle_at_85%_0,rgba(20,241,217,0.08)_0,transparent_35%),radial-gradient(circle_at_80%_70%,rgba(15,23,43,0.6)_0,transparent_45%)]" />

      <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#14f1d9]/15 bg-[#0f172b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 text-2xl font-black tracking-tight text-slate-100 transition hover:text-[#14f1d9]"
          >
            <Image src="/logo.png" alt="goBIGai logo" width={36} height={36} className="h-9 w-9" />
            goBIGai
          </button>
          <div className="hidden gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 md:flex">
            {sections.slice(1).map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => scrollTo(section)}
                className={`rounded-full border px-3 py-1 transition ${
                  activeSection === section
                    ? "border-[#14f1d9]/70 bg-[#14f1d9]/10 text-[#14f1d9] shadow-[0_10px_40px_rgba(20,241,217,0.25)]"
                    : "border-transparent hover:border-[#14f1d9]/50 hover:text-slate-100"
                }`}
              >
                {section.replace("-", " ").toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleBookCall}
            className="flex items-center gap-2 rounded-full border border-[#14f1d9]/70 bg-[#14f1d9] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0f172b] shadow-[0_12px_40px_rgba(20,241,217,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(20,241,217,0.35)]"
          >
            <Send size={14} /> Book a call
          </button>
        </div>
      </nav>

      <main className="pt-24">
        <section id="hero" className="relative overflow-hidden px-4 py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.95fr] lg:items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                <Sparkles size={16} className="text-[#14f1d9]" /> AI consulting for data-rich teams
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl text-slate-100">
                Transforming scattered operations into compounding AI systems that quietly grow your business every day.
              </h1>
              <p className="max-w-3xl text-lg text-slate-300">
                goBIGai works with founders, operators, and organizations overwhelmed by manual workflows, unstructured documents,
                and disconnected tools. We design production-grade RAG applications, AI agents, and document extraction systems that
                integrate into your stack and deliver measurable impact.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollTo("services")}
                  className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#14f1d9] to-[#38f5e1] px-6 py-4 text-lg font-black text-[#0f172b] shadow-[0_20px_60px_rgba(20,241,217,0.35)] transition hover:-translate-y-1"
                >
                  Explore offerings
                  <ArrowRight />
                </button>
                <button
                  onClick={() => scrollTo("work")}
                  className="flex items-center justify-center gap-3 rounded-full border border-[#14f1d9]/30 bg-[#0f172b]/40 px-6 py-4 text-lg font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-[#14f1d9]/70 hover:text-slate-100"
                >
                  View credibility
                </button>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className={`${panel} p-4`}>
                    <div className="text-4xl font-black text-[#14f1d9]">{stat.value}</div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${panel} relative overflow-hidden p-6`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#14f1d9]/12 via-transparent to-[#14f1d9]/5" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Founder</p>
                  <span className="rounded-full border border-[#14f1d9]/60 bg-[#14f1d9]/15 px-3 py-1 text-[11px] font-bold uppercase text-[#14f1d9]">
                    AI Consulting
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-[#14f1d9]/20 bg-[#0b1222]/60 shadow-inner">
                  <Image
                    src="/profile.png"
                    alt="Anirudh Voruganti portrait"
                    width={1200}
                    height={1600}
                    className="h-[360px] w-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="flex flex-wrap gap-3 text-xs font-bold uppercase text-slate-300">
                  <span className="rounded-full border border-[#14f1d9]/20 bg-[#0f172b]/70 px-3 py-2">RAG Systems</span>
                  <span className="rounded-full border border-[#14f1d9]/20 bg-[#0f172b]/70 px-3 py-2">AI Agents</span>
                  <span className="rounded-full border border-[#14f1d9]/20 bg-[#0f172b]/70 px-3 py-2">Document Intelligence</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => scrollTo("services")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-[#14f1d9]/30 bg-[#0f172b]/70 p-3 text-slate-200 shadow-md"
            aria-label="scroll to services"
          >
            <ChevronDown size={32} />
          </button>
        </section>

        <section id="services" className="border-t border-[#14f1d9]/12 bg-[#0b1222]/80 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 flex items-center gap-3 text-4xl font-black uppercase sm:text-5xl text-slate-100">
              <Zap className="text-[#14f1d9]" size={42} /> Consulting Offers
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`${panel} relative overflow-hidden p-6`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14f1d9]/0 via-[#14f1d9]/10 to-[#14f1d9]/5" />
                  <div className="relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#14f1d9]/12 text-[#14f1d9]">
                    {service.icon}
                  </div>
                  <h3 className="relative text-2xl font-black text-slate-100">{service.title}</h3>
                  <p className="relative mt-4 text-base leading-relaxed text-slate-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-[#14f1d9]/12 bg-gradient-to-b from-[#0b1222] via-[#0c1426] to-[#0f172b] px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 flex items-center gap-3 text-4xl font-black uppercase sm:text-5xl text-slate-100">
              <Briefcase className="text-[#14f1d9]" size={42} /> Track record
            </h2>
            <div className="space-y-6">
              {experiences.map((experience) => (
                <article
                  key={experience.role}
                  className={`${panel} relative overflow-hidden bg-gradient-to-br from-[#0f172b] via-[#0f172b] to-[#0b1222] p-8`}
                >
                  {experience.highlight && (
                    <div className="absolute right-4 top-4 rounded-full border border-[#14f1d9]/60 bg-[#14f1d9]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#14f1d9]">
                      {experience.highlight}
                    </div>
                  )}
                  <h3 className="text-3xl font-black text-slate-100">{experience.role}</h3>
                  <div className="text-lg font-semibold text-[#14f1d9]">{experience.company}</div>
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-400">{experience.timeframe}</p>
                  <ul className="mt-4 space-y-2 text-base text-slate-300">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#14f1d9]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="border-t border-[#14f1d9]/12 bg-[#0b1222]/85 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-400">Proof</p>
                <h2 className="text-4xl font-black uppercase sm:text-5xl text-slate-100">Deployments with teeth</h2>
              </div>
              <a
                href="https://linkedin.com/in/anirudh-voruganti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#14f1d9]/30 bg-[#0f172b]/60 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-200 transition hover:border-[#14f1d9]/60 hover:text-slate-100"
              >
                Full resume
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {caseStudies.map((study) => (
                <div key={study.title} className={`${panel} p-6`}>
                  <p className="text-xs font-mono uppercase tracking-wide text-[#14f1d9]">{study.metric}</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-100">{study.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-300">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="border-t border-[#14f1d9]/12 bg-gradient-to-b from-[#0f172b] to-[#0b1222] px-4 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-black uppercase sm:text-5xl text-slate-100">Stack I rely on</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
              Tooling across RAG, agents, automation, and cloud-native delivery for production AI systems.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {stack.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#14f1d9]/20 bg-[#0f172b]/70 px-5 py-3 text-sm font-bold uppercase tracking-wide text-slate-200 shadow-[0_12px_40px_rgba(5,11,24,0.45)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-[#14f1d9]/12 bg-[#0b1222]/85 px-4 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div className={`${panel} p-8`}>
              <h2 className="text-4xl font-black uppercase text-slate-100">About goBIGai</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                goBIGai turns AI curiosity into production-grade systems you can trust. We focus on the gap between a promising demo
                and reliable deployment by shipping RAG applications, AI agents, and document extraction platforms that reduce manual
                effort, accelerate decisions, and keep human teams in control.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Founded by Anirudh, an AI engineer and ex-Amazon builder with research experience at IIT Bombay, goBIGai brings
                enterprise rigor to every engagement. Past work spans ecommerce, gaming, and education, including a document
                extraction platform that turned a painful review bottleneck into a fast, auditable process.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase text-slate-300">
                <span className="rounded-full border border-[#14f1d9]/40 bg-[#14f1d9]/15 px-4 py-2">Hyderabad • Global delivery</span>
                <span className="rounded-full border border-[#14f1d9]/20 bg-[#0f172b]/70 px-4 py-2">Production-first</span>
                <span className="rounded-full border border-[#14f1d9]/20 bg-[#0f172b]/70 px-4 py-2">Responsible AI systems</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className={`${panel} p-8`}>
                <h3 className="flex items-center gap-3 text-2xl font-black text-slate-100">
                  <GraduationCap className="text-[#14f1d9]" /> Credentials
                </h3>
                <div className="mt-6 space-y-4">
                  {credentials.map((item) => (
                    <div key={item.program} className="border-l-2 border-[#14f1d9]/60 pl-4">
                      <p className="text-xl font-black text-slate-100">{item.program}</p>
                      <p className="text-lg font-semibold text-slate-300">{item.school}</p>
                      <p className="text-xs font-mono uppercase tracking-widest text-slate-400">{item.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${panel} p-8`}>
                <h3 className="flex items-center gap-3 text-2xl font-black text-slate-100">
                  <Terminal className="text-[#14f1d9]" /> Recent drops
                </h3>
                <ul className="mt-4 space-y-3 text-base text-slate-300">
                  <li>Enterprise document parser that automates classification and extraction at scale.</li>
                  <li>LinkedIn-aware sales automation agent orchestrated in n8n for faster follow-ups.</li>
                  <li>Full-stack web build for a software consultancy to improve enterprise credibility.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[#14f1d9]/12 bg-gradient-to-b from-[#0f172b] to-[#050b18] px-4 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-slate-400">Ready when you are</p>
            <h2 className="mt-4 text-5xl font-black uppercase sm:text-6xl text-slate-100">Let’s build responsibly.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              If you’re ready to turn one painful workflow into a scalable AI system, start by sharing the process that’s slowing
              your team down. We’ll map a tailored goBIGai solution and ship it with observability, safety, and handoff docs.
            </p>
            <div className="mt-8 grid gap-4 rounded-2xl border border-[#14f1d9]/15 bg-[#0f172b]/60 p-6 text-left text-slate-300 shadow-[0_20px_60px_rgba(5,11,24,0.5)] md:grid-cols-2">
              <div className="flex gap-3">
                <span className="text-[#14f1d9]">🔍</span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-100">Discovery session</p>
                  <p className="text-sm">Analyze your workflows and data to identify automation opportunities.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#14f1d9]">⚙️</span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-100">Custom solution design</p>
                  <p className="text-sm">Architect AI systems tailored to your knowledge base and processes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#14f1d9]">🔄</span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-100">Implementation</p>
                  <p className="text-sm">Integrate into your existing stack and launch with confidence.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#14f1d9]">📈</span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-100">Optimization</p>
                  <p className="text-sm">Continuously refine accuracy, reliability, and business impact.</p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
              <a
                href="mailto:founder@gobigai.org"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#14f1d9] to-[#38f5e1] px-6 py-4 text-lg font-black text-[#0f172b] shadow-[0_25px_80px_rgba(20,241,217,0.3)] transition hover:-translate-y-1 md:w-auto"
              >
                <Mail /> founder@gobigai.org
              </a>
              <a
                href="https://linkedin.com/in/anirudh-voruganti"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full border border-[#14f1d9]/30 bg-[#0f172b]/70 px-6 py-4 text-lg font-bold text-slate-200 transition hover:-translate-y-1 hover:border-[#14f1d9]/60 hover:text-slate-100 md:w-auto"
              >
                <Linkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/anvoruganti"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full border border-[#14f1d9]/30 bg-[#0f172b]/70 px-6 py-4 text-lg font-bold text-slate-200 transition hover:-translate-y-1 hover:border-[#14f1d9]/60 hover:text-slate-100 md:w-auto"
              >
                <Github /> GitHub
              </a>
            </div>
            <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#14f1d9]/15 pt-6 text-xs font-bold uppercase tracking-wide text-slate-400 sm:flex-row">
              <span>© {new Date().getFullYear()} goBIGai.org</span>
              <span>Hyderabad • Boston • Remote</span>
              <span>AI Consulting • Data Systems</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
