const express = require('express');
const router = express.Router();
const authControllers = require('../Controllers/Auth-controller');
const signUpSchema = require('../Validators/Auth-validators');
const validate = require('../Middlewares/Validation-middleware');
const authMiddleware = require('../Middlewares/Auth-middleware');

// Routes
router.route('/').get(authControllers.home);
router.route('/register').post(validate(signUpSchema), authControllers.register);
router.route('/login').post(authControllers.login);
router.route('/user').get(authMiddleware, authControllers.user); // ✅ GET route

module.exports = router;
