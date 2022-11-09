import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import bodyParser from 'body-parser';
import { renderMiddleware } from './renderMidlware';

// import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
// import { User } from './models/user.model';
import router from './routes/index.js';
import { initHot } from './hot.js';
import { sequelize } from './sequelize';

// const sequelizeOptions: SequelizeOptions = {
//   host: 'postgres',
//   port: 5432,
//   username: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   dialect: 'postgres'
// };

// const sequelize = new Sequelize(sequelizeOptions);
// sequelize.addModels([User]);

// // Create database tables
// sequelize.sync({ force: true });

sequelize();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;
app.use(
  '/yandex-api',
  createProxyMiddleware({
    target: 'https://ya-praktikum.tech/api/v2',
    changeOrigin: true,
    pathRewrite: {
      '^/yandex-api': ''
    },
    logLevel: 'silent',
    cookieDomainRewrite: ''
  })
);

//вызывать раньше app.get
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(router);

// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output?.publicPath,
//     serverSideRender: true
//   })
// );
// app.use(webpackHotMiddleware(compiler));

// app.use(devMiddleware(compiler));
// app.use(
//   hotMiddleware(compiler, {
//     log: console.log,
//     path: '/__webpack_hmr',
//     publicPath: config.output.publicPath
//   })
// );

initHot(app);

app.get('/*', renderMiddleware);

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: message
  });
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
