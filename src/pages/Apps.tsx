import SiteLayout from "@/components/SiteLayout";

const apps = [
  {
    name: "RizzGPT 1.0",
    icon: "/apps/rizzgpt.png",
    url: "https://apps.apple.com/us/app/rizzgpt-1-0/id6754542069",
    description: "AI-powered conversation assistant that keeps things confident and clear.",
  },
  {
    name: "LivyFlow",
    icon: "/apps/livyflow.png",
    url: "https://apps.apple.com/us/app/livyflow-zero-based-budgeting/id6755669004",
    description: "Zero-based budgeting with simple, focused tracking.",
  },
  {
    name: "Sales Journal Pro",
    icon: "/apps/salesjournal.png",
    url: "https://apps.apple.com/us/app/sales-journal-pro/id6755369489",
    description: "Sales tracking and analytics for small teams and solo founders.",
  },
  {
    name: "Smart Invoice Extract",
    icon: "/apps/smartinvoice.png",
    url: "https://apps.apple.com/us/app/smart-invoice-extract/id6755616919",
    description: "Document processing that extracts invoice data automatically.",
  },
];

const Apps = () => (
  <SiteLayout>
    <section className="space-y-10 animate-fade-up">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">Apps</p>
        <h1 className="font-serif text-3xl tracking-tight md:text-4xl">
          iOS app catalog
        </h1>
        <p className="max-w-2xl text-sm text-muted md:text-base">
          A small collection of focused iOS apps, each designed to solve a
          specific problem with minimal friction.
        </p>
      </div>

      <div className="grid gap-4">
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-ink bg-paper-soft p-4 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-soft"
          >
            <div className="flex gap-4">
              <img
                src={app.icon}
                alt={`${app.name} icon`}
                className="h-14 w-14 rounded-2xl border border-ink object-cover"
              />
              <div className="space-y-1">
                <h2 className="font-serif text-lg text-ink transition-colors group-hover:text-accent">
                  {app.name}
                </h2>
                <p className="text-sm text-muted">{app.description}</p>
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  View in App Store
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default Apps;
