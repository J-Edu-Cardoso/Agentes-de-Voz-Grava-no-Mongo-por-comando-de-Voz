// Sistema de Rotas SPA
const routes = {
  '/': 'pages/home.html',
  '/recorder': 'pages/recorder.html',
  '/library': 'pages/library.html',
  '/settings': 'pages/settings.html',
  '/assistant': 'pages/assistant.html'
};

async function loadPage(route) {
  try {
    const response = await fetch(routes[route]);
    const html = await response.text();
    document.getElementById('main-content').innerHTML = html;
    window.history.pushState({}, route, window.location.origin + route);
  } catch (error) {
    console.error('Failed to load page:', error);
  }
}

// Configura eventos
window.onpopstate = () => loadPage(window.location.pathname);
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-route]')) {
      e.preventDefault();
      loadPage(e.target.getAttribute('data-route'));
    }
  });
  
  // Carrega a página inicial
  loadPage('/');
});
