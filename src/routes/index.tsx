import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Location24Regular,
  Briefcase24Regular,
  BookOpen24Regular,
  Star24Regular,
  Sparkle24Regular,
  Trophy24Regular,
  Grid24Regular,
} from "@fluentui/react-icons";
import portraitImage from "@/assets/daniel-portrait.jpg";
import microsoftLogoImage from "@/assets/microsoft-logo.svg";
import emagLogoImage from "@/assets/emag-logo.svg";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Daniel Chiru · Power BI Artist & Data Analyst at Microsoft" },
      {
        name: "description",
        content:
          "Daniel Chiru · Data Analyst & Power BI Artist at Microsoft. 10+ years turning complex data into actionable insights, dashboards and machine learning models.",
      },
      { name: "author", content: "Daniel Chiru" },
      { property: "og:title", content: "Daniel Chiru · Modern Data Analyst" },
      {
        property: "og:description",
        content:
          "Senior Data Analyst at Microsoft. Power BI, Microsoft Fabric, Azure, AI analytics and executive dashboards.",
      },
      { property: "og:image", content: portraitImage },
      { name: "twitter:title", content: "Daniel Chiru · Modern Data Analyst" },
      { name: "twitter:description", content: "Senior Data Analyst at Microsoft. Power BI, Fabric, Azure, AI analytics." },
      { name: "twitter:image", content: portraitImage },
    ],
  }),
  component: Resume,
});

const skills: { name: string; pct: number }[] = [
  { name: "Power BI", pct: 100 },
  { name: "DAX & Data Modeling", pct: 95 },
  { name: "SQL / T-SQL", pct: 92 },
  { name: "Azure (Synapse, Fabric)", pct: 88 },
  { name: "Product Design (Figma)", pct: 80 },
  { name: "QlikView / Qlik Sense", pct: 60 },
  { name: "Office Suite", pct: 90 },
  { name: "Data Visualization", pct: 95 },
];

const techTags = [
  "Power BI",
  "DAX",
  "Microsoft Fabric",
  "Azure Synapse",
  "SQL Server",
  "Python",
  "Machine Learning",
  "Power Query",
  "Tabular Editor",
  "Git",
  "Azure Data Factory",
];

