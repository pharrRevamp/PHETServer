const router = require("express").Router();
const sql = require("mssql");
const pool = require("../db");
require("dotenv").config();

router.post("/departments", (req, res) => {
  try {
    const sqlString = `SELECT * FROM dbo.Departments`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch(err => {
        res
          .status(500)
          .send(`error connecting to the departments database ${err}`);
      });
  } catch (err) {
    console.log(`error connecting on departments routes`);
    res.status(500).send(err);
  }
});

module.exports = router;
