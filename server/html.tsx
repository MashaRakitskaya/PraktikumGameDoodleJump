import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const getHtml = ({ dataInsideDody }) =>
  `${renderToStaticMarkup(
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
          boxSizing: 'border-box',
          fontFamily: 'var(--main-font-family)'
        }}
      >
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {dataInsideDody}
      </body>
    </html>
  )}`;