const certs = [
  { code: "AI", label: "Azure AI Fundamentals", url: "https://learn.microsoft.com/api/credentials/share/en-us/DanielChiru-9476/78DAFA044913ECE9?sharingId" },
  { code: "FA", label: "Fabric Analytics Engineer Associate", url: "https://learn.microsoft.com/api/credentials/share/en-us/DanielChiru-9476/C5B0628B9920079D?sharingId" },
  { code: "PB", label: "Power BI Data Analyst Associate", url: "https://learn.microsoft.com/api/credentials/share/en-us/DanielChiru-9476/CD9EC87537DB8625?sharingId" },
  { code: "DE", label: "Azure Data Engineer Associate", url: "https://learn.microsoft.com/api/credentials/share/en-us/DanielChiru-9476/63D432C969BA83E2?sharingId" },
  { code: "AZ", label: "Azure Fundamentals", url: "https://learn.microsoft.com/api/credentials/share/en-us/DanielChiru-9476/BCDB219B3F190EA8?sharingId" },
  { code: "PP", label: "Power Platform Fundamentals", url: "https://learn.microsoft.com/en-us/users/danielchiru-9476/credentials/de5f59538a6d5113?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
  { code: "MCT", label: "Microsoft Certified Trainer 2022–2023", url: "https://www.credly.com/badges/2a85d669-ca19-41b9-b47d-a0c17e73ea21/linked_in_profile" },
  { code: "EL", label: "Engagement Lead 2022", url: "https://www.credly.com/badges/d74b9f41-c5e1-4d0f-86e7-7aaf6dd46719?source=linked_in_profile" },
  { code: "HK", label: "Microsoft Hackathon 2020", url: "https://www.youracclaim.com/badges/8683a69b-9712-4a2f-92e4-5b2c65e7d689/linked_in_profile" },
];

const languages = [
  { code: "RO", name: "Romanian", level: "Native" },
  { code: "EN", name: "English", level: "Full professional proficiency" },
];

function CertIcon({ code }: { code: string }) {
  switch (code) {
    case "AI": // Copilot
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <defs>
            <linearGradient id="ci-ai" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2AC2EA" />
              <stop offset="100%" stopColor="#9B5BFF" />
            </linearGradient>
          </defs>
          <path fill="url(#ci-ai)" d="M12 3c1.4 3.2 2.4 4.2 5.6 5.6-3.2 1.4-4.2 2.4-5.6 5.6-1.4-3.2-2.4-4.2-5.6-5.6C9.6 7.2 10.6 6.2 12 3zm6.5 9c.8 1.8 1.4 2.4 3.2 3.2-1.8.8-2.4 1.4-3.2 3.2-.8-1.8-1.4-2.4-3.2-3.2 1.8-.8 2.4-1.4 3.2-3.2zM7 14c.6 1.4 1 1.8 2.4 2.4C8 17 7.6 17.4 7 18.8 6.4 17.4 6 17 4.6 16.4 6 15.8 6.4 15.4 7 14z" />
        </svg>
      );
    case "FA": // Fabric
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <defs>
            <linearGradient id="ci-fa" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0CB6F4" />
              <stop offset="100%" stopColor="#0078D4" />
            </linearGradient>
          </defs>
          <path fill="url(#ci-fa)" d="M4 6l8-3 8 3v3l-8 3-8-3V6zm0 6l8 3 8-3v3l-8 3-8-3v-3z" />
        </svg>
      );
    case "PB": // Power BI
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <rect x="4" y="10" width="4" height="11" rx="1" fill="#F2C811" />
          <rect x="10" y="6" width="4" height="15" rx="1" fill="#E8A100" />
          <rect x="16" y="3" width="4" height="18" rx="1" fill="#C87E00" />
        </svg>
      );
    case "DE": // Data Engineer - database stack
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="7" ry="2.4" fill="#0078D4" />
          <path fill="#0078D4" d="M5 8c0 1.3 3.1 2.4 7 2.4S19 9.3 19 8v3c0 1.3-3.1 2.4-7 2.4S5 12.3 5 11V8z" />
          <path fill="#50B0FF" d="M5 13c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4v3c0 1.3-3.1 2.4-7 2.4s-7-1.1-7-2.4v-3z" />
        </svg>
      );
    case "AZ": // Azure - blue A triangle
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path fill="#0078D4" d="M10 4l-7 13h5l4-7-2-6z" />
          <path fill="#50B0FF" d="M11 9l4 7h-5l-2 3h12L13 4l-2 5z" />
        </svg>
      );
    case "PP": // Power Platform - 4 colored squares
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#742774" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#0078D4" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#F2C811" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#E8A100" />
        </svg>
      );
    case "MCT": // Microsoft 4 squares
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <rect x="3" y="3" width="8.5" height="8.5" fill="#F25022" />
          <rect x="12.5" y="3" width="8.5" height="8.5" fill="#7FBA00" />
          <rect x="3" y="12.5" width="8.5" height="8.5" fill="#00A4EF" />
          <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="#FFB900" />
        </svg>
      );
    case "EL": // Engagement Lead - people
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <circle cx="8" cy="8" r="3" fill="#0078D4" />
          <circle cx="16" cy="9" r="2.5" fill="#50B0FF" />
          <path fill="#0078D4" d="M2 19c0-3 3-5 6-5s6 2 6 5v1H2v-1z" />
          <path fill="#50B0FF" d="M14 20v-1c0-1.8-.8-3.3-2-4.3 1-.4 2.1-.7 3.5-.7 3 0 6 1.6 6 4v2h-7.5z" />
        </svg>
      );
    case "HK": // Hackathon - trophy
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path fill="#F2C811" d="M7 4h10v4a5 5 0 01-10 0V4z" />
          <path fill="#E8A100" d="M10 13h4l-.5 3h-3L10 13zm-2 4h8v2H8v-2z" />
          <path fill="#E8A100" d="M5 5h2v2H6a1 1 0 01-1-1V5zm12 0h2v1a1 1 0 01-1 1h-1V5z" />
        </svg>
      );
    default:
      return <span>{code}</span>;
  }
}

