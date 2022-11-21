import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import { renderMiddleware } from "./renderMidlware";

const app = express();
const PORT = 3000;
app.use(
  "/yandex-api",
  createProxyMiddleware({
    target: "https://ya-praktikum.tech/api/v2",
    changeOrigin: true,
    pathRewrite: {
      "^/yandex-api": "",
    },
    logLevel: "silent",
    cookieDomainRewrite: "",
  })
);
//вызывать раньше app.get
app.use(express.static(path.resolve(__dirname, "public")));

app.get("/*", renderMiddleware);

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
