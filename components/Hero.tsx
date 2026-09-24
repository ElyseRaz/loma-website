import Image from "next/image";
import Reveal from "./Reveal";

const AVATARS = [
  {
    alt: "Portrait professionnel épuré d'une cliente créative et souriante",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBPhcQpUB85phKtmlRGFfnmwYhqSWcPOoK9uUsO-cB8Ec7Ja2pASO-qVnRRmtf-bLZGzwbWsc4IBTEVlUiVpi30sFb-3tz9iZDGYoR9O8vT3hHJFCi_DDFrsL7QzlZJJXFhQdqOgS1tridCTS8FVazgnjHZdNnshRlqp9180vec5TU8AlXri2Ijr2tumVQaKgR17Ozyum-WLlCsCC-fSauCrfI4sQdy6ffTYrkdGZX",
  },
  {
    alt: "Portrait d'un jeune fondateur tech confiant en costume sobre",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYIeqC0RQOS6M7ibionTDR5oOng-Bb-ac971KCXvLBBbL0KdGT8-FqOIlNPzJ2N4oqZ2xMq5t_SuTWbvwlOrSmTj0zJlHytGGq1GGJjbfayXPgwcZmSGH3HcczLkn6pigHDqaAtp_zWxpTrU7mygL4t_BKXrhVVfa6qX8jYD51QE-pLzvTwr4KV_B9BFBa9BruVKRu6vUiwva4y5Kes5dNVzS4ggMSTroj7WnpAjZT",
  },
  {
    alt: "Portrait studio net d'une directrice artistique visionnaire",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARj-elNI5dl5JdSqV3fky86lO4lqg4GeRFP2vFQvrAgBfy-Ep8Dyq45tBwpm2Aw4-pJu9j0fLdtJ01oyiYqWUdZ-qfiGzqqIFHdPNlQxD-kGREMf6VsuodHOn8UrCiednhqbWoFSXiD-Z9v2v5zK_XWAiimM9JeMZQr46ay53elCfAOZ2UdQ1uUYK8n1yhCsu0tbzYrnaKniypipmWxoqNuM_W9xNjAzeQ_XfowcQl",
  },
];

