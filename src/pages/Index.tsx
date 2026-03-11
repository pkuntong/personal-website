import SiteLayout from "@/components/SiteLayout";
import { featuredWork, socialLinks } from "@/data/siteContent";

const Index = () => (
  <SiteLayout>
    <section className="content-page section-fade">
      <h1 className="page-title">Hey, I&apos;m PAU</h1>

      <p className="page-roles">
        Engineer | Product Builder | Mobile Web Specialist | Founder
      </p>

      <div className="copy-stack">
        <p>
          I live in the Washington, DC area and I&apos;m on a mission to build
          as many useful things as possible. I spend most of my time on{" "}
          <a href="/projects" className="accent-link">
            mobile web
          </a>
          ,{" "}
          <a href="/projects" className="accent-link">
            full-stack product work
          </a>
          , and interfaces that feel clear on first touch.
        </p>

        <p>
          I build software across web and iOS. Recent projects include{" "}
          <a
            href="https://apps.apple.com/us/app/rizzgpt-1-0/id6754542069"
            target="_blank"
            rel="noreferrer"
            className="accent-link"
          >
            RizzGPT
          </a>
          ,{" "}
          <a href="https://www.livyflow.com/" target="_blank" rel="noreferrer" className="accent-link">
            LivyFlow
          </a>
          ,{" "}
          <a
            href="https://apps.apple.com/us/app/sales-journal-pro/id6755369489"
            target="_blank"
            rel="noreferrer"
            className="accent-link"
          >
            Sales Journal Pro
          </a>
          , and{" "}
          <a
            href="https://www.smartinvoiceextract.com/"
            target="_blank"
            rel="noreferrer"
            className="accent-link"
          >
            Smart Invoice Extract
          </a>
          . On the web side, I&apos;ve also built tools like{" "}
          <a
            href="https://highlanderhomes.org/"
            target="_blank"
            rel="noreferrer"
            className="accent-link"
          >
            Highlander Homes
          </a>{" "}
          and{" "}
          <a
            href="https://www.gifttracker.cc/"
            target="_blank"
            rel="noreferrer"
            className="accent-link"
          >
            Gift Tracker
          </a>
          .
        </p>

        <p>
          I care about deliberate engineering. That usually means shipping fast
          without the loose ends: cleaner state management, tighter mobile
          behavior, and fewer awkward interactions once the product is in a real
          person&apos;s hands. I keep most of my work{" "}
          <a
            href="https://github.com/pkuntong"
            target="_blank"
            rel="noreferrer"
            className="accent-link"
          >
            public on GitHub
          </a>{" "}
          or embedded directly in the products I ship.
        </p>

        <p>
          If I can be helpful or you&apos;d like to chat, please reach out!{" "}
          <a href="mailto:hey@paukuntong.xyz" className="accent-link">
            hey@paukuntong.xyz
          </a>
          .
        </p>
      </div>

      <div className="home-sections">
        <section>
          <h2 className="section-title">Recent Projects</h2>
          <p className="page-subtitle">
            A few shipped things across iOS, web products, and workflow tools.
          </p>

          <div className="detail-stack home-grid">
            {featuredWork.slice(0, 4).map((project) => (
              <article key={project.title} className="detail-card">
                <p className="detail-kicker">{project.label}</p>
                <h3 className="detail-heading">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="accent-link"
                  >
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="page-subtitle">
            Email is the best path. The rest of my public work lives here too.
          </p>

          <div className="contact-strip">
            {socialLinks.map((link, index) => (
              <span key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="accent-link"
                >
                  {link.label}
                </a>
                {index < socialLinks.length - 1 ? " | " : ""}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  </SiteLayout>
);

export default Index;
