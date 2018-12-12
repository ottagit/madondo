const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon, (_dirname + '/build/favicon.ico'));
//_dirname id the current directory from where the script is running
app.use(express.static(_dirname));
app.use(express.static(path.join(_dirname, 'build')));
app.get('/ping', function (req, res) {
  return response.send('pong');
});
app.get('/', function (req, res) {
  return res.sendFile(path.join(_dirname, 'build', 'index.html'));
});

app.listen(port);

