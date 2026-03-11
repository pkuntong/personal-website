import SiteLayout from "@/components/SiteLayout";
import { appProjects } from "@/data/siteContent";

const Apps = () => (
  <SiteLayout>
    <section className="space-y-8">
      <div className="surface-card section-fade rounded-[32px] p-7 md:p-10">
        <p className="eyebrow">Apps</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-site md:text-6xl md:leading-[1]">
          Utility apps built to{" "}
          <span className="font-serif font-normal italic">
            stay out of the way.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          These are focused iOS products built around a single clear job:
          budgeting, document extraction, sales logging, or faster
          communication. No filler, just useful workflows.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {appProjects.map((app, index) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noreferrer"
            className="surface-card card-hover group flex flex-col gap-6 rounded-[28px] p-6 section-fade md:flex-row md:items-center"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-site bg-site-raised">
              <img
                src={app.icon}
                alt={app.name}
                className="h-20 w-20 rounded-[24px] shadow-2xl"
              />
            </div>
            <div className="space-y-3">
              <span className="badge-pill">{app.label}</span>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-site transition-colors group-hover:text-accent">
                {app.name}
              </h2>
              <p className="text-sm leading-6 text-muted md:text-base">
                {app.description}
              </p>
              <span className="text-sm text-soft">Open in the App Store</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default Apps;
