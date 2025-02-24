const express = require('express');
const PORT = 3000;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./Routes/authRoutes');
const articleRoutes = require('./Routes/articleRoutes');
const commentRoutes = require('./Routes/commentRoutes');

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());
app.set('view engine', 'ejs');


// Routes
app.use(authRoutes);
app.use('/articles', articleRoutes);
app.use('/articles', commentRoutes);

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});