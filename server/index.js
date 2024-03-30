import express from "express";
import cors from 'cors'
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cpmRoutes from "./routes/cpmRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);
app.use("/api", cpmRoutes);
app.use("/api", historyRoutes);


if (process.env.NODE_ENV !== "test") {
    app.listen(process.env.PORT || 5500);
    console.log("Connected to Server"); 
}
export default app;
