(() => {
  const dateNode = document.querySelector('#today-date');
  if (dateNode) {
    const now = new Date();
    dateNode.textContent = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(now);
    dateNode.dateTime = now.toISOString().slice(0, 10);
  }
  const yearNode = document.querySelector('#copyright-year');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
  const searchForm = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');
  const latestCards = [...document.querySelectorAll('#latest-grid .news-card')];
  const emptyState = document.querySelector('#search-empty');
  if (searchForm && searchInput) {
    const filterStories = () => {
      const query = searchInput.value.trim().toLocaleLowerCase();
      let shown = 0;
      latestCards.forEach((card) => {
        const haystack = `${card.dataset.search || ''} ${card.textContent}`.toLocaleLowerCase();
        const match = !query || haystack.includes(query);
        card.closest('.col-12').classList.toggle('d-none', !match);
        if (match) shown += 1;
      });
      emptyState?.classList.toggle('d-none', shown > 0);
    };
    searchForm.addEventListener('submit', (event) => { event.preventDefault(); filterStories(); });
    searchInput.addEventListener('input', filterStories);
  }
  const subscribeForm = document.querySelector('#subscribe-form');
  const subscribeStatus = document.querySelector('#subscribe-status');
  subscribeForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!subscribeForm.reportValidity()) return;
    subscribeStatus.textContent = 'Thank you for subscribing.';
    subscribeForm.reset();
  });
})();

