const express = require("express");
const indexRouter = require("./routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(5001, console.log("app is running on port 5001"));
