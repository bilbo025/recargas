const express = require('express');
const path = require('path');
const http = require('http')

const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

require('../backend/database');

app.use('/users', require('../backend/routes/users.routes'));














