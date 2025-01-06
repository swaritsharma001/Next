const express = require('express');
const next = require('next');
const path = require('path');


const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files from the Next.js build
  server.use(express.static(path.join(__dirname, '.next')));

  // Handle all other requests using Next.js routing
  server.all('/', (req, res) => {
    return handle(req, res); 
  });

  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
