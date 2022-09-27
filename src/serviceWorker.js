// export function startServiceWorker() {
//   if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker
//         .register('/sw.js')
//         .then((registration) => {
//           console.log(
//             'ServiceWorker registration successful with scope: ',
//             registration.scope
//           );
//         })
//         .catch((error) => {
//           console.log('ServiceWorker registration failed: ', error);
//         });
//     });
//   }
// }

// const CACHE_NAME = 'my-site-cache-v1';
// const URLS = ['/index.tsx'];

// //Стадия install выполняется всякий раз, когда новый код SW загружается в браузер
// this.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches
//       .open(CACHE_NAME)
//       .then((cache) => {
//         console.log('Opened cache');
//         return cache.addAll(URLS);
//       })
//       .catch((err) => {
//         console.log(err);
//         throw err;
//       })
//   );
// });
// const CACHE_PREFIX = 'your-super-game-name';

// //Стадия activate — когда вкладки, работающие со старой версией кода SW, были закрыты и открыта новая вкладка с нашим приложением
// this.addEventListener('activate', function (event) {
//   event.waitUntil(
//     caches.keys().then((keyList) => {
//       return Promise.all(
//         keyList.map((key) => {
//           if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME) {
//             return caches.delete(key);
//           }
//         })
//       );
//     })
//   );
// });

// this.addEventListener('fetch', (event) => {
//   event.respondWith(
//     // Пытаемся найти ответ на такой запрос в кеше
//     caches.match(event.request).then((response) => {
//       // Если ответ найден, выдаём его
//       if (response) {
//         return response;
//       }

//       const fetchRequest = event.request.clone();
//       // В противном случае делаем запрос на сервер
//       return (
//         fetch(fetchRequest)
//           // Можно задавать дополнительные параметры запроса, если ответ вернулся некорректный.
//           .then((response) => {
//             // Если что-то пошло не так, выдаём в основной поток результат, но не кладём его в кеш
//             if (
//               !response ||
//               response.status !== 200 ||
//               response.type !== 'basic'
//             ) {
//               return response;
//             }

//             const responseToCache = response.clone();
//             // Получаем доступ к кешу по CACHE_NAME
//             caches.open(CACHE_NAME).then((cache) => {
//               // Записываем в кеш ответ, используя в качестве ключа запрос
//               cache.put(event.request, responseToCache);
//             });
//             // Отдаём в основной поток ответ
//             return response;
//           })
//       );
//     })
//   );
// });

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/serviceWorker.js')
        .then((registration) => {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope
          );
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
}

export function register(config) {
  if ('serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/custom-service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit http://bit.ly/CRA-PWA'
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See http://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
