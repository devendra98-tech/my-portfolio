import { FC, useId, useRef, useState } from "react";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SECTION_IDS } from "../../config/site";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
};

const POSTS: Post[] = [
  {
    slug: "react-performance",
    title: "React Performance Tips",
    excerpt:
      "Memoization, list virtualization, and avoiding unnecessary renders—practical patterns that keep UIs fast at scale.",
    body: [
      "Start by measuring: React DevTools Profiler and Web Vitals tell you where time actually goes before you optimize. Many “slow” apps spend more time in layout or third-party scripts than in React itself.",
      "Use `React.memo`, `useMemo`, and `useCallback` when they break unnecessary child re-renders—not by default. Wrapping everything adds complexity without always helping; profile first, then memoize hot paths.",
      "For long lists, virtualization (e.g. windowing) keeps DOM size bounded so scroll and paint stay smooth. Split heavy routes with `lazy` + `Suspense` so users download less JavaScript up front.",
      "Stable keys, avoiding inline object/array literals in props where children are memoized, and keeping state as local as possible all reduce subtree updates. Pair that with sensible code-splitting and you get UIs that stay fast as features grow.",
    ],
  },
  {
    slug: "nextjs-ssr",
    title: "Next.js SSR Explained",
    excerpt:
      "How server-side rendering fits with the React model, when to choose SSR vs SSG, and what it means for SEO and TTFB.",
    body: [
      "Server-Side Rendering means the HTML for a page is generated on each request (or on a schedule with caching), so crawlers and users get meaningful content quickly. It’s a great fit for personalized or frequently changing pages.",
      "Static Site Generation pre-renders at build time—ideal for marketing pages, docs, and blogs where content changes less often. You get excellent TTFB from a CDN without hitting a server on every view.",
      "Next.js lets you mix models: static for most routes, SSR or ISR (incremental) where you need freshness. Choosing SSR everywhere can increase server cost and complexity; match the strategy to how often data truly changes.",
      "For SEO, both SSG and SSR can serve complete HTML; the difference is update latency and infrastructure. Understanding hydration—how client React attaches to that HTML—helps you avoid layout shifts and double-fetch patterns.",
    ],
  },
  {
    slug: "accessible-components",
    title: "Building Accessible Components",
    excerpt:
      "Focus management, ARIA roles, and keyboard flows that make custom widgets usable for everyone.",
    body: [
      "Prefer native elements (`button`, `a`, `input`) when possible—they ship with keyboard support and roles. When you build custom controls, you must recreate that behavior explicitly.",
      "Manage focus on open/close: move focus into dialogs and trap it there; return focus to the trigger when they close. Announce dynamic updates with live regions only when screen readers need to hear a change.",
      "Use ARIA to fill gaps (e.g. `aria-expanded` on collapsible regions, `aria-controls` linking to content), but don’t add redundant roles on elements that already have implicit semantics.",
      "Test with the keyboard only and with a screen reader occasionally—not as a one-off audit, but as part of how you ship components. Accessible patterns scale better and improve UX for every user.",
    ],
  },
];

type BlogSectionProps = {
  isLoading: boolean;
};

const BlogSection: FC<BlogSectionProps> = ({ isLoading }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const sectionUid = useId().replace(/:/g, "");
  useGsapReveal(containerRef, { y: 28 }, !isLoading);

  const togglePost = (slug: string) => {
    setExpandedSlug((current) => (current === slug ? null : slug));
  };

  return (
    <section className="blog-section" id={SECTION_IDS.blog} ref={containerRef}>
      <div className="max-width">
        <h2 className="title" data-animate="fade">
          Blog
        </h2>
        <p className="blog-section__subtitle" data-animate="fade">
          Notes on frontend craft
        </p>
        <div className="blog-section__grid">
          {isLoading
            ? POSTS.map((_, i) => (
                <div className="blog-card blog-card--skeleton" key={i}>
                  <div className="skeleton skeleton-text skeleton-heading" />
                  <div className="skeleton skeleton-text" />
                  <div className="skeleton skeleton-text" />
                  <span className="blog-card__skeleton-spacer" aria-hidden />
                  <div className="skeleton skeleton-button" />
                </div>
              ))
            : POSTS.map((post) => {
                const isOpen = expandedSlug === post.slug;
                const titleId = `blog-title-${sectionUid}-${post.slug}`;
                const bodyId = `blog-body-${sectionUid}-${post.slug}`;
                return (
                  <article
                    className={`blog-card${isOpen ? " blog-card--expanded" : ""}`}
                    key={post.slug}
                    data-animate="fade"
                  >
                    <div className="blog-card__lead">
                      <h3 className="blog-card__title" id={titleId}>
                        {post.title}
                      </h3>
                      <p className="blog-card__excerpt">{post.excerpt}</p>
                    </div>
                    <div
                      id={bodyId}
                      className={`blog-card__expand${isOpen ? " blog-card__expand--open" : ""}`}
                      role="region"
                      aria-labelledby={titleId}
                      aria-hidden={!isOpen}
                    >
                      <div className="blog-card__expand-inner">
                        {post.body.map((paragraph, index) => (
                          <p className="blog-card__paragraph" key={index}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="blog-card__cta premium-glow-btn"
                      aria-expanded={isOpen}
                      aria-controls={bodyId}
                      onClick={() => togglePost(post.slug)}
                    >
                      {isOpen ? "Read less" : "Read more"}
                    </button>
                  </article>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
