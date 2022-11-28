const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello world!'));
// Add a route to confirm the Pokemon are servable

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`);
});
