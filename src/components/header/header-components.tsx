import styled from "styled-components";

/** Theme control — colors overridden in App.css for transparent vs scrolled header */
export const ThemeToggleButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: inherit;
  transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  flex-shrink: 0;
  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.5);
    color: var(--accent-color);
    transform: translateY(-2px);
    outline: none;
  }
`;
