/**
 * Utility to load non-critical third-party scripts when the main thread is idle.
 */
export const loadNonCriticalScripts = (scripts: { src: string; id: string; async?: boolean; defer?: boolean }[]) => {
  const load = () => {
    scripts.forEach(({ src, id, async = true, defer = true }) => {
      if (document.getElementById(id)) return;

      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      script.async = async;
      script.defer = defer;
      document.body.appendChild(script);
    });
  };

  if ('requestIdleCallback' in window) {
    const w = window as unknown as { requestIdleCallback: (cb: () => void) => void };
    w.requestIdleCallback(() => {
      // Small delay even after idle to be safe
      setTimeout(load, 2000);
    });
  } else {
    window.addEventListener('load', () => {
      setTimeout(load, 4000);
    });
  }
};
