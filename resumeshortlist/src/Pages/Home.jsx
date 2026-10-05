import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
  const detectedSkills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'REST API',
  ]

  const candidates = [
    {
      rank: '01',
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      score: '95%',
    },
    {
      rank: '02',
      name: 'Alex Morgan',
      role: 'Software Engineer',
      score: '91%',
    },
    {
      rank: '03',
      name: 'David Wilson',
      role: 'Full Stack Developer',
      score: '87%',
    },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">

        {/* =========================================================
            BACKGROUND EFFECTS
        ========================================================= */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

          <div className="absolute right-[-250px] top-[250px] h-[550px] w-[550px] rounded-full bg-violet-600/15 blur-[150px]" />

          <div className="absolute left-[-250px] top-[750px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute right-[20%] top-[1200px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />
        </div>

        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section id="home" className="relative">

          {/* Decorative Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '70px 70px',
              }}
            />
          </div>

          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

            {/* =====================================================
                LEFT — HERO CONTENT
            ===================================================== */}
            <div className="relative z-10 max-w-2xl">

              {/* Eyebrow */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  AI-Powered Recruitment Intelligence
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Find the Right
                <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  Candidate Faster.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Transform hundreds of resumes into a focused shortlist.
                Our AI analyzes skills, experience, education, qualifications,
                and job requirements to help recruiters discover the candidates
                who best fit each role.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <button className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/30">
                  Start Shortlisting

                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                <button className="group inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]">
                  <svg
                    className="mr-2 h-4 w-4 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  See How It Works
                </button>

              </div>

              {/* Product Indicators */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">

                <span className="flex items-center gap-2">
                  <span className="text-emerald-400"></span>
                  AI Resume Parsing
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-emerald-400"></span>
                  Smart Skill Matching
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-emerald-400"></span>
                  Candidate Ranking
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-emerald-400"></span>
                  AI Insights
                </span>

              </div>

              {/* Small Stats */}
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-3">

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xl font-bold text-white">10x</p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Faster Screening
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xl font-bold text-white">50+</p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Resume Signals
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xl font-bold text-white">AI</p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Powered Insights
                  </p>
                </div>

              </div>
            </div>

            {/* =====================================================
                RIGHT — AI PRODUCT VISUALIZATION
            ===================================================== */}
            <div className="relative mx-auto w-full max-w-xl">

              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-[110px]" />

              {/* Floating AI Badge */}
              <div className="absolute -right-2 -top-7 z-20 hidden rounded-2xl border border-blue-400/20 bg-slate-900/90 px-4 py-3 shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
                    <span className="text-sm text-blue-400"></span>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      AI Engine
                    </p>
                    <p className="text-xs font-semibold text-white">
                      Analyzing candidates...
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Dashboard */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4">

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                      Live AI Analysis
                    </span>
                  </div>

                </div>

                {/* Job Context */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">

                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.7"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          Frontend Developer
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          24 candidates • 6 shortlisted
                        </p>
                      </div>

                    </div>

                    <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold text-blue-400">
                      AI Active
                    </span>

                  </div>

                </div>

                {/* Resume Input */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-xs font-bold text-red-400">
                      PDF
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex items-center justify-between gap-3">

                        <p className="truncate text-sm font-semibold text-white">
                          sarah_johnson_resume.pdf
                        </p>

                        <span className="shrink-0 text-[10px] font-medium text-emerald-400">
                          Processed
                        </span>

                      </div>

                      <p className="mt-1 text-xs text-slate-500">
                        Resume intelligence extracted successfully
                      </p>

                    </div>

                  </div>

                  {/* Processing Bar */}
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
                  </div>

                </div>

                {/* AI Matching Engine */}
                <div className="my-4 flex items-center justify-center">
                  <div className="h-7 w-px bg-gradient-to-b from-blue-500/0 via-blue-400 to-violet-500/0" />
                </div>

                <div className="rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-300">
                        AI Matching Engine
                      </p>

                      <p className="mt-1 text-sm text-slate-300">
                        Comparing candidate intelligence with job requirements
                      </p>

                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                      <div className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-400" />
                      </div>
                    </div>

                  </div>

                  {/* Detected Skills */}
                  <div className="mt-5">

                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-slate-500">
                        Detected Skills
                      </span>

                      <span className="text-[10px] text-emerald-400">
                        18 found
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">

                      {detectedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-medium text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Skill Gap */}
                  <div className="mt-4 rounded-xl border border-amber-400/10 bg-amber-400/[0.04] p-3">

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-medium text-slate-400">
                        Skill Gap Detected
                      </span>

                      <span className="text-[10px] font-medium text-amber-400">
                        2 skills
                      </span>

                    </div>

                    <div className="mt-2 flex gap-2">

                      <span className="rounded-md bg-amber-400/10 px-2 py-1 text-[9px] text-amber-300">
                        AWS
                      </span>

                      <span className="rounded-md bg-amber-400/10 px-2 py-1 text-[9px] text-amber-300">
                        Docker
                      </span>

                    </div>

                  </div>

                </div>

                {/* Score Cards */}
                <div className="mt-4 grid grid-cols-2 gap-4">

                  {/* Match Score */}
                  <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">

                    <div className="flex items-center justify-between">

                      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                        Overall Match
                      </p>

                      <span className="text-emerald-400"></span>

                    </div>

                    <div className="mt-2 flex items-end gap-2">

                      <p className="text-3xl font-bold text-emerald-400">
                        93%
                      </p>

                      <span className="mb-1 text-[9px] text-emerald-400/70">
                        Excellent
                      </span>

                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[93%] rounded-full bg-emerald-400" />
                    </div>

                  </div>

                  {/* Experience */}
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">

                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      Experience Match
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      91%
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[9px] text-slate-500">
                        Required
                      </span>

                      <span className="text-[9px] font-semibold text-blue-400">
                        3+ years
                      </span>
                    </div>

                  </div>

                </div>

                {/* AI Recommendation */}
                <div className="mt-4 rounded-2xl border border-violet-400/10 bg-violet-500/[0.04] p-4">

                  <div className="flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10">
                      <span className="text-xs text-violet-400"></span>
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                      AI Candidate Insight
                    </span>

                  </div>

                  <p className="mt-3 text-[11px] leading-5 text-slate-400">
                    Strong technical alignment with the role. The candidate
                    demonstrates relevant React experience and excellent
                    JavaScript proficiency.
                  </p>

                </div>

              </div>

              {/* =====================================================
                  FLOATING CANDIDATE RANKING CARD
              ===================================================== */}
              <div className="absolute -bottom-10 -left-8 hidden w-64 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl sm:block">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold text-white">
                      AI Shortlist
                    </p>

                    <p className="mt-1 text-[9px] text-slate-500">
                      Top candidates for this role
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-medium text-emerald-400">
                    6 shortlisted
                  </span>

                </div>

                <div className="mt-4 space-y-3">

                  {candidates.map((candidate) => (
                    <div
                      key={candidate.rank}
                      className="flex items-center gap-3"
                    >

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-[9px] font-bold text-white">
                        {candidate.rank}
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-[10px] font-semibold text-white">
                          {candidate.name}
                        </p>

                        <p className="truncate text-[9px] text-slate-500">
                          {candidate.role}
                        </p>

                      </div>

                      <span className="text-xs font-bold text-emerald-400">
                        {candidate.score}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* Floating Processing Badge */}
              <div className="absolute -right-5 bottom-16 hidden rounded-xl border border-white/10 bg-slate-900/90 px-3 py-2 shadow-xl backdrop-blur-xl md:block">

                <div className="flex items-center gap-2">

                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-400/10 text-[10px] text-emerald-400">
                    
                  </span>

                  <div>
                    <p className="text-[9px] font-medium text-slate-500">
                      Analysis complete
                    </p>

                    <p className="text-[10px] font-semibold text-white">
                      Candidate shortlisted
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />
        </section>

        {/* =========================================================
            TRUST / VALUE STRIP
        ========================================================= */}
        <section className="relative border-y border-white/[0.06] bg-white/[0.015]">

          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Resume Intelligence
                  </p>
                  <p className="text-xs text-slate-500">
                    Extract meaningful candidate data
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Skill Analysis
                  </p>
                  <p className="text-xs text-slate-500">
                    Find matching and missing skills
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Smart Ranking
                  </p>
                  <p className="text-xs text-slate-500">
                    Prioritize relevant candidates
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    AI Insights
                  </p>
                  <p className="text-xs text-slate-500">
                    Understand why candidates match
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================
            AI INTELLIGENCE SECTION
        ========================================================= */}
        <section className="relative py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Intelligent Candidate Analysis
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                More Than Resume Screening.
                <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Understand Every Candidate.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                Go beyond keywords. Analyze the information that actually
                matters when evaluating candidates for a role.
              </p>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: '',
                  title: 'Skills',
                  text: 'Identify technical and professional skills from resumes.',
                },
                {
                  icon: '',
                  title: 'Experience',
                  text: 'Understand years of experience and relevant role history.',
                },
                {
                  icon: '',
                  title: 'Qualifications',
                  text: 'Evaluate education, certifications, and qualifications.',
                },
                {
                  icon: '',
                  title: 'AI Insights',
                  text: 'Generate a clear summary of candidate-role alignment.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-400 transition group-hover:bg-blue-500/10">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* =========================================================
            EXISTING SECTIONS
        ========================================================= */}

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="relative overflow-hidden py-24">

          <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/[0.08] via-violet-500/[0.06] to-transparent p-8 text-center sm:p-12 lg:p-16">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-400">
                
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Smarter Recruitment Starts Here
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Turn Resume Overload Into
                <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  Your Next Shortlist.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Upload resumes, define your job requirements, and let AI
                transform candidate data into meaningful recruitment insights.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1">
                  Start Screening Resumes
                </button>

                <button className="rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08]">
                  Explore Platform
                </button>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Home