import { FC, useEffect, useRef } from "react";

type BrandedLoaderProps = {
  phase: "loading" | "exiting" | "gone";
  onExitComplete: () => void;
};

const BrandedLoader: FC<BrandedLoaderProps> = ({ phase, onExitComplete }) => {
  const completedRef = useRef(false);

  useEffect(() => {
    if (phase === "loading") completedRef.current = false;
  }, [phase]);

  useEffect(() => {
    if (phase !== "exiting") return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (completedRef.current) return;
    completedRef.current = true;
    onExitComplete();
  }, [phase, onExitComplete]);

  if (phase === "gone") return null;

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName !== "opacity" || phase !== "exiting") return;
    if (completedRef.current) return;
    completedRef.current = true;
    onExitComplete();
  };

  return (
    <div
      className={`branded-loader${phase === "exiting" ? " branded-loader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="branded-loader__inner">
        <div className="branded-loader__mark" aria-hidden="true">
          D
        </div>
        <p className="branded-loader__name">Devendra</p>
        <div className="branded-loader__bar" aria-hidden="true">
          <span className="branded-loader__bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default BrandedLoader;
