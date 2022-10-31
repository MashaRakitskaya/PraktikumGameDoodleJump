import { Request, Response } from "express";
import React from "react";
import ReactDOMServer, { renderToStaticMarkup } from "react-dom/server";
import requireFromString from "require-from-string";
import fs from "fs";
import path from "path";

export function renderMiddleware(req: Request, res: Response) {
  //содержание файла собранного вэбпаком для запуска клиента в ноде
  const ssrClient: string = fs
    .readFileSync(path.join(__dirname, "ssrClient.js"))
    .toString();

  //скомпелированный index.tsx из src
  const module = requireFromString(ssrClient);

  const { Server } = module;

  const { url } = req;

  const reactHtml = ReactDOMServer.renderToString(Server({ url }));

  const html = `${renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />

        <link rel="manifest" href="manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Doodle</title>
      </head>
      <body
        style={{
          margin: 0,
          boxSizing: "border-box",
          fontFamily: "var(--main-font-family)",
        }}
      >
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div dangerouslySetInnerHTML={{ __html: reactHtml }} id="root"></div>
        {/* это тот же index.tsx из src для выполнения в браузере */}
        <script src="/browserClient.js"></script>
        <script
          dangerouslySetInnerHTML={{ __html: "ClientWebpack.Client()" }}
        ></script>
      </body>
    </html>
  )}`;

  return res.send(html);
}
