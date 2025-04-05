const express = require('express');
const { Router } = require('express');

const userRouter = Router();

userRouter.use(express, json());

userRouter.post('/signup', async function (req, res) {
  res.json({
    message: 'signup endpoint',
  });
});
userRouter.post('/signin', async function (req, res) {
  res.json({
    message: 'signin endpoint',
  });
});

module.exports = {
  userRouter: userRouter,
};
