const express = require('express');
const path = require('path');
const data = require('./db/db.json')
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for wildcard pages
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);