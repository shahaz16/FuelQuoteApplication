import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cpmRoutes from "./routes/cpmRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import fuelpriceRoutes from "./routes/fuelpriceRoutes.js";
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

const connect= async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw error
    }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);
app.use("/api", cpmRoutes);
app.use("/api", historyRoutes);
app.use("/api", fuelpriceRoutes);


if (process.env.NODE_ENV !== "test") {
    app.listen(process.env.PORT || 5500);
    console.log("Connected to Server"); 
    connect();
}
export default app;