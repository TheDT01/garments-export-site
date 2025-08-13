(function () {
  const LS_KEY = "lang";
  const defaultLang = localStorage.getItem(LS_KEY) || "en";
  let dict = {};

  async function load(lang) {
    const res = await fetch(`${ROOT}/data/languages/${lang}.json`);
    dict = await res.json();
    apply();
  }

  function t(key) {
    return key.split(".").reduce((o, k) => o && o[k], dict) || "";
  }

  function apply() {
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val) el.textContent = val;
    });
  }

  window.I18N = { load, t };

  // bootstrap
  load(defaultLang);
  window.setLanguage = (lang) => {
    localStorage.setItem(LS_KEY, lang);
    load(lang);
  };
})();
