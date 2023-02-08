const cors = require("cors");
const express = require("express");
const app = express();
const Controller = require("./controler");
const myController = new Controller();
app.use(
  cors({
    origin: "*",
  })
);

myController.GetBanksData();

app.listen(8000, "127.0.0.1", () => {
  console.log("listing");
});
