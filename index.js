const express = require("express");
const app = express();

const PORT = 3009;
//middleware to fetch data from req body
app.use(express.json());

// // import routes
const productRoutes = require("./routes/products");
// //mount routes
app.use("/api/v1/products/", productRoutes);

//start server
app.listen(PORT, () => {
  console.log("server is started");
});

//connect DB
const dbConnect = require("./config/db");
dbConnect();
//default route
app.get("/", (req, res) => {
  res.send("<h2>Ecommerce API</h2>");
});
