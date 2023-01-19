# Game Doodle Jump praktikum yandex

- [Figma Layout](https://www.figma.com/file/saOUFFjSZQTrIX21oUR5Nh/doodle-jump?node-id=4%3A3028&t=pT8uRZtOqVk4DvJo-1)

### Technologies:

- React, CSR, SSR
- TypeScript
- canvas
- @emotion/styled
- Webpack
- NodeJS, Express.js, Sequelize, PostgreSQL
- Docker, Docker Compose

### Functionality:

- Sign up, sign in, exit
- Editing password and user information
- Validation of forms
- Switching themes
- Сreating topics for the forum
- Adding nested messages to the forum chat
- Reactions to messages
- Presentation of the game
- Beginning and end of the game with the addition of points to the leaderboard
- Game

### `Starting the container`

- Install [https://www.docker.com/products/docker-desktop/](docker-desktop)
- Run in terminal `docker-compose up`, this will start server-app, pgadmin and postgres containers.
- Open the app on [http://localhost:3000/](http://localhost:3000/)

### `Development mode`

- Install [https://www.docker.com/products/docker-desktop/](docker-desktop)
- In the docker-compose.yaml file comment out everything related to server-app(lines 4-17)
- In server\sequelize.ts file replace host: 'localhost', username: '', password: '', database: '' (get from .env file)
- Run in terminal `docker-compose up` this will start pgadmin and postgres containers.
- Run application in developer mode `npm run start`
- Open the app on [http://localhost:3000/](http://localhost:3000/)
