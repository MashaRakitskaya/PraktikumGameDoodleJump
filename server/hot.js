import webpack from 'webpack';
import config from '../webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export function initHot(app) {
  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output?.publicPath,
      serverSideRender: true
    })
  );
  app.use(webpackHotMiddleware(compiler));
}
