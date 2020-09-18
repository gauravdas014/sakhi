const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB_LOCAL = process.env.MONGODB_LOCAL_URI;

mongoose
  .connect(DB_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB connection successful");
  });

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
