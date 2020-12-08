var express = require("express");
var app = express();
var order = require("./controllers/order.js");

app.set("view engine", "ejs");

app.get("/", order.showIndex);
app.post("/btn1", order.order);
app.get("/allFoodName", order.getALLFileName);
app.get("/orderFood/:phoneNum", order.showOrder);

app.use(express.static("public"));

app.listen(3000);