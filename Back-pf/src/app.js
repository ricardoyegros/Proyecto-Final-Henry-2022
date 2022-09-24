const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();

app.use(express());
app.use(express.urlencoded({ extended: true, limit: "150mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());
app.use('/', router)

module.exports = app;
