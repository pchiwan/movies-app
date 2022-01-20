const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      console.log(error.message);
    });
  console.log(`Mongodb connected ${conn.connection.host}`);
};
module.exports = connectDB;
