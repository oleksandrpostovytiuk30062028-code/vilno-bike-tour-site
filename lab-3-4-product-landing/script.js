document.querySelectorAll('[data-bs-spy="scroll"]').forEach((element) => bootstrap.ScrollSpy.getOrCreateInstance(element));

document.querySelectorAll('.faq-item h3').forEach((heading) => {
  const target = document.querySelector(heading.dataset.bsTarget);
  target?.addEventListener('show.bs.collapse', () => heading.setAttribute('aria-expanded', 'true'));
  target?.addEventListener('hide.bs.collapse', () => heading.setAttribute('aria-expanded', 'false'));
});

function attachDemoForm(formId, statusId, message) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = message;
    form.reset();
  });
}
attachDemoForm('contact-form', 'contact-status', 'Thanks — your message is ready. This demo does not send data to a server.');
attachDemoForm('newsletter-form', 'newsletter-status', 'Thanks for subscribing. This demo does not send data to a server.');

