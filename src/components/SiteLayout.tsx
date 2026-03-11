import type { JSX, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { socialLinks } from "@/data/siteContent";

type IconProps = {
  className?: string;
};

const HomeIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M4 11.8 12 5l8 6.8v7.2a1 1 0 0 1-1 1h-4.8v-5.2H9.8V20H5a1 1 0 0 1-1-1v-7.2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M5 5h3.1l4.2 5.6L17.1 5H19l-5.8 6.7L19.5 19h-3.1l-4.5-6-5.2 6H5l6.1-7L5 5Z"
      fill="currentColor"
    />
  </svg>
);

const GitHubIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 4.8a7.2 7.2 0 0 0-2.3 14c.4.1.6-.2.6-.4v-1.5c-2.4.5-2.9-1-2.9-1-.4-.9-1-1.2-1-1.2-.8-.5 0-.5 0-.5.9.1 1.4 1 1.4 1 .8 1.3 2 1 2.5.8.1-.6.3-1 .6-1.3-1.9-.2-3.9-.9-3.9-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.4.9a8 8 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.1.2 2 .1 2.2.6.6.9 1.4.9 2.3 0 3.3-2 4-3.9 4.2.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4A7.2 7.2 0 0 0 12 4.8Z"
      fill="currentColor"
    />
  </svg>
);

const EmailIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="4" y="6" width="16" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="m5.5 8 6.5 5 6.5-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M7.2 9.3V18M7.2 6.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM11.4 18V9.3h3V11c.4-.9 1.4-1.9 3.1-1.9 2.2 0 3.5 1.4 3.5 4.2V18h-3v-4.1c0-1.3-.5-2.1-1.7-2.1-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.9V18h-2.9Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const navItems = [
  { label: "Home", to: "/", icon: HomeIcon, end: true },
];

const socialIcons: Record<string, (props: IconProps) => JSX.Element> = {
  X: XIcon,
  GitHub: GitHubIcon,
  Email: EmailIcon,
  LinkedIn: LinkedInIcon,
};

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-site text-site">
    <div className="mx-auto max-w-[1520px] px-6 py-8 lg:px-10">
      <div className="lg:grid lg:grid-cols-[294px_minmax(0,1fr)] lg:gap-8">
        <aside className="flex flex-col items-start gap-8 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:border-r lg:border-site lg:pr-9">
          <div className="w-full space-y-6 lg:max-w-[14.35rem]">
            <div className="sidebar-photo-frame">
              <img
                src="/portrait-fisheye.png"
                alt="Pau Kuntong"
                className="sidebar-photo"
              />
            </div>

            <nav className="space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `sidebar-nav-item ${isActive ? "sidebar-nav-item-active" : ""}`
                    }
                  >
                    <Icon className="h-5 w-5 flex-none" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>

          <div className="flex gap-3 lg:mt-auto lg:max-w-[14.35rem] lg:pt-8">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label];

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="social-dock-item"
                  aria-label={link.label}
                  title={link.label}
                >
                  {Icon ? <Icon className="h-[18px] w-[18px]" /> : link.label.slice(0, 2)}
                </a>
              );
            })}
          </div>
        </aside>

        <main className="mt-12 min-w-0 lg:mt-0 lg:pl-10">
          {children}
          <footer className="mt-12 border-t border-site pt-6 text-sm tracking-[-0.02em] text-[color:var(--site-muted)]">
            Rushing is the enemy of perfection - Rickson Gracie
          </footer>
        </main>
      </div>
    </div>
  </div>
);

export default SiteLayout;
