const CACHE_NAME = 'gugudangame';
const urlsToCache = [
    '/deticasdBaeT/',
    '/deticasdBaeT/index.html',
    '/deticasdBaeT/manifest.json',
    'https://i.ibb.co/1f7HH522/maskable-icon-x192-1.png',
    'https://i.ibb.co/k6yWCRs5/maskable-icon-x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});
