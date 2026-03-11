import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { socialLinks } from "@/data/siteContent";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Apps", href: "/apps" },
];

const SiteLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-site text-site">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-10 pt-5 md:px-8 md:pb-14 md:pt-7">
        <header className="sticky top-4 z-20 mb-10">
          <div className="surface-shell flex flex-col gap-4 rounded-[28px] border border-site px-5 py-4 md:flex-row md:items-center md:justify-between md:rounded-full">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="text-base font-semibold tracking-[-0.02em] text-site"
              >
                Pau Kuntong
              </Link>
              <span className="hidden text-xs text-soft md:inline">
                Full-stack engineer, Washington DC
              </span>
            </div>
            <nav className="flex flex-wrap items-center gap-4 text-sm text-muted">
              {navItems.map((item) => {
                const isActive = item.href === "/apps" && location.pathname === "/apps";

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={isActive ? "text-site" : "transition-colors hover:text-site"}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-16 border-t border-site pt-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-sm text-muted">
                Available for product work, front-end rebuilds, and mobile web
                improvements.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-soft">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="transition-colors hover:text-site"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-sm text-soft md:text-right">
              <p>Rushing is the enemy of perfection - Rickson Gracie</p>
              <p>(c) {year} Pau Kuntong</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SiteLayout;
