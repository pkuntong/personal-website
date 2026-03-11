import SiteLayout from "@/components/SiteLayout";
import { fieldNotes } from "@/data/siteContent";

const Blog = () => (
  <SiteLayout>
    <section className="content-page section-fade">
      <h1 className="section-title">Blog</h1>
      <p className="page-subtitle">
        Notes, experiments, and things I keep coming back to while building.
      </p>

      <div className="detail-stack">
        {fieldNotes.map((note) => (
          <article key={note.title} className="detail-card">
            <p className="detail-kicker">{note.title}</p>
            <p>{note.body}</p>
          </article>
        ))}

        <article className="detail-card">
          <p className="detail-kicker">Publishing style</p>
          <p>
            I usually publish through shipped products, code, and shorter notes
            in public. The best places to keep up are{" "}
            <a
              href="https://x.com/gnotnuk"
              target="_blank"
              rel="noreferrer"
              className="accent-link"
            >
              X
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/pkuntong"
              target="_blank"
              rel="noreferrer"
              className="accent-link"
            >
              GitHub
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  </SiteLayout>
);

export default Blog;
