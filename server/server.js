require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const connectDB = require('./utils/db');
const serviceRouter = require('./router/service-router');

const corsOptions = {
    origin: "http://localhost:5173", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};


app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth" , authRoute);
app.use("/api/form" , contactRoute);
app.use("/api/data", serviceRouter);


const PORT = 5000;


connectDB().then(() => {
   app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`);
    });
});