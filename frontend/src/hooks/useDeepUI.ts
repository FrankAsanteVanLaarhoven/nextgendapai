import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useDeepUI - AI-powered UI recognition hook
 * Scans the DOM for interactive elements, assigns unique IDs, and builds a map of element metadata.
 * @example
 * const { elementMap, describeElement, subscribe } = useDeepUI();
 */
export function useDeepUI() {
  const [elementMap, setElementMap] = useState<Record<string, any>>({});
  const subscribers = useRef<(() => void)[]>([]);

  // Utility to generate a unique ID for each element
  const getElementId = (el: Element) => {
    if (!el.getAttribute('data-deepui-id')) {
      el.setAttribute('data-deepui-id', 'deepui-' + Math.random().toString(36).substr(2, 9));
    }
    return el.getAttribute('data-deepui-id')!;
  };

  // Scan the DOM for interactive elements
  const scanDOM = useCallback(() => {
    const elements = Array.from(document.querySelectorAll('button, a, input, select, textarea, [tabindex]'));
    const map: Record<string, any> = {};
    elements.forEach(el => {
      const id = getElementId(el);
      const rect = el.getBoundingClientRect();
      map[id] = {
        id,
        tag: el.tagName.toLowerCase(),
        type: (el as HTMLInputElement).type || undefined,
        label: el.getAttribute('aria-label') || el.textContent?.trim() || undefined,
        rect,
        el,
      };
    });
    setElementMap(map);
    subscribers.current.forEach(fn => fn());
  }, []);

  // Subscribe overlays to DOM changes
  const subscribe = (fn: () => void) => {
    subscribers.current.push(fn);
    return () => {
      subscribers.current = subscribers.current.filter(f => f !== fn);
    };
  };

  // Stub for AI/LLM/CV integration
  const describeElement = (id: string) => {
    const el = elementMap[id];
    if (!el) return 'Unknown element';
    // In the future, use LLM/CV to generate a rich description
    return `A ${el.tag} (${el.type || 'control'}) labeled "${el.label}"`;
  };

  useEffect(() => {
    scanDOM();
    const observer = new MutationObserver(scanDOM);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    window.addEventListener('resize', scanDOM);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', scanDOM);
    };
  }, [scanDOM]);

  return { elementMap, describeElement, subscribe };
} 