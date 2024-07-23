const express = require('express');
const { signIn, signUp } = require('../controller/usercontroller'); // Adjust the path as needed

const routersss = express.Router();

routersss.post('/signin', signIn);
routersss.post('/signup', signUp);

module.exports = routersss;
