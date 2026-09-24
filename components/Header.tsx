import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Accueil", href: "#" },
  { label: "Services", href: "#expertises" },
  { label: "Notre Approche", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md shadow-[0_1px_16px_rgba(18,62,99,0.06)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between gap-space-md">
        <a className="flex items-center gap-space-sm shrink-0" href="#">
          <Logo className="h-20 w-auto" />
        </a>
        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-space-md shrink-0">
          <ThemeToggle />
          <a
            className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg transition-all duration-300 shadow-[0_4px_20px_rgba(0,194,255,0.15)] hover:shadow-[0_4px_24px_rgba(0,194,255,0.35)] hover:bg-primary hover:-translate-y-0.5"
            href="#contact"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </header>
  );
}
