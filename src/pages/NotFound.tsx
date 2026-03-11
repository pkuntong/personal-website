import SiteLayout from "@/components/SiteLayout";

const NotFound = () => (
  <SiteLayout>
    <section className="content-page section-fade">
      <h1 className="section-title">This page is not here.</h1>
      <p className="page-subtitle">
        The route does not exist. Use the left rail to get back to the main
        pages.
      </p>
      <a href="/" className="not-found-link">
        Return home
      </a>
    </section>
  </SiteLayout>
);

export default NotFound;
