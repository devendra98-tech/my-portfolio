import { FC, useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutMeContent } from "./about-section-components";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type AnimatedTextProps = {
  text: string;
  delay?: number;
  mode?: "letters" | "words";
};

let splitTextRegistered = false;

const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  mode = "letters",
}) => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const prefers = useMemo(() => prefersReducedMotion(), []);

  const tokens = useMemo(() => {
    if (mode === "words") {
      return text.split(/(\s+)/).map((token) => ({
        value: token,
        whitespace: /^\s+$/.test(token),
      }));
    }
    return Array.from(text).map((char) => ({
      value: char,
      whitespace: /^\s+$/.test(char),
    }));
  }, [mode, text]);

  useLayoutEffect(() => {
    if (prefers) {
      return;
    }

    const element = paragraphRef.current;
    if (!element) {
      return;
    }

    if (!splitTextRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      splitTextRegistered = true;
    }

    const targets = element.querySelectorAll<HTMLElement>(
      "[data-split='true']"
    );

    if (!targets.length) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          x: mode === "words" ? 80 : 40,
          y: 0,
          opacity: 0,
          rotateX: -8,
        },
        {
          x: 0,
          opacity: 1,
          rotateX: 0,
          ease: "power4.out",
          duration: 0.7,
          stagger: mode === "words" ? 0.07 : 0.03,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
            once: false,
          },
          delay,
        }
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [delay, mode, prefers, text]);

  return (
    <AboutMeContent
      ref={paragraphRef}
      className={`split-text ${
        mode === "words" ? "split-words" : "split-chars"
      }`}
    >
      {tokens.map(({ value, whitespace }, index) => (
        <span
          key={`${value}-${index}`}
          data-split={whitespace ? "false" : "true"}
          className={`split-token ${whitespace ? "whitespace-token" : ""}`}
          style={whitespace ? { whiteSpace: "pre" } : undefined}
        >
          {whitespace ? value.replace(/ /g, "\u00A0") : value}
        </span>
      ))}
    </AboutMeContent>
  );
};

export default AnimatedText;
