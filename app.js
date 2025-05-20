const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Currently listening on Port:${PORT}`);
});
