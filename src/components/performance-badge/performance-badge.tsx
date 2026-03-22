export default function PerformanceBadge() {
  return (
    <span
      className="performance-badge"
      title="Optimized for performance"
      role="img"
      aria-label="Lighthouse performance score 90 plus. Optimized for performance."
    >
      <span className="performance-badge__icon" aria-hidden="true">
        ⚡
      </span>
      <span className="performance-badge__text">Lighthouse Score: 90+</span>
    </span>
  );
}
