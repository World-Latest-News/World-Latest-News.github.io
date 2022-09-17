// self.addEventListener('install', function (e) {
//   console.log('[ServiceWorker] Install');
//   self.skipWaiting();
// });

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  if ('setAppBadge' in navigator) {
    navigator.setAppBadge(1);
  } else {
    navigator.clearAppBadge();
  }
  e.respondWith(fetch(e.request));
});

self.addEventListener('fetch', (event) => {
});

var CACHE_NAME = 'wln';
var urlsToCache = [
  './'
];
console.log('Loading sw');

self.addEventListener('install', function (event) {
  // Perform install steps
  console.log('installing sw');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        var x = cache.addAll(urlsToCache);
        console.log('Cache added');
        return x;
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
      )
  );
});