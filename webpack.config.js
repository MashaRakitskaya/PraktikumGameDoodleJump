const server = require("./webpack/server.js");
const ssr = require("./webpack/ssr.js");
const web = require("./webpack/web.js");
//последовательность сборки важна сначала web потом ssr и потом server
module.exports = [web, ssr, server];
