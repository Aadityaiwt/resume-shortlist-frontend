import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const tech = ["React", "JavaScript", "Node.js", "REST API", "Tailwind CSS"];

const About = () => {
  return (
    <>

      <section id="about" className="relative border-t border-white/5 bg-[#050816] py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          {/* Text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/70" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                About
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl">
              Why we built ResumeAI
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Recruiters spend hours reading resumes that don't fit the role.
              ResumeAI automates the first screening round, so people can spend
              their time on the candidates who matter.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
              It reads resumes, compares them with job requirements, and ranks
              candidates by fit. A person still makes the final decision.
            </p>
          </div>

          {/* Project card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="font-semibold text-white">Built with</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
              <div>
                <dt className="text-xs text-slate-500">Input</dt>
                <dd className="mt-1 text-sm font-semibold text-white">PDF resumes</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Output</dt>
                <dd className="mt-1 text-sm font-semibold text-white">Ranked list</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Final decision</dt>
                <dd className="mt-1 text-sm font-semibold text-emerald-400">You</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#050816] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14 text-center">
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
              Try it on your next batch of resumes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Create an account, upload resumes, and see your first ranked
              shortlist.
            </p>
            <button className="mt-8 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-slate-200">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default About;