require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); // <-- needed for serving React build
const app = express();

const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const serviceRouter = require('./router/service-router');
const connectDB = require('./utils/db');

// CORS setup
const corsOptions = {
    origin: "http://localhost:5173", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use(cors(corsOptions));

// Parse JSON
app.use(express.json());

// API routes
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRouter);

// Serve React frontend
app.use(express.static(path.join(__dirname, '../client/dist')));

// For any other route, serve React's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start server after DB connection
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at: ${PORT}`);
    });
});
