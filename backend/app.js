import express from "express";
import tripRoutes from "./src/routes/routes.js";
import cors from "cors";
import authRoutes from "./src/routes/auth-routes.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/trips", tripRoutes);
app.use("/api/auth", authRoutes);
export default app;
