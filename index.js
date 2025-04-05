const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your actual secret key
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { z } = require('zod');
const auth = require('./auth');
require('dotenv').config();

mongoose.connect('');

app.use(express.json);
app.post('/signup', async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(1).max(50),
    password: z.string().min(1).max(20),
  });

  const parseDataWithSucess = requiredBody.safeParse(req.body);

  if (!parseDataWithSucess.success) {
    res.json({
      message: 'Incorrect Format',
      error: parseDataWithSucess.error.format(), //Gives the error in a readable format
    });
  }

  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: 'Email already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });

    res.json({
      message: 'You have been signed up successfully',
    });
  } catch (e) {
    console.error('Error while signing up:', e);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

//---------------------------------------------------------------------------------------------------
app.post('/signin', auth, async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  if (!user) {
    res.status(403).json({
      message: 'user does not exists in our database',
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: 'User not exist',
    });
  }
});
app.post('/purchase', auth, async function (req, res) {});
app.post('/seecourse', auth, async function (req, res) {});
app.listen(3000);
