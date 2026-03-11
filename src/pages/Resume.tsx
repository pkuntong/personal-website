import SiteLayout from "@/components/SiteLayout";

const Resume = () => (
  <SiteLayout>
    <section className="content-page section-fade">
      <h1 className="section-title">Resume</h1>
      <p className="page-subtitle">
        Product-minded engineering across web, mobile UX, and shipping under
        real constraints.
      </p>

      <div className="detail-stack">
        <article className="detail-card">
          <p className="detail-kicker">Current focus</p>
          <p>
            Full-stack product work in TypeScript, React, and Node, with a
            strong bias toward mobile web quality, performance, and interaction
            design.
          </p>
        </article>

        <article className="detail-card">
          <p className="detail-kicker">What I do best</p>
          <p>
            Front-end rebuilds, product polish, responsive systems, touch-first
            UX, PWA behavior, feature shipping, and translating rough ideas into
            production-ready interfaces.
          </p>
        </article>

        <article className="detail-card">
          <p className="detail-kicker">Tools and stack</p>
          <p>
            React, TypeScript, JavaScript, Node.js, Vite, product architecture,
            design systems, API integration, performance tuning, and
            implementation detail that holds up in the browser.
          </p>
        </article>

        <article className="detail-card">
          <p className="detail-kicker">Elsewhere</p>
          <p>
            The most complete public record of my work is on{" "}
            <a
              href="https://github.com/pkuntong"
              target="_blank"
              rel="noreferrer"
              className="accent-link"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/paukuntong/"
              target="_blank"
              rel="noreferrer"
              className="accent-link"
            >
              LinkedIn
            </a>
            . If you want the short version directly, email{" "}
            <a href="mailto:hey@paukuntong.xyz" className="accent-link">
              hey@paukuntong.xyz
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  </SiteLayout>
);

export default Resume;
