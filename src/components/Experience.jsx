

export default function Experience() {
  const items = [
    { icon: "music_note", title: "THE FESTIVAL", desc: "Epilogue '26 is the ultimate inter-university music festival in Sri Lanka, bringing together over 15,000 undergraduates to celebrate rhythm and youth." },
    { icon: "celebration", title: "THE VIBE", desc: "A night filled with electrifying performances, neon aesthetics, and an unforgettable atmosphere that transcends boundaries." },
    { icon: "groups", title: "THE COMMUNITY", desc: "Organized by MoraSpirit, it unites students from all universities under one sky to connect, celebrate, and create memories." }
  ];

  return (
    <section className="py-20 px-4 md:px-gutter reveal" id="experience">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-display-lg text-3xl sm:text-5xl lg:text-display-lg mb-16 text-center text-gray-900/10 dark:text-on-surface/10 uppercase tracking-widest font-extrabold relative">
          WHAT IS EPILOGUE
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900 dark:text-white opacity-100 text-base sm:text-xl lg:text-headline-md tracking-normal font-sans">WHAT IS EPILOGUE</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(item => (
            <div key={item.title} className="glass-panel p-6 sm:p-8 rounded-2xl border border-outline-variant/20 hover:border-green-700/40 dark:hover:border-primary-container/40 transition-all duration-300 group hover:translate-y-[-4px] shadow-md hover:shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-green-700/10 dark:bg-primary-container/10 flex items-center justify-center mb-6 group-hover:bg-green-700/20 dark:group-hover:bg-primary-container/20 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-green-700 dark:text-primary-container">{item.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-gray-900 dark:text-on-surface">{item.title}</h3>
              <p className="font-body-md text-body-md text-gray-700 dark:text-secondary-fixed-dim leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
