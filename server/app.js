const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const mongouri = process.env.MONGOURI;
const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}

console.log(mongouri);

mongoose.connect(mongouri)
    .then(() => {
        console.log("mongoDB connected");
    })
    .catch((err) => {
        console.log(`Error Occured: ${err}`);
    });

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/user', userRoutes);
app.use('/company',companyRoutes);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
