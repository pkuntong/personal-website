import SiteLayout from "@/components/SiteLayout";
import { featuredWork } from "@/data/siteContent";

const Projects = () => (
  <SiteLayout>
    <section className="content-page section-fade">
      <h1 className="section-title">Projects</h1>
      <p className="page-subtitle">
        A mix of shipped iOS apps, web products, and workflow tools.
      </p>

      <div className="detail-stack">
        {featuredWork.map((project) => (
          <article key={project.title} className="detail-card">
            <p className="detail-kicker">{project.label}</p>
            <h2 className="detail-heading">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="accent-link"
              >
                {project.title}
              </a>
            </h2>
            <p>{project.description}</p>
          </article>
        ))}

        <article className="detail-card">
          <p className="detail-kicker">More</p>
          <p>
            There is also a dedicated apps view if you want the App Store work
            in one place. Open{" "}
            <a href="/apps" className="accent-link">
              Apps
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  </SiteLayout>
);

export default Projects;
