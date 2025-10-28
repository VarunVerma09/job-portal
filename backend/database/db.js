import mongoose from 'mongoose';

const database = () => {
  mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("✅ Database is connected");
    })
    .catch((err) => {
      console.log("❌ Database connection error:", err);
    });
};

export default database;
