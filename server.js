const express = require('express');
//create express app
var app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  }else{
    res.redirect(`http://${req.hostname}${req.url}`);
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Express server is up and running on port ${PORT}`);
});