const CACHE_NAME = "my-app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/logo192.png",
  "/logo512.png",
  "/manifest.json",
  "/static/css/main.chunk.css",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith("my-app-cache-") && cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
