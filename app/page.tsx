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

function Section({id,num,title,kicker,children}:{id:string;num:string;title:string;kicker:string;children:React.ReactNode}){
  return <section id={id} className="scroll-mt-10 border-t border-cream-100/[.07] px-6 py-24 md:px-12 lg:px-20 xl:px-28"><div className="mx-auto max-w-6xl"><div className="mb-12 flex gap-5"><span className="font-mono text-[10px] tracking-[.2em] text-signal-500">{num}</span><div><h2 className="font-display text-5xl text-cream-50 md:text-6xl">{title}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-cream-500">{kicker}</p></div></div>{children}</div></section>
}

function SpatialPlan(){return <div className="overflow-hidden rounded-[28px] border border-cream-100/10 bg-[#0b1020] p-4 shadow-2xl md:p-6"><div className="overflow-hidden rounded-[22px] border border-cream-100/10 bg-[#11182a]"><img src="/media/tnfd-floorplan.webp" alt="Proposed TNFD workshop floor plan" className="block h-auto w-full object-contain" /></div><div className="flex flex-wrap gap-x-8 gap-y-2 px-2 pt-4 text-[9px] uppercase tracking-[.16em] text-cream-500"><span><b className="text-depth-300">14 round tables</b> · 5 chairs each · 5–4–5 arrangement</span><span><b className="text-signal-500">10 VIP armchairs</b> · 2.00 m stage clearance</span><span><b className="text-depth-300">6 column speakers</b> · 3 left / 3 right</span></div></div>}

