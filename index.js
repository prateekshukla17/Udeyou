const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your actual secret key
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { z } = require('zod');

app.use(express.json);

app.post('/signup', async function (req, res) {});
app.post('/signin', auth, async function (req, res) {});
app.post('/purchase', auth, async function (req, res) {});
app.post('/seecourse', auth, async function (req, res) {});