const projects = [
  {
    title: "Copilot Studio AI Infrastructure Analytics",
    desc: "Enterprise-scale reporting on token consumption, GPU TPS, adoption funnels and usage telemetry giving engineering and product teams the visibility to optimize platform performance, scalability and adoption.",
    tags: ["Power BI", "KQL", "Fabric"],
    thumb: "1",
    chart: "bars",
  },
  {
    title: "Semantic Model Performance Redesign",
    desc: "Re-architected Power BI semantic models and executive dashboards, cutting report load times from 32s to 8s (~75% faster) and dramatically improving stakeholder productivity.",
    tags: ["Power BI", "DAX", "Tabular"],
    thumb: "2",
    chart: "line",
  },
  {
    title: "Executive Copilot Scorecards",
    desc: "Leadership-facing scorecards covering funnel analytics, agent insights and Copilot usage intelligence directly informing product strategy and executive decision-making.",
    tags: ["Power BI", "DAX", "Storytelling"],
    thumb: "3",
    chart: "area",
  },
  {
    title: "Near Real-Time Monitoring & Alerting",
    desc: "DirectQuery + ICM integration patterns powering proactive issue detection and alerting, reducing operational response times for the Copilot Studio platform.",
    tags: ["DirectQuery", "ICM", "Fabric"],
    thumb: "4",
    chart: "donut",
  },
  {
    title: "AI-Powered Smart Narratives",
    desc: "Embedded smart narratives and dynamic contextual insights inside executive dashboards improving data storytelling and faster interpretation of complex AI metrics.",
    tags: ["AI", "Copilot", "Power BI"],
    thumb: "5",
    chart: "copilot",
  },
  {
    title: "Supportability & Customer Health Reporting",
    desc: "Leading the Copilot Studio support report tracking incidents per day, CSAT, DTR (Days To Resolve) and FDR (First Day Response) across the support funnel. The metrics drive weekly leadership reviews and have helped reduce incident volume while keeping customer satisfaction high.",
    tags: ["CSAT", "DTR / FDR", "Incident Analytics"],
    thumb: "6",
    chart: "gauge",
  },
];


function MiniChart({ kind }: { kind: string }) {
  if (kind === "bars") {
    const heights = [40, 65, 50, 80, 60, 90, 70, 95];
    return (
      <svg viewBox="0 0 200 100" preserveAspectRatio="none">
        {heights.map((h, i) => (
          <rect key={i} x={i * 24 + 4} y={100 - h} width="18" height={h} rx="3" fill="rgba(255,255,255,0.85)" />
        ))}
      </svg>
    );
  }
  if (kind === "line") {
    return (
      <svg viewBox="0 0 200 100" preserveAspectRatio="none">
        <polyline points="0,80 30,60 60,70 90,40 120,50 150,25 180,35 200,15" fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="0,90 30,75 60,82 90,65 120,72 150,55 180,62 200,48" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    );
  }
  if (kind === "area") {
    return (
      <svg viewBox="0 0 200 100" preserveAspectRatio="none">
        <path d="M0,80 C40,40 80,90 120,50 C160,20 180,55 200,30 L200,100 L0,100 Z" fill="rgba(255,255,255,0.45)" />
        <path d="M0,80 C40,40 80,90 120,50 C160,20 180,55 200,30" fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth="3" />
      </svg>
    );
  }
  if (kind === "donut") {
    return (
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="14" />
        <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth="14" strokeDasharray="160 226" strokeLinecap="round" transform="rotate(-90 50 50)" />
        <text x="50" y="55" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="18">71%</text>
      </svg>
    );
  }
  if (kind === "gauge") {
    // Semicircular gauge, 4.7 / 5.0 CSAT target with stars
    const pct = 4.7 / 5; // 0.94
    const R = 70;
    const C = Math.PI * R; // semicircle length
    const dash = C * pct;
    return (
      <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet">
        {/* track */}
        <path d="M20,110 A70,70 0 0 1 180,110" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="14" strokeLinecap="round" />
        {/* value */}
        <path
          d="M20,110 A70,70 0 0 1 180,110"
          fill="none"
          stroke="rgba(255,255,255,0.95)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${C}`}
        />
        {/* value text */}
        <text x="100" y="92" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="28">4.7</text>
        <text x="100" y="110" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontWeight="600" fontSize="11">/ 5.0 CSAT</text>
        {/* stars */}
        {[0, 1, 2, 3, 4].map((i) => {
          const cx = 70 + i * 15;
          const filled = i < 4 || true; // all filled (4.7 ≈ all glowing)
          return (
            <polygon
              key={i}
              points="0,-5 1.5,-1.5 5,-1.5 2,1 3,5 0,2.5 -3,5 -2,1 -5,-1.5 -1.5,-1.5"
              transform={`translate(${cx} 124) scale(0.9)`}
              fill={filled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.3)"}
            />
          );
        })}
      </svg>
    );
  }
  if (kind === "copilot") {
    // Microsoft Copilot–inspired sparkle ribbon + KPI
    return (
      <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="copilotGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.55)" />
          </linearGradient>
        </defs>
        {/* big sparkle */}
        <path
          d="M55,50 L62,32 L69,50 L87,57 L69,64 L62,82 L55,64 L37,57 Z"
          fill="url(#copilotGrad)"
        />
        {/* small sparkle */}
        <path
          d="M95,30 L98,22 L101,30 L109,33 L101,36 L98,44 L95,36 L87,33 Z"
          fill="rgba(255,255,255,0.85)"
        />
        {/* KPI text */}
        <text x="125" y="48" fill="#fff" fontWeight="700" fontSize="22">+38%</text>
        <text x="125" y="64" fill="rgba(255,255,255,0.9)" fontWeight="600" fontSize="10">insight uptake</text>
        <text x="125" y="78" fill="rgba(255,255,255,0.75)" fontWeight="500" fontSize="9">via MS Copilot</text>
      </svg>
    );
  }
  return null;
}

