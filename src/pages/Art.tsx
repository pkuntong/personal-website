import SiteLayout from "@/components/SiteLayout";

const Art = () => (
  <SiteLayout>
    <section className="content-page section-fade">
      <h1 className="section-title">Art</h1>
      <p className="page-subtitle">
        A small visual archive for monochrome studies, reference frames, and
        image experiments.
      </p>

      <div className="art-grid">
        <figure className="art-frame art-frame-wide">
          <img src="/portrait-fisheye.png" alt="Black and white portrait study" />
          <figcaption className="art-caption">
            Fisheye portrait study. High contrast, clean light, and a colder
            black-and-white finish.
          </figcaption>
        </figure>

        <article className="detail-card">
          <p className="detail-kicker">Direction</p>
          <p>
            I like images that feel deliberate: strong framing, quiet contrast,
            and a little tension in the composition.
          </p>
        </article>

        <article className="detail-card">
          <p className="detail-kicker">In Progress</p>
          <p>
            This page will collect future stills, references, and visual notes
            as the archive grows.
          </p>
        </article>
      </div>
    </section>
  </SiteLayout>
);

export default Art;
