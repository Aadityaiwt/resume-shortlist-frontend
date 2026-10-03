import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const skills = [
  { name: "JavaScript", value: 95, status: "Matched" },
  { name: "REST API", value: 80, status: "Matched" },
  { name: "Docker", value: 20, status: "Missing" },
];

const ranking = [
  { name: "Candidate A", score: 92 },
  { name: "Candidate B", score: 86 },
  { name: "Candidate C", score: 71 },
];

const card =
  "rounded-3xl border border-white/10 bg-white/[0.03] p-7";

const Features = () => {
  return (
    <>
    <Header />
    <section id="features" className="relative border-t border-white/5 bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/70" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Features
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl">
            Everything you need to
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              shortlist faster
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Upload resumes, set the job requirements, and let ResumeAI handle
            the first round of screening.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* Resume analysis */}
          <article className={`${card} md:col-span-2`}>
            <h3 className="text-xl font-semibold text-white">Resume analysis</h3>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
              Reads PDF resumes and pulls out skills, experience and education,
              so you don't have to scan each file by hand.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Skills found", "React, Node.js, SQL"],
                ["Experience", "3 years"],
                ["Education", "B.Tech, CS"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Match score */}
          <article className="rounded-3xl border border-emerald-400/10 bg-emerald-400/5 p-7">
            <h3 className="text-xl font-semibold text-white">Match score</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              One clear percentage showing how well a candidate fits the role.
            </p>
            <p className="mt-6 text-5xl font-bold text-emerald-400">92%</p>
            <p className="mt-1 text-xs text-slate-500">Demo result</p>
          </article>

          {/* Skill matching */}
          <article className={card}>
            <h3 className="text-xl font-semibold text-white">Skill matching</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              Compares each resume with the skills the job asks for.
            </p>

            <div className="mt-6 space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">{s.name}</span>
                    <span className="text-slate-500">{s.status}</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      style={{ width: `${s.value}%` }}
                      className={`h-full rounded-full ${
                        s.status === "Matched"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                          : "bg-slate-600"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Candidate ranking */}
          <article className={card}>
            <h3 className="text-xl font-semibold text-white">Candidate ranking</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              Candidates are sorted by score, best fit first.
            </p>

            <ul className="mt-6 space-y-2.5">
              {ranking.map((c, i) => (
                <li
                  key={c.name}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-[11px] font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm font-medium text-white">
                    {c.name}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      c.score >= 80 ? "text-emerald-400" : "text-slate-400"
                    }`}
                  >
                    {c.score}%
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* Hiring insights */}
          <article className={card}>
            <h3 className="text-xl font-semibold text-white">Hiring insights</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              See strong and missing skills, and why a candidate ranked where
              they did.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Strong in React", "No cloud experience", "2 relevant projects"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </article>

          {/* Bulk upload */}
          <article className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:col-span-3 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold text-white">
                Screen many resumes at once
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Drop in a batch of PDFs for one job and get a ranked list back,
                instead of reviewing resumes one by one.
              </p>
            </div>

            <button className="shrink-0 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/30">
              Upload resumes
            </button>
          </article>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Features;