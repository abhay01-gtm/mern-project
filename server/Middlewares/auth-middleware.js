const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ msg: "Access denied. No token provided." });
    }

    // Remove "Bearer " if present
    const tokenValue = token.startsWith("Bearer ")
      ? token.slice(7).trim()
      : token.trim();

    console.log("Token after Bearer removal:", tokenValue);

    // Verify token
    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);

    // ✅ Attach userId to request
    req.user = { id: decoded.userId };

    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ msg: "Invalid or expired token." });
  }
};

module.exports = authMiddleware;
