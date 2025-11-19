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
    title: "Agentic AI Systems",
    description:
      "LangChain, CrewAI, and custom tools stitched into autonomous flows that prospect, summarize, and execute like a full-time analyst.",
    icon: <Brain size={36} />,
    palette: "bg-[#E0E7FF]",
  },
  {
    title: "Enterprise Data Platforms",
    description:
      "Design-first ETL/ELT, dbt governance, and observability that keep multi-marketplaces humming on AWS, Snowflake, and Terraform.",
    icon: <Database size={36} />,
    palette: "bg-[#FFD6E0]",
  },
  {
    title: "Full-Stack Delivery",
    description:
      "React front-ends + Python/Java services with CI/CD. Deployed on Vercel, AWS, or custom infra so clients get value on day one.",
    icon: <Code size={36} />,
    palette: "bg-[#D1FAE5]",
  },
];

const experiences = [
  {
    role: "GenAI Consultant",
    company: "goBIGai / Freelance",
    timeframe: "2024 — Present",
    bullets: [
      "Translating Data Lumina frameworks into sellable playbooks for founders and growth teams.",
      "Built autonomous lead-mining copilots that read RFPs, enrich contacts, and push to HubSpot.",
      "Designed RAG stacks that combine Snowflake, Bedrock, and lightweight vector stores for regulated data.",
    ],
    highlight: "CURRENT",
  },
  {
    role: "Data Engineer",
    company: "Amazon (Seattle)",
    timeframe: "2021 — 2023",
    bullets: [
      "Scaled 20+ Step Function powered pipelines across 30 marketplaces while cutting runtime costs by $5K per pipeline.",
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
      "CrewAI multi-agent system that scrapes founder podcasts, extracts buying signals, and fires bespoke Loom recaps via n8n.",
  },
  {
    title: "Compliance RAG",
    metric: "4x faster reviews",
    description:
      "Snowflake + Bedrock Titan powering legal-grade document recall with guardrails mapped to SOC 2 requirements.",
  },
  {
    title: "Gaming Pulse",
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
    <div className={`relative min-h-screen bg-[#f0f0f0] ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
      <div className="noise-overlay" aria-hidden />

      <nav className="fixed top-0 left-0 z-50 w-full border-b-4 border-black bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-2xl font-black tracking-tight transition-transform hover:-skew-x-6"
          >
            goBIGai<span className="text-[#ff3366]">.</span>org
          </button>
          <div className="hidden gap-4 text-sm font-bold uppercase md:flex">
            {sections.slice(1).map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => scrollTo(section)}
                className={`border-2 px-3 py-1 transition-all ${
                  activeSection === section
                    ? "border-black bg-[#ccff00]"
                    : "border-transparent hover:border-black"
                }`}
              >
                {section.replace("-", " ").toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 border-4 border-black bg-[#ff3366] px-4 py-2 text-sm font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <Send size={16} />
            Hire me
          </button>
        </div>
      </nav>

      <main className="pt-24">
        <section
          id="hero"
          className="relative flex min-h-screen items-center border-b-4 border-black bg-[#ccff00] px-4 py-24"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="inline-flex w-fit items-center gap-2 border-2 border-black bg-black px-4 py-1 text-lg font-black text-white">
              <Sparkles size={20} /> Data Lumina Certified • goBIGai Founder
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-[5.5rem]">
              Building
              <span className="mx-3 inline-block bg-gradient-to-r from-[#ff3366] via-[#ff8800] to-[#3366ff] px-4 py-1 text-transparent"
                style={{ WebkitTextStroke: "3px black", WebkitTextFillColor: "transparent" }}
              >
                intelligent
              </span>
              data & AI systems that sell themselves.
            </h1>
            <p className="max-w-3xl border-l-8 border-black bg-white/60 p-6 text-lg font-semibold leading-relaxed">
              I am Anirudh Voruganti — data engineer turned GenAI consultant. From Amazon-scale pipelines to boutique
              founders looking for their first AI co-pilot, I architect neo-brutalist experiences that turn messy data
              into deal flow.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("work")}
                className="flex items-center justify-center gap-3 border-4 border-black bg-white px-6 py-4 text-xl font-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
              >
                View track record
                <ArrowRight />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="border-4 border-black bg-[#3366ff] px-6 py-4 text-xl font-black text-white shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
              >
                Explore solutions
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-4 border-black bg-white p-4 text-center shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                  <div className="text-4xl font-black">{stat.value}</div>
                  <p className="text-sm font-bold uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => scrollTo("services")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="scroll to services"
          >
            <ChevronDown size={48} />
          </button>
        </section>

        <section id="services" className="border-b-4 border-black bg-white px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 flex items-center gap-4 text-4xl font-black uppercase sm:text-6xl">
              <Zap className="text-[#ff3366]" size={56} /> What I ship
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`${service.palette} border-4 border-black p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2`}
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center border-2 border-black bg-black text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 text-lg font-medium leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-b-4 border-black bg-[#ff3366] px-4 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 flex items-center gap-4 text-4xl font-black uppercase sm:text-6xl">
              <Briefcase className="text-black" size={56} /> Track record
            </h2>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <article
                  key={experience.role}
                  className="relative border-4 border-black bg-white p-8 text-black shadow-[12px_12px_0px_rgba(0,0,0,1)]"
                >
                  {experience.highlight && (
                    <div className="absolute right-0 top-0 border-l-4 border-b-4 border-black bg-black px-4 py-2 text-xs font-black text-white">
                      {experience.highlight}
                    </div>
                  )}
                  <h3 className="text-3xl font-black">{experience.role}</h3>
                  <div className="text-xl font-bold text-[#3366ff]">{experience.company}</div>
                  <p className="text-sm font-mono uppercase tracking-widest text-gray-500">{experience.timeframe}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-lg font-medium marker:text-[#ff3366]">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="border-b-4 border-black bg-[#050505] px-4 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-mono uppercase tracking-[0.3em] text-[#ccff00]">Proof</p>
                <h2 className="text-4xl font-black uppercase sm:text-6xl">Deployments with teeth</h2>
              </div>
              <a
                href="https://linkedin.com/in/anirudh-voruganti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white px-4 py-2 text-sm font-black uppercase tracking-wide"
              >
                Full resume
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="border-4 border-white/60 bg-[#111] p-6 shadow-[6px_6px_0px_rgba(204,255,0,0.6)]"
                >
                  <p className="text-sm font-mono uppercase tracking-wide text-[#ff3366]">{study.metric}</p>
                  <h3 className="mt-2 text-2xl font-black">{study.title}</h3>
                  <p className="mt-4 text-lg text-gray-200">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="border-b-4 border-black bg-[#3366ff] px-4 py-24">
          <div className="mx-auto max-w-6xl text-center text-white">
            <h2 className="text-4xl font-black uppercase sm:text-6xl">The Arsenal</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold text-blue-100">
              Tooling I use daily across consulting retainers: automation, experimentation, infra-as-code, and human-in-the-loop workflows.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {stack.map((skill) => (
                <span
                  key={skill}
                  className="border-4 border-black bg-[#ccff00] px-6 py-3 text-lg font-black text-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b-4 border-black bg-[#f0f0f0] px-4 py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div className="border-4 border-black bg-white p-8 shadow-[12px_12px_0px_rgba(0,0,0,1)]">
              <h2 className="text-4xl font-black uppercase">About Anirudh</h2>
              <p className="mt-6 text-lg font-medium leading-relaxed">
                I blend an engineer’s love for distributed systems with a marketer’s need for velocity. Whether it’s shipping an
                AWS-native data mesh or crafting a Loom-ready narrative for a founder, goBIGai is the studio where both worlds meet.
                Currently progressing through the Data Lumina Freelancer curriculum to scale a boutique practice focused on
                measurable GenAI outcomes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm font-mono uppercase">
                <span className="border-2 border-black bg-[#ccff00] px-4 py-2">Hyderabad → Boston → Global clients</span>
                <span className="border-2 border-black bg-white px-4 py-2">Remote-first</span>
                <span className="border-2 border-black bg-white px-4 py-2">Time-to-value &lt; 3 weeks</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-4 border-black bg-[#fffaf0] p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h3 className="flex items-center gap-3 text-2xl font-black">
                  <GraduationCap /> Education
                </h3>
                <div className="mt-6 space-y-4">
                  {education.map((item) => (
                    <div key={item.program} className="border-l-4 border-[#ff3366] pl-4">
                      <p className="text-xl font-black">{item.program}</p>
                      <p className="text-lg font-semibold text-gray-600">{item.school}</p>
                      <p className="text-sm font-mono text-gray-500">{item.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-4 border-black bg-[#e0e7ff] p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h3 className="flex items-center gap-3 text-2xl font-black">
                  <Terminal /> Recent drops
                </h3>
                <ul className="mt-6 space-y-3 text-lg font-medium">
                  <li>Podcast intelligence bot for a fintech CMO, built with Whisper + GPT-4o.</li>
                  <li>Sales room command center that syncs Notion, Slack, and Airtable in real-time.</li>
                  <li>dbt-powered revenue dashboards for a global gaming leader.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-black px-4 py-24 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-mono uppercase tracking-[0.4em] text-[#ccff00]">Ready when you are</p>
            <h2 className="mt-4 text-5xl font-black uppercase sm:text-7xl">Let’s build.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold text-gray-300">
              Whether you need a skunkworks AI pod, marketing ops automation, or reliable data foundations, goBIGai is open for business.
              Drop a note, connect on LinkedIn, or peek into the GitHub experiments.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="mailto:founder@gobigai.org"
                className="flex w-full items-center justify-center gap-3 border-4 border-transparent bg-white px-6 py-4 text-lg font-black text-black transition-colors hover:border-white hover:bg-[#ff3366] hover:text-white md:w-auto"
              >
                <Mail /> founder@gobigai.org
              </a>
              <a
                href="https://linkedin.com/in/anirudh-voruganti"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 border-4 border-transparent bg-[#0a66c2] px-6 py-4 text-lg font-black text-white transition-colors hover:bg-white hover:text-[#0a66c2] md:w-auto"
              >
                <Linkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/anvoruganti"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 border-4 border-transparent bg-[#333] px-6 py-4 text-lg font-black text-white transition-colors hover:bg-white hover:text-black md:w-auto"
              >
                <Github /> GitHub
              </a>
            </div>
            <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-xs font-bold uppercase tracking-wide text-gray-400 sm:flex-row">
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
