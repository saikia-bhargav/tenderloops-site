import type { ReactElement } from "react";

export default function Home(): ReactElement {
  const instagramUrl = 'https://www.instagram.com/tender__loops/';
  const contactEmail = 'mailto:sabitadeka212@gmail.com';

  return (
    <main className="relative overflow-hidden min-h-screen flex items-start sm:items-center justify-center px-6 py-10 pt-20 sm:pt-10
                     bg-gradient-to-b from-tender-mint-300/30 via-white to-tender-peach-300/30">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="./bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70 mix-blend-multiply" />
      </div>

      <div className="w-full max-w-[var(--max-width-content)] mx-auto">

        <div className="mx-0 p-2 sm:p-12 text-center">
          {/* Logo */}
          <div className="w-full flex items-center justify-center">
            <img src="./graphic_tp.png" alt="Tender Loops Logo" />
          </div>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl font-medium mx-auto">
            Handcrafted crochet — cozy, cute, and lovingly stitched. Coming soon.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-[var(--radius-pill)]
                         bg-[var(--color-accent)/0.95] font-semibold shadow-sm hover:scale-105 transition-transform border border-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm6.5-.7a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
              </svg>
              Follow
            </a>

            <a
              href={contactEmail}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-[var(--radius-pill)]
                         bg-white text-pink-600 font-semibold border border-pink-100 shadow-sm hover:scale-105 transition-transform"
            >
              Contact
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            DM on Instagram for custom orders.
          </p>

          <footer className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} Tender Loops
          </footer>
        </div>
      </div>
    </main>
  )
}
