import { MutableRefObject, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type RevealOptions = {
  duration?: number;
  ease?: string;
  stagger?: number;
  y?: number;
  trigger?: HTMLElement | null;
};

let isScrollTriggerRegistered = false;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useGsapReveal = (
  containerRef: MutableRefObject<HTMLElement | null>,
  {
    duration = 0.8,
    ease = "power2.out",
    stagger = 0.15,
    y = 40,
    trigger,
  }: RevealOptions = {},
  enabled = true
) => {
  useLayoutEffect(() => {
    if (!enabled) {
      return;
    }

    const container = containerRef.current;
    if (!container || prefersReducedMotion()) {
      return;
    }

    if (!isScrollTriggerRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      isScrollTriggerRegistered = true;
    }

    const elements = gsap.utils.toArray<HTMLElement>(
      container.querySelectorAll('[data-animate="fade"]')
    );

    if (!elements.length) {
      return;
    }

    const context = gsap.context(() => {
      elements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            ease,
            delay: index * stagger,
            scrollTrigger: {
              trigger: trigger ?? element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            overwrite: "auto",
          }
        );
      });
    }, container);

    return () => {
      context.revert();
    };
  }, [containerRef, duration, ease, enabled, stagger, trigger, y]);
};

