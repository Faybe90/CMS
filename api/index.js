import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();

//middlewares
app.use(express.json()); //for parsing
app.use(cors());
//routes
//start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
