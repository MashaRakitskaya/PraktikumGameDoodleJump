# Game Doodle Jump praktikum yandex

- [Figma Layout](https://www.figma.com/file/saOUFFjSZQTrIX21oUR5Nh/doodle-jump?node-id=4%3A3028&t=pT8uRZtOqVk4DvJo-1)

### Technologies:

- React, CSR, SSR
- TypeScript
- canvas
- @emotion/styled
- Webpack, Parcel
- NodeJS, Express.js, Sequelize, PostgreSQL
- Docker, Docker Compose

### Functionality:

- Sign up, sign in, exit
- Editing password and user information
- Validation of forms
- Switching themes
- Сreating topics for the forum
- Adding a message to the forum chat
- Presentation of the game
- Beginning and end of the game with the addition of points to the leaderboard
- Game

### `Starting the container`

- install [https://www.docker.com/products/docker-desktop/](docker-desktop)
- execute in the terminal `docker-compose up` will be run server-app, pgadmin and postgres
- open the app on [http://localhost:3000/](http://localhost:3000/)

### `Development mode`

- install [https://www.docker.com/products/docker-desktop/](docker-desktop)
- in the docker-compose.yaml comment out everything related to server-app(lines 4-17)
- in server\sequelize.ts replace host: 'localhost', username: '', password: '', database: '' (get from .env file)
- execute in the terminal `docker-compose up` will be run pgadmin and postgres
- developer mode `npm run start`
- open the app on [http://localhost:3000/](http://localhost:3000/)
