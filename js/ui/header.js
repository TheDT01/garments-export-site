document.addEventListener("click", (e) => {
  const btn = e.target.closest("#langToggle");
  if (btn) {
    const current = localStorage.getItem("lang") || "en";
    const next = current === "en" ? "bn" : "en";
    setLanguage(next);
    btn.textContent = next === "en" ? "EN / বাংলা" : "বাংলা / EN";
    showToast(next.toUpperCase() + " enabled");
  }
});
