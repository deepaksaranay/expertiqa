import type { Metadata } from "next"
import { ArrowUpRight, MapPin, Atom, Database, Code2 } from "lucide-react"

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "Deepak Kumar — Expertiqa",
  description:
    "Deepak Kumar — AI data contractor, physics expert, and Python developer based in New Delhi. Brand: Expertiqa.",
}

const roles = [
  { icon: Database, label: "AI Data Contractor" },
  { icon: Atom, label: "Physics Expert" },
  { icon: Code2, label: "Python Developer" },
]

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#0a1633] text-slate-100 flex items-center justify-center p-4 sm:p-8">
      <article className="w-full max-w-xl rounded-3xl bg-[#0f1f4b] ring-1 ring-white/10 shadow-2xl shadow-black/40 overflow-hidden">
        {/* Header band */}
        <header className="relative bg-[#1e3a8a] px-6 sm:px-10 pt-10 pb-16">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
              Expertiqa
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Deepak Kumar
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-blue-200">
              <MapPin className="size-4" aria-hidden="true" />
              New Delhi, India
            </p>
          </div>
        </header>

        {/* Roles */}
        <div className="relative -mt-8 px-6 sm:px-10">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {roles.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl bg-[#16295e] ring-1 ring-white/10 px-4 py-3"
              >
                <Icon className="size-5 shrink-0 text-blue-300" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-100 leading-tight">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bio */}
        <section className="px-6 sm:px-10 py-8">
          <p className="text-[15px] leading-relaxed text-slate-300">
            {
              "I'm a mechanical engineer (B.Tech, RGPV) who now trains and evaluates AI models. Since 2025 I've been a Physics Expert & AI Content Contributor at Mindrift, and before that I worked as a freelance Python developer (2018–2024)."
            }
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
            I also write engineering explainers at{" "}
            <a
              href="https://engineerspedia.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-300 underline decoration-blue-400/40 underline-offset-4 hover:text-blue-200"
            >
              Engineerspedia
            </a>
            .
          </p>
        </section>

        {/* Links */}
        <footer className="px-6 sm:px-10 pb-8">
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Contact links">
            <a
              href="https://www.linkedin.com/in/deepak-kumar-083448115/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl bg-[#1e3a8a] px-4 py-3.5 font-medium text-white transition-colors hover:bg-[#254aa8]"
            >
              <span className="flex items-center gap-2.5">
                <LinkedinIcon className="size-5" />
                LinkedIn
              </span>
              <ArrowUpRight className="size-4 text-blue-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/deepaksaranay"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl bg-[#16295e] ring-1 ring-white/10 px-4 py-3.5 font-medium text-white transition-colors hover:bg-[#1b3170]"
            >
              <span className="flex items-center gap-2.5">
                <GithubIcon className="size-5" />
                GitHub
              </span>
              <ArrowUpRight className="size-4 text-blue-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </nav>
        </footer>
      </article>
    </main>
  )
}
