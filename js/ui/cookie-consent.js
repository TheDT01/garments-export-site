(async function () {
  // Load partial and manage consent
  const key = "cookie-consent";
  const has = localStorage.getItem(key);
  await loadPartial("body", `${ROOT}/partials/cookie-consent.html`); // append via innerHTML
  const box = $("#cookieConsent");
  if (!has && box) {
    box.style.display = "block";
  }

  $("#cookieAccept")?.addEventListener("click", () => {
    localStorage.setItem(key, "accepted");
    box.style.display = "none";
    showToast("Thanks! Preferences saved.");
  });
  $("#cookieDecline")?.addEventListener("click", () => {
    localStorage.setItem(key, "declined");
    box.style.display = "none";
    showToast("Analytics disabled (prototype)");
  });
})();
