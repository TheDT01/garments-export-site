/* Tiny DOM helpers + path util */
window.$ = (sel, ctx = document) => ctx.querySelector(sel);
window.$$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
window.html = (el, str) => ((el.innerHTML = str), el);

window.ROOT = (function () {
  // If we're inside /pages/, go up one level for assets
  return location.pathname.includes("/pages/") ? ".." : ".";
})();

window.loadPartial = async function (targetSelector, partialPath) {
  const el = $(targetSelector);
  if (!el) return;
  const res = await fetch(partialPath);
  const txt = await res.text();
  el.innerHTML = txt;
  return el;
};
