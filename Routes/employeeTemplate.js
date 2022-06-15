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

/******************************************************************************************** */
router.post("/software", (req, res) => {
  try {
    const sqlString = `select * from dbo.SoftwareTemplate`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the SoftwareTemplate database ${err}`);
      });
  } catch (err) {
    console.log(`error connecting on software route`);
    res.status(500).send(err);
  }
});

/************************************************************************************************ */
router.post("/subdepartments",(req,res) => {
  try {
    const sqlString = `select * from dbo.SubDepartments`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the SoftwareTemplate database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on subdepartments route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/additionalrequireditems",(req,res) => {
  try {
    const sqlString = `select * from dbo.AdditionalRequiredItems`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the AdditionalRequiredItems database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on additionalrequireditems route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/archivedemployees",(req,res) => {
  try {
    const sqlString = `select * from dbo.ArchivedEmployees`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the ArchivedEmployees database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on archivedemployees route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/dateadded",(req,res) => {
  try {
    const sqlString = `select * from dbo.DateAdded`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the DateAdded database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on dateadded route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/dateremoved",(req,res) => {
  try {
    const sqlString = `select * from dbo.DateRemoved`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the DateRemoved database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on dateremoved route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/emailgroups",(req,res) => {
  try {
    const sqlString = `select * from dbo.EmailGroups`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the EmailGroups database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on emailgroups route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/hardwaretemplate",(req,res) => {
  try {
    const sqlString = `select * from dbo.HardwareTemplate`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the HardwareTemplate database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on hardwaretemplate route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/permissionstemplate",(req,res) => {
  try {
    const sqlString = `select * from dbo.PermissionsTemplate`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the PermissionsTemplate database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on permissionstemplate route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/permissionsinfo",(req,res) => {
  try {
    const sqlString = `select * from dbo.PermissonsInfo`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the PermissionsInfo database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on permissionsinfo route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/rolestemplate",(req,res) => {
  try {
    const sqlString = `select * from dbo.RolesTemplate`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the RolesTemplate database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on rolestemplate route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */
router.post("/webaccounts",(req,res) => {
  try {
    const sqlString = `select * from dbo.WebAccountsTemplates`;
    pool
      .connect()
      .then(() => {
        const requestDB = new sql.Request(pool);
        requestDB.query(sqlString, (err, data) => {
          if (err) return;
          res.json(data.recordset);
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send(`error connecting to the WebAccountsTemplates database ${err}`);
      });    
  } catch (err) {
    console.log(`error connecting on webaccounts route`);
    res.status(500).send(err);    
  }
});

/************************************************************************************************ */

pool.close();
module.exports = router;
