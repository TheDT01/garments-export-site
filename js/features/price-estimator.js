/* FOB estimator based on simple additive rules */
(async function () {
  const rules = await fetch(`${ROOT}/data/pricing-rules.json`)
    .then((r) => r.json())
    .catch(() => null);
  function estimate({ type, fabric, gsm, print, qty }) {
    if (!rules) return null;
    const base = rules.base[type] || 2;
    const f = rules.fabric[fabric] || 0.2;
    const gsmMult = rules.gsmMultipliers[gsm] || 1;
    const brand = rules.branding[print] || 0;
    const qb = rules.qtyBreaks
      .slice()
      .reverse()
      .find((b) => qty >= b.min) || { mult: 1.3 };
    const price = (base + f + brand) * gsmMult * qb.mult;
    return { unit: +price.toFixed(2), total: +(price * qty).toFixed(2) };
  }
  window.PRICE = { estimate };
})();