function Resume() {
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setSkillsAnimated(true), 150);
    return () => clearTimeout(t);
  }, []);

  const handleExportPdf = () => {
    const pageContent = document.querySelector(".dc-page") as HTMLElement | null;
    if (!pageContent) return;

    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) {
      window.alert("Popup blocked. Please allow popups and try exporting again.");
      return;
    }

    const styleTags = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]'),
    )
      .map((el) => el.outerHTML)
      .join("\n");

    printWindow.document.open();
    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Daniel Chiru Snapshot</title>
          ${styleTags}
          <style>
            @page { size: A4; margin: 10mm; }
            body { margin: 0; background: #fff; }
            .dc-chip-button { display: none !important; }
          </style>
        </head>
        <body>
          ${pageContent.outerHTML}
          <script>
            window.addEventListener('load', () => {
              setTimeout(() => window.print(), 300);
            });
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <>
      <main className="dc-page">
        <div className="dc-container">
          {/* HERO */}
          <header className="dc-hero">
            <img
              className="dc-avatar"
                src={portraitImage}
              alt="Daniel Chiru"
            />
            <div>
              <h1 className="dc-name">Daniel Chiru</h1>
              <div className="dc-tag">Data Analyst at Microsoft · Power BI Expert · Delivering Actionable Business Insights</div>
              <p className="dc-tagline">
                For over a decade, I've transformed complex, messy data into
                clear, actionable insights that drive business growth.
              </p>
              <div className="dc-meta">
                <div className="dc-chip">
                  <span className="dc-chip-ico"><Location24Regular fontSize={16} /></span>
                  <span>Berlin, Germany</span>
                </div>
                <a
                  className="dc-chip"
                  href="https://www.linkedin.com/in/danielchiru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="dc-chip-ico" style={{ fontWeight: 800, fontSize: 13 }}>in</span>
                  <span>Connect on LinkedIn</span>
                </a>
                <button
                  type="button"
                  className="dc-chip dc-chip-button"
                  onClick={handleExportPdf}
                >
                  <span className="dc-chip-ico" style={{ fontWeight: 800, fontSize: 11 }}>PDF</span>
                  <span>Export Snapshot to PDF</span>
                </button>
              </div>
            </div>
          </header>

          {/* STATS */}
          {(() => {
            const now = new Date();
            const yearsSince = (y: number, m: number) => {
              const diff = (now.getFullYear() - y) + (now.getMonth() - (m - 1)) / 12;
              return Math.floor(diff);
            };
            const dataYears = yearsSince(2014, 9);
            const msYears = yearsSince(2017, 1);
            const items = [
              {
                num: dataYears,
                label: "Years in Data & BI",
                sub: "Since 2014 · analytics, modeling, storytelling",
                icon: <BookOpen24Regular />,
                accent: "var(--colorBrandBackground)",
              },
              {
                num: msYears,
                label: "Years at Microsoft",
                sub: "Building with Power BI, Fabric & Azure",
                icon: <Briefcase24Regular />,
                accent: "#107c10",
              },
              {
                num: certs.length,
                label: "Microsoft Certifications",
                sub: "Fabric · Power BI · Azure · AI",
                icon: <Trophy24Regular />,
                accent: "#c19c00",
              },
            ];
            return (
              <section className="dc-stats">
                {items.map((it) => (
                  <div className="dc-stat" key={it.label} style={{ ["--stat-accent" as any]: it.accent }}>
                    <div className="dc-stat-glow" aria-hidden />
                    <div className="dc-stat-row">
                      <div className="dc-stat-icon" aria-hidden>{it.icon}</div>
                      <div className="dc-stat-num">{it.num}+</div>
                    </div>
                    <div className="dc-stat-label">{it.label}</div>
                    <div className="dc-stat-sub">{it.sub}</div>
                  </div>
                ))}
              </section>
            );
          })()}


          <div className="dc-grid">
            {/* LEFT COLUMN */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <section className="dc-card">
                <h2 className="dc-section-title">
                  <Sparkle24Regular /> Skills
                </h2>
                {skills.map((s, i) => (
                  <div key={s.name} className="dc-skill">
                    <div className="dc-skill-head">
                      <span className="dc-skill-name">{s.name}</span>
                      <span className="dc-skill-pct">{s.pct}%</span>
                    </div>
                    <div className="dc-skill-bar">
                      <div
                        className="dc-skill-fill"
                        style={{
                          width: skillsAnimated ? `${s.pct}%` : "0%",
                          transitionDelay: `${i * 120}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
                <div className="dc-tag-row">
                  {techTags.map((t) => (
                    <span key={t} className="dc-mini-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section className="dc-card">
                <h2 className="dc-section-title">
                  <BookOpen24Regular /> Education
                </h2>
                <div style={{ fontWeight: 600 }}>
                  Transilvania University of Brașov
                </div>
                <div
                  style={{
                    color: "var(--colorNeutralForeground2)",
                    fontSize: 14,
                    marginTop: 4,
                  }}
                >
                  Bachelor's Degree · Cybernetics & Economic Informatics
                </div>
                <div
                  style={{
                    color: "var(--colorNeutralForeground3)",
                    fontSize: 13,
                    marginTop: 2,
                  }}
                >
                  2012 – 2015
                </div>
              </section>

              <section className="dc-card">
                <h2 className="dc-section-title">
                  <Trophy24Regular /> Certifications
                </h2>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {certs.map((c) => (
                    <a
                      key={c.label}
                      className="dc-cert"
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="dc-cert-icon"><CertIcon code={c.code} /></div>
                      <span>{c.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              <section className="dc-card">
                <h2 className="dc-section-title">
                  <BookOpen24Regular /> Languages
                </h2>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {languages.map((l) => (
                    <div key={l.code} className="dc-cert">
                      <div className="dc-cert-icon">
                        <span style={{ fontSize: 11, fontWeight: 700 }}>{l.code}</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                        <span style={{ fontWeight: 600 }}>{l.name}</span>
                        <span style={{ color: "var(--colorNeutralForeground3)", fontSize: 12 }}>{l.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </aside>

            {/* RIGHT COLUMN */}
            <section
              style={{ display: "flex", flexDirection: "column", gap: 28 }}
            >
              <div className="dc-card dc-expandable" tabIndex={0}>
                <h2 className="dc-section-title">
                  <Star24Regular /> About
                </h2>
                <p
                  style={{
                    color: "var(--colorNeutralForeground2)",
                    lineHeight: 1.65,
                    fontSize: 15,
                  }}
                >
                  Senior Data Analyst at Microsoft with 10+ years of experience
                  building analytics, business intelligence, and reporting
                  solutions across AI, product intelligence, and enterprise data
                  platforms. Passionate about turning complex data into
                  actionable insights, scalable analytics solutions, and
                  impactful data stories that drive business and product
                  decisions.
                </p>
                <span className="dc-expand-hint">Hover to read more ↓</span>
                <div className="dc-more">
                  <div className="dc-more-inner">
                    <p
                      style={{
                        color: "var(--colorNeutralForeground2)",
                        lineHeight: 1.65,
                        fontSize: 15,
                        marginTop: 12,
                      }}
                    >
                      Specialized in Power BI, Microsoft Fabric, Kusto (KQL),
                      SQL, semantic modeling, and executive dashboard design,
                      with strong experience in reporting modernization,
                      operational monitoring, and AI-driven analytics
                      initiatives including Microsoft Copilot.
                    </p>
                    <p
                      style={{
                        color: "var(--colorNeutralForeground2)",
                        lineHeight: 1.65,
                        fontSize: 15,
                        marginTop: 12,
                      }}
                    >
                      Outside of dashboards, I care deeply about reporting UX,
                      executive storytelling, and the craft of making numbers
                      feel intuitive. I've worked across Berlin, Copenhagen and
                      Bucharest, partnering with engineering, product, and
                      leadership to ship analytics that scale to thousands of
                      enterprise customers.
                    </p>
                  </div>
                </div>
              </div>


              <div className="dc-card">
                <h2 className="dc-section-title">
                  <Briefcase24Regular /> Work Experience
                </h2>

                {(() => {
                  const start = new Date(2017, 1, 1); // Feb 2017
                  const now = new Date();
                  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
                  if (now.getDate() < start.getDate()) months -= 1;
                  const yrs = Math.floor(months / 12);
                  const mos = months % 12;
                  const tenure = `${yrs} yr${yrs === 1 ? "" : "s"}${mos ? ` ${mos} mo${mos === 1 ? "" : "s"}` : ""}`;
                  return (
                    <div className="dc-company">
                      <div className="dc-company-logo">
                        <img src={microsoftLogoImage} alt="Microsoft" />
                      </div>
                      <div>
                        <div className="dc-company-name">Microsoft</div>
                        <div className="dc-company-meta">
                          Full-time · {tenure} · Feb 2017 – Present
                        </div>
                      </div>
                    </div>
                  );
                })()}

                <div className="dc-timeline">
                  <div className="dc-job">
                    <div className="dc-job-title">Data Analyst</div>
                    <div className="dc-job-meta">
                      Jan 2022 – Present · 4 yrs 6 mos · Berlin, Germany · Hybrid
                    </div>
                    <ul>
                      <li>
                        Led enterprise-scale analytics and reporting for
                        Microsoft Copilot Studio, delivering AI infrastructure
                        insights across token consumption, GPU TPS, adoption
                        funnels and usage telemetry enabling engineering and
                        product teams to optimize platform performance,
                        scalability and adoption.
                      </li>
                      <li>
                        Designed and optimized Power BI semantic models and
                        executive dashboards, reducing report load times by
                        ~75% through semantic model redesign (32s → 8s),
                        significantly improving reporting responsiveness and
                        stakeholder productivity.
                      </li>
                      <li>
                        Built advanced analytics solutions using Power BI, DAX,
                        KQL, SQL Server and Microsoft Fabric to improve
                        operational visibility and provide leadership with
                        actionable business and product insights.
                      </li>
                      <li>
                        Introduced AI-powered smart narratives and dynamic
                        contextual insights within executive dashboards,
                        improving data storytelling, stakeholder engagement
                        and faster interpretation of complex metrics.
                      </li>
                      <li>
                        Modernized legacy reporting platforms into scalable
                        semantic models and optimized Power BI architectures,
                        improving maintainability, scalability and long-term
                        reporting reliability.
                      </li>
                    </ul>
                  </div>

                  <div className="dc-job">
                    <div className="dc-job-title">Customer Engineer</div>
                    <div className="dc-job-meta">
                      Apr 2020 – Jan 2022 · 1 yr 10 mos · Copenhagen, Capital Region of Denmark, Denmark
                    </div>
                    <ul>
                      <li>
                        Accelerated cloud adoption and data-driven
                        decision-making, specializing in Power BI and
                        enterprise analytics.
                      </li>
                      <li>
                        Advocated for Managed IP and Proactive Services to help
                        customers optimize Power BI solutions and maximize
                        their support agreements.
                      </li>
                      <li>
                        Diagnosed and resolved Power BI performance issues,
                        including data modeling, DAX optimization and report
                        performance tuning.
                      </li>
                      <li>
                        Advised customers on best practices for data
                        governance, enterprise BI adoption and reporting
                        scalability within the Microsoft ecosystem.
                      </li>
                      <li>
                        Mapped customer needs to Azure data solutions,
                        including Synapse, Fabric and cloud-based analytics.
                      </li>
                    </ul>
                  </div>

                  <div className="dc-job">
                    <div className="dc-job-title">Technical Support Engineer</div>
                    <div className="dc-job-meta">
                      Feb 2017 – Apr 2020 · 3 yrs 3 mos · Bucharest, Romania
                    </div>
                    <ul>
                      <li>
                        Provided advisory and reactive support for Power BI
                        and related technologies, troubleshooting complex
                        issues across Desktop, Web Service, Mobile, Premium,
                        Embedded and Gateway.
                      </li>
                      <li>
                        Resolved escalated cases through advanced
                        problem-solving and collaboration with engineering.
                      </li>
                      <li>
                        Mentored new hires and proposed targeted training to
                        address team skill gaps.
                      </li>
                      <li>
                        Diagnosed and addressed product bugs, analyzing
                        logs (Fiddler, SQL Profiler, Power BI logs) and
                        collaborating with engineering teams on fixes.
                      </li>
                      <li>
                        Troubleshot connectivity issues across SQL Server,
                        SharePoint, SAP, Google Analytics, Azure and other
                        platforms.
                      </li>
                    </ul>
                  </div>
                </div>


                <div
                  className="dc-company"
                  style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--colorNeutralStroke2)" }}
                >
                  <div className="dc-company-logo">
                    <img
                      src={emagLogoImage}
                      alt="eMAG"
                    />
                  </div>
                  <div>
                    <div className="dc-company-name">eMAG</div>
                    <div className="dc-company-meta">
                      Full-time · 1 yr 7 mos · Jul 2015 – Jan 2017
                    </div>
                  </div>
                </div>

                <div className="dc-timeline">
                  <div className="dc-job">
                    <div className="dc-job-title">
                      Business Intelligence Developer
                    </div>
                    <div className="dc-job-meta">București, România</div>
                    <ul>
                      <li>
                        Designed and optimized advanced BI applications in
                        QlikView and Qlik Sense.
                      </li>
                      <li>
                        Integrated data from MySQL, MSSQL, Power BI, SQL Server
                        and Google Analytics.
                      </li>
                      <li>
                        Worked in Agile (SCRUM) with JIRA, collaborating
                        with strategy teams to ship data-driven product
                        and merchandising improvements.
                      </li>
                      <li>
                        Built reusable BI components and data models that
                        standardized reporting across multiple business
                        units inside eMAG.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>
          </div>

          {/* PORTFOLIO */}
          <section className="dc-card" id="portfolio">
            <h2 className="dc-section-title">
              <Grid24Regular /> Portfolio
            </h2>
            <p style={{ color: "var(--colorNeutralForeground2)", fontSize: 14, marginTop: -10, marginBottom: 20, lineHeight: 1.6 }}>
              A selection of dashboards, models and data products built across Microsoft, eMAG and consulting engagements.
            </p>
            <div className="dc-portfolio-grid">
              {projects.map((p) => (
                <article key={p.title} className="dc-project">
                  <div className={`dc-project-thumb dc-thumb-${p.thumb}`}>
                    <MiniChart kind={p.chart} />
                  </div>
                  <div className="dc-project-body">
                    <div className="dc-project-title">{p.title}</div>
                    <div className="dc-project-desc">{p.desc}</div>
                    <div className="dc-project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="dc-project-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>



          <footer
            style={{
              textAlign: "center",
              color: "var(--colorNeutralForeground3)",
              fontSize: 13,
              marginTop: 12,
            }}
          >
            © {new Date().getFullYear()} Daniel Chiru · Built with care in Berlin
          </footer>
        </div>
      </main>
    </>
  );
}
