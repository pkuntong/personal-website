import SiteLayout from "@/components/SiteLayout";

const Index = () => (
  <SiteLayout>
    <section className="content-page section-fade">
      <h1 className="page-title">Pau Kuntong</h1>

      <p className="page-roles">Full-Stack Engineer &amp; Founder</p>

      <div className="copy-stack">
        <p>
          Based in the Washington, DC area, I build software that feels
          considered — clear interfaces, calm execution, and products that
          respect the people using them.
        </p>

        <p>
          My focus is deliberate engineering: shipping fast without the loose
          ends. Cleaner state management, tighter mobile behavior, and fewer
          awkward interactions once something is in a real person&apos;s hands.
        </p>

        <p>
          Open to new opportunities and conversations
          —{" "}
          <a href="mailto:hey@paukuntong.xyz" className="accent-link">
            hey@paukuntong.xyz
          </a>
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default Index;
