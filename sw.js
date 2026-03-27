// Aquest és el Service Worker bàsic per permetre la instal·lació de l'App de l'Arquers ViG

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instal·lat correctament al mòbil');
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Aquí de moment no hi fem res, només deixem passar les connexions a internet normals.
  // En el futur aquí s'hi podria posar codi perquè l'app funcioni fins i tot sense cobertura al bosc!
});
