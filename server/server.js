import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from '../src/components/App/App.tsx';

const PORT = 3000;
const app = express();

app.get('/*', (req, res) => {
  const reactApp = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, '../build')));

app.use(express.static('../build'));
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
