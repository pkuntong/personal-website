import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import { featuredWork, fieldNotes } from "@/data/siteContent";

const visualClasses = [
  "from-[#15171d] via-[#1c2027] to-[#0e3031]",
  "from-[#17171a] via-[#20242e] to-[#2c1c1d]",
  "from-[#101114] via-[#1a1f29] to-[#1f2a20]",
  "from-[#141417] via-[#23232a] to-[#2d1f16]",
  "from-[#111216] via-[#181d26] to-[#2f2431]",
  "from-[#121318] via-[#1d2028] to-[#1c302a]",
];

const Index = () => (
  <SiteLayout>
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="surface-card section-fade rounded-[32px] p-7 md:p-10">
        <p className="eyebrow">Selected work, notes, and apps</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-site md:text-6xl md:leading-[1]">
          I build web products that feel{" "}
          <span className="font-serif text-[1.06em] font-normal italic">
            native,
          </span>{" "}
          calm, and fast.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          I am Pau Kuntong, a full-stack engineer in the Washington, DC area.
          My work sits between product, front-end systems, and mobile web
          performance. I like software that feels clear on first touch and
          stays useful after the novelty wears off.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:hey@paukuntong.xyz" className="action-pill action-pill-primary">
            Start a conversation
          </a>
          <Link to="/apps" className="action-pill">
            Browse apps
          </Link>
          <a
            href="https://github.com/pkuntong"
            target="_blank"
            rel="noreferrer"
            className="action-pill"
          >
            View GitHub
          </a>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="surface-card section-fade rounded-[32px] p-4">
          <div className="overflow-hidden rounded-[28px] border border-site">
            <img
              src="/profile.jpeg"
              alt="Pau Kuntong"
              className="h-[420px] w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="surface-soft section-fade rounded-[24px] p-5">
            <p className="eyebrow">Based in</p>
            <p className="mt-3 text-lg font-medium text-site">
              Washington, DC
            </p>
          </article>
          <article className="surface-soft section-fade rounded-[24px] p-5">
            <p className="eyebrow">Focus</p>
            <p className="mt-3 text-lg font-medium text-site">
              PWA, touch UX, full-stack product delivery
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="projects" className="mt-20 space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-site md:text-5xl">
            Current builds and shipped{" "}
            <span className="font-serif font-normal italic">products</span>
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-muted md:text-base">
          A mix of iOS utilities, production web apps, and product experiments
          built for speed, clarity, and day-to-day use.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredWork.map((project, index) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="surface-card card-hover group flex min-h-[360px] flex-col rounded-[28px] p-5 section-fade"
          >
            <div
              className={`mb-5 flex h-48 items-center justify-center rounded-[24px] border border-site bg-gradient-to-br ${visualClasses[index % visualClasses.length]}`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-24 w-24 rounded-[28px] border border-white/10 shadow-2xl"
                />
              ) : (
                <span className="text-5xl font-semibold tracking-[-0.06em] text-site">
                  {project.stamp}
                </span>
              )}
            </div>

            <div className="mt-auto space-y-3">
              <span className="badge-pill">{project.label}</span>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-site transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="text-sm leading-6 text-muted md:text-base">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>

    <section id="about" className="mt-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="surface-card section-fade rounded-[32px] p-7 md:p-9">
        <p className="eyebrow">About</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-site md:text-5xl">
          Low key by default.{" "}
          <span className="font-serif font-normal italic">
            Detail heavy
          </span>{" "}
          by habit.
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-muted md:text-base">
          <p>
            I have spent the last few years building with JavaScript, React,
            and back-end tooling, with most of my attention on interaction
            quality and shipping speed.
          </p>
          <p>
            The part I enjoy most is turning a rough idea into something that
            feels deliberate: better information hierarchy, cleaner state
            management, faster load time, and fewer awkward edges on mobile.
          </p>
          <p>
            Outside of code, I keep a steady pace. That usually means training,
            walking, exploring new tools, and paying attention to what actually
            improves the work.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {fieldNotes.map((note, index) => (
          <article
            key={note.title}
            className={`surface-soft section-fade rounded-[24px] p-5 ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <p className="eyebrow">{note.title}</p>
            <p className="mt-3 text-base leading-7 text-site md:text-lg">
              {note.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default Index;
