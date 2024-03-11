const mongoose = require("mongoose");

DATABASE_URL =
  "mongodb+srv://sayansroy1997:qMwrIAXsZOorOMTl@cluster0.ohm8rms.mongodb.net/Ecommerce";

const dbConnect = () => {
  mongoose
    .connect(DATABASE_URL)
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));
};

module.exports = dbConnect;
