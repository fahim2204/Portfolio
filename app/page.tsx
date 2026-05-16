import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  MoveUpRight,
  Phone,
} from "lucide-react";

const quickFacts = [
  "Bangladesh-based",
  "BSc in CSE, AIUB",
  "React · Next.js · ASP.NET · PHP",
  "Open for freelance & product work",
];

const expertise = [
  { name: "ReactJS & NextJS", note: "Primary" },
  { name: "React Native", note: "Mobile" },
  { name: "Tailwind CSS", note: "Styling" },
  { name: "ASP.NET", note: "Backend" },
  { name: "PHP", note: "Backend" },
  { name: "MySQL", note: "Database" },
  { name: "MongoDB", note: "Database" },
  { name: "Flutter", note: "Mobile" },
  { name: "JavaScript", note: "Core" },
];

const experience = [
  {
    period: "Sep 2022 — Present",
    role: "Full Stack Developer",
    company: "SF Group",
    summary:
      "Shipping business-facing web products and internal systems with a practical full-stack toolkit.",
  },
  {
    period: "Jan 2022 — Aug 2022",
    role: "Junior Software Engineer",
    company: "Akij Food & Beverage Ltd.",
    summary:
      "Worked on software delivery inside a large operating environment, building early production experience.",
  },
];

const education = [
  {
    period: "2018 — 2022",
    title: "BSc. in Computer Science & Engineering",
    detail: "American International University-Bangladesh (AIUB)",
    meta: "CGPA 3.95 / 4.00",
  },
  {
    period: "2015 — 2017",
    title: "Higher Secondary Certificate",
    detail: "Agricultural University College, Mymensingh",
    meta: "GPA 5.00 / 5.00",
  },
];

const featuredProjects = [
  {
    title: "AM Publication",
    caption: "Publishing website",
    href: "https://ampublication.com",
    image: "/assets/imgs/ampublication.webp",
    description:
      "A client-facing web presence built to present a polished catalog and clear publishing identity.",
  },
  {
    title: "Edit Pro",
    caption: "Product website",
    href: "http://www.editpro.ai",
    image: "/assets/imgs/editpro.webp",
    description:
      "A sharper, conversion-focused product site with a more SaaS-like visual rhythm and information flow.",
  },
  {
    title: "AIUB CS Clone",
    caption: "Institutional web build",
    href: "https://cs.aiub.fahimfaisal.net",
    image: "/assets/imgs/cs.aiub.webp",
    description:
      "A recreation of the AIUB CS department website with a careful content-heavy layout treatment.",
  },
  {
    title: "Megastar Technology",
    caption: "Corporate website",
    href: "https://megastar.technology/",
    image: "/assets/imgs/mst.webp",
    description:
      "A structured corporate presence balancing credibility, straightforward navigation, and speed.",
  },
];

