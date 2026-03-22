import {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  clamp,
  hexToHsv,
  hsvToHex,
  normalizeHex,
} from "../../utils/color";

type AccentColorPickerProps = {
  value: string;
  onChange: (hex: string) => void;
  disabled?: boolean;
};

const AccentColorPicker: FC<AccentColorPickerProps> = ({
  value,
  onChange,
  disabled,
}) => {
  const [hsv, setHsv] = useState(() => hexToHsv(value));
  const [hexInput, setHexInput] = useState(value);
  const hsvRef = useRef(hsv);
  hsvRef.current = hsv;

  const svRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const next = hexToHsv(value);
    hsvRef.current = next;
    setHsv(next);
    setHexInput(value);
  }, [value]);

  const pushHsv = useCallback(
    (next: { h: number; s: number; v: number }) => {
      const hex = hsvToHex(next.h, next.s, next.v);
      hsvRef.current = next;
      setHsv(next);
      setHexInput(hex);
      onChange(hex);
    },
    [onChange]
  );

  const pickSv = useCallback(
    (clientX: number, clientY: number) => {
      const el = svRef.current;
      if (!el || disabled) return;
      const rect = el.getBoundingClientRect();
      const s = clamp((clientX - rect.left) / rect.width, 0, 1);
      const v = clamp(1 - (clientY - rect.top) / rect.height, 0, 1);
      pushHsv({ ...hsvRef.current, s, v });
    },
    [disabled, pushHsv]
  );

  const pickHue = useCallback(
    (clientY: number) => {
      const el = hueRef.current;
      if (!el || disabled) return;
      const rect = el.getBoundingClientRect();
      const t = clamp((clientY - rect.top) / rect.height, 0, 1);
      const h = t * 360;
      pushHsv({ ...hsvRef.current, h });
    },
    [disabled, pushHsv]
  );

  const onSvPointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    pickSv(e.clientX, e.clientY);
  };

  const onSvPointerMove = (e: React.PointerEvent) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId) || disabled) return;
    pickSv(e.clientX, e.clientY);
  };

  const onHuePointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    pickHue(e.clientY);
  };

  const onHuePointerMove = (e: React.PointerEvent) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId) || disabled) return;
    pickHue(e.clientY);
  };

  const handleHexBlur = () => {
    const n = normalizeHex(hexInput);
    if (n) {
      pushHsv(hexToHsv(n));
    } else {
      setHexInput(hsvToHex(hsv.h, hsv.s, hsv.v));
    }
  };

  const handleHexKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  const currentHex = hsvToHex(hsv.h, hsv.s, hsv.v);
  const svBg = `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${hsv.h}, 100%, 50%))`;

  return (
    <div
      className="accent-picker"
      aria-label="Choose accent color"
      data-disabled={disabled ? "" : undefined}
    >
      <div className="accent-picker__main">
        <div
          ref={svRef}
          className="accent-picker__sv"
          style={{ background: svBg }}
          onPointerDown={onSvPointerDown}
          onPointerMove={onSvPointerMove}
          onPointerUp={(e) => {
            try {
              e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {
              /* already released */
            }
          }}
          onPointerCancel={(e) => {
            try {
              e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {
              /* */
            }
          }}
          role="presentation"
        >
          <span
            className="accent-picker__cursor accent-picker__cursor--sv"
            style={{
              left: `${hsv.s * 100}%`,
              top: `${(1 - hsv.v) * 100}%`,
            }}
            aria-hidden
          />
        </div>
        <div
          ref={hueRef}
          className="accent-picker__hue"
          onPointerDown={onHuePointerDown}
          onPointerMove={onHuePointerMove}
          onPointerUp={(e) => {
            try {
              e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {
              /* */
            }
          }}
          onPointerCancel={(e) => {
            try {
              e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {
              /* */
            }
          }}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={360}
          aria-valuenow={Math.round(hsv.h)}
          aria-label="Hue"
          aria-orientation="vertical"
        >
          <span
            className="accent-picker__cursor accent-picker__cursor--hue"
            style={{
              top: `${(hsv.h / 360) * 100}%`,
              left: "50%",
            }}
            aria-hidden
          />
        </div>
      </div>
      <div className="accent-picker__row">
        <label className="accent-picker__hex-label" htmlFor="accent-hex-input">
          Hex
        </label>
        <input
          id="accent-hex-input"
          className="accent-picker__hex"
          type="text"
          value={hexInput}
          onChange={(e) => setHexInput(e.target.value)}
          onBlur={handleHexBlur}
          onKeyDown={handleHexKeyDown}
          disabled={disabled}
          spellCheck={false}
          autoComplete="off"
          maxLength={9}
        />
        <span
          className="accent-picker__preview"
          style={{ backgroundColor: currentHex }}
          aria-hidden
          title={currentHex}
        />
      </div>
    </div>
  );
};

export default AccentColorPicker;
