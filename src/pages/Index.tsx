import SiteLayout from "@/components/SiteLayout";

const Index = () => (
  <SiteLayout>
    <section className="content-page section-fade">
      <h1 className="page-title">Hey, I&apos;m PAU</h1>

      <p className="page-roles">Engineer | Builder | Founder</p>

      <div className="copy-stack">
        <p>
          I live in the Washington, DC area and I&apos;m on a mission to build
          as many useful things as possible. I care about clear interfaces,
          calm execution, and making the internet feel a little more human.
        </p>

        <p>
          I care about deliberate engineering. That usually means shipping fast
          without the loose ends: cleaner state management, tighter mobile
          behavior, and fewer awkward interactions once the product is in a real
          person&apos;s hands.
        </p>

        <p>
          If I can be helpful or you&apos;d like to chat, please reach out!{" "}
          <a href="mailto:hey@paukuntong.xyz" className="accent-link">
            hey@paukuntong.xyz
          </a>
          .
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default Index;
