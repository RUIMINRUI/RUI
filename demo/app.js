var express = require("express");
var app = express();
var order = require("./controllers/order.js");

app.set("view engine", "ejs");

app.get("/", order.showIndex);
app.post("/btn1", order.order);
app.get("/allFoodName", order.getALLFileName);
app.get("/orderFood/:phoneNum", order.showOrder);


console.log("test");
console.log("RUI 1********");
console.log("RUI 1-1********");
console.log("RUI 1-2********");

console.log("RUI 2-1*************");

console.log("RUI 2-2*************");

console.log("RUI 2-3*************");

console.log("MIN 1-1*************");
console.log("MIN 1-2*************");

app.use(express.static("public"));

app.listen(3000);