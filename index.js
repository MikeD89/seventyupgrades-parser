const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// serve files from the public directory
app.use(express.static('public'));
app.use(express.static('src'));

// start the express web server listening on 8080
app.listen(PORT, () => {
  console.log('listening on ' + PORT);
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});