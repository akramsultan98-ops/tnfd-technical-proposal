"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV = [
  ["01", "Brief", "brief"],
  ["02", "Spatial Concept", "spatial"],
  ["03", "Technical Production", "technical"],
  ["04", "Interpretation", "interpretation"],
  ["05", "VIP Experience", "vip"],
  ["06", "Guest Experience", "guest"],
  ["07", "TOR Coverage", "tor"],
  ["08", "Contact", "contact"],
] as const;

const CARD = "rounded-2xl border border-cream-100/[.08] bg-cream-100/[.025] backdrop-blur-sm transition-all duration-500 hover:border-cream-100/[.14] hover:bg-cream-100/[.04]";

function Section({ id, num, title, kicker, children }: { id: string; num: string; title: string; kicker: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-cream-100/[.07] px-6 py-28 md:px-12 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-14 grid gap-7 md:grid-cols-[90px_1fr]">
          <div className="pt-2 font-mono text-[10px] tracking-[.2em] text-signal-500">{num}</div>
          <div>
            <h2 className="font-display text-[clamp(2.7rem,5.5vw,5.6rem)] leading-[.96] tracking-[-.03em] text-cream-50">{title}</h2>
            <p className="mt-5 max-w-2xl text-[14px] leading-7 text-cream-500">{kicker}</p>
          </div>
        </div>
        <div className="md:ml-[90px]">{children}</div>
      </div>
    </section>
  );
}

function SpatialPlan() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-cream-100/[.09] bg-[#080e1b] shadow-2xl shadow-black/20">
      <div className="border-b border-cream-100/[.07] px-5 py-4 md:px-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[9px] uppercase tracking-[.2em] text-depth-300">Proposed floor plan</span>
          <span className="font-mono text-[9px] text-cream-500">TNFD · 08.09.2026</span>
        </div>
      </div>
      <div className="p-3 md:p-5">
        <div className="overflow-hidden rounded-[22px] border border-cream-100/[.08] bg-[#11182a] p-1">
          <img src="/media/tnfd-floorplan.webp" alt="Proposed TNFD workshop floor plan" className="block h-auto w-full object-contain" />
        </div>
      </div>
      <div className="grid border-t border-cream-100/[.07] md:grid-cols-3">
        <div className="border-b border-cream-100/[.07] p-5 md:border-b-0 md:border-r"><b className="font-display text-2xl text-signal-500">14</b><span className="mt-1 block text-[9px] uppercase tracking-[.16em] text-cream-500">Round tables · 5 chairs</span></div>
        <div className="border-b border-cream-100/[.07] p-5 md:border-b-0 md:border-r"><b className="font-display text-2xl text-signal-500">10</b><span className="mt-1 block text-[9px] uppercase tracking-[.16em] text-cream-500">VIP armchairs · 2 m clearance</span></div>
        <div className="p-5"><b className="font-display text-2xl text-depth-300">6</b><span className="mt-1 block text-[9px] uppercase tracking-[.16em] text-cream-500">Column speakers · 3 / 3</span></div>
      </div>
    </div>
  );
}

function Metric({ n, label }: { n: string; label: string }) {
  return <div className="border-l border-cream-100/10 pl-5"><div className="font-display text-3xl tracking-[-.03em] text-signal-500">{n}</div><div className="mt-1 text-[9px] uppercase tracking-[.15em] text-cream-500">{label}</div></div>;
}

