export function paginate(items, page = 1, perPage = 10) {
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;
  return { slice: items.slice(start, start + perPage), page, pages, total };
}

export function renderPager(container, { page, pages }, onGo) {
  if (!container) return;
  container.innerHTML = "";
  const makeBtn = (label, p, disabled = false) => {
    const b = document.createElement("button");
    b.className = "btn ghost";
    b.textContent = label;
    if (disabled) b.disabled = true;
    b.addEventListener("click", () => onGo(p));
    return b;
  };
  container.append(
    makeBtn("‹ Prev", Math.max(1, page - 1), page === 1),
    span(`Page ${page} / ${pages}`),
    makeBtn("Next ›", Math.min(pages, page + 1), page === pages)
  );
}

function span(t) {
  const s = document.createElement("span");
  s.style.margin = "0 .5rem";
  s.className = "muted";
  s.textContent = t;
  return s;
}
