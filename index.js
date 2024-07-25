const express = require('express');
const app = express();

app.use(express.json());

app.use('/api', (req, res) => {
    const url = req.query.url; // Get the target URL from the query parameter
    const apiKey = req.query.key; // Get the API key from the query parameter
    const targetUrl = `${url}?key=${apiKey}`; // Construct the full target URL with API key
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    req.pipe(require('https').createServer({ target: targetUrl }).req).pipe(res);
  });
  
  

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});
