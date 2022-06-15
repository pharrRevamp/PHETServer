const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
// middleware
app.use(express.json());
app.use(cors());
// routes path
const employeeTemplate = require("./Routes/employeeTemplate");
// routes
app.use("/", employeeTemplate);
// port location
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.get("/", (req, res) => {
  try {
    // console.log(`RUNNING ON PORT: ${port}`);
    res.status(200).send(`PHET Server is running smoothly.`);
  } catch (err) {
    console.log(`server is down`);
    res.status(500).send(`Server is broken :( ${err}`);
  }
});
// listening to port
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT:${port}`);
});
