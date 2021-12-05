require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router");

//створили умовний екземпляр нашої програми
const app = express();

app.use(express.json());
app.use(cookie());
app.use(cors());
app.use("/api", router);

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        //підключаємо БД
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        //запускаємо програму
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}
start();