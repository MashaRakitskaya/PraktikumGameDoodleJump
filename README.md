# PraktikumGameDoodleJump

### `Запуск контейнера`

- установить [https://www.docker.com/products/docker-desktop/](docker-desktop)
- выполнить в терминале `docker-compose up` запустит server-app, pgadmin и postgres
- открыть приложение на [http://localhost:3000/](http://localhost:3000/)

### `Запуск в режиме разработки`

- установить [https://www.docker.com/products/docker-desktop/](docker-desktop)
- в файле docker-compose.yaml закоментировать все что относится к server-app(4-17 строки)
- в server\sequelize.ts заменить host: 'localhost', username: '', password: '', database: '' (смотреть в .env)
- выполнить в терминале `docker-compose up` запустит pgadmin и postgres
- режим разработчика `npm run start`
- открыть приложение на [http://localhost:3000/](http://localhost:3000/)
