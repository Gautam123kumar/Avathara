const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/tambola";

const connect = mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log(`Database connected successfully`))
  .catch((err) => {
    console.log(`Error: `, err);
  });

module.exports = connect;