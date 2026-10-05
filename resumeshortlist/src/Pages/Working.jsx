import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const steps = [
  {
    title: "Add the job",
    text: "Enter the job title and the skills and experience you need.",
  },
  {
    title: "Upload resumes",
    text: "Upload one or many PDF resumes. Each file is processed automatically.",
  },
  {
    title: "AI compares",
    text: "The matching engine checks each resume against your requirements.",
  },
  {
    title: "Review your shortlist",
    text: "See candidates ranked by match score, with the reasons behind each score.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <Header />
      <section
        id="how-it-works"
        className="relative border-t border-white/5 bg-[#050816] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/70" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                How It Works
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent">
              From resume to shortlist in four steps
            </h2>
          </div>

          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            {/* Connector line (desktop) */}
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-blue-500/0 via-blue-400/40 to-violet-500/0 md:block" />

            {steps.map((step, i) => {
              const last = i === steps.length - 1;
              return (
                <li
                  key={step.title}
                  className={`relative rounded-2xl border p-6 ${
                    last
                      ? "border-emerald-400/20 bg-emerald-400/5"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      last
                        ? "bg-emerald-400 text-slate-950"
                        : "bg-gradient-to-br from-blue-500 to-violet-500 text-white"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HowItWorks;
