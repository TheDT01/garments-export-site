/* Logo / tech-pack client-side preview */
(function () {
  window.bindPreviewFile = function (input, imgTarget) {
    input?.addEventListener("change", () => {
      const f = input.files?.[0];
      if (!f) return;
      const url = URL.createObjectURL(f);
      imgTarget.src = url;
    });
  };
})();
