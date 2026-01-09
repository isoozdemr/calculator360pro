// Performance optimization utilities

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: string) {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }
}

/**
 * Lazy load images with intersection observer
 */
export function lazyLoadImages() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

/**
 * Defer non-critical JavaScript
 */
export function deferScript(src: string) {
  if (typeof window !== "undefined") {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  }
}

