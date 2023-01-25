const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const PORT = 4000;
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const todosRouter = require("./routes/todo.routes");
app.use(todosRouter);

const db = require("./models/index.js");

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

/* app.get("", (req, res) => {
  console.log("Welcome to Todo app");
});
 */

/* app.get("/api/test", (req, res) => {
  res.json({
    message: req.query.data,
  });
}); */

// require('./routes/todo.routes.js')(app);

module.exports = app;
