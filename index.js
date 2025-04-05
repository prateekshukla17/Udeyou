const express = require('express');
const app = express();
const auth = require('./auth');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const { userRouter } = require('./router/user');
const { courseRouter } = requir('./router/course');
const { adminRouter } = require('./router/admin');

mongoose.connect(process.env.mongoURL);

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
