import type { ReactElement } from "react";

export default function Home(): ReactElement {
  const instagramUrl = 'https://instagram.com/tenderloops'
  const contactEmail = 'mailto:hello@tenderloops.example'

  return (
    <main className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-10
                     bg-gradient-to-b from-tender-mint-300/30 via-white to-tender-peach-300/30">
      {/* Decorative, non-interactive blobs / pattern */}
      <div aria-hidden className="pointer-events-none absolute -left-28 -top-20 w-[28rem] h-[28rem]
                                  rounded-full blur-3xl opacity-70 mix-blend-screen
                                  bg-gradient-to-br from-tender-berry-200/60 to-tender-mint-200/40
                                  animate-spin"
        style={{ animationDuration: '72s' }} />
      <div aria-hidden className="pointer-events-none absolute -right-12 -bottom-24 w-72 h-72
                                  rounded-full blur-2xl opacity-60 mix-blend-multiply
                                  bg-gradient-to-tr from-tender-peach-200/60 to-tender-pink-200/40
                                  animate-pulse"
        style={{ animationDuration: '8s' }} />
      <svg aria-hidden className="pointer-events-none absolute inset-0 w-full h-full opacity-5"
        preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonal-stripes" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <rect width="8" height="16" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
      </svg>

      <div className="w-full max-w-[var(--max-width-content)] mx-auto">
        <div className="mx-4 sm:mx-0 bg-white/80 backdrop-blur-md rounded-[var(--radius-card)]
                        border border-white/60 p-8 sm:p-12 text-center shadow-[var(--shadow-card)]">
          {/* Logo */}
          <div className="mx-auto inline-flex items-center justify-center rounded-full p-1
                          bg-gradient-to-br from-tender-berry-200/70 to-tender-pink-200/70"
            style={{ width: 96, height: 96 }}>
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center
                            shadow-sm">
              <span style={{ fontSize: 28 }}>🧶</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
            Tender Loops
          </h1>

          {/* Tagline */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Handcrafted crochet — cozy, cute, and lovingly stitched. Coming soon.
          </p>

          {/* Coming soon CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-[var(--radius-pill)]
                         bg-[var(--color-accent)/0.95] font-semibold shadow-sm hover:scale-105 transition-transform"
            >
              {/* inline Instagram icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm6.5-.7a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
              </svg>
              Follow @tenderloops
            </a>

            <a
              href={contactEmail}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-[var(--radius-pill)]
                         bg-white text-pink-600 font-semibold border border-pink-100 shadow-sm hover:scale-105 transition-transform"
            >
              Contact
            </a>
          </div>

          {/* Small text */}
          <p className="mt-6 text-xs text-slate-500">
            Join the waitlist and DM on Instagram for custom orders.
          </p>

          {/* Footer */}
          <footer className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} Tender Loops
          </footer>
        </div>
      </div>
    </main>
  )
}
