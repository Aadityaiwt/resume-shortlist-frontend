import React from 'react'
import Header from '../Components/Header'

const Home = () => {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
        <Header/>
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute right-[-200px] top-[300px] h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="absolute left-[-200px] top-[700px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

     

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          {/* Hero Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/70" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                AI-Powered Recruitment
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              AI-Powered
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Resume Shortlisting
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Analyze resumes, compare candidates with job requirements, and
              discover relevant hiring insights through an intelligent
              recruitment workflow.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button className="group rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/30">
                Get Started
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  ?
                </span>
              </button>

              <button className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]">
                Explore Features
              </button>
            </div>

            {/* Small Product Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">?</span>
                Resume Analysis
              </span>

              <span className="flex items-center gap-2">
                <span className="text-emerald-400">?</span>
                Skill Matching
              </span>

              <span className="flex items-center gap-2">
                <span className="text-emerald-400">?</span>
                Candidate Ranking
              </span>
            </div>
          </div>

          {/* Hero Product Visualization */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Outer Glow */}
            <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-[100px]" />

            {/* Main Product Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  AI Analysis
                </span>
              </div>

              {/* Resume Input */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-red-400">
                    PDF
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">
                      candidate_resume.pdf
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Resume uploaded for analysis
                    </p>
                  </div>

                  <span className="text-xs text-emerald-400">Processed</span>
                </div>
              </div>

              {/* AI Processing */}
              <div className="my-4 flex items-center justify-center">
                <div className="h-12 w-px bg-gradient-to-b from-blue-500/0 via-blue-400 to-violet-500/0" />
              </div>

              <div className="rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-blue-300">
                      AI Matching Engine
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      Comparing candidate with job requirements
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-400 shadow-lg shadow-blue-400/70" />
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "JavaScript", "Node.js", "REST API"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Match Score */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-xs font-medium text-slate-500">
                    Skills Match
                  </p>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  </div>

                  <p className="mt-2 text-sm font-semibold text-white">95%</p>
                </div>

                <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-5">
                  <p className="text-xs font-medium text-slate-500">
                    Match Score
                  </p>

                  <p className="mt-2 text-3xl font-bold text-emerald-400">
                    92%
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Demo result
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Ranking Card */}
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:block">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  Candidate Ranking
                </span>

                <span className="text-xs text-blue-400">Live Preview</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-bold">
                  01
                </div>

                <div className="flex-1">
                  <p className="text-xs font-semibold text-white">
                    Top Candidate
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Strong skill alignment
                  </p>
                </div>

                <span className="text-sm font-bold text-emerald-400">92%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temporary next-section marker */}
      <section className="border-t border-white/5 bg-slate-950/40 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
            More product sections coming next
          </p>
        </div>
      </section>
    </main>

    
    </>
  )
}

export default Home