const TRUST_STATS = [
  { icon: "sentiment_very_satisfied", value: "+98%", label: "Satisfaction client" },
  { icon: "rocket_launch", value: "10+ Projets", label: "Déployés avec succès" },
  { icon: "all_inclusive", value: "360° Sur-mesure", label: "Accompagnement continu" },
  { icon: "bolt", value: "IA & Next-Gen", label: "Technologies de pointe" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface py-space-xl">
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-secondary-container/10 blur-[130px] animate-float-slow" />
      <div
        className="pointer-events-none absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-container/10 blur-[140px] animate-float-slow"
        style={{ animationDelay: "-3s" }}
      />
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center pt-space-md pb-space-lg">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            <Reveal>
              <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-[0_2px_12px_rgba(18,62,99,0.06)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-container" />
                </span>
                <span className="font-label-tag text-label-tag text-secondary uppercase tracking-widest">
                  Studio de création &amp; ingénierie digitale nouvelle génération
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-primary tracking-tight font-extrabold max-w-3xl leading-[1.08]">
                Donnez vie à vos ambitions digitales avec{" "}
                <span className="bg-gradient-to-r from-primary-container via-secondary to-secondary-container bg-clip-text text-transparent animate-gradient-pan">
                  créativité et précision.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Chez <strong className="text-primary font-semibold">LOMA Creativity Studio</strong>,
                nous accompagnons les particuliers, entrepreneurs et entreprises dans la création
                de solutions digitales modernes, créatives et adaptées à leurs besoins.
              </p>
            </Reveal>

            <Reveal delay={200} className="w-full sm:w-auto">
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg transition-all duration-300 shadow-[0_8px_24px_rgba(18,62,99,0.22)] hover:shadow-[0_8px_30px_rgba(0,193,253,0.4)] hover:bg-primary hover:-translate-y-0.5 group"
                  href="#contact"
                >
                  <span>Démarrer un projet</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div className="flex items-center gap-space-md pt-space-md">
                <div className="flex -space-x-2 overflow-hidden">
                  {AVATARS.map((avatar) => (
                    <Image
                      key={avatar.src}
                      alt={avatar.alt}
                      className="inline-block h-8 w-8 rounded-full shadow-sm object-cover"
                      src={avatar.src}
                      width={32}
                      height={32}
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center text-secondary-container">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                    Recommandé par plus de 40+ décideurs et créateurs
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Studio Cockpit Showcase */}
          <Reveal delay={160} className="lg:col-span-5 relative mt-space-md lg:mt-0">
            <div className="relative w-full rounded-2xl bg-surface-container-lowest p-space-md shadow-[0_20px_50px_rgba(18,62,99,0.08)] transition-transform duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-secondary-container" />
                  <span className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
                  <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                </div>
                <span className="font-label-tag text-label-tag uppercase tracking-widest text-secondary">
                  LOMA Experience Engine v4.2
                </span>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">tune</span>
                </div>
              </div>

              <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-inner">
                <Image
                  alt="Interface 3D futuriste et minimaliste représentant une architecture de marque digitale, sphères luminescentes, graphismes épurés aux teintes bleu marine et cyan électrique"
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBnN0nw3ZjZEeuugTMjnwEgGa9oszLqHA5ddKP6YBjOlqGxwu2SCtXsy4eckIO0o_QG7VRbdMVTDJDbpt4glKt_uqSlSGYt61P7nP4f5QBaMTV1uL0O83hMVogDsiXoa2a06ZEROdzpmn5VvY7wXh0nurpNukEH-XzU_mD58IW9lnS02DdWh9Tk-khzd_ST7ldm7yAMuFjOH1ZvHDgpT01evZkaeAReKVmgX0TwBgi"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  preload
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">neurology</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-primary font-bold">
                        Algorithme de Conversion
                      </p>
                      <p className="font-label-tag text-label-tag text-secondary uppercase">
                        Flux automatisé actif
                      </p>
                    </div>
                  </div>
                  <span className="font-label-tag text-label-tag px-2 py-1 rounded bg-secondary-fixed/40 text-secondary font-bold">
                    OPTIMISÉ
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-space-xs pt-space-sm">
                <div className="p-3 rounded-xl bg-surface-container-low flex flex-col justify-between">
                  <span className="font-label-tag text-label-tag uppercase text-on-surface-variant">
                    Vélocité &amp; SEO
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-headline-md text-headline-md font-bold text-primary">
                      99.8
                    </span>
                    <span className="font-label-md text-label-md text-secondary">/100</span>
                  </div>
                  <svg
                    className="w-full h-6 text-secondary-container mt-1"
                    fill="none"
                    viewBox="0 0 100 24"
                  >
                    <path
                      d="M0 20 L20 15 L40 18 L60 8 L80 12 L100 2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <div className="p-3 rounded-xl bg-primary-container text-on-primary flex flex-col justify-between">
                  <span className="font-label-tag text-label-tag uppercase text-primary-fixed">
                    Impact ROI Direct
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-headline-md text-headline-md font-bold text-on-primary">
                      +280%
                    </span>
                  </div>
                  <span className="font-label-tag text-label-tag text-secondary-fixed-dim">
                    Croissance moyenne Q1
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-2 p-3 rounded-xl bg-surface-container-lowest shadow-[0_12px_32px_rgba(18,62,99,0.12)] animate-float-slow">
              <span className="material-symbols-outlined text-secondary-container text-[24px]">
                verified
              </span>
              <div>
                <p className="font-label-lg text-label-lg font-bold text-primary">
                  Qualité Studio Certifiée
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Architecture évolutive &amp; pérenne
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trust Bar / Ticker */}
        <Reveal delay={100} className="pt-space-lg pb-space-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm p-space-md rounded-2xl bg-surface-container-lowest shadow-[0_2px_16px_rgba(18,62,99,0.04)]">
            {TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-space-sm p-2 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-container-low text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">{stat.icon}</span>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="font-label-tag text-label-tag text-on-surface-variant uppercase">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
