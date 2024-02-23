const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const {tokenVerify} = require("./middleware/tokenVerify");

const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

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

app.get("/", (req, res) => {
  return res.send({ message: "Welcome to API" });
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || res.statusCode || 500;
  const errorMessage = error.message || error;

  if (statusCode === 500) console.log("app.js", error);
  else console.log("app.js user error", error);

  res.status(statusCode).json({ message: errorMessage });
}); //End of error handling middleware

require("./utils/allFurnishiRoutes")(app);
require("./utils/allAdminRoutes")(app);
require("./utils/allAssistantUserRoutes")(app);
require("./utils/allFactoryManagerRoutes")(app);
require("./utils/allWorkPartnerRoutes")(app);

//ModelRelationship Define
require("./utils/allModelRelationship").All_Table_Relationship();

const dbConnection = require("./utils/dbConnection");

dbConnection.sync();

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
