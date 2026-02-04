import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

const NotFound = () => (
  <SiteLayout>
    <section className="space-y-4 animate-fade-up">
      <p className="text-xs uppercase tracking-[0.32em] text-muted">404</p>
      <h1 className="font-serif text-3xl tracking-tight md:text-4xl">
        Page not found
      </h1>
      <p className="text-sm text-muted">
        The page you are looking for does not exist. The home page should get
        you back on track.
      </p>
      <Link
        to="/"
        className="text-sm font-medium text-accent transition-colors hover:text-ink"
      >
        Return home
      </Link>
    </section>
  </SiteLayout>
);

export default NotFound;
