const express = require('express');
const app = express();

app.use(express.json());

app.use('/api', (req, res) => {
  const targetUrl = req.query.url; // Get the target URL from the query parameter
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  req.pipe(require('https').createServer({ target: targetUrl }).req).pipe(res);
});

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});
