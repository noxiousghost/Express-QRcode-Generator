const express = require("express");
const indexRouter = require("./routes");

const app = express();

app.set("view engine", "ejs"); //setting view engine for our page as ejs
app.set("views", "./views"); //pointing the views folder for the project
app.use(express.json());
app.use(express.static("public")); //pointing the static files like css, js, and so on
app.use("/", indexRouter); //when the website is opened then send the request to indexRouter

app.listen(5001, console.log("app is running on port 5001"));
