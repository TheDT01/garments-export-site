(async function () {
  await loadPartial("body", `${ROOT}/partials/importer-profile.html`);

  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const wrap = $("#profileWrap");
  const tpl = $("#importerProfileTpl").content;

  if (!id) {
    wrap.innerHTML = '<p class="muted">Invalid importer ID.</p>';
    return;
  }

  try {
    const res = await fetch(`${ROOT}/data/importer-profiles/${id}.json`);
    if (!res.ok) throw new Error("Profile missing");
    const it = await res.json();

    const node = document.importNode(tpl, true);
    node.querySelector(".name").textContent = it.name;
    node.querySelector(".country").textContent = it.country;
    node.querySelector(".categories").textContent = (it.categories || []).join(
      ", "
    );
    node.querySelector(".notes").textContent = it.notes || "";
    node.querySelector(".moq").textContent = it.moq.toLocaleString();
    node.querySelector(".price").textContent = it.priceRange;

    const reqs = node.querySelector(".reqs");
    (it.requirements || []).forEach((r) => {
      const li = document.createElement("li");
      li.textContent = r;
      reqs.appendChild(li);
    });

    const email = node.querySelector(".email");
    email.href = `mailto:${it.contacts.email}`;
    email.textContent = it.contacts.email;

    const phone = node.querySelector(".phone");
    phone.href = `tel:${it.contacts.phone}`;
    phone.textContent = it.contacts.phone;

    const web = node.querySelector(".website");
    web.href = it.contacts.website;
    web.textContent = it.contacts.website.replace(/^https?:\/\//, "");

    node.querySelector(".contactBtn").addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" });
    });

    wrap.appendChild(node);
  } catch (e) {
    wrap.innerHTML = '<p class="muted">Profile not found.</p>';
  }

  // mock form submit
  $("#contact")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Request sent (prototype).");
  });
})();
