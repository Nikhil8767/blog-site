import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";
import router from "./auth.js";
import auth from "./auth.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();


app.use("/api",auth)
// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

export default app;
