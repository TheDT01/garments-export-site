window.bindSimpleCarousel = (trackEl, itemsHtml = []) => {
  if (!trackEl) return;
  trackEl.innerHTML = itemsHtml.join("");
  // simple auto scroll (pause on hover)
  let dir = 1;
  let timer = setInterval(() => {
    trackEl.scrollLeft += 2 * dir;
  }, 20);
  trackEl.addEventListener("mouseenter", () => clearInterval(timer));
  trackEl.addEventListener(
    "mouseleave",
    () =>
      (timer = setInterval(() => {
        trackEl.scrollLeft += 2 * dir;
      }, 20))
  );
};
