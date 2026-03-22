import {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { SECTION_IDS } from "../../config/site";

type NavAction = {
  id: string;
  label: string;
  href: string;
};

const ACTIONS: NavAction[] = [
  { id: "home", label: "Go to Home", href: `#${SECTION_IDS.home}` },
  { id: "about", label: "Go to About", href: `#${SECTION_IDS.about}` },
  { id: "contact", label: "Go to Contact", href: `#${SECTION_IDS.contact}` },
];

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

const CommandPalette: FC<CommandPaletteProps> = ({ open, onClose }) => {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const scrollToHash = useCallback(
    (hash: string) => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) {
      setActive(0);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => (i + 1) % ACTIONS.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => (i - 1 + ACTIONS.length) % ACTIONS.length);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        scrollToHash(ACTIONS[active].href);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, active, onClose, scrollToHash]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const btn = listRef.current.querySelectorAll("button")[active];
    btn?.focus();
  }, [open, active]);

  if (!open) return null;

  return (
    <div
      className="command-palette-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-palette-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="command-palette__head">
          <span id="command-palette-title" className="command-palette__title">
            Quick navigation
          </span>
          <kbd className="command-palette__kbd">Esc</kbd>
        </div>
        <ul ref={listRef} className="command-palette__list" role="listbox">
          {ACTIONS.map((action, index) => (
            <li key={action.id}>
              <button
                type="button"
                role="option"
                aria-selected={index === active}
                className={`command-palette__item${
                  index === active ? " command-palette__item--active" : ""
                }`}
                onMouseEnter={() => setActive(index)}
                onClick={() => scrollToHash(action.href)}
              >
                {action.label}
              </button>
            </li>
          ))}
        </ul>
        <p className="command-palette__hint">
          <kbd>↑</kbd> <kbd>↓</kbd> to move · <kbd>Enter</kbd> to go
        </p>
      </div>
    </div>
  );
};

export function useCommandPaletteToggle() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return { open, setOpen, close: () => setOpen(false) };
}

export default CommandPalette;
