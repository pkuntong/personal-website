import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/apps", label: "Apps" },
];

const links = [
  { label: "Email", href: "mailto:hey@paukuntong.xyz" },
  { label: "GitHub", href: "https://github.com/pkuntong" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/paukuntong/" },
  { label: "X", href: "https://x.com/gnotnuk" },
];

const SiteLayout = ({ children }: { children: ReactNode }) => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-10 md:py-16">
        <header className="flex flex-col gap-6 border-b border-ink pb-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Link to="/" className="font-serif text-2xl tracking-tight">
              Pau Kuntong
            </Link>
            <p className="text-sm text-muted">
              Full-stack engineer in Washington, DC
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.24em]">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="flex-1 pt-10">{children}</main>

        <footer className="mt-14 flex flex-col gap-2 border-t border-ink pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>(c) {year} Pau Kuntong</span>
          <span>Rushing is the enemy of perfection - Rickson Gracie</span>
        </footer>
      </div>
    </div>
  );
};

export default SiteLayout;
