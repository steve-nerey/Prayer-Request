// Importing dependencies
require(`colors`);
var express = require("express");
var bodyParser = require("body-parser");

// Create an instance of express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 8080;

// connect handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connect database mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "prayer_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Middleware Stack --------------------------
// tell express to serve these files.
app.use(express.static("./random/"));

// Route
// main page puts all items in order of last updated date so newest is always first.
app.get("/", function (req, res) {
  connection.query("SELECT id, name, residence, request, DATE_FORMAT(last_updated, '%b. %e, %Y') as last_date FROM prayers ORDER by last_updated desc;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { prayers: data });
  });
});

// testimonies page puts all items in order of descending id number so last enrty is first.
app.get("/testimonies", function (req, res) {
  connection.query("SELECT testimony_id, name, residence, story, DATE_FORMAT(created_date, '%b. %e, %Y') as created_date FROM testimonies ORDER by testimony_id desc;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("testimonies", { testimony: data });
  });
});

// request/prayers routes
// for creating a new prayer request
app.post("/request", function (req, res) {
  connection.query("INSERT INTO prayers (name, residence, request) VALUES (?, ?, ?)", [req.body.name, req.body.residence, req.body.request], function (err, result) {
    if (err) {
      return res.status(500).end();
    }

    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

// sends results again once created
app.get("/request", function (req, res) {
  connection.query("SELECT * FROM prayers;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.json(data);
  });
});

// for updating a prayer request
app.put("/request/:id", function (req, res) {
  connection.query("UPDATE prayers SET request = ? WHERE id = ?", [req.body.request, req.params.id], function (err, result) {
    if (err) {
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

// for deleting a prayer request
app.delete("/request/:id", function (req, res) {
  connection.query("DELETE FROM prayers WHERE id = ?", [req.params.id], function (err, result) {
    if (err) {
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

// stories/testimonies routes
// for creating a new testimony
app.post("/story", function (req, res) {
  connection.query("INSERT INTO testimonies (name, residence, story) VALUES (?, ?, ?)", [req.body.name, req.body.residence, req.body.story], function (err, result) {
    if (err) {
      return res.status(500).end();
    }

    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

// sends results again once created
app.get("/story", function (req, res) {
  connection.query("SELECT * FROM testimonies;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.json(data);
  });
});

// for deleting a testimony
app.delete("/story/:id", function (req, res) {
  connection.query("DELETE FROM testimonies WHERE testimony_id = ?", [req.params.id], function (err, result) {
    if (err) {
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

//  error page
app.get("*", function (err, res) {
    res.render("error");
  });

app.listen(PORT, () => console.log(`http://localhost:${PORT}`.rainbow));
