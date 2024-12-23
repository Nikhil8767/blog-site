import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Define a simple route for the landing page
app.get('/', (req, res) => {
    res.send("Get the landing page");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

export default app;
