const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/database');
const userRoutes = require('./routes/user.routes');
const fileRoutes = require('./routes/file.routes');
const cookieParser = require('cookie-parser');

const app = express();
dotenv.config();
connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send("Welcome to SkyVault Application");
})

app.use('/skyvault', userRoutes);
app.use('/skyvault', fileRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("App Started Successfully");
})

