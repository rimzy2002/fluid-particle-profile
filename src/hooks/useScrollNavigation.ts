import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useScrollNavigation = (prevPath: string | null, nextPath: string | null) => {
  const navigate = useNavigate();
  const navigatingRef = useRef(false);
  const atBottomSinceRef = useRef<number | null>(null);
  const atTopSinceRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    const isAtBottom = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewport = window.innerHeight;
      const full = document.documentElement.scrollHeight;
      return scrollY + viewport >= full - 4;
    };

    const isAtTop = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      return scrollY <= 4;
    };

    const go = (path: string) => {
      if (navigatingRef.current) return;
      navigatingRef.current = true;
      navigate(path);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        // scrolling down
        atTopSinceRef.current = null;
        if (!nextPath || !isAtBottom()) {
          atBottomSinceRef.current = null;
          return;
        }
        const now = Date.now();
        if (atBottomSinceRef.current === null) {
          atBottomSinceRef.current = now;
          return;
        }
        if (now - atBottomSinceRef.current > 120) {
          go(nextPath);
        }
      } else if (e.deltaY < 0) {
        // scrolling up
        atBottomSinceRef.current = null;
        if (!prevPath || !isAtTop()) {
          atTopSinceRef.current = null;
          return;
        }
        const now = Date.now();
        if (atTopSinceRef.current === null) {
          atTopSinceRef.current = now;
          return;
        }
        if (now - atTopSinceRef.current > 120) {
          go(prevPath);
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current === null) return;
      const currentY = e.touches[0]?.clientY ?? 0;
      const deltaY = touchStartYRef.current - currentY; // >0 => swipe up (scroll down)
      if (deltaY > 60 && nextPath && isAtBottom()) {
        go(nextPath);
      } else if (deltaY < -60 && prevPath && isAtTop()) {
        go(prevPath);
      }
    };

    const onTouchEnd = () => {
      touchStartYRef.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [navigate, prevPath, nextPath]);
};
