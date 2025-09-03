const { z } = require("zod");

// Create a schema for user registration validation
const signUpSchema = z.object({
  username: z
    .string()
    .nonempty("Username is required")
    .min(3, "Username must be at least 3 characters long"),

  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email format"),

  phone: z
    .string()
    .nonempty("Phone number is required")
    .min(10, "Phone number must be at least 10 digits long"),

  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

module.exports = signUpSchema;
