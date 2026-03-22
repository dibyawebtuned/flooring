'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number;

    const initLenis = () => {
      const isTouchDevice =
        'ontouchstart' in window || navigator.maxTouchPoints > 0;

      const isSmallScreen = window.innerWidth < 1024;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      // Disable on mobile, touch devices, and accessibility preference
      if (isTouchDevice || isSmallScreen || prefersReducedMotion) {
        if (lenis) {
          lenis.destroy();
          cancelAnimationFrame(rafId);
          lenis = null;
        }
        return;
      }

      // Prevent double init
      if (lenis) return;

      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    // Initial check
    initLenis();

    // Re-check on resize (important!)
    window.addEventListener('resize', initLenis);

    return () => {
      window.removeEventListener('resize', initLenis);
      if (lenis) {
        lenis.destroy();
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <>{children}</>;
}