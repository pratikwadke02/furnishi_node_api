const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const setUserMiddleware = require("./middleware/setUser").default;

const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(
  cors({
    credentials: true,
  })
);

app.use(cookieParser());
app.use(fileUpload({ createParentPath: true }));

app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("./upload"));
app.use(express.static("./assets"));
app.use(express.static("./private"));
app.use(express.static("./public"));

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || res.statusCode || 500;
  const errorMessage = error.message || error;

  if (statusCode === 500) console.log("app.js", error);
  else console.log("app.js user error", error);

  res.status(statusCode).json({ message: errorMessage });
}); //End of error handling middleware

app.use((req, res, next) => {
  const userId = req.headers["user-id"];
  req.user = { userId };
  next();
});//End of setUserMiddleware

const dbConnection = require("./utils/dbConnection");

require("./utils/allFurnishiRoutes")(app);
require("./utils/allAdminRoutes")(app);
require("./utils/allFactoryManagerRoutes")(app);
//ModelRelationship Define
require("./utils/allModelRelationship").All_Table_Relationship();

app.get("/", (req, res) => {
  // console.log(req);
  return res.send({ message: "Welcome to API" });
});

dbConnection.sync();

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
