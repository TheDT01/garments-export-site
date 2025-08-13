(async function () {
  await loadPartial("#cfgWrap", `${ROOT}/partials/configurator-steps.html`);

  const steps = $$("#cfg .step");
  const badges = $$("#cfgSteps [data-step]");
  function goto(step) {
    steps.forEach((s) => s.classList.toggle("hidden", s.dataset.step !== step));
    badges.forEach((b) =>
      b.classList.toggle("badge--active", b.dataset.step === step)
    );
  }
  $$("#cfg [data-next]").forEach((b) =>
    b.addEventListener("click", () => {
      const cur = steps.find((s) => !s.classList.contains("hidden"));
      const idx = steps.indexOf(cur);
      goto(steps[Math.min(idx + 1, steps.length - 1)].dataset.step);
      update();
    })
  );
  $$("#cfg [data-prev]").forEach((b) =>
    b.addEventListener("click", () => {
      const cur = steps.find((s) => !s.classList.contains("hidden"));
      const idx = steps.indexOf(cur);
      goto(steps[Math.max(idx - 1, 0)].dataset.step);
      update();
    })
  );
  goto("type");

  const preview = $("#previewImg");
  const logoFile = $("#logoFile");
  bindPreviewFile(logoFile, preview);

  function readForm() {
    const type = ($('input[name="type"]:checked') || {}).value || "tshirt";
    const fabric = $('select[name="fabric"]').value;
    const gsm = $('select[name="gsm"]').value;
    const color = $('input[name="color"]').value || "Black";
    const sizes = $$('input[name="sizes"]:checked').map((i) => i.value);
    const print = $('select[name="print"]').value;
    const orderType = $('select[name="orderType"]').value;
    const qty = Number($('input[name="qty"]').value || 0);
    return { type, fabric, gsm, color, sizes, print, orderType, qty };
  }

  const estimateBox = $("#estimateBox");
  async function update() {
    const v = readForm();
    // change preview image by type
    const map = {
      tshirt: "tshirt.jpg",
      hoodie: "hoodie.jpg",
      polo: "polo.jpg",
      denim: "denim.jpg",
      jacket: "jacket.jpg",
    };
    $("#previewImg").src = `${ROOT}/assets/images/products/${map[v.type]}`;
    const est = PRICE.estimate({
      type: v.type,
      fabric: v.fabric,
      gsm: v.gsm,
      print: v.print,
      qty: v.qty || 50,
    });
    if (est) {
      estimateBox.innerHTML = `
        <div><strong>Unit FOB:</strong> ${est.unit} USD</div>
        <div><strong>Qty:</strong> ${v.qty.toLocaleString()} pcs</div>
        <div><strong>Est. Total:</strong> ${est.total.toLocaleString()} USD</div>
        <div class="muted">Includes basic CM + fabric + trim + branding surcharge. Excludes freight/duties.</div>
      `;
    }
  }
  document.querySelector("#cfg").addEventListener("change", update);
  update();
})();
