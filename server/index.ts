import express from 'express';
import {
  createProxyMiddleware,
  responseInterceptor,
  fixRequestBody
} from 'http-proxy-middleware';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { renderMiddleware } from './renderMidlware';
import router from './routes/index';
import { initHot } from './hot.js';
import { sequelize } from './sequelize';

sequelize();

const app = express();
const PORT = 3000;

//@ts-ignore
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  '/yandex-api',
  createProxyMiddleware({
    target: 'https://ya-praktikum.tech/api/v2',
    changeOrigin: true,
    pathRewrite: {
      '^/yandex-api': ''
    },
    logLevel: 'info',
    cookieDomainRewrite: '',
    selfHandleResponse: false,
    onProxyReq: fixRequestBody,
    onProxyRes: () => {},
    onError: (err: Error) => console.error(err)
  })
);

//вызывать раньше app.get
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(router);

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
