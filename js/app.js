/**
 * Global JS for lightweight interactions
 * - Icon rendering (Lucide)
 * - FAQ accordion
 * - Simple form handling for Configurator and Contact (no backend; shows a summary)
 * - Lazy-loading placeholders
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render Lucide icons
  if (window.lucide) { window.lucide.createIcons(); }

  // Accordion
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const open = item.classList.toggle('open');
      item.querySelector('.answer').style.display = open ? 'block' : 'none';
    });
  });

  // Configurator demo handler
  const cfg = document.getElementById('configForm');
  const result = document.getElementById('configResult');
  if (cfg && result) {
    cfg.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(cfg).entries());
      // Basic validation
      if (!data.type || !data.fabric || !data.qty || !data.country) {
        alert('Please fill all required fields.');
        return;
      }
      result.style.display = 'block';
      result.innerHTML = `
        <h3>Configuration Summary</h3>
        <pre style="white-space:pre-wrap;background:#F8FAFC;padding:1rem;border-radius:12px;">${JSON.stringify(data, null, 2)}</pre>
        <p><em>This is a static demo. Connect this form to your preferred backend or CRM.</em></p>
      `;
      cfg.reset();
      window.scrollTo({ top: result.offsetTop - 80, behavior: 'smooth' });
    });
  }

  // Contact form demo
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(contactForm).entries());
      alert(`Thanks ${data.name}, we'll get back to you at ${data.email}. (Demo submission)`);
      contactForm.reset();
    });
  }
});
