const express = require("express");
const bodyparser = require("body-parser");
const routes = require("./collections");
const app = express();
const port = 9000;
const database = require("./database/connection.js");
const cors = require("cors");
const NodeJSserver = async () => {
  try {
    app.use(cors());
    app.use(bodyparser.json());
    app.use(routes());
    await database();
    app.listen(port, () => {
      console.log(`Test app listening on the port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

NodeJSserver();
