"use client";

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

const services = [
  {
    title: "AI Advisory & Roadmaps",
    description:
      "Executive-ready plans, AI governance, and ROI models that keep compliance, security, and GTM in the same room.",
    icon: <Brain size={32} />,
  },
  {
    title: "Agentic Delivery Pods",
    description:
      "CrewAI + LangChain agents that watch pipelines, listen to customers, and trigger workflows across HubSpot, Slack, and Snowflake.",
    icon: <Code size={32} />,
  },
  {
    title: "Data Platforms for LLMs",
    description:
      "Snowflake, dbt, and Bedrock stacks with monitoring, feature stores, and retrieval layers tuned for regulated data.",
    icon: <Database size={32} />,
  },
];

const experiences = [
  {
    role: "Founder & Principal Consultant",
    company: "goBIGai",
    timeframe: "2024 — Present",
    bullets: [
      "Fractional AI team for revenue leaders: lead intelligence, proposal co-pilots, and post-sales automation.",
      "Mapped Data Lumina playbooks into packaged offers with measurable lift for GTM, RevOps, and product squads.",
      "Delivered agentic workflows that harvest signals, enrich contacts, and keep human review in the loop.",
    ],
    highlight: "ACTIVE",
  },
  {
    role: "Data Engineer",
    company: "Amazon (Seattle)",
    timeframe: "2021 — 2023",
    bullets: [
      "Scaled Step Function pipelines across 30 marketplaces while cutting runtime costs by $5K per workflow.",
      "Exposed monitoring and remediation via Java REST services, reducing manual resolution time by 25 minutes.",
      "Partnered with product to automate catalog scoring across Kindle, Audible, and Games businesses.",
    ],
  },
  {
    role: "Senior Data Analyst",
    company: "Games24x7",
    timeframe: "2019 — 2021",
    bullets: [
      "Led monetization experiments that boosted ARPU 12% across India’s leading real-money gaming titles.",
      "Delivered Glue/Athena/Redshift optimizations and modernized Tableau governance.",
      "Mentored a distributed analytics pod focused on user safety and fraud.",
    ],
  },
];

const caseStudies = [
  {
    title: "Revenue Ops Agent",
    metric: "+37% qualified demos",
    description:
      "Multi-agent system that scrapes founder podcasts, extracts buying signals, and fires bespoke Loom recaps via n8n.",
  },
  {
    title: "Compliance RAG",
    metric: "4x faster reviews",
    description:
      "Snowflake + Bedrock Titan powering legal-grade document recall with guardrails mapped to SOC 2 requirements.",
  },
  {
    title: "Product Pulse",
    metric: "30M events / day",
    description:
      "Kafka + dbt + Looker telemetry platform that keeps churn, ARPU, and fraud insights real-time for product leads.",
  },
];

const stack = [
  "Python",
  "LangChain",
  "CrewAI",
  "AWS",
  "Snowflake",
  "dbt",
  "Terraform",
  "SQL",
  "n8n",
  "RAG",
  "React",
  "Next.js",
  "Kafka",
  "Tableau",
  "Java",
  "Zapier",
  "PyTorch",
  "Hugging Face",
];

const education = [
  {
    program: "MS Information Systems",
    school: "Northeastern University, Boston",
    year: "2023",
  },
  {
    program: "B.Tech Computer Science",
    school: "Shiv Nadar University, India",
    year: "2018",
  },
];

