const Contact = require("../Models/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ msg: "Message sent successfully" });
  } catch (error) {
    console.error("Error in contactForm:", error.message);
    return res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = contactForm;
