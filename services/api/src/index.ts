require("dotenv").config();
import express from "express";
import mysql from "mysql";
import { db_config } from "./config/db.config";

const app = express();
const PORT = process.env.NODE_DOCKER_PORT;

const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(express.json());
app.get("/init", (req, res) => {
  const sqlQuery =
    "CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))";

  database.query(sqlQuery, (err) => {
    if (err) throw err;

    res.send("Table created!");
  });
});

app.post("/subscribe", (req, res) => {
  console.log(req.body);
  const subscriber = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  };

  if (Object.values(subscriber).some((item) => !item)) {
    return res.status(404).send("Какое-то поле пусто");
  }
  const sqlQuery = "INSERT INTO emails SET ?";

  database.query(sqlQuery, subscriber, (err, row) => {
    if (err) throw err;

    res.send("Subscribed successfully!");
  });
});

app.get("/", (req, res) => {
  const sqlQuery = "SELECT * FROM emails";

  database.query(sqlQuery, (err, result) => {
    if (err) throw err;

    res.json({ emails: result });
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
