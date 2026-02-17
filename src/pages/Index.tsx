import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

const focusAreas = [
  "Mobile web experiences that feel native: PWA, offline, touch-first UI.",
  "Full-stack product work in TypeScript, React, and Node.",
  "Design-forward interfaces with performance and clarity first.",
];

const selectedWork = [
  {
    name: "Highlander Homes",
    url: "https://highlanderhomes.org/",
    description: "Real estate listings with search, maps, and fast filters.",
  },
  {
    name: "Gift Tracker",
    url: "https://www.gifttracker.cc/",
    description: "Simple way to track gifting occasions and ideas.",
  },
  {
    name: "LivyFlow",
    url: "https://www.livyflow.com/",
    description: "Workflow and daily task tooling with a calm UI.",
  },
  {
    name: "Smart Invoice Extract",
    url: "https://www.smartinvoiceextract.com/",
    description: "AI-assisted invoice data extraction from PDFs.",
  },
];

const Index = () => (
  <SiteLayout>
    <section className="space-y-10 animate-fade-up">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <img
          src="/profile.jpeg"
          alt="Pau Kuntong"
          className="h-24 w-24 rounded-full border border-ink object-cover shadow-soft md:h-28 md:w-28"
        />
        <div className="space-y-3">
          <h1 className="font-serif text-3xl tracking-tight md:text-4xl">
            Hi, I am Pau.
          </h1>
          <p className="max-w-xl text-sm text-muted md:text-base">
            Full-stack software engineer based in the Washington, DC area. I
            build mobile web experiences that feel native and ship focused
            products end to end.
          </p>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">
            Focus
          </p>
          <ul className="space-y-3 text-sm text-muted">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">Now</p>
          <p className="text-sm text-muted">
            Shipping small, well-crafted apps and experimenting with mobile web
            performance. I keep the work quiet, simple, and useful.
          </p>
          <Link
            to="/apps"
            className="text-sm font-medium text-accent transition-colors hover:text-ink"
          >
            View the app catalog
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          Selected work
        </p>
        <ul className="space-y-4 stagger">
          {selectedWork.map((project) => (
            <li key={project.name} className="space-y-1">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-base font-medium text-ink transition-colors hover:text-accent"
              >
                {project.name}
              </a>
              <p className="text-sm text-muted">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </SiteLayout>
);

export default Index;
