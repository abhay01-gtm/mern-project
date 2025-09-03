const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (error) {
    // Zod error ka actual array "issues" me hota hai
    if (error.issues && error.issues.length > 0) {
      return res.status(400).json({ msg: error.issues[0].message });
    }

    res.status(400).json({ error: "Validation failed" });
  }
};

module.exports = validate;
