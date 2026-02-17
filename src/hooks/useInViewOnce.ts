import { useEffect, useRef, useState, type RefObject } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface UseInViewOnceOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
  disabled?: boolean;
}

interface UseInViewOnceResult<T extends Element> {
  ref: RefObject<T | null>;
  isInView: boolean;
  hasEnteredView: boolean;
}

export const useInViewOnce = <T extends Element>({
  root = null,
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.15,
  once = true,
  disabled = false,
}: UseInViewOnceOptions = {}): UseInViewOnceResult<T> => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isDisabled = disabled || prefersReducedMotion;
  const canObserve =
    typeof window !== "undefined" && "IntersectionObserver" in window;
  const bypassObserver = isDisabled || !canObserve;

  const ref = useRef<T>(null);
  const [isInViewState, setIsInViewState] = useState(false);
  const [hasEnteredViewState, setHasEnteredViewState] = useState(false);

  useEffect(() => {
    if (bypassObserver) {
      return;
    }

    const target = ref.current;
    if (!target || (once && hasEnteredViewState)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setIsInViewState(true);
          setHasEnteredViewState(true);
          if (once) {
            observer.unobserve(entry.target);
          }
          return;
        }

        if (!once) {
          setIsInViewState(false);
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [bypassObserver, hasEnteredViewState, once, root, rootMargin, threshold]);

  const hasEnteredView = bypassObserver ? true : hasEnteredViewState;
  const isInView = bypassObserver ? true : once ? hasEnteredViewState : isInViewState;

  return {
    ref,
    isInView,
    hasEnteredView,
  };
};
