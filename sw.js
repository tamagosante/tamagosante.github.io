/**
 * Watcher PWA Service Worker
 * Handles offline support for the entire app
 */

const CACHE_NAME = 'watcher-v2';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => name.startsWith('watcher-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only handle same-origin GET requests
  if (url.origin !== location.origin || event.request.method !== 'GET') {
    return;
  }

  // Skip API calls and WebSockets
  if (url.pathname.startsWith('/api/') || event.request.headers.get('Upgrade') === 'websocket') {
    return;
  }

  event.respondWith(
    (async () => {
      // Try network first
      try {
        const response = await fetch(event.request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, response.clone());
        }
        return response;
      } catch (e) {
        // Network failed - try cache
        const cached = await caches.match(event.request);
        if (cached) {
          return cached;
        }

        // For navigation (SPA routes), serve cached root index.html
        if (event.request.mode === 'navigate') {
          const rootHtml = await caches.match(new Request(url.origin + '/'));
          if (rootHtml) {
            return rootHtml;
          }
          // Also try index.html directly
          const indexHtml = await caches.match(new Request(url.origin + '/index.html'));
          if (indexHtml) {
            return indexHtml;
          }
        }

        // Return empty response instead of throwing
        return new Response('', {
          status: 503,
          statusText: 'Offline - resource not cached'
        });
      }
    })()
  );
});
