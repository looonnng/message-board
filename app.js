const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const indexRouter = require('./routes/indexRouter');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Currently listening on Port:${PORT}`);
});