export default function TNFD() {
  const [active, setActive] = useState("brief");

  useEffect(() => {
    const sections = NAV.map(([, , id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0,.15,.4,.7] });
    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-abyss text-cream-100">
      <div className="fixed left-6 top-6 z-[60] md:left-8 md:top-7">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="opacity-90 transition-opacity hover:opacity-100">
          <img src="https://raw.githubusercontent.com/akramsultan98-ops/entlaq-sdr-summit-proposal/main/assests/branding/paradigm/logo-white.png.png" alt="Paradigm" className="h-auto w-[92px] object-contain md:w-[104px]" />
        </button>
      </div>

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[232px] flex-col border-r border-cream-100/[.06] bg-abyss/88 px-6 py-9 backdrop-blur-xl xl:flex">
        <div className="pt-28">
          <div className="text-[9px] uppercase tracking-[.22em] text-cream-500/70">Paradigm Events</div>
          <div className="mt-3 font-display text-[22px] leading-[.98] tracking-[-.02em] text-cream-50">TNFD<br />Technical Proposal</div>
        </div>
        <div className="my-7 h-px w-full bg-gradient-to-r from-cream-100/15 via-cream-100/5 to-transparent" />
        <nav className="flex-1 overflow-y-auto pr-1">
          <ul className="space-y-0.5">
            {NAV.map(([num, title, id]) => {
              const on = active === id;
              return <li key={id}><button onClick={() => go(id)} className={`group relative flex w-full items-center gap-3 rounded-md py-[9px] pl-3 pr-2 text-left transition-all ${on ? "bg-cream-100/[.07]" : "hover:bg-cream-100/[.035]"}`}>
                {on && <motion.span layoutId="rail-bar" className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-signal-500" />}
                <span className={`font-mono text-[10px] ${on ? "text-signal-500" : "text-cream-500/50"}`}>{num}</span>
                <span className={`flex-1 text-[10px] uppercase tracking-[.13em] ${on ? "text-cream-50" : "text-cream-500 group-hover:text-cream-200"}`}>{title}</span>
              </button></li>;
            })}
          </ul>
        </nav>
        <div className="text-[9px] uppercase tracking-[.15em] leading-5 text-cream-500/70">08 September 2026<br />Dusit Thani Lakeview<br />New Cairo · Egypt</div>
      </aside>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 xl:pl-[310px] xl:pr-24">
        <div className="absolute inset-0 bg-[radial-gradient(80%_65%_at_70%_30%,rgba(46,119,135,.19),transparent_60%),radial-gradient(50%_50%_at_10%_90%,rgba(26,74,92,.12),transparent_70%),linear-gradient(180deg,#070b18,#04060f)]" />
        <div className="relative mx-auto w-full max-w-[1180px]">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="eyebrow">TNFD WORKSHOP · 08 SEPTEMBER 2026</div>
              <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.9}} className="mt-8 font-display text-[clamp(4.5rem,11vw,10rem)] leading-[.86] tracking-[-.045em] text-cream-50">TNFD<br /><span className="text-depth-100">Workshop</span></motion.h1>
              <p className="mt-8 font-display text-[clamp(1.35rem,2.5vw,2.2rem)] leading-tight text-signal-500">Technical & Spatial Proposal</p>
              <p className="mt-7 max-w-xl text-[15px] leading-7 text-cream-300/70">A premium workshop environment designed around clear sightlines, balanced technical coverage, executive comfort and a controlled interpretation workflow.</p>
            </div>
            <div className="hidden border-l border-cream-100/10 pl-7 lg:block">
              <div className="text-[9px] uppercase tracking-[.2em] text-cream-500">Prepared for</div>
              <div className="mt-3 font-display text-2xl leading-tight text-cream-50">TNFD Workshop</div>
              <div className="mt-1 text-xs leading-6 text-cream-500">Dusit Thani Lakeview<br />New Cairo · Egypt</div>
              <div className="mt-8 text-[9px] uppercase tracking-[.2em] text-cream-500">Paradigm Events</div>
            </div>
          </div>
          <div className="mt-20 grid max-w-4xl grid-cols-2 gap-y-8 border-t border-cream-100/10 pt-7 md:grid-cols-5 md:gap-y-0">
            <Metric n="75" label="Participants" /><Metric n="14" label="Round tables" /><Metric n="10" label="VIP armchairs" /><Metric n="6" label="Column speakers" /><Metric n="1" label="Venue" />
          </div>
        </div>
      </section>

      <Section id="brief" num="01" title="The Brief" kicker="The room is treated as one integrated production environment — not a collection of separate rental items.">
        <div className="grid gap-4 md:grid-cols-3">
          {[["Venue","Dusit Thani Lakeview","New Cairo, Egypt · private luxury hotel setting."],["Format","75 Participants","08:00–18:00 workshop format with executive and technical support."],["Presentation","10 × 3 m Stage","8 × 3 m LED screen with podium and presentation support."]].map(([a,b,c]) => <div key={a} className={`${CARD} p-7 md:p-8`}><div className="eyebrow">{a}</div><h3 className="mt-5 font-display text-[clamp(2rem,3vw,3rem)] leading-none tracking-[-.025em] text-cream-50">{b}</h3><p className="mt-4 text-sm leading-6 text-cream-500">{c}</p></div>)}
        </div>
      </Section>

      <Section id="spatial" num="02" title="Spatial Concept" kicker="A balanced 5–4–5 table rhythm, a straight VIP line, rear technical control, isolated interpretation and six evenly distributed column speakers."><SpatialPlan /></Section>

      <Section id="technical" num="03" title="Technical Production" kicker="The technical layer remains clean and discreet while maintaining reliable coverage throughout the room.">
        <div className="grid gap-4 md:grid-cols-2">
          {[["Audio","6 Column Speakers","Three on the left and three on the right, positioned for balanced room coverage. Two additional monitor speakers face the presenters."],["AV / Hybrid","Presentation Ready","6 wireless microphones, 8 × 3 m LED, projector and white screen, Zoom-ready hybrid setup and 90 Mbps dedicated internet."],["Stage","10 × 3 m","10 VIP armchairs remain separated from the stage with a minimum 2 m clearance."],["Control","Centralized Unit","Rear control position supporting show playback, audio routing, stage monitoring and hybrid coordination."]].map(([a,b,c]) => <div key={a} className={`${CARD} p-8`}><div className="eyebrow text-signal-500">{a}</div><h3 className="mt-5 font-display text-[clamp(2rem,3.2vw,3.2rem)] leading-[.98] tracking-[-.025em] text-cream-50">{b}</h3><p className="mt-5 max-w-xl text-sm leading-7 text-cream-500">{c}</p></div>)}
        </div>
      </Section>

      <Section id="interpretation" num="04" title="Interpretation" kicker="A dedicated interpretation workflow keeps the language layer isolated while remaining fully connected to the room.">
        <div className="grid gap-4 md:grid-cols-2">{[["Interpretation Booth","English ↔ Arabic","Dedicated booth at the rear-left, with simultaneous interpretation and 75 wireless listening headphones."],["Control Unit","Central Show Control","Positioned at the rear center to keep the production workflow controlled and visually discreet."]].map(([a,b,c]) => <div key={a} className={`${CARD} p-8 md:p-10`}><div className="eyebrow">{a}</div><h3 className="mt-5 font-display text-[clamp(2.2rem,3.8vw,3.7rem)] leading-[.95] tracking-[-.03em] text-cream-50">{b}</h3><p className="mt-5 text-sm leading-7 text-cream-500">{c}</p></div>)}</div>
      </Section>

      <Section id="vip" num="05" title="VIP Experience" kicker="A dedicated front-row experience gives distinguished guests clear sightlines while preserving the working-table layout behind them.">
        <div className="relative overflow-hidden rounded-[30px] border border-signal-500/20 bg-[radial-gradient(80%_120%_at_0%_50%,rgba(233,169,60,.10),transparent_65%),linear-gradient(110deg,#11192b,#080e1b)] p-8 md:p-12">
          <div className="absolute right-[-5%] top-[-45%] h-[420px] w-[420px] rounded-full bg-signal-500/[.035] blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-3"><div><div className="font-display text-6xl leading-none text-signal-500">10</div><div className="mt-3 text-[9px] uppercase tracking-[.18em] text-cream-500">Armchairs</div></div><div><div className="font-display text-6xl leading-none text-signal-500">2 m</div><div className="mt-3 text-[9px] uppercase tracking-[.18em] text-cream-500">Clearance from stage</div></div><div><div className="font-display text-6xl leading-none text-signal-500">5–4–5</div><div className="mt-3 text-[9px] uppercase tracking-[.18em] text-cream-500">Table rhythm</div></div></div>
        </div>
      </Section>

      <Section id="guest" num="06" title="Guest Experience" kicker="A discreet production footprint supports a polished participant experience from arrival through close.">
        <div className="grid gap-4 md:grid-cols-3">{[["Registration","Arrival Ready","Registration support, wireless printer and branded participant materials."],["Hospitality","Continuous Service","Coffee breaks, lunch and continuous refreshments coordinated around the programme."],["VIP","Dedicated Care","Dedicated VIP room, lunch and front-of-room seating experience."]].map(([a,b,c]) => <div key={a} className={`${CARD} p-7`}><div className="eyebrow">{a}</div><h3 className="mt-5 font-display text-3xl leading-none tracking-[-.02em] text-cream-50">{b}</h3><p className="mt-4 text-sm leading-6 text-cream-500">{c}</p></div>)}</div>
      </Section>

      <Section id="tor" num="07" title="TOR Coverage" kicker="The proposed setup translates the requested event requirements into one coordinated technical and spatial solution.">
        <div className="overflow-hidden rounded-[24px] border border-cream-100/[.08]">
          <div className="grid grid-cols-[1fr_auto] bg-cream-100/[.025] px-6 py-4 text-[9px] uppercase tracking-[.18em] text-cream-500"><span>Requirement</span><span>Coverage</span></div>
          {[["Venue & room","Dusit Thani Lakeview · New Cairo · 75 participants"],["Stage & LED","10 × 3 m stage · 8 × 3 m LED"],["Audio","6 column speakers · 2 stage monitors · 6 wireless microphones"],["Hybrid","Zoom-ready setup · 90 Mbps internet"],["Interpretation","English ↔ Arabic · booth · 75 wireless headphones"],["Seating","14 round tables × 5 chairs · 10 VIP armchairs"],["Hospitality & VIP","Coffee breaks · buffet lunch · VIP room & lunch"]].map(([a,b]) => <div key={a} className="grid grid-cols-[1fr_auto] gap-8 border-t border-cream-100/[.07] px-6 py-5 text-sm"><span className="text-cream-200">{a}</span><span className="max-w-xl text-right text-cream-500">{b}</span></div>)}
        </div>
      </Section>

      <Section id="contact" num="08" title="Contact" kicker="Prepared by Paradigm Events for the TNFD Workshop proposal.">
        <div className="overflow-hidden rounded-[30px] border border-signal-500/20 bg-[linear-gradient(120deg,#11192b,#080e1b)] p-8 md:p-12"><div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end"><div><img src="https://raw.githubusercontent.com/akramsultan98-ops/entlaq-sdr-summit-proposal/main/assests/branding/paradigm/logo-white.png.png" alt="Paradigm" className="w-[136px]"/><div className="mt-9 font-display text-4xl tracking-[-.025em] text-cream-50">Mohamed Akram</div><div className="mt-2 text-sm text-cream-500">Events Account Manager · Paradigm</div></div><div className="flex flex-col gap-3 text-right text-sm"><a href="mailto:mohamed.akram@paradigm-eg.com" className="text-cream-100 transition-colors hover:text-signal-500">mohamed.akram@paradigm-eg.com</a><a href="tel:+201147400199" className="text-cream-300 hover:text-signal-500">01147400199</a><a href="tel:+201080034172" className="text-cream-300 hover:text-signal-500">01080034172</a></div></div></div>
      </Section>

      <footer className="border-t border-cream-100/[.07] px-6 py-14 xl:pl-[310px]"><div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6"><div><div className="font-display text-3xl tracking-[-.025em] text-cream-50">PARADIGM</div><p className="mt-2 text-xs text-cream-600">TNFD Workshop · Technical & Spatial Proposal</p></div><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-[9px] uppercase tracking-[.2em] text-cream-500 transition-colors hover:text-signal-500">Back to top ↑</button></div></footer>
    </main>
  );
}
