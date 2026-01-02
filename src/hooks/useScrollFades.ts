import { RefObject, useEffect, useState } from 'react';

type Axis = 'x' | 'y';

type UseScrollFadesOptions = {
  axis?: Axis; // default 'x'
  epsilon?: number; // default 1 (handles fractional pixels)
  enabled?: boolean; // default true
};

export type ScrollFadesState = {
  canScrollStart: boolean; // left (x) or top (y)
  canScrollEnd: boolean; // right (x) or bottom (y)
};

export function useScrollFades<T extends HTMLElement>(
  ref: RefObject<T> | null,
  options: UseScrollFadesOptions = {}
): ScrollFadesState {
  const { axis = 'x', epsilon = 1, enabled = true } = options;

  const [state, setState] = useState<ScrollFadesState>({
    canScrollStart: false,
    canScrollEnd: false,
  });

  useEffect(() => {
    if (!enabled || !ref) return;

    const el = ref.current;
    if (!el) return;

    const read = () => {
      if (axis === 'x') {
        const max = el.scrollWidth - el.clientWidth;
        const start = el.scrollLeft > epsilon;
        const end = el.scrollLeft < max - epsilon;

        setState(prev =>
          prev.canScrollStart === start && prev.canScrollEnd === end
            ? prev
            : { canScrollStart: start, canScrollEnd: end }
        );
      } else {
        const max = el.scrollHeight - el.clientHeight;
        const start = el.scrollTop > epsilon;
        const end = el.scrollTop < max - epsilon;

        setState(prev =>
          prev.canScrollStart === start && prev.canScrollEnd === end
            ? prev
            : { canScrollStart: start, canScrollEnd: end }
        );
      }
    };

    read();

    const onScroll = () => read();
    el.addEventListener('scroll', onScroll, { passive: true });

    // ResizeObserver catches container/content size changes (fonts, data load, window resize, etc.)
    const ro = new ResizeObserver(read);
    ro.observe(el);

    // In case children change without resizing the container (sometimes happens),
    // also watch DOM mutations (optional but useful in UI lists)
    const mo = new MutationObserver(read);
    mo.observe(el, { childList: true, subtree: true });

    return () => {
      el.removeEventListener('scroll', onScroll);
      ro.disconnect();
      mo.disconnect();
    };
  }, [ref, axis, epsilon, enabled]);

  return state;
}
