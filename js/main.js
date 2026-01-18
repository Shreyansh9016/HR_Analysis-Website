const navTemplate = `
  <div class="container">
    <a href="index.html" class="logo">AtliQ HR</a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="pages/overview.html">Overview</a>
      <a href="pages/transformation.html">Data Process</a>
      <a href="pages/gallery.html">Dashboard</a>
      <a href="pages/insights.html">Insights</a>
      <a href="pages/tools.html">Tools</a>
      <a href="pages/about.html">About</a>
    </div>
  </div>
`;

const footerTemplate = `
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>AtliQ HR Analysis</h3>
        <p>Empowering HR decisions with data-driven insights.</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <a href="index.html">Home</a>
        <a href="pages/overview.html">Project Overview</a>
        <a href="pages/gallery.html">Dashboard Gallery</a>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>
        <a href="https://www.linkedin.com/in/shreyansh-singh-729b0b198/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Shreyansh9016/HR-Analysis-AtliQ-Technologies" target="_blank">GitHub</a>
        <a href="mailto:email@example.com">Email Me</a>
      </div>
    </div>
    <div class="copyright">
      &copy; 2026 Shreyansh Singh. All rights reserved.
    </div>
  </div>
`;

function loadSharedComponents() {
  // Determine if we are in a subdirectory (pages/) or root
  const isPagesDir = window.location.pathname.includes('/pages/');

  // Adjust paths if in pages directory
  let adjustedNav = navTemplate;
  let adjustedFooter = footerTemplate;

  if (isPagesDir) {
    adjustedNav = adjustedNav.replace(/href="index.html"/g, 'href="../index.html"');
    adjustedNav = adjustedNav.replace(/href="pages\//g, 'href="');

    adjustedFooter = adjustedFooter.replace(/href="index.html"/g, 'href="../index.html"');
    adjustedFooter = adjustedFooter.replace(/href="pages\//g, 'href="');
  } else {
    // In root, ensure links to pages/ work (already correct in template)
    // but ensure index.html links work
  }

  const navElement = document.querySelector('.navbar');
  if (navElement) navElement.innerHTML = adjustedNav;

  const footerElement = document.querySelector('.footer');
  if (footerElement) footerElement.innerHTML = adjustedFooter;

  // Highlight active link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPath || (currentPath === 'index.html' && link.getAttribute('href').endsWith('index.html'))) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadSharedComponents();

  // Scroll Animation Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});
