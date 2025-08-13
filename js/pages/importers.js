import { filterItems } from "../features/search.js";
import { paginate, renderPager } from "../ui/pagination.js";

(async function () {
  // Inject header/footer first (app.js runs too, but we need filters partial attached)
  await loadPartial("#filtersWrap", `${ROOT}/partials/search-filters.html`);
  await loadPartial("body", `${ROOT}/partials/importer-card.html`);

  // Load data
  const [importers, countries, categories] = await Promise.all([
    fetch(`${ROOT}/data/importers.json`)
      .then((r) => r.json())
      .catch(() => []),
    fetch(`${ROOT}/data/countries.json`)
      .then((r) => r.json())
      .catch(() => []),
    fetch(`${ROOT}/data/categories.json`)
      .then((r) => r.json())
      .catch(() => []),
  ]);

  // Populate selects
  const countrySel = $("#country"),
    catSel = $("#category");
  countries.forEach((c) => {
    const o = document.createElement("option");
    o.value = c.name;
    o.textContent = c.name;
    countrySel.appendChild(o);
  });
  categories.forEach((c) => {
    const o = document.createElement("option");
    o.value = c;
    o.textContent = c;
    catSel.appendChild(o);
  });

  // Render list
  const grid = $("#importersGrid");
  const tpl = $("#importerCardTpl").content;
  const pager = $("#pager");
  const form = $("#importerFilters");

  let current = importers;
  let page = 1,
    perPage = 12;

  function render() {
    const fData = Object.fromEntries(new FormData(form).entries());
    const filtered = filterItems(importers, fData);
    current = filtered;
    const { slice, pages } = paginate(filtered, page, perPage);

    grid.innerHTML = "";
    slice.forEach((it) => {
      const node = document.importNode(tpl, true);
      node.querySelector(".name").textContent = it.name;
      node.querySelector(".country").textContent = it.country;
      node.querySelector(".moq").textContent = it.moq.toLocaleString();
      node.querySelector(".price").textContent = it.priceRange;

      const catWrap = node.querySelector(".space-top .flex");
      (it.categories || []).forEach((cat) => {
        const b = document.createElement("span");
        b.className = "badge";
        b.textContent = cat;
        catWrap.appendChild(b);
      });

      node.querySelector(".notes").textContent = it.notes || "";
      const btn = node.querySelector(".detailsBtn");
      btn.href = `${ROOT}/pages/importer-detail.html?id=${it.id}`;
      grid.appendChild(node);
    });

    renderPager(pager, { page, pages }, (p) => {
      page = p;
      render();
    });
  }

  // Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    render();
  });
  $("#resetFilters").addEventListener("click", () => {
    form.reset();
    page = 1;
    render();
  });

  // CSV export (filtered)
  $("#exportCsv").addEventListener("click", () => {
    const fData = Object.fromEntries(new FormData(form).entries());
    const filtered = filterItems(importers, fData);
    const rows = filtered.map(
      ({ id, name, country, categories, moq, priceRange, contacts }) => ({
        id,
        name,
        country,
        categories: (categories || []).join("|"),
        moq,
        priceRange,
        email: contacts?.email || "",
        phone: contacts?.phone || "",
        website: contacts?.website || "",
      })
    );
    const csv = Papa.unparse(rows);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "importers.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Exported current results.");
  });

  render();
})();
