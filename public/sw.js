const CACHE_PREFIX = 'doodle-jump';
const CACHE_NAME = `${CACHE_PREFIX}-cache-v3`;

const URLS = [
  '/static/js/bundle.js',
  '/static/js/vendors~main.chunk.js',
  '/static/js/main.chunk.js',
  '/signup',
  '/signin',
  '/leaderboard',
  '/forum',
  '/game',
  '/password-setting',
  '/profile-setting',
  '/manifest.json',
  '/logo.svg',
  '/character.png',
  '/static/media/close.572dfb5b.svg',
  '/static/media/back.ac1ad2a7.svg',
  '/static/media/arrow.565146d8.svg',
  'https://images.unsplash.com/photo-1423958950820-4f2f1f44e075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1534942642400-39e0b996f73f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1503595855261-9418f48a991a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://fonts.gstatic.com/s/play/v17/6ae84K2oVqwItm4TCpAy2g.woff2',
  '/offline.html'
];

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(URLS);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
  );
});

this.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME) {
            return caches.delete(key);
          } else {
            return null;
          }
        })
      );
    })
  );
});

this.addEventListener('fetch', (event) => {
  if (!(event.request.url.indexOf('http') === 0)) return;

  event.respondWith(
    caches
      .match(event.request)
      .then(
        (cacheRes) =>
          cacheRes ||
          fetch(event.request).then((fetchRes) =>
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request.url, fetchRes.clone());
              return fetchRes;
            })
          )
      )
      .catch(() => caches.match('/offline.html'))
  );
});