const archiveProjects = [
  {
    title: "Facebook Homepage Clone",
    type: "Frontend clone",
    href: "https://facebook.fahimfaisal.net",
  },
  {
    title: "Instagram Homepage Clone",
    type: "Frontend clone",
    href: "https://instagram.fahimfaisal.net",
  },
  {
    title: "ABC Shop Management",
    type: "Web application",
    href: "https://abcshop.fahimfaisal.net",
  },
  {
    title: "Super Shop Management",
    type: "Windows application",
    href: "https://github.fahimfaisal.net/Super-Shop-Management",
  },
  {
    title: "DX-Ball",
    type: "Windows game",
    href: "https://github.com/fahim2204/DX-Ball",
  },
  {
    title: "Jungle Run",
    type: "Android game",
    href: "#contact",
  },
];

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-4">
      <span className="section-label">{label}</span>
      <div className="space-y-3 max-w-2xl">
        <h2
          className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {title}
        </h2>
        {description && (
          <p className="text-base leading-7 text-[var(--muted)]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      {/* ── HEADER ──────────────────────────── */}
      <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between pb-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Fahim Faisal
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Full stack developer · Dhaka, Bangladesh
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-5 text-sm">
          <Link className="eyebrow-link" href="#work">
            Work
          </Link>
          <Link className="eyebrow-link" href="#experience">
            Experience
          </Link>
          <Link className="eyebrow-link" href="#contact">
            Contact
          </Link>
          <a className="btn-primary" href="/CV.pdf">
            Resume
          </a>
        </nav>
      </header>

      {/* ── HERO ────────────────────────────── */}
      {/* ── HERO ────────────────────────────── */}
      {/* ── HERO ────────────────────────────── */}
      <section className="mb-24 pt-12 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-10">
          {/* Top: Identity Seal */}
          <div className="space-y-4">
            <div className="h-16 w-16 mx-auto rounded-full border border-[var(--line)] overflow-hidden bg-[var(--surface-strong)] p-1">
              <Image
                alt="Fahim Faisal"
                className="w-full h-full object-cover rounded-full"
                height={128}
                priority
                src="/assets/imgs/FahimFaisal.webp"
                width={128}
                style={{ objectPosition: "center 15%" }}
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Fahim Faisal</p>
              <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.2em] mt-1">Full Stack Developer</p>
            </div>
          </div>

          {/* Center: The Message */}
          <h2
            className="text-[2.75rem] font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Shipping compact web experiences with a practical full&#8209;stack edge.
          </h2>

          <p className="text-lg leading-relaxed text-[var(--muted)] max-w-2xl mx-auto md:text-xl">
            I build product-minded frontends, dependable backends, and 
            the kind of polish that makes software easier to trust. 
            Currently in Dhaka, building the next generation of web tools.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a className="btn-accent px-8" href="#contact">
              <span>Start a project</span>
              <ArrowRight size={16} />
            </a>
            <a className="btn-outline px-8" href="/CV.pdf">
              <span>Resume</span>
              <Download size={16} />
            </a>
          </div>

          {/* Context Footer */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-emerald-500" />
              <span>Available now</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-[var(--accent)]" />
              <span>Dhaka, BD</span>
            </div>
            <div className="flex items-center gap-6">
              <Link className="hover:text-[var(--foreground)] transition-colors" href="https://github.com/fahim2204" target="_blank">GitHub</Link>
              <Link className="hover:text-[var(--foreground)] transition-colors" href="https://linkedin.com/in/fahim2204" target="_blank">LinkedIn</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT & STACK ───────────────────── */}
      <section className="grid gap-6 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel p-6 md:p-8 space-y-5">
          <SectionTitle
            label="About"
            title="A developer who likes useful software more than noisy software."
          />
          <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
            Over time I&apos;ve worked across React, Next.js, Express, ASP.NET,
            PHP, Flutter, and database-backed products. That variety makes me
            comfortable moving between interface detail and implementation
            detail without losing the bigger picture.
          </p>
        </div>

        <div className="panel bg-[var(--surface-strong)] p-6 md:p-8 space-y-5">
          <span className="section-label">Core Stack</span>
          <h3
            className="text-xl font-semibold tracking-tight md:text-2xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Tools I trust when the work needs to ship.
          </h3>
          <div className="grid grid-cols-2 gap-3 pt-1">
            {expertise.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3"
              >
                <span className="text-sm font-medium text-[var(--foreground)]">{skill.name}</span>
                <span className="text-[0.65rem] uppercase tracking-wider text-[var(--muted)]">{skill.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE & EDUCATION ──────────── */}
      <section className="space-y-8 py-12" id="experience">
        <SectionTitle
          label="Resume"
          title="Experience that mixes product delivery with solid technical foundations."
          description="A short timeline of where I've studied and worked so far."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Work */}
          <div className="panel p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 text-[var(--muted)]">
              <BriefcaseBusiness size={18} className="text-[var(--accent)]" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">Work</p>
            </div>
            <div className="space-y-5">
              {experience.map((item) => (
                <article
                  key={`${item.role}-${item.company}`}
                  className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-5"
                >
                  <p className="text-xs font-medium text-[var(--muted)]">{item.period}</p>
                  <h3
                    className="mt-2 text-xl font-semibold"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {item.company}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="panel p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 text-[var(--muted)]">
              <GraduationCap size={18} className="text-[var(--accent)]" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">Education</p>
            </div>
            <div className="space-y-5">
              {education.map((item) => (
                <article
                  key={`${item.title}-${item.period}`}
                  className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-5"
                >
                  <p className="text-xs font-medium text-[var(--muted)]">{item.period}</p>
                  <h3
                    className="mt-2 text-lg font-semibold md:text-xl"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {item.detail}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {item.meta}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ───────────────────── */}
      <section className="space-y-8 py-14" id="work">
        <SectionTitle
          label="Selected Work"
          title="Client builds, product sites, and experiments that show range."
          description="A handful of projects from the portfolio, presented with more focus and less noise."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group panel bg-[var(--surface-strong)] overflow-hidden"
            >
              <a href={project.href} target="_blank" rel="noreferrer" className="block project-frame m-4 mb-0">
                <Image
                  alt={project.title}
                  className="w-full h-auto"
                  height={900}
                  src={project.image}
                  width={1400}
                />
              </a>
              <div className="p-5 pt-4 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                      {project.caption}
                    </p>
                    <h3
                      className="text-xl font-semibold tracking-tight"
                      style={{ fontFamily: "var(--font-display), sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--muted)] pt-1">
                      {project.description}
                    </p>
                  </div>
                  <a
                    aria-label={`Visit ${project.title}`}
                    className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] transition-colors hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MoveUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive */}
        <div className="panel p-6 md:p-8 space-y-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="section-label">Archive</span>
              <h3
                className="text-2xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                More builds from the portfolio.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
              Older experiments, management systems, and clones that still help
              round out the story.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {archiveProjects.map((project) => (
              <a
                key={project.title}
                className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-4 transition-all duration-200 hover:border-[var(--accent)] hover:bg-[rgba(232,108,45,0.04)]"
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <div>
                  <p className="text-sm font-medium">{project.title}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{project.type}</p>
                </div>
                <MoveUpRight
                  className="text-[var(--muted)] transition-all duration-200 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={16}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────── */}
      <section className="py-10" id="contact">
        <div className="panel overflow-hidden rounded-2xl bg-[var(--surface-strong)] relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse at 30% 0%, rgba(232,108,45,0.08), transparent 60%)"
          }} />
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-5">
              <span className="section-label">Contact</span>
              <h2
                className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Have something useful to build? Let&apos;s make it clean, fast, and human.
              </h2>
              <p className="max-w-xl text-base leading-7 text-[var(--muted)]">
                I&apos;m reachable for freelance work, product collaborations, and
                computer-science-related tasks. If the brief is clear and the work
                matters, I&apos;m interested.
              </p>
            </div>

            <div className="space-y-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
              <a
                className="block rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm transition-colors hover:border-[var(--accent)] hover:bg-[rgba(232,108,45,0.06)]"
                href="mailto:fahimfaisal1998@gmail.com"
              >
                fahimfaisal1998@gmail.com
              </a>
              <a
                className="block rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm transition-colors hover:border-[var(--accent)] hover:bg-[rgba(232,108,45,0.06)]"
                href="mailto:fahimfaisal1998@gmail.com"
              >
                fahimfaisal1998@gmail.com
              </a>
              <a
                className="block rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm transition-colors hover:border-[var(--accent)] hover:bg-[rgba(232,108,45,0.06)]"
                href="tel:+8801960839343"
              >
                +880 1960 839343
              </a>
              <a className="btn-accent mt-2 w-full" href="/CV.pdf">
                View resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────── */}
      <footer className="flex flex-col gap-3 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="footer-note">
          Built with Next.js & Tailwind CSS.
        </p>
        <p className="footer-note">Fahim Faisal · Dhaka, Bangladesh</p>
      </footer>
    </main>
  );
}
