const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ilovekiaraadvani';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { z } = require('zod');
