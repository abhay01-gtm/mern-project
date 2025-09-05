const express = require("express");
const router = express.Router();
const contactForm = require("../Controllers/Contact-controller");

router.post("/contact", contactForm);

module.exports = router;