const stats = [
  { label: "Pipelines automated", value: "25+" },
  { label: "LLM agents deployed", value: "12" },
  { label: "Data saved / month", value: "$40K" },
];

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

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-b from-[#040915] via-[#050b1d] to-[#0b152c] text-slate-100 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <div className="noise-overlay" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(64,179,255,0.12)_0,transparent_30%),radial-gradient(circle_at_80%_0,rgba(124,58,237,0.12)_0,transparent_25%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.1)_0,transparent_25%)]" />

      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050915]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollTo("hero")}
            className="text-2xl font-black tracking-tight text-white transition hover:text-cyan-300"
          >
            goBIGai<span className="text-cyan-400">.</span>org
          </button>
          <div className="hidden gap-3 text-xs font-semibold uppercase tracking-widest md:flex">
            {sections.slice(1).map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => scrollTo(section)}
                className={`rounded-full border px-3 py-1 transition ${
                  activeSection === section
                    ? "border-cyan-300/80 bg-cyan-300/10 text-cyan-100"
                    : "border-transparent text-slate-300 hover:border-cyan-300/40 hover:text-white"
                }`}
              >
                {section.replace("-", " ").toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 rounded-full border border-cyan-300/80 bg-cyan-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-100 shadow-[0_10px_40px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-500/30"
          >
            <Send size={14} /> Book a call
          </button>
        </div>
      </nav>

      <main className="pt-24">
        <section id="hero" className="relative overflow-hidden px-4 py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex flex-wrap items-center gap-3 text-sm font-mono uppercase tracking-[0.3em] text-cyan-200/70">
              <Sparkles size={16} /> AI Consulting for data-rich teams
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              We design, ship, and scale AI systems that keep revenue teams ahead of the signal.
            </h1>
            <p className="max-w-3xl text-lg text-slate-300">
              goBIGai is an AI consulting studio led by Anirudh Voruganti. We blend advisory, build squads, and production
              operations so leaders can deploy agentic workflows, safer RAG, and observability without pausing the business.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-4 text-lg font-black text-[#050915] shadow-[0_20px_60px_rgba(56,189,248,0.35)] transition hover:-translate-y-1"
              >
                Explore offerings
                <ArrowRight />
              </button>
              <button
                onClick={() => scrollTo("work")}
                className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-lg font-semibold text-white transition hover:border-cyan-300/70 hover:text-cyan-100"
              >
                View credibility
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-4xl font-black text-cyan-200">{stat.value}</div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => scrollTo("services")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-white/20 bg-white/5 p-3 text-slate-200"
            aria-label="scroll to services"
          >
            <ChevronDown size={32} />
          </button>
        </section>

        <section id="services" className="border-t border-white/5 bg-[#070d1c]/60 px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 flex items-center gap-3 text-4xl font-black uppercase sm:text-5xl">
              <Zap className="text-cyan-300" size={42} /> Consulting Offers
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/10 to-purple-500/10 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-200">
                    {service.icon}
                  </div>
                  <h3 className="relative text-2xl font-black text-white">{service.title}</h3>
                  <p className="relative mt-4 text-base text-slate-300 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-white/5 bg-[#050915]/80 px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 flex items-center gap-3 text-4xl font-black uppercase sm:text-5xl">
              <Briefcase className="text-cyan-300" size={42} /> Track record
            </h2>
            <div className="space-y-6">
              {experiences.map((experience) => (
                <article
                  key={experience.role}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
                >
                  {experience.highlight && (
                    <div className="absolute right-4 top-4 rounded-full border border-cyan-300/40 bg-cyan-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-100">
                      {experience.highlight}
                    </div>
                  )}
                  <h3 className="text-3xl font-black">{experience.role}</h3>
                  <div className="text-lg font-semibold text-cyan-200">{experience.company}</div>
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-400">{experience.timeframe}</p>
                  <ul className="mt-4 space-y-2 text-base text-slate-200">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="border-t border-white/5 bg-[#060d1b] px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-200/70">Proof</p>
                <h2 className="text-4xl font-black uppercase sm:text-5xl">Deployments with teeth</h2>
              </div>
              <a
                href="https://linkedin.com/in/anirudh-voruganti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:border-cyan-300/60"
              >
                Full resume
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-xs font-mono uppercase tracking-wide text-cyan-200">{study.metric}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{study.title}</h3>
                  <p className="mt-3 text-base text-slate-300 leading-relaxed">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="border-t border-white/5 bg-[#050915] px-4 py-24">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-black uppercase sm:text-5xl">Stack I rely on</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
              Tooling across automation, experimentation, infra-as-code, and human-in-the-loop workflows for AI consulting retainers.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {stack.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-wide text-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/5 bg-[#070d1c] px-4 py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
              <h2 className="text-4xl font-black uppercase">About goBIGai</h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                I blend an engineer’s love for distributed systems with a marketer’s need for velocity. Whether it’s shipping an AWS-native data mesh or crafting a Loom-ready narrative for a founder, goBIGai is the studio where both worlds meet. Currently progressing through the Data Lumina Freelancer curriculum to scale a boutique practice focused on measurable GenAI outcomes.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase text-slate-200">
                <span className="rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-2">Hyderabad → Boston → Global</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Remote-first</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Time-to-value &lt; 3 weeks</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <h3 className="flex items-center gap-3 text-2xl font-black text-white">
                  <GraduationCap /> Education
                </h3>
                <div className="mt-6 space-y-4">
                  {education.map((item) => (
                    <div key={item.program} className="border-l-2 border-cyan-400/60 pl-4">
                      <p className="text-xl font-black">{item.program}</p>
                      <p className="text-lg font-semibold text-slate-300">{item.school}</p>
                      <p className="text-xs font-mono uppercase tracking-widest text-slate-400">{item.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <h3 className="flex items-center gap-3 text-2xl font-black text-white">
                  <Terminal /> Recent drops
                </h3>
                <ul className="mt-4 space-y-3 text-base text-slate-200">
                  <li>Podcast intelligence bot for a fintech CMO, built with Whisper + GPT-4o.</li>
                  <li>Sales room command center that syncs Notion, Slack, and Airtable in real-time.</li>
                  <li>dbt-powered revenue dashboards for a global gaming leader.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 bg-gradient-to-b from-[#050915] to-[#03060f] px-4 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-cyan-200/70">Ready when you are</p>
            <h2 className="mt-4 text-5xl font-black uppercase sm:text-6xl">Let’s build responsibly.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              Whether you need a skunkworks AI pod, marketing ops automation, or reliable data foundations, goBIGai consults, ships, and operates with you. Drop a note, connect on LinkedIn, or peek into the GitHub experiments.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
              <a
                href="mailto:founder@gobigai.org"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-4 text-lg font-black text-[#050915] shadow-[0_25px_80px_rgba(56,189,248,0.35)] transition hover:-translate-y-1 md:w-auto"
              >
                <Mail /> founder@gobigai.org
              </a>
              <a
                href="https://linkedin.com/in/anirudh-voruganti"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-lg font-bold text-white transition hover:border-cyan-300/60 hover:text-cyan-100 md:w-auto"
              >
                <Linkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/anvoruganti"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-lg font-bold text-white transition hover:border-cyan-300/60 hover:text-cyan-100 md:w-auto"
              >
                <Github /> GitHub
              </a>
            </div>
            <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs font-bold uppercase tracking-wide text-slate-400 sm:flex-row">
              <span>© {new Date().getFullYear()} goBIGai.org</span>
              <span>Hyderabad • Boston • Remote</span>
              <span>Powered by Vercel + Next.js</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
