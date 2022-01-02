export default function changeTab(e) {
  const tabLinks = window.document.querySelectorAll('.main-nav .nav-link');

  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove('active');
  });

  e.target.classList.add('active');
}
