import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Immersion & Diagnostic",
    description:
      "Atelier stratégique approfondi pour cerner votre marché cible, auditer vos processus existants et définir des KPIs ambitieux mais mesurables.",
    tag: "Cahier des charges & Roadmap",
    accent: "bg-surface-container text-primary",
  },
  {
    number: "02",
    title: "Conception & Prototypage",
    description:
      "Création des maquettes interactives haute-fidélité sous Figma. Validation collective des flux UX et tests utilisateurs avant la moindre ligne de code.",
    tag: "Prototype cliquable validé",
    accent: "bg-surface-container text-primary",
  },
  {
    number: "03",
    title: "Dev Agile & IA",
    description:
      "Développement par sprints bi-hebdomadaires. Intégration des modèles IA, branchement d'APIs et tests continus de rapidité et d'accessibilité.",
    tag: "Sprints & Démo live",
    accent: "bg-primary-container text-on-primary",
  },
  {
    number: "04",
    title: "Déploiement & Croissance",
    description:
      "Mise en production sécurisée, formation complète de vos équipes, passation des clés d'administration et suivi analytique post-lancement.",
    tag: "Succès & Suivi continu",
    accent: "bg-secondary-container text-on-secondary",
  },
];

export default function Methodology() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="methode">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-2xl mx-auto text-center mb-space-xl" as="div">
          <div className="inline-flex items-center gap-2 mb-space-xs justify-center w-full">
            <span className="material-symbols-outlined text-secondary text-[20px]">timeline</span>
            <span className="font-label-tag text-label-tag text-secondary uppercase tracking-widest">
              Processus Éprouvé
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-lg md:text-headline-xl text-primary font-bold">
            Notre méthode d&apos;accompagnement en 4 étapes clés
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            De l&apos;idée brute au lancement mondial, une rigueur sans faille à chaque jalon.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <div className="relative p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_4px_20px_rgba(18,62,99,0.04)] flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-col gap-space-sm">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-headline-sm font-bold ${step.accent}`}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-space-md mt-space-sm flex items-center gap-2 text-secondary font-label-tag text-label-tag uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {step.tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
