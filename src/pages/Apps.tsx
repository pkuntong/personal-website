import SiteLayout from "@/components/SiteLayout";
import { appProjects } from "@/data/siteContent";

const Apps = () => (
  <SiteLayout>
    <section className="content-page section-fade">
      <h1 className="section-title">Apps</h1>
      <p className="page-subtitle">
        Focused iOS products built around one job at a time. Useful, compact,
        and deliberately simple.
      </p>

      <div className="app-list">
        {appProjects.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noreferrer"
            className="app-card"
          >
            <img src={app.icon} alt={app.name} className="app-card-icon" />

            <div className="app-card-meta">
              <p className="detail-kicker">{app.label}</p>
              <h2 className="detail-heading">{app.name}</h2>
              <p>{app.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default Apps;
