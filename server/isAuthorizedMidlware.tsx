import React from 'react';
import { getHtml } from './html';

const isAllowedUrl = (req) => {
  return req.url !== '/signin' || req.url !== '/signup';
};

export const isAuthorizedMidlware = (req, res, next) => {
  if (!req.cookies.authCookie && !req.cookies.uuid && isAllowedUrl(req)) {
    return res.send(
      getHtml({
        dataInsideBody: (
          <>
            <section
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fceed1',
                height: '100vh'
              }}
            >
              <h1>Not authorized!</h1>
              <a href="/signin"> Go to signin</a>
            </section>
          </>
        )
      })
    );
  } else {
    return next();
  }
};
