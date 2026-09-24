"use client";

import Logo from "./Logo";

const EXPERTISE_LINKS = [
  "Design Graphique & Identité",
  "Dév Web & Mobile Avancé",
  "UI/UX Design Systèmes",
  "IA & Automatisation Métier",
];

const NAV_LINKS = [
  { label: "Accueil", href: "#" },
  { label: "Notre Approche", href: "#methode" },
  { label: "Prendre RDV", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg shadow-[0_-1px_16px_rgba(18,62,99,0.03)]">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg pb-space-xl">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <Logo />
              <span className="font-headline-sm text-headline-sm font-bold text-primary">
                LOMA Creativity Studio
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Studio d&apos;architecture digitale et de création stratégique. Nous concevons des
              interfaces d&apos;exception, des écosystèmes web et des automatisations
              intelligentes pour propulser les marques visionnaires.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed font-label-tag text-label-tag uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                Disponible pour Q3 / Q4
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary">
              Expertises Clés
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {EXPERTISE_LINKS.map((label) => (
                <li key={label} className="hover:text-primary transition-colors">
                  <a href="#expertises">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary">
              Navigation
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="hover:text-primary transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary">
              Newsletter Studio
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Tendances tech, design systems et décryptages stratégiques une fois par mois.
            </p>
            <form
              className="flex flex-col gap-space-xs"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="flex rounded-full bg-surface-container-lowest p-1 shadow-[0_2px_12px_rgba(18,62,99,0.06)] transition-shadow focus-within:shadow-[0_2px_16px_rgba(0,193,253,0.2)]">
                <input
                  className="w-full px-4 py-2 bg-transparent text-on-surface font-body-sm text-body-sm focus:outline-none placeholder:text-outline"
                  placeholder="votre.email@domaine.com"
                  required
                  type="email"
                />
                <button
                  className="px-space-md py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shrink-0 hover:bg-primary transition-colors"
                  type="submit"
                >
                  Rejoindre
                </button>
              </div>
            </form>
            <div className="flex items-center gap-space-sm pt-space-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px] text-secondary">mail</span>
              <span className="font-body-sm text-body-sm">lomacreativitystudio@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-md text-label-md">
          <p>© 2026 LOMA Creativity Studio. Tous droits réservés.</p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-primary transition-colors" href="#contact">
              Mentions Légales
            </a>
            <a className="hover:text-primary transition-colors" href="#contact">
              Confidentialité
            </a>
            <a className="hover:text-primary transition-colors" href="#contact">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
