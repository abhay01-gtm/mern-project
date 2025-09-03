const express = require('express');
const router = express.Router();
const authControllers = require('../Controllers/auth-controller');
const signUpSchema = require('../Validators/auth-validators');
const validate = require('../Middlewares/validation-middleware');
const authMiddleware = require('../Middlewares/auth-middleware');

// Routes
router.route('/').get(authControllers.home);
router.route('/register').post(validate(signUpSchema), authControllers.register);
router.route('/login').post(authControllers.login);
router.route('/user').get(authMiddleware, authControllers.user); // ✅ GET route

module.exports = router;