export default function TNFD(){
  const [active,setActive]=useState("brief");

  useEffect(()=>{
    const sections=NAV.map(([, ,id])=>document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible) setActive(visible.target.id);
    },{rootMargin:"-25% 0px -60% 0px",threshold:[0,.15,.4,.7]});
    sections.forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[]);

  const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});

  return <main className="min-h-screen bg-[#050813] text-cream-100">
    <div className="fixed left-6 top-6 z-[60] md:left-8 md:top-7">
      <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top">
        <img src="https://raw.githubusercontent.com/akramsultan98-ops/entlaq-sdr-summit-proposal/main/assests/branding/paradigm/logo-white.png.png" alt="Paradigm Capital Group" className="h-auto w-[96px] object-contain md:w-[108px]" />
      </button>
    </div>

    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[220px] border-r border-cream-100/[.07] bg-[#050813]/85 px-7 py-8 backdrop-blur-xl xl:flex xl:flex-col">
      <div className="pt-36 text-[9px] uppercase tracking-[.2em] text-cream-500">Paradigm Events</div>
      <div className="mt-3 font-display text-2xl leading-[.95] text-cream-50">TNFD<br/>Technical Proposal</div>
      <nav className="mt-9 flex-1 space-y-1">
        {NAV.map(([num,title,id])=><button key={id} onClick={()=>go(id)} className={`group relative flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-all ${active===id?"bg-cream-100/[.07]":"hover:bg-cream-100/[.035]"}`}>
          <span className={`font-mono text-[10px] ${active===id?"text-signal-500":"text-cream-500/50"}`}>{num}</span>
          <span className={`flex-1 text-[10px] uppercase tracking-[.12em] ${active===id?"text-cream-50":"text-cream-500 group-hover:text-cream-200"}`}>{title}</span>
          {active===id&&<span className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-signal-500"/>}
        </button>)}
      </nav>
      <div className="pb-1 text-[9px] uppercase tracking-[.14em] leading-5 text-cream-500">08 September 2026<br/>Dusit Thani Lakeview<br/>New Cairo · Egypt</div>
    </aside>

    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 xl:pl-[280px] xl:pr-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(46,119,135,.2),transparent_38%),linear-gradient(180deg,#080d1c,#04060d)]"/>
      <div className="relative mx-auto w-full max-w-6xl"><div className="eyebrow text-depth-300">TNFD WORKSHOP · 08 SEPTEMBER 2026</div><motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}} className="mt-8 max-w-5xl font-display text-7xl leading-[.92] text-cream-50 md:text-9xl">TNFD<br/><span className="text-depth-100">Workshop</span></motion.h1><p className="mt-8 max-w-2xl font-display text-2xl text-signal-500">Technical & Spatial Proposal</p><p className="mt-8 max-w-xl text-[15px] leading-7 text-cream-300/70">A premium workshop environment designed around clear sightlines, balanced technical coverage, executive comfort and a controlled interpretation workflow.</p><div className="mt-14 grid max-w-3xl grid-cols-2 gap-8 border-t border-cream-100/10 pt-7 md:grid-cols-5">{[['75','Participants'],['14','Round tables'],['10','VIP armchairs'],['6','Column speakers'],['1','Dusit Thani Lakeview']].map(([n,l])=><div key={l}><b className="font-display text-3xl text-signal-500">{n}</b><small className="mt-1 block text-[9px] uppercase tracking-[.15em] text-cream-500">{l}</small></div>)}</div></div>
    </section>

    <Section id="brief" num="01" title="The Brief" kicker="The room is treated as one integrated production environment — not a collection of separate rental items."><div className="grid gap-6 md:grid-cols-3">{[['Venue','Dusit Thani Lakeview','New Cairo, Egypt · private luxury hotel setting.'],['Format','75 Participants','08:00–18:00 workshop format with executive and technical support.'],['Presentation','10 × 3 m Stage','8 × 3 m LED screen with podium and presentation support.']].map(([a,b,c])=><div key={a} className="rounded-2xl border border-cream-100/10 bg-[#0a1020] p-7"><div className="eyebrow text-depth-300">{a}</div><h3 className="mt-4 font-display text-3xl text-cream-50">{b}</h3><p className="mt-3 text-sm leading-6 text-cream-500">{c}</p></div>)}</div></Section>

    <Section id="spatial" num="02" title="Spatial Concept" kicker="A balanced 5–4–5 table rhythm, a straight VIP line, rear technical control, isolated interpretation and six evenly distributed column speakers."><SpatialPlan/></Section>

    <Section id="technical" num="03" title="Technical Production" kicker="The technical layer remains clean and discreet while maintaining reliable coverage throughout the room."><div className="grid gap-5 md:grid-cols-2">{[['Audio','6 Column Speakers','Three on the left and three on the right, positioned for balanced room coverage. Two additional monitor speakers face the presenters.'],['AV / Hybrid','Presentation Ready','6 wireless microphones, 8 × 3 m LED, projector and white screen, Zoom-ready hybrid setup and 90 Mbps dedicated internet.'],['Stage','10 × 3 m','10 VIP armchairs remain separated from the stage with a minimum 2 m clearance.'],['Control','Centralized Unit','Rear control position supporting show playback, audio routing, stage monitoring and hybrid coordination.']].map(([a,b,c])=><div key={a} className="rounded-2xl border border-cream-100/10 bg-[#0a1020] p-8"><div className="eyebrow text-signal-500">{a}</div><h3 className="mt-4 font-display text-4xl text-cream-50">{b}</h3><p className="mt-4 text-sm leading-7 text-cream-500">{c}</p></div>)}</div></Section>

    <Section id="interpretation" num="04" title="Interpretation" kicker="A dedicated interpretation workflow keeps the language layer isolated while remaining fully connected to the room."><div className="grid gap-5 md:grid-cols-2">{[['Interpretation Booth','English ↔ Arabic','Dedicated booth at the rear-left, with simultaneous interpretation and 75 wireless listening headphones.'],['Control Unit','Central Show Control','Positioned at the rear center to keep the production workflow controlled and visually discreet.']].map(([a,b,c])=><div key={a} className="rounded-2xl border border-cream-100/10 bg-[#0a1020] p-8"><div className="eyebrow text-depth-300">{a}</div><h3 className="mt-4 font-display text-4xl text-cream-50">{b}</h3><p className="mt-4 text-sm leading-7 text-cream-500">{c}</p></div>)}</div></Section>

    <Section id="vip" num="05" title="VIP Experience" kicker="A dedicated front-row experience gives distinguished guests clear sightlines while preserving the working-table layout behind them."><div className="rounded-[28px] border border-signal-500/25 bg-gradient-to-r from-[#11192b] to-[#0a1020] p-10"><div className="grid gap-8 md:grid-cols-3"><div><div className="font-display text-5xl text-signal-500">10</div><div className="mt-2 text-xs uppercase tracking-[.16em] text-cream-500">Armchairs</div></div><div><div className="font-display text-5xl text-signal-500">2 m</div><div className="mt-2 text-xs uppercase tracking-[.16em] text-cream-500">Clearance from stage</div></div><div><div className="font-display text-5xl text-signal-500">5–4–5</div><div className="mt-2 text-xs uppercase tracking-[.16em] text-cream-500">Table rhythm</div></div></div></div></Section>

    <Section id="guest" num="06" title="Guest Experience" kicker="A discreet production footprint supports a polished participant experience from arrival through close."><div className="grid gap-5 md:grid-cols-3">{[['Registration','Arrival Ready','Registration support, wireless printer and branded participant materials.'],['Hospitality','Continuous Service','Coffee breaks, lunch and continuous refreshments coordinated around the programme.'],['VIP','Dedicated Care','Dedicated VIP room, lunch and front-of-room seating experience.']].map(([a,b,c])=><div key={a} className="rounded-2xl border border-cream-100/10 bg-[#0a1020] p-7"><div className="eyebrow text-depth-300">{a}</div><h3 className="mt-4 font-display text-3xl text-cream-50">{b}</h3><p className="mt-3 text-sm leading-6 text-cream-500">{c}</p></div>)}</div></Section>

    <Section id="tor" num="07" title="TOR Coverage" kicker="The proposed setup translates the requested event requirements into one coordinated technical and spatial solution."><div className="overflow-hidden rounded-2xl border border-cream-100/10"><div className="grid grid-cols-[1fr_auto] border-b border-cream-100/10 bg-[#0a1020] px-6 py-4 text-[10px] uppercase tracking-[.14em] text-cream-500"><span>Requirement</span><span>Coverage</span></div>{[['Venue & room','Dusit Thani Lakeview · New Cairo · 75 participants'],['Stage & LED','10 × 3 m stage · 8 × 3 m LED'],['Audio','6 column speakers · 2 stage monitors · 6 wireless microphones'],['Hybrid','Zoom-ready setup · 90 Mbps internet'],['Interpretation','English ↔ Arabic · booth · 75 wireless headphones'],['Seating','14 round tables × 5 chairs · 10 VIP armchairs'],['Hospitality & VIP','Coffee breaks · buffet lunch · VIP room & lunch']].map(([a,b])=><div key={a} className="grid grid-cols-[1fr_auto] gap-6 border-t border-cream-100/10 px-6 py-5 text-sm"><span className="text-cream-200">{a}</span><span className="max-w-xl text-right text-cream-500">{b}</span></div>)}</div></Section>

    <Section id="contact" num="08" title="Contact" kicker="Prepared by Paradigm Events for the TNFD Workshop proposal."><div className="rounded-[28px] border border-signal-500/20 bg-gradient-to-r from-[#11192b] to-[#0a1020] p-8 md:p-10"><div className="grid gap-10 md:grid-cols-2"><div><img src="https://raw.githubusercontent.com/akramsultan98-ops/entlaq-sdr-summit-proposal/main/assests/branding/paradigm/logo-white.png.png" alt="Paradigm" className="w-[136px]"/><div className="mt-8 font-display text-4xl text-cream-50">Mohamed Akram</div><div className="mt-2 text-sm text-cream-500">Events Account Manager · Paradigm</div></div><div className="flex flex-col justify-end gap-4 text-sm"><a href="mailto:mohamed.akram@paradigm-eg.com" className="text-cream-100 transition-colors hover:text-signal-500">mohamed.akram@paradigm-eg.com</a><a href="tel:+201147400199" className="text-cream-300 transition-colors hover:text-signal-500">01147400199</a><a href="tel:+201080034172" className="text-cream-300 transition-colors hover:text-signal-500">01080034172</a></div></div></div></Section>

    <footer className="border-t border-cream-100/[.07] px-6 py-12 xl:pl-[280px]"><div className="mx-auto flex max-w-6xl items-center justify-between gap-6"><div><div className="font-display text-3xl text-cream-50">PARADIGM</div><p className="mt-2 text-xs text-cream-600">TNFD Workshop · Technical & Spatial Proposal</p></div><button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="text-[9px] uppercase tracking-[.18em] text-cream-500 hover:text-signal-500">Back to top ↑</button></div></footer>
  </main>
}
