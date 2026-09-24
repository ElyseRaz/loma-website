import Reveal from "./Reveal";

const POLES = [
  {
    number: "01",
    icon: "palette",
    title: "Design Graphique & Identité",
    description:
      "Identités visuelles fortes, chartes graphiques mémorables, branding distinctif, direction artistique raffinée et supports print & digitaux de prestige.",
    tags: ["Brand Book", "Vectoriel 4K", "Print Packaging"],
    footer: "Impact mémoriel garanti",
    accent: false,
  },
  {
    number: "02",
    icon: "code",
    title: "Dév Web & Mobile",
    description:
      "Sites vitrines immersifs, plateformes SaaS sur-mesure, applications mobiles iOS & Android ultra-véloces, sécurisées et sculptées pour le passage à l'échelle.",
    tags: ["Next.js & Vue", "React Native", "APIs REST / GraphQL"],
    footer: "100% Responsive & Core Web Vitals",
    accent: false,
  },
  {
    number: "03",
    icon: "devices",
    title: "UI/UX Design Avancé",
    description:
      "Parcours utilisateurs intuitifs, wireframes & prototypes interactifs Figma haute-fidélité, design systems robustes centrés sur l'émotion et le taux de conversion.",
    tags: ["Figma Tokens", "UX Audits", "Micro-animations"],
    footer: "+45% Rétention utilisateur",
    accent: false,
  },
  {
    number: "04",
    icon: "smart_toy",
    title: "IA & Automatisation",
    description:
      "Intégration d'agents intelligents, automatisation sans couture de vos flux métiers (Make / n8n), chatbots connectés à vos données et gains massifs de productivité.",
    tags: ["OpenAI & Claude", "Make / n8n", "RAG / LangChain"],
    footer: "Jusqu'à 15h/semaine sauvées",
    accent: true,
  },
];

export default function Expertises() {
  return (
    <section className="w-full py-space-xl bg-surface" id="expertises">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <Reveal className="max-w-2xl flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary-container" />
              <span className="font-label-tag text-label-tag text-secondary uppercase tracking-widest">
                Nos Pôles d&apos;Excellence
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-lg md:text-headline-xl text-primary font-bold">
              Une synergie unique entre design, code de haute voltige et intelligence
              artificielle.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Chaque projet est conçu avec un soin artisanal et une rigueur d&apos;ingénierie
              pour créer des actifs pérennes et ultra-performants.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {POLES.map((pole, index) => (
            <Reveal key={pole.number} delay={index * 90}>
              <div className="group relative rounded-2xl bg-surface-container-lowest p-space-lg flex flex-col justify-between h-full shadow-[0_4px_24px_rgba(18,62,99,0.04)] hover:shadow-[0_16px_40px_rgba(18,62,99,0.1),0_0_24px_rgba(0,193,253,0.15)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div
                      className={
                        pole.accent
                          ? "w-12 h-12 rounded-xl bg-secondary-fixed/40 text-secondary flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors"
                          : "w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-colors"
                      }
                    >
                      <span className="material-symbols-outlined text-[28px]">{pole.icon}</span>
                    </div>
                    <span
                      className={
                        pole.accent
                          ? "font-label-tag text-label-tag text-secondary font-bold"
                          : "font-label-tag text-label-tag text-outline-variant font-bold"
                      }
                    >
                      {pole.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-primary group-hover:text-secondary transition-colors">
                      {pole.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      {pole.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-space-xs">
                    {pole.tags.map((tag) => (
                      <span
                        key={tag}
                        className={
                          pole.accent
                            ? "px-2 py-0.5 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed font-label-tag text-label-tag"
                            : "px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-tag text-label-tag"
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-space-lg mt-space-sm flex items-center justify-between">
                  <span
                    className={
                      pole.accent
                        ? "font-label-tag text-label-tag text-secondary font-bold"
                        : "font-label-tag text-label-tag text-primary font-bold"
                    }
                  >
                    {pole.footer}
                  </span>
                  <a
                    className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary group-hover:rotate-45 transition-all duration-300"
                    href="#contact"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
