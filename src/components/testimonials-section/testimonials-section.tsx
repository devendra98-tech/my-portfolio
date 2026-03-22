import { FC, useEffect, useRef, useState } from "react";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SECTION_IDS } from "../../config/site";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const ITEMS: Testimonial[] = [
  {
    quote: "Devendra delivers clean and scalable UI solutions.",
    name: "Client Partner",
    role: "Product Lead",
    initials: "CP",
  },
  {
    quote:
      "Highly skilled React developer with great attention to detail.",
    name: "Engineering Manager",
    role: "Tech Company",
    initials: "EM",
  },
];

type TestimonialsSectionProps = {
  isLoading: boolean;
};

const TestimonialsSection: FC<TestimonialsSectionProps> = ({ isLoading }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  useGsapReveal(containerRef, { y: 32 }, !isLoading);

  useEffect(() => {
    if (isLoading) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % ITEMS.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [isLoading]);

  return (
    <section
      className="testimonials-section"
      id={SECTION_IDS.testimonials}
      ref={containerRef}
    >
      <div className="max-width">
        <h2 className="title" data-animate="fade">
          Testimonials
        </h2>
        <p className="testimonials-section__subtitle" data-animate="fade">
          What collaborators say about working together
        </p>
        <div className="testimonials-section__viewport" data-animate="fade">
          {isLoading ? (
            <div className="testimonial-card testimonial-card--skeleton">
              <span className="skeleton skeleton-circle testimonial-card__sk-av" />
              <div className="skeleton skeleton-text skeleton-heading" />
              <div className="skeleton skeleton-text" />
              <div className="skeleton skeleton-text short" />
            </div>
          ) : (
            <article
              key={active}
              className="testimonial-card testimonial-card--solo"
              aria-live="polite"
            >
              <div className="testimonial-card__avatar" aria-hidden="true">
                {ITEMS[active].initials}
              </div>
              <blockquote className="testimonial-card__quote">
                “{ITEMS[active].quote}”
              </blockquote>
              <footer className="testimonial-card__meta">
                <cite className="testimonial-card__name">
                  {ITEMS[active].name}
                </cite>
                <span className="testimonial-card__role">
                  {ITEMS[active].role}
                </span>
              </footer>
            </article>
          )}
        </div>
        {!isLoading && (
          <div className="testimonials-section__dots" aria-hidden="true">
            {ITEMS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonials-section__dot${
                  i === active ? " testimonials-section__dot--active" : ""
                }`}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
