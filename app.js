const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  let count = 0;
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    if (!project.hidden) count++;
  });
  document.querySelector('#filter-count').textContent = `Showing ${count} project${count === 1 ? '' : 's'}`;
}));
document.querySelectorAll('a[href="#game-story"], a[href="#hardware-story"]').forEach(link => {
  link.addEventListener('click', () => { document.querySelector(link.getAttribute('href')).open = true; });
});
