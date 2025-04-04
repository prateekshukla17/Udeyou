const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your actual secret key
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { z } = require('zod');
