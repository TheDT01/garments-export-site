(async function () {
  // Logos
  const logosTrack = $("#logosCarousel .carousel-track");
  try {
    const res = await fetch(`${ROOT}/data/clients.json`);
    const clients = await res.json();
    const html = clients.map(
      (c) => `
      <div class="carousel-card card center" style="height:84px">
        <img class="logo-chip" src="${ROOT}/${c.logo}" alt="${c.name}">
      </div>
    `
    );
    bindSimpleCarousel(logosTrack, html);
  } catch (e) {
    console.warn("clients.json missing");
  }

  // Testimonials
  const testiTrack = $("#testimonialsCarousel .carousel-track");
  try {
    const res2 = await fetch(`${ROOT}/data/testimonials.json`);
    const t = await res2.json();
    const html2 = t.map(
      (item) => `
      <article class="carousel-card testimonial">
        <p>“${item.quote}”</p>
        <div class="muted">— ${item.author}, ${item.company}</div>
      </article>
    `
    );
    bindSimpleCarousel(testiTrack, html2);
  } catch (e) {
    console.warn("testimonials.json missing");
  }
})();
