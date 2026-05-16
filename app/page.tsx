"use client";

import Image from "next/image";
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
import { Card, Chip, Link } from "@heroui/react";

const quickFacts = [
  "Bangladesh-based",
  "BSc in CSE, AIUB",
  "React, Next.js, ASP.NET, PHP",
  "Available for freelance and product work",
];

const expertise = [
  "ReactJS & NextJS",
  "Tailwind CSS",
  "ASP.NET",
  "PHP",
  "MySQL",
  "MongoDB",
  "Flutter",
  "JavaScript",
];

const experience = [
  {
    period: "Sep 2022 - Present",
    role: "Full Stack Developer",
    company: "SF Group",
    summary:
      "Shipping business-facing web products and internal systems with a practical full-stack toolkit.",
  },
  {
    period: "Jan 2022 - Aug 2022",
    role: "Junior Software Engineer",
    company: "Akij Food & Beverage Ltd.",
    summary:
      "Worked on software delivery inside a large operating environment, building early production experience.",
  },
];

const education = [
  {
    period: "2018 - 2022",
    title: "BSc. in Computer Science & Engineering",
    detail: "American International University-Bangladesh (AIUB)",
    meta: "CGPA 3.95 / 4.00",
  },
  {
    period: "2015 - 2017",
    title: "Higher Secondary Certificate",
    detail: "Agricultural University College, Mymensingh",
    meta: "GPA 5.00 / 5.00",
  },
  {
    period: "2013 - 2015",
    title: "Secondary School Certificate",
    detail: "Haluaghat Model High School",
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
  description: string;
}) {
  return (
    <div className="space-y-4">
      <span className="section-label">{label}</span>
      <div className="space-y-3">
        <h2
          className="max-w-2xl text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="panel grain-card rounded-[2rem] px-5 py-4 sm:px-7">
        <header className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-[var(--muted)]">
              Fahim Faisal
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Full stack developer focused on practical products and clean delivery.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link className="eyebrow-link" href="#work">
              Work
            </Link>
            <Link className="eyebrow-link" href="#experience">
              Experience
            </Link>
            <Link className="eyebrow-link" href="#contact">
              Contact
            </Link>
            <a
              className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-2 text-sm text-[var(--background)] transition-opacity hover:opacity-90"
              href="/CV.pdf"
            >
              Resume
            </a>
          </nav>
        </header>

        <section className="grid gap-8 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-10">
          <div className="space-y-7">
            <div className="space-y-5">
              <span className="section-label">Now Building</span>
              <h1
                className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Shipping compact web experiences with a practical full-stack edge.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                I&apos;m Fahim Faisal from Bangladesh. My work sits at the intersection
                of product-minded frontend, dependable backend delivery, and the
                kind of polish that makes software easier to trust.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm text-white transition-opacity hover:opacity-90"
                href="#contact"
              >
                <span>Let&apos;s work together</span>
                <ArrowRight size={16} />
              </a>
              <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-6 py-3 text-sm transition-colors hover:bg-[#171b22]"
                href="/CV.pdf"
              >
                <span>Download CV</span>
                <Download size={16} />
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {quickFacts.map((fact) => (
                <Chip
                  key={fact}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-1"
                  variant="soft"
                >
                  {fact}
                </Chip>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr] lg:grid-cols-1 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="hero-photo panel p-3">
              <Image
                alt="Fahim Faisal portrait"
                className="rounded-[1.4rem]"
                height={1399}
                priority
                src="/assets/imgs/FahimFaisal.webp"
                width={1400}
              />
            </div>
            <Card className="panel rounded-[1.8rem] bg-[var(--surface-strong)]">
              <Card.Content className="space-y-5 p-6">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    Contact
                  </p>
                  <h2
                    className="text-2xl font-semibold tracking-tight"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    Based in Dhaka, open to thoughtful freelance work.
                  </h2>
                </div>

                <div className="space-y-3 text-sm text-[var(--muted)]">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} />
                    <a href="mailto:hi@fahimfaisal.net">hi@fahimfaisal.net</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} />
                    <a href="tel:+8801960839343">+880 1960 839343</a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    className="eyebrow-link text-sm"
                    href="https://github.com/fahim2204"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                  <Link
                    className="eyebrow-link text-sm"
                    href="https://www.linkedin.com/in/fahim2204"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    className="eyebrow-link text-sm"
                    href="https://facebook.com/fahim2204"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </div>
              </Card.Content>
            </Card>
          </div>
        </section>
      </div>

      <section className="grid gap-6 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="panel rounded-[2rem]">
          <Card.Content className="space-y-6 p-6 md:p-8">
            <SectionTitle
              description="My background is rooted in computer science, but most of my energy goes into building things people can actually use. I enjoy translating requirements into interfaces that feel clear, stable, and grounded."
              label="About"
              title="A developer who likes useful software more than noisy software."
            />
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
              Over time I&apos;ve worked across React, Next.js, Express, ASP.NET,
              PHP, Flutter, and database-backed products. That variety makes me
              comfortable moving between interface detail and implementation
              detail without losing the bigger picture.
            </p>
          </Card.Content>
        </Card>

        <Card className="panel rounded-[2rem] bg-[var(--surface-strong)]">
          <Card.Content className="space-y-5 p-6 md:p-8">
            <div className="space-y-2">
              <span className="section-label">Stack</span>
              <h2
                className="text-2xl font-semibold tracking-tight md:text-3xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Tools I trust when the work needs to ship.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill) => (
                <Chip
                  key={skill}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-1"
                  variant="soft"
                >
                  {skill}
                </Chip>
              ))}
            </div>
          </Card.Content>
        </Card>
      </section>

      <section className="space-y-6 py-6" id="experience">
        <SectionTitle
          description="A short timeline of where I’ve studied and worked so far."
          label="Resume"
          title="Experience that mixes product delivery with solid technical foundations."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="panel rounded-[2rem]">
            <Card.Content className="space-y-6 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <BriefcaseBusiness size={18} />
                <p className="text-sm uppercase tracking-[0.22em]">Work</p>
              </div>
              <div className="space-y-5">
                {experience.map((item) => (
                  <article
                    key={`${item.role}-${item.company}`}
                    className="rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-5"
                  >
                    <p className="text-sm text-[var(--muted)]">{item.period}</p>
                    <h3
                      className="mt-2 text-xl font-semibold"
                      style={{ fontFamily: "var(--font-display), sans-serif" }}
                    >
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
                      {item.company}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {item.summary}
                    </p>
                  </article>
                ))}
              </div>
            </Card.Content>
          </Card>

          <Card className="panel rounded-[2rem]">
            <Card.Content className="space-y-6 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <GraduationCap size={18} />
                <p className="text-sm uppercase tracking-[0.22em]">Education</p>
              </div>
              <div className="space-y-5">
                {education.map((item) => (
                  <article
                    key={`${item.title}-${item.period}`}
                    className="rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-5"
                  >
                    <p className="text-sm text-[var(--muted)]">{item.period}</p>
                    <h3
                      className="mt-2 text-lg font-semibold md:text-xl"
                      style={{ fontFamily: "var(--font-display), sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.detail}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--accent)]">
                      {item.meta}
                    </p>
                  </article>
                ))}
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>

      <section className="space-y-6 py-12" id="work">
        <SectionTitle
          description="A handful of projects from the existing portfolio, presented with more focus and less noise."
          label="Selected Work"
          title="Client builds, product sites, and experiments that show range."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card
              key={project.title}
              className="project-card panel rounded-[2rem] bg-[var(--surface-strong)]"
            >
              <Card.Content className="space-y-5 p-5 md:p-6">
                <div className="project-frame border border-[var(--line)] bg-[#11151c] p-2">
                  <Image
                    alt={project.title}
                    className="rounded-[1.2rem]"
                    height={900}
                    src={project.image}
                    width={1400}
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                      {project.caption}
                    </p>
                    <h3
                      className="text-2xl font-semibold tracking-tight"
                      style={{ fontFamily: "var(--font-display), sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                      {project.description}
                    </p>
                  </div>
                  <a
                    aria-label={`Visit ${project.title}`}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.04)] transition-colors hover:bg-[rgba(255,255,255,0.1)]"
                    href={project.href}
                    target="_blank"
                  >
                    <MoveUpRight size={18} />
                  </a>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

        <Card className="panel rounded-[2rem]">
          <Card.Content className="space-y-5 p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <span className="section-label">Archive</span>
                <h3
                  className="text-2xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  More builds from the original portfolio.
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                Older experiments, management systems, and clones that still help
                round out the story.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {archiveProjects.map((project) => (
                <a
                  key={project.title}
                  className="group rounded-[1.4rem] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[rgba(255,255,255,0.05)]"
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium">{project.title}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{project.type}</p>
                    </div>
                    <MoveUpRight
                      className="text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      size={18}
                    />
                  </div>
                </a>
              ))}
            </div>
          </Card.Content>
        </Card>
      </section>

      <section className="py-8" id="contact">
        <Card className="panel rounded-[2.2rem] bg-[linear-gradient(135deg,rgba(12,14,19,0.98),rgba(18,22,30,0.94))]">
          <Card.Content className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <span className="section-label">Contact</span>
              <h2
                className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Have something useful to build? Let&apos;s make it clean, fast, and human.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
                I&apos;m reachable for freelance work, product collaborations, and
                computer-science-related tasks. If the brief is clear and the work
                matters, I&apos;m interested.
              </p>
            </div>

            <div className="space-y-4 rounded-[1.8rem] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
              <a
                className="block rounded-[1.1rem] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm transition-colors hover:bg-[rgba(255,255,255,0.07)]"
                href="mailto:hi@fahimfaisal.net"
              >
                hi@fahimfaisal.net
              </a>
              <a
                className="block rounded-[1.1rem] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm transition-colors hover:bg-[rgba(255,255,255,0.07)]"
                href="mailto:fahimfaisal1998@gmail.com"
              >
                fahimfaisal1998@gmail.com
              </a>
              <a
                className="block rounded-[1.1rem] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm transition-colors hover:bg-[rgba(255,255,255,0.07)]"
                href="tel:+8801960839343"
              >
                +880 1960 839343
              </a>
              <a
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm text-[var(--background)] transition-opacity hover:opacity-90"
                href="/CV.pdf"
              >
                View resume
              </a>
            </div>
          </Card.Content>
        </Card>
      </section>

      <footer className="flex flex-col gap-3 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="footer-note">
          Built with Next.js, Tailwind CSS, and HeroUI using the existing content
          from the original portfolio repository.
        </p>
        <p className="footer-note">Fahim Faisal · Dhaka, Bangladesh</p>
      </footer>
    </main>
  );
}
