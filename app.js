const express = require("express");
const adminData = require("./routes/admin");
const shoupRouter = require("./routes/shop");
const orderData = require("./routes/order");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);
app.use(orderData.router);
app.use(shoupRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "erro.html"));
});

app.listen(3000);
