const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

mongoose.connect("mongodb://localhost:27017/GDSC")
    .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
    .catch(err => console.log(err));
