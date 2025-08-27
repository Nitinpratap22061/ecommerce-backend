const mongoose = require("mongoose");

const connectDatabase = () => {
  const DB_URI = process.env.DB_URI;

  if (!DB_URI) {
    console.error("Error: DB_URI is not defined in .env");
    process.exit(1);
  }

  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDatabase;
