import React from "react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050816] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row lg:px-8">
        <p>&copy; {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
        <nav className="flex gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;