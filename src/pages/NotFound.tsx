import SiteLayout from "@/components/SiteLayout";

const NotFound = () => (
  <SiteLayout>
    <section className="surface-card section-fade rounded-[32px] p-8 md:p-10">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-site md:text-6xl">
        This page is not here.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted md:text-lg">
        The route does not exist. Use the navigation above or head back to the
        homepage.
      </p>
      <a href="/" className="action-pill mt-8 inline-flex">
        Return home
      </a>
    </section>
  </SiteLayout>
);

export default NotFound;
