require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const serviceRouter = require('./router/service-router');
const connectDB = require('./utils/db');

const corsOptions = {
  origin: process.env.NODE_ENV === "production"
    ? "https://mern-project-5-kxzx.onrender.com"
    : "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRouter);

// Serve React frontend
app.use(express.static(path.join(__dirname, '../client/dist')));

// React SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`);
  });
});
