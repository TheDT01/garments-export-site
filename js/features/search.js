/* Generic text + facet filtering for arrays of objects */
export function filterItems(
  items,
  { q = "", country = "", category = "", moq = "" }
) {
  const qn = q.trim().toLowerCase();
  return items.filter((it) => {
    const passQ =
      !qn ||
      [
        it.name,
        it.country,
        it.priceRange,
        it.notes,
        (it.categories || []).join(" "),
        it.requirements,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(qn);

    const passCountry = !country || it.country === country;
    const passCategory = !category || (it.categories || []).includes(category);
    const passMoq = !moq || checkMoq(it.moq, moq);
    return passQ && passCountry && passCategory && passMoq;
  });
}

function checkMoq(value, bucket) {
  const v = Number(value || 0);
  if (bucket === "0-500") return v <= 500;
  if (bucket === "501-2000") return v >= 501 && v <= 2000;
  if (bucket === "2001-10000") return v >= 2001 && v <= 10000;
  if (bucket === "10001+") return v >= 10001;
  return true;
}
