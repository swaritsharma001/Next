const express = require('express');
const next = require('next');
const path = require('path');

const app = next({ dev: false });
const handle = app.getRequestHandler();
app.get("/api", (req, res)=>{
  res.send("We are working")
})
app.prepare().then(() => {
  const server = express();

  // Serve static files from the Next.js build
  server.use(express.static(path.join(__dirname, '.next')));

  // Handle all other requests using Next.js routing
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Export server as serverless function
  module.exports = server;
});
