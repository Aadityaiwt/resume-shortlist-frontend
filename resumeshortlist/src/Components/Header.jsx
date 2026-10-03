import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "features" },
    { label: "How It Works", href: "working" },
    { label: "About", href: "about" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <header className="sticky top-0 z-50 border-b-2 border-white/10 bg-[#050816]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 shadow-lg shadow-blue-500/20 transition duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-white/10" />

            <span className="relative text-lg font-bold text-white">
              R
            </span>
          </div>

          <div>
            <span className="block text-lg font-bold tracking-tight text-white">
              ResumeAI
            </span>

            <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:block">
              Intelligent Hiring
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative text-sm font-medium transition duration-200 ${
                index === 0
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}

              <span
                className={`absolute -bottom-2 left-0 h-px bg-gradient-to-r from-blue-400 to-violet-500 transition-all duration-300 ${
                  index === 0
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/5 hover:text-white"
          >
            Login
          </button>

          <button
            type="button"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-white/20"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 md:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  index === 0
                    ? "bg-white/5 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 flex gap-3 border-t border-white/10 pt-4">
            <button
              type="button"
              className="flex-1 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Login
            </button>

            <button
              type="button"
              className="flex-1 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;