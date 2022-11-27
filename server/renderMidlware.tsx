import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import requireFromString from 'require-from-string';
import fs from 'fs';
import path from 'path';
import { fetchGetUserData } from './fetch/fetchGetUserData';
import { fetchGetUserTheme } from './fetch/fetchGetUserTheme';
import { getHtml } from './html';

export const renderMiddleware = async (req: Request, res: Response) => {
  const userData = await fetchGetUserData(req.cookies);
  const userTheme = await fetchGetUserTheme(userData);

  const defaultServerTheme = { theme: 'light' };

  //содержание файла собранного вэбпаком для запуска клиента в ноде
  const ssrClient: string = fs
    .readFileSync(path.join(__dirname, 'ssrClient.js'))
    .toString();

  //скомпелированный index.tsx из src
  const module = requireFromString(ssrClient);

  const { Server } = module;

  const reactHtml = ReactDOMServer.renderToString(
    Server({ url: req.url, theme: userTheme ? userTheme : defaultServerTheme })
  );

  return res.send(
    getHtml({
      dataInsideBody: (
        <>
          <div dangerouslySetInnerHTML={{ __html: reactHtml }} id="root"></div>
          {/* это тот же index.tsx из src для выполнения в браузере */}
          <script src="/browserClient.js"></script>
          <script
            dangerouslySetInnerHTML={{ __html: 'ClientWebpack.Client()' }}
          ></script>
        </>
      )
    })
  );
};
