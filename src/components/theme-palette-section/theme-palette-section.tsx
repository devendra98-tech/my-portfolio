import { FC, useRef } from "react";
import AccentColorPicker from "../accent-color-picker";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SECTION_IDS } from "../../config/site";

type ThemePaletteSectionProps = {
  isLoading: boolean;
  accentHex: string;
  onAccentChange: (hex: string) => void;
};

const ThemePaletteSection: FC<ThemePaletteSectionProps> = ({
  isLoading,
  accentHex,
  onAccentChange,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  useGsapReveal(containerRef, { y: 24 }, !isLoading);

  return (
    <section
      className="theme-palette-section"
      id={SECTION_IDS.appearance}
      ref={containerRef}
      aria-labelledby="theme-palette-section-title"
    >
      <div className="max-width">
        <h2 className="title" id="theme-palette-section-title" data-animate="fade">
          Accent color
        </h2>
        <p className="theme-palette-section__subtitle" data-animate="fade">
          Pick an accent color. Your choice is saved for your next visit.
        </p>
        <div className="theme-palette-section__panel" data-animate="fade">
          {isLoading ? (
            <div className="accent-picker accent-picker--skeleton" aria-hidden="true">
              <div className="accent-picker__main">
                <div className="accent-picker__sv skeleton" />
                <div className="accent-picker__hue skeleton" />
              </div>
              <div className="accent-picker__row">
                <span className="skeleton skeleton-text short" />
                <span className="skeleton skeleton-text" />
                <span className="skeleton skeleton-circle accent-picker__preview-sk" />
              </div>
            </div>
          ) : (
            <AccentColorPicker value={accentHex} onChange={onAccentChange} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ThemePaletteSection;
