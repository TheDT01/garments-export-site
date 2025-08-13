document.addEventListener("DOMContentLoaded", async () => {
  // Inject header/footer
  await loadPartial("#site-header", `${ROOT}/partials/header.html`);
  await loadPartial("#site-footer", `${ROOT}/partials/footer.html`);

  // Footer year
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();

  // Mark active nav based on page
  const page = location.pathname.split("/").pop().replace(".html", "");
  $$("[data-nav]").forEach((a) => {
    if (page.includes(a.dataset.nav)) a.classList.add("active");
  });

  // Newsletter fake submit
  const ns = $("#newsletterForm");
  if (ns) {
    ns.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Subscribed! (prototype)");
    });
  }
});

window.showToast = (msg) => {
  let t = $("#toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
};
