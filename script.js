const body = document.body;
const theme = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') body.classList.add('dark');

theme?.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
