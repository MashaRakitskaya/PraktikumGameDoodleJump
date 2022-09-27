function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
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

const CACHE_NAME = 'my-site-cache-v1';
const URLS = ['/index.tsx'];

//Стадия install выполняется всякий раз, когда новый код SW загружается в браузер
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(URLS);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
  );
});
const CACHE_PREFIX = 'your-super-game-name';

//Стадия activate — когда вкладки, работающие со старой версией кода SW, были закрыты и открыта новая вкладка с нашим приложением
this.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    // Пытаемся найти ответ на такой запрос в кеше
    caches.match(event.request).then((response) => {
      // Если ответ найден, выдаём его
      if (response) {
        return response;
      }

      const fetchRequest = event.request.clone();
      // В противном случае делаем запрос на сервер
      return (
        fetch(fetchRequest)
          // Можно задавать дополнительные параметры запроса, если ответ вернулся некорректный.
          .then((response) => {
            // Если что-то пошло не так, выдаём в основной поток результат, но не кладём его в кеш
            if (
              !response ||
              response.status !== 200 ||
              response.type !== 'basic'
            ) {
              return response;
            }

            const responseToCache = response.clone();
            // Получаем доступ к кешу по CACHE_NAME
            caches.open(CACHE_NAME).then((cache) => {
              // Записываем в кеш ответ, используя в качестве ключа запрос
              cache.put(event.request, responseToCache);
            });
            // Отдаём в основной поток ответ
            return response;
          })
      );
    })
  );
});
