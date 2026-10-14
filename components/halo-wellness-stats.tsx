'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    value: '95%',
    label: 'Client Satisfaction',
    description: 'Select your preferred nutrition style: plant-based, balanced, high-protein, etc.',
  },
  {
    value: '4.8/5',
    label: 'Average Rating',
    description: 'Get curated recipes and ingredient lists focused on whole foods.',
  },
]

export default function HaloWellnessStats() {
  return (
    <section className="flex w-full justify-center bg-[#e8e4da] px-6 py-24 text-[#0E1F1B] md:px-[60px]" aria-labelledby="wellness-stats-title">
      <div className="flex w-full max-w-[1300px] flex-col items-end justify-between gap-[60px] lg:flex-row">
        <div className="w-full shrink-0 lg:w-[520px]">
          <h2 id="wellness-stats-title" className="mb-[60px] text-[42px] font-medium leading-[1.16] tracking-[-0.03em] sm:text-[48px] sm:leading-[56px]">
            Expert guidance for<br />
            your mental wellbeing.
          </h2>
          <div className="mx-auto h-[340px] w-[360px] max-w-full">
            <img
              src="https://cdn.jiro.build/Halo/image/state%2001.png"
              alt="Botanical illustration"
              className="size-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex flex-col items-start text-left lg:ml-auto">
          <div className="flex w-full flex-col items-start md:flex-row">
            {stats.map((stat, index) => (
              <article key={stat.label} className={`flex-1 border-l border-[#0E1F1B]/15 pl-8 ${index === 0 ? 'pb-10 md:pb-0' : 'pt-10 md:pt-0'}`}>
                <p className="text-[42px] font-medium leading-[1.16] tracking-[-0.03em] sm:text-[48px] sm:leading-[56px]">{stat.value}</p>
                <h3 className="mt-2 text-xl font-normal leading-7">{stat.label}</h3>
                <p className="mt-3 max-w-[220px] text-base leading-6 text-[#48504E]">{stat.description}</p>
              </article>
            ))}
          </div>

          <motion.a
            href="#kontak"
            whileHover={{ opacity: 0.9 }}
            className="mt-10 inline-flex items-center gap-[10px] rounded-[99px] bg-[#024F46] p-[4px_20px_4px_4px] text-base font-normal leading-6 text-[#FCFDFD] transition-opacity"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-[#E4F0C6]" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M0.353516 10L9.85352 0.5M9.85352 0.5V8.5M9.85352 0.5H1.85352" stroke="#024F46" />
              </svg>
            </span>
            <span>Explore Services</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export { HaloWellnessStats }

<automated_v0_instructions_reminder>

- Is this the right file among multiple options?
- Reuse gathered context; stop searching once the change and validation path are clear. Follow up on specific correctness questions as needed
- Run independent lookups in parallel and dependent lookups sequentially
- Issue every independent Edit/Write call in one response instead of one file per response.

</automated_v0_instructions_reminder>
                                                                                                    
