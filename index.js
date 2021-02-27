const express = require('express');
const app = express();

// serve files from the public directory
app.use(express.static('public'));
app.use(express.static('src'));

// start the express web server listening on 8080
app.listen(80, () => {
  console.log('listening on 80');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});